import Testimonial from "@/components/testimonial/TestimonialCard";
import { testimonials } from "@/lib/constants/testimonials";
import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <main className="relative mx-auto px-4 py-12 lg:py-48 w-11/12 md:-24">
      <code className="font-semibold text-base/7">Hear From Our Community</code>
      <h1 className="my-4 pb-4 max-w-7xl lg:max-w-4xl font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
        Thousands of amazing individuals have trusted us—and here’s what they
        have to say.
      </h1>
      <div className="xl:mx-auto xl:px-8 py-10 lg:max-w-7xl">
        <Image
          alt=""
          src="/images/Class_Photos/Performing_Arts/15195092_265855.jpg"
          className="object-top shadow-md xl:rounded-3xl w-full aspect-5/2 object-cover"
          width={2832}
          height={1130}
        />
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </main>
  );
}
