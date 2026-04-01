"use client";

import Image from "next/image";


import { useState } from "react";

export default function Carousel() {
  const images = ["/Images/Projectimages/Image1.jpg", "/Images/Projectimages/Image2.jpg", "/Images/Projectimages/Image3.jpg"];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mt-40 mx-auto">
      {/* Image */}
      <img
        src={images[current]}
        alt="carousel"
        className="w-full h-[400px] object-cover rounded-xl transition-all duration-500"
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
}