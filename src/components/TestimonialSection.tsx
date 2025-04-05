"use client";

import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/constants/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { TestimonialCards } from "./cards/TestimonialCards";

export default function Testimonial() {
  return (
    <section className="relative px-12 overflow-hidden isolate">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        orientation="horizontal"
        className="flex w-full h-fit"
      >
        <CarouselContent className="gap-1 px-0.5 w-full h-full text-wrap">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col justify-around w-full h-full"
            >
              <TestimonialCards testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
