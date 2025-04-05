import SplitImageTiles from "@/components/page_headers/SplitImageTiles";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturedTestimonial from "@/components/testimonial/Featured";

export default function Home() {
  return (
    <>
      <SplitImageTiles />
      <FeaturedTestimonial />
      <ProgramsSection />
    </>
  );
}
