import FadedImage from "@/components/images/FadedImage";
import ContentAndScreenshot from "@/components/page_headers/ContentAndScreenshot";
import ProgramsSection from "@/components/programs/ProgramsSection";
import FeaturedTestimonial from "@/components/testimonial/Featured";

export default function Home() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <ContentAndScreenshot />
      <FadedImage
        imageSrc={"/images/Class_Photos/Soccer/53995092_144851.jpg"}
      />
      <section className="mb-12">
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Our Programs
        </h1>
        <ProgramsSection />
      </section>

      <FeaturedTestimonial />
    </main>
  );
}
