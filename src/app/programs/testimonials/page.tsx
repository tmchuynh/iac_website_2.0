import { testimonials } from "@/lib/constants/testimonials";
import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <p className="font-semibold text-base/7">Testimonials</p>
      <h1 className="pb-4 max-w-4xl font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
        We have worked with thousands of amazing people
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="relative flex flex-col justify-between shadow-lg p-6 rounded-2xl ring-1 ring-gray-900/5 overflow-clip"
          >
            <Image
              alt=""
              src="/images/icons/satisfaction.png"
              className="top-[50%] left-[50%] -z-10 absolute opacity-5 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
              width={500}
              height={500}
            />
            <blockquote className="text-gray-900">
              <p>{`“${testimonial.text}”`}</p>
            </blockquote>
            <figcaption className="flex justify-end items-center gap-x-4 mt-6">
              <Image
                alt=""
                src={testimonial.image}
                className="z-10 rounded-full"
                width={100}
                height={100}
              />
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
