import { testimonialsInfo } from "@/lib/types/cards";
import Image from "next/image";
export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: testimonialsInfo;
  index: number;
}) {
  return (
    <figure
      key={index}
      className="relative flex flex-col justify-between shadow-lg p-6 border dark:border-accent rounded-2xl overflow-clip"
    >
      <Image
        alt="satisfaction.png"
        src="/images/icons/satisfaction.png"
        className="top-[50%] left-[50%] -z-10 absolute opacity-5 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        width={500}
        height={500}
      />
      <blockquote className="font-[Caveat] font-semibold text-lg/8">
        {`“${testimonial.text}”`}
      </blockquote>
      <figcaption className="flex justify-end items-center gap-x-4 mt-6">
        <Image
          alt={`${testimonial.name}`}
          src={testimonial.image}
          className="z-10 rounded-full"
          width={100}
          height={100}
        />
      </figcaption>
    </figure>
  );
}
