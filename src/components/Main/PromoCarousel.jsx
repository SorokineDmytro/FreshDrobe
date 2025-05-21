"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
  {
    bg: "bg-[#ffde44]",
    image: "/images/tshirt.png",
    title: "T-shirts",
    subtitle: "Collection d'été",
    cta: "En savoir plus",
  },
  {
    bg: "bg-[#96bee6]",
    image: "/images/shorts.png",
    title: "Shorts",
    subtitle: "Confortables et stylés",
    cta: "En savoir plus",
  },
  {
    bg: "bg-[#aad9a0]",
    image: "/images/sweat.png",
    title: "Sweatshirts",
    subtitle: "Pour les temps frais ",
    cta: "En savoir plus",
  },
];

export function PromoCarousel() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 20000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayPlugin.current,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi?.off("select", onSelect);
      emblaApi?.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative h-65 md:h-80 lg:h-105">
    <div className=" w-full lg:max-w-[1270px] mx-auto overflow-hidden rounded-4xl">
      {/* Embla container */}
      <div
        className="embla w-full lg:max-w-[1270px] md:h-75 lg:h-[386px]"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-grow-0 flex-shrink-0 basis-full"
            >
              <div
                className={`flex-grow lg:w-full h-[246px] md:h-[300px] lg:h-[386px] flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:px-25 ${slide.bg} md:rounded-4xl`}
              >
                {/* Left-info */}
                <div className="bg-white flex flex-col md:flex-row md:justify-between lg:flex-col items-center lg:items-start p-3 md:p-5 lg:p-7.5 md:rounded-b-4xl lg:rounded-4xl shadow-lg md:shadow-none w-full lg:max-w-md md:h-20 lg:h-[230px]">
                  <div className="hidden w-1/3 h-8 lg:flex items-center justify-center text-sm font-['Inter',sans-serif] font-bold bg-danger text-white rounded-full mb-3.5">
                    Promo 20%
                  </div>
                  <div className="flex flex-col items-center md:items-start lg:items-start">
                    <h2 className="font-['Inter',sans-serif] font-bold text-[15px] lg:text-lg lg:mb-1">
                      {slide.title}
                    </h2>
                    <p className="text-custom-gray text-center text-sm lg:text-base lg:mb-3">
                      {slide.subtitle}
                    </p>
                  </div>
                  <Link
                    to={`/section/${slide.title.toLowerCase()}`}
                    className="w-full md:w-fit h-10 lg:h-fit flex items-center justify-center mt-4 md:mt-0 lg:mt-3.5 px-5 py-1 lg:py-3 rounded-full font-['Inter',sans-serif] font-bold text-sm md:text-[15px] text-primary border border-sky-200 hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                  >
                    {slide.cta}
                  </Link>
                </div>

                {/* Right-image */}
                <div
                  className={`relative h-30 md:h-60 lg:h-full w-full ${slide.bg} lg:w-1/2 lg:flex-grow-0`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    className="w-full h-30 md:h-55 lg:h-full object-contain"
                  />
                  <div className="absolute top-[79%] md:top-[89%] left-5 lg:hidden w-fit pt-1 px-3 h-6 flex items-center justify-center text-xs font-['Inter',sans-serif] font-bold bg-danger text-white rounded-t-2xl">
                    Promo 20%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev & Next buttons */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="hidden lg:flex absolute top-4/9 left-5 z-10 w-12 h-12 -translate-y-1/2 items-center justify-center bg-white rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300 ease-in-out shadow-sm"
        aria-label="Slide précédente"
      >
        <span className="text-2xl rotate-270 ml-2">
          &#8963;
        </span>
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="hidden lg:flex absolute top-4/9 right-5 z-10 w-12 h-12 -translate-y-1/2 items-center justify-center bg-white rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300 ease-in-out shadow-sm"
        aria-label="Slide suivante"
      >
        <span className="text-2xl rotate-90 mr-2">
          &#8963;
        </span>
      </button>
    </div>
    {/* Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-1.25 h-1.25 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-gray-300"
            } transition`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
