"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSlideshowProps {
  images: string[];
  projectName: string;
}

export function ProjectSlideshow({
  images,
  projectName,
}: ProjectSlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setTimeout(() => onSelect(), 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => clearTimeout(timer);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="rounded-2xl overflow-hidden border border-border bg-accent/5 flex items-center justify-center relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px]">
        <img
          src={images[0]}
          alt={`${projectName} preview`}
          className="object-contain p-4 md:p-8 drop-shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border bg-accent/5 group w-full">
      <div
        className="overflow-hidden h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px]"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {images.map((img, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center p-4"
              key={index}
            >
              <img
                src={img}
                alt={`${projectName} preview ${index + 1}`}
                className="w-full h-full object-scale-down drop-shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg opacity-0 group-hover:opacity-100 z-10 focus:opacity-100"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg opacity-0 group-hover:opacity-100 z-10 focus:opacity-100"
        onClick={scrollNext}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-background/80 backdrop-blur-md px-3 py-2 rounded-full border border-border/50 shadow-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
