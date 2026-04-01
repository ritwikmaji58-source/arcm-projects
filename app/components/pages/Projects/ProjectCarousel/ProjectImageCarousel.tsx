"use client";

import Image from "next/image";

export default function MyCarousel() {
  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <Image
            className="absolute block w-full object-cover"
            src="/img1.jpg"
            alt="img1"
            fill
          />
        </div>

        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            className="absolute block w-full object-cover"
            src="/img2.jpg"
            alt="img2"
            fill
          />
        </div>

        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            className="absolute block w-full object-cover"
            src="/img3.jpg"
            alt="img3"
            fill
          />
        </div>

      </div>

      {/* PREV */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
        data-carousel-prev
      >
        ‹
      </button>

      {/* NEXT */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
        data-carousel-next
      >
        ›
      </button>
    </div>
  );
}
