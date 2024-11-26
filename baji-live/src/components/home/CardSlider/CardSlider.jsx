import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export function CardSlider({ cards }) {
  const previousRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button

  return (
    <div className="rounded-lg">
      <div className="bg-[#14805E] text-white p-3 flex justify-between items-center rounded-t-lg">
        <h2>প্রিয়</h2>
        {/* Functional custom buttons for carousel control */}
        <div className="hidden md:flex space-x-4 text-yellow-500">
          <button onClick={() => previousRef.current?.click()}>
            <FaChevronLeft />
          </button>
          <button onClick={() => nextRef.current?.click()}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <Carousel className="w-full rounded-b-lg">
        <CarouselContent className="w-full">
          {cards?.map((card) => (
            <CarouselItem key={card.id} className="w-full">
              <div className="w-full">
                {/* Ensure the image takes the full width and scales correctly */}
                <img
                  className="w-full h-full object-cover"
                  src={card.image}
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Hidden CarouselPrevious and CarouselNext buttons */}
        <CarouselPrevious ref={previousRef} className="hidden">
          <FaChevronLeft />
        </CarouselPrevious>
        <CarouselNext ref={nextRef} className="hidden">
          <FaChevronRight />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
