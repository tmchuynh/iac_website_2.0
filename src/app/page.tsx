import SplitImageTiles from "@/components/page_headers/SplitImageTiles";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturedTestimonial from "@/components/testimonial/Featured";

export default function Home() {
  return (
    <>
      <SplitImageTiles />

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
