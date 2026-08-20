"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function ImageGallery({
  images,
  altBase,
  labels,
}: {
  images: string[];
  altBase: string;
  labels: {
    previousSlide: string;
    nextSlide: string;
    goToSlide: (n: number) => string;
  };
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const goToPrevious = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setActiveImage((prev) => (prev + 1) % images.length);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0]!.clientX : (e as React.MouseEvent).clientX;
    setDragStart(clientX);
  };

  useEffect(() => {
    if (dragStart === null) return;

    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "changedTouches" in e ? e.changedTouches[0]!.clientX : (e as MouseEvent).clientX;
      const dragDistance = dragStart - clientX;
      const threshold = 50;

      if (dragDistance > threshold) {
        goToNext();
      } else if (dragDistance < -threshold) {
        goToPrevious();
      }
      setDragStart(null);
    };

    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [dragStart, images.length]);

  if (images.length === 0) return null;

  return (
    <div>
      {images.length > 1 && (
        <div className="mb-4 flex justify-end">
          <span className="text-sm font-medium text-muted-foreground">
            {activeImage + 1} / {images.length}
          </span>
        </div>
      )}

      <Reveal>
        <div
          className="group relative isolate cursor-grab overflow-hidden rounded-3xl border border-border bg-card shadow-soft select-none active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <img
            key={`${activeImage}-bg`}
            src={images[activeImage]}
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 -z-10 h-full w-full scale-110 animate-fade-in object-cover opacity-70 blur-2xl pointer-events-none"
          />
          <img
            key={activeImage}
            src={images[activeImage]}
            alt={`${altBase} — ${activeImage + 1}`}
            width={1200}
            height={800}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="h-80 w-full animate-fade-in object-contain pointer-events-none sm:h-105 lg:h-130"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label={labels.previousSlide}
                onClick={goToPrevious}
                className="absolute top-1/2 start-4 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-background/80 text-foreground opacity-0 shadow-soft backdrop-blur transition hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                aria-label={labels.nextSlide}
                onClick={goToNext}
                className="absolute top-1/2 end-4 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-background/80 text-foreground opacity-0 shadow-soft backdrop-blur transition hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </>
          )}
        </div>
      </Reveal>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={labels.goToSlide(index + 1)}
              aria-current={index === activeImage}
              onClick={() => setActiveImage(index)}
              className={cn(
                "h-16 w-24 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 transition",
                index === activeImage
                  ? "border-primary"
                  : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <img
                src={image}
                alt=""
                aria-hidden
                width={120}
                height={80}
                draggable={false}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
