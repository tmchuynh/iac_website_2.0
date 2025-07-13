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
      className="relative flex flex-col justify-between shadow-md p-6 border border-border rounded-2xl overflow-clip"
    >
      <Image
        alt="satisfaction.png"
        src="/images/icons/satisfaction.png"
        className="absolute left-[50%] top-[50%] -z-10 opacity-5 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        width={500}
        height={500}
      />
      <blockquote className="font-[WaitingfortheSunrise] font-semibold text-lg/8">
        {`“${testimonial.text}”`}
      </blockquote>
      <figcaption className="flex gap-x-4 items-center justify-end mt-6">
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
