import { testimonialsInfo } from "@/lib/types/cards";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

export const TestimonialCards = (testimonial: testimonialsInfo) => {
  return (
    <section className="px-6 lg:px-8 border rounded-2xl lg:rounded-4xl h-full overflow-hidden isolate">
      <div className="relative mx-auto py-20 max-w-2xl lg:max-w-4xl h-max min-h-full">
        <div className="right-1/2 lg:right-full -z-10 absolute inset-y-0 shadow-violet-600/35 shadow-xl mr-12 sm:mr-20 md:mr-0 lg:-mr-36 w-[100vw] lg:w-[200vw] lg:origin-center skew-x-[-30deg] lg:skew-x-[-40deg]" />
        <figure className="items-center gap-x-6 gap-y-8 lg:gap-x-10 grid grid-cols-1 md:px-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <FaQuoteLeft className="md:-top-4 lg:-top-8 xl:-top-12 md:-left-4 lg:-left-6 xl:-left-8 absolute md:flex hidden opacity-15 size-24 lg:size-32 xl:size-48" />
            <blockquote className="font-semibold text-md text-pretty md:text-lg">
              <p>{`${testimonial.text}`}</p>
            </blockquote>
          </div>
          <div className="col-end-1 lg:row-span-4 w-16 lg:w-72 md:col-auto">
            {testimonial.image ? (
              <Image
                alt={`${testimonial.name} profile`}
                src={testimonial.image}
                width={288}
                height={160}
                className="rounded-xl lg:rounded-3xl h-40"
              />
            ) : (
              <></>
            )}
          </div>
          <figcaption className="lg:col-start-1 lg:row-start-3 text-base">
            <div className="font-semibold">{testimonial.title}</div>
            <div className="mt-1">{testimonial.school}</div>
            <div className="mt-1">{testimonial.class}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
