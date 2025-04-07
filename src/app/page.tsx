import ContentAndScreenshot from "@/components/page_headers/ContentAndScreenshot";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturedTestimonial from "@/components/testimonial/Featured";

export default function Home() {
  return (
    <>
      <ContentAndScreenshot />
      <FeaturedTestimonial />

      <section className="mb-12">
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          Our Programs
        </h1>
        <ProgramsSection />
      </section>
    </>
  );
}
