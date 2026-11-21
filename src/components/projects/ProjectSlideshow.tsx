"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  if (!images || images.length === 0) return null;

  const handleContainerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  if (images.length === 1) {
    return (
      <div className="rounded-2xl overflow-hidden border border-border bg-accent/5 relative w-full h-[360px] sm:h-[480px] md:h-[600px]">
        <Image
          src={images[0]}
          alt={`${projectName} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          className="object-contain p-4 md:p-8"
          priority
        />
      </div>
    );
  }

  return (
    <>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`${projectName} screenshots`}
        tabIndex={0}
        onKeyDown={handleContainerKeyDown}
        className="relative rounded-2xl overflow-hidden border border-border bg-accent/5 group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div
          className="overflow-hidden h-[320px] sm:h-[420px] md:h-[560px] lg:h-[640px]"
          ref={emblaRef}
        >
          <div className="flex h-full">
            {images.map((img, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 relative h-full"
                key={img}
              >
                <Image
                  src={img}
                  alt={`${projectName} screenshot ${index + 1} of ${images.length}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-contain p-4 md:p-8"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-mono text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md inline-flex items-center gap-1.5 z-10"
          aria-label="Open fullscreen image viewer"
        >
          <Expand className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Expand</span>
        </button>

        <button
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg opacity-90 sm:opacity-0 sm:group-hover:opacity-100 z-10 focus:opacity-100"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg opacity-90 sm:opacity-0 sm:group-hover:opacity-100 z-10 focus:opacity-100"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-background/85 backdrop-blur-md px-3 py-2 rounded-full border border-border/50 shadow-md">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary w-6"
                  : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} image viewer`}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-0 right-0 z-20 p-2.5 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex]}
                alt={`${projectName} fullscreen screenshot ${selectedIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setSelectedIndex(
                  (prev) => (prev - 1 + images.length) % images.length,
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedIndex((prev) => (prev + 1) % images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-card border border-border text-xs font-mono text-muted-foreground">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
