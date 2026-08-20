"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { EffectCards, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { useLanguage } from "@/lib/i18n";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export function ImageGallery({
  images,
  altBase,
  sectionLabel,
  labels,
}: {
  images: string[];
  altBase: string;
  sectionLabel: string;
  labels: {
    previousSlide: string;
    nextSlide: string;
    goToSlide: (n: number) => string;
  };
}) {
  const { dir } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(images.length <= 1);

  if (images.length === 0) return null;

  const loop = images.length > 2;

  return (
    <div className="mx-auto max-w-sm text-center">
      <p className="mb-3 text-muted-foreground">{sectionLabel}</p>
      <h3 className="text-3xl font-semibold text-balance text-foreground sm:text-4xl">{altBase}</h3>

      <div className="mx-auto mt-10 w-full">
        <Swiper
          dir={dir}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setActiveImage(swiper.realIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[EffectCards, Keyboard, Pagination]}
          effect="cards"
          grabCursor
          loop={loop}
          keyboard={{ enabled: true }}
          pagination={
            images.length > 1
              ? {
                  clickable: true,
                  dynamicBullets: true,
                  renderBullet: (index, className) =>
                    `<button type="button" class="${className}" aria-label="${labels.goToSlide(
                      index + 1,
                    )}"></button>`,
                }
              : false
          }
          cardsEffect={{
            perSlideOffset: 10,
            perSlideRotate: 4,
            rotate: true,
            slideShadows: false,
          }}
          className="gallery-swiper aspect-4/5 w-full pb-10!"
          role="group"
          aria-roledescription="carousel"
          aria-label={sectionLabel}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`${image}-${index}`}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <img
                src={image}
                alt={`${altBase} — ${index + 1}`}
                draggable={false}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {images.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label={labels.previousSlide}
            disabled={!loop && isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-card"
          >
            <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
          <p
            aria-live="polite"
            className="min-w-14 text-sm font-semibold whitespace-nowrap text-accent-foreground tabular-nums"
          >
            {activeImage + 1} / {images.length}
          </p>
          <button
            type="button"
            aria-label={labels.nextSlide}
            disabled={!loop && isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-card"
          >
            <ChevronRight className="h-5 w-5 rtl:rotate-180" />
          </button>
        </div>
      )}

      <style jsx global>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: var(--color-border);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.2s ease;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: var(--color-accent-foreground);
          width: 20px;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
