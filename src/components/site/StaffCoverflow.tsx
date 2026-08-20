"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { StaffCard, type StaffCardPerson } from "@/components/site/StaffCard";
import { useLanguage } from "@/lib/i18n";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export function StaffCoverflow({
  people,
  labels,
}: {
  people: StaffCardPerson[];
  labels: { previousSlide: string; nextSlide: string };
}) {
  const { dir } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (people.length === 0) return null;

  const loop = people.length > 2;

  return (
    <div className="mx-auto flex items-center gap-3">
      <button
        type="button"
        aria-label={labels.previousSlide}
        disabled={!loop && isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
        className="h-11 w-11 shrink-0 cursor-pointer hidden md:grid place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-card"
      >
        <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
      </button>

      <Swiper
        dir={dir}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={loop}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="min-w-0 flex-1 pb-14!"
      >
        {people.map((person) => (
          <SwiperSlide key={person.name} className="w-60! sm:w-81!">
            <StaffCard person={person} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label={labels.nextSlide}
        disabled={!loop && isEnd}
        onClick={() => swiperRef.current?.slideNext()}
        className="h-11 w-11 shrink-0 hidden md:grid cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-card"
      >
        <ChevronRight className="h-5 w-5 rtl:rotate-180" />
      </button>
    </div>
  );
}
