import ContentAndScreenshot from "@/components/page_headers/ContentAndScreenshot";
import FeaturedColumns from "@/components/page_headers/FeaturedColumns";
import PhotoAndList from "@/components/page_headers/PhotoAndList";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturedTestimonial from "@/components/testimonial/Featured";

export default function Home() {
  return (
    <>
      <ContentAndScreenshot />
      <FeaturedTestimonial />

      <section className="mb-12">
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Our Programs
        </h1>
        <ProgramsSection />
      </section>
    </>
  );
}
