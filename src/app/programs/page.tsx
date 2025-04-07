"use client";
import { useTabs } from "@/app/context/TabsContext";
import PhotoAndList from "@/components/page_headers/PhotoAndList";
import DoughnutChartLabel from "@/components/PieChart";
import ProgramDetails from "@/components/ProgramInformation";
import { class_breakdown } from "@/lib/constants/list";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { JSX, useEffect } from "react";

/**
 * Renders the Programs page component.
 * This component displays program details based on either the URL search parameter 'title'
 * or falls back to a default tab value from context.
 *
 * @component
 * @returns {JSX.Element} A centered container with program details
 *
 * @example
 * // URL: /programs?title=someProgramTitle
 * <ProgramsPage />
 */
export default function ProgramsPage(): JSX.Element {
  const searchParams = useSearchParams();
  const { defaultTab } = useTabs(); // Access defaultTab from context

  const title = searchParams.get("title") || defaultTab; // Use defaultTab if title is not provided

  useEffect(() => {
    console.log(title); // Debugging log
  }, [title]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-4 py-10 lg:py-20 w-11/12">
      <div className="xl:mx-auto xl:px-8 py-3 md:py-6 lg:py-9 2xl:py-20 xl:py-12 lg:max-w-7xl">
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/53995092_146958.jpg"
          className="shadow-xl xl:rounded-3xl w-full aspect-5/2 object-cover"
          width={2832}
          height={1130}
        />
      </div>
      <section>
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          Our Program Details
        </h1>
        <ProgramDetails title={title} />
      </section>

      <section>
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          Class Breakdown
        </h1>
        <p>
          To ensure an organized and impactful learning experience, our classes
          are carefully designed with a structured approach that breaks down the
          curriculum into several distinct segments. Each segment is
          strategically crafted to focus on key aspects of learning, allowing
          students to fully engage with the material and make the most of every
          lesson. This segmented structure maximizes educational benefits by
          targeting specific skills and knowledge areas at the right time,
          enhancing the overall learning process.
        </p>
        <p>
          By dividing the class into well-defined parts, we ensure that students
          receive clear, focused instruction while also allowing for flexibility
          and interactive learning. This structure promotes continuous
          engagement, fosters a deeper understanding of the subject matter, and
          helps students retain information more effectively. Whether it's
          introducing new concepts, reinforcing previously learned material, or
          encouraging collaborative activities, every segment serves a unique
          purpose to create a comprehensive and enriching educational journey.
        </p>
        <DoughnutChartLabel />
        <ul className="flex flex-col gap-y-3 py-9 list-disc">
          {class_breakdown.map((list, index) => (
            <li key={index}>
              <strong>{list.title}</strong> {list.description}
            </li>
          ))}
        </ul>
      </section>

      <PhotoAndList />
    </div>
  );
}
