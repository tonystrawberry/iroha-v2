"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Slide */}
      <div className="relative flex items-center justify-center">
        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="absolute -left-4 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-mint-500 transition-colors cursor-pointer"
            aria-label="前へ"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="overflow-hidden rounded-3xl shadow-lg w-36 md:w-44">
          <img
            key={current}
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            className="w-full h-auto object-cover transition-opacity duration-300"
          />
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="absolute -right-4 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-mint-500 transition-colors cursor-pointer"
            aria-label="次へ"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-mint-400 w-4" : "bg-mint-200"
              }`}
              aria-label={`スライド ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
