"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";

export default function CatalogCarousel({ title, array, }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="mb-5 2xl:mb-10 overflow-x">
      <div className="flex items-center justify-between lg:mb-4">
        <h2 className="font-['Inter',sans-serif] font-bold md:text-lg lg:text-[21px]">
          {title}
        </h2>
        <div className="flex items-center justify-between gap-5 h-12">
          {/* Prev & Next buttons */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden lg:flex h-full aspect-square items-center justify-center bg-white rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300 ease-in-out shadow-sm"
            aria-label="Slide précédente"
          >
            <span className="text-2xl rotate-270 ml-2">&#8963;</span>
          </button>
          <span className="text-custom-gray text-sm font-['Inter',sans-serif] font-bold">{selectedIndex+1} / {scrollSnaps.length}</span>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="hidden lg:flex h-full aspect-square items-center justify-center bg-white rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300 ease-in-out shadow-sm"
            aria-label="Slide suivante"
          >
            <span className="text-2xl rotate-90 mr-2">&#8963;</span>
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <ul className="flex lg:py-2">
          {array.map((item) => (
            <li
              key={item.id}
              className="embla__slide shrink-0 px-2 w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
            >
              <CatalogItem product={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 md:mt-5 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-1.25 h-1.25 md:w-1.5 md:h-1.5 2xl:w-2 2xl:h-2 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
