"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const artisticPanels = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop&crop=center",
    alt: "Portrait with abstract colorful head explosion",
    title: "Abstract Portrait",
    description: "Where reality meets imagination",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center",
    alt: "Hands sculpting a classical bust",
    title: "Artisan Craft",
    description: "The beauty of creation in progress",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    alt: "Abstract fluid art with warm colors",
    title: "Fluid Expression",
    description: "Colors dancing in harmony",
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with center image
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (isScrolling) return;

    setIsScrolling(true);
    if (direction === "left") {
      setCurrentIndex((prev) =>
        prev === 0 ? artisticPanels.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === artisticPanels.length - 1 ? 0 : prev + 1
      );
    }

    setTimeout(() => setIsScrolling(false), 500);
  };

  const scrollToGallery = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden py-20">
      <div className="text-center space-y-8 ">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Badge className="neon-border bg-primary/10 text-primary border-primary/30">
            📸 Visual Showcase • Workspace Gallery
          </Badge>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-balance font-mono leading-tight">
          <span className="block text-foreground">OUR GALLERY</span>
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            WORKSPACE GALLERY
          </span>
        </h2>
      </div>

      {/* Curved Carousel Section */}
      <div
        ref={carouselRef}
        className="min-h-screen flex items-center justify-center px-8"
      >
        <div className="relative w-full max-w-6xl pt-10">
          {/* Carousel Container with curved perspective */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            {artisticPanels.map((item, index) => {
              const distance = Math.abs(index - currentIndex);
              const isActive = index === currentIndex;

              // Calculate curved carousel positioning
              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 10;

              if (index < currentIndex) {
                // Left side panels
                const leftDistance = currentIndex - index;
                translateX = -leftDistance * 300; // Horizontal spacing
                translateZ = -leftDistance * 100; // Depth
                rotateY = leftDistance * 45; // Rotation for curve effect
                scale = 1 - leftDistance * 0.1;
                opacity = 1 - leftDistance * 0.2;
                zIndex = 10 - leftDistance;
              } else if (index > currentIndex) {
                // Right side panels
                const rightDistance = index - currentIndex;
                translateX = rightDistance * 300; // Horizontal spacing
                translateZ = -rightDistance * 100; // Depth
                rotateY = -rightDistance * 45; // Rotation for curve effect
                scale = 1 - rightDistance * 0.1;
                opacity = 1 - rightDistance * 0.2;
                zIndex = 10 - rightDistance;
              }

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="relative w-96 h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-8 top-1/2  -translate-y-1/2 z-20 bg-background/90 hover:bg-background text-foreground border border-border p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            disabled={isScrolling}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background text-foreground border border-border p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            disabled={isScrolling}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20 top-5">
            {artisticPanels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
