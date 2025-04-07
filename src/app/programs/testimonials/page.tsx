import { testimonials } from "@/lib/constants/testimonials";
import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <p className="font-semibold text-base/7">Testimonials</p>
      <h1 className="pb-4 max-w-4xl font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
        We have worked with thousands of amazing people
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="shadow-lg p-6 rounded-2xl ring-1 ring-gray-900/5"
          >
            <blockquote className="text-gray-900">
              <p>{`“${testimonial.text}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 mt-6">
              <Image
                alt=""
                src={testimonial.image}
                className="rounded-full size-10"
                width={40}
                height={40}
              />
              <div>
                <div className="font-semibold">{testimonial.title}</div>
                <div className="">{testimonial.school}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
