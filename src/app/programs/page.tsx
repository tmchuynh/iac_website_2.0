"use client";
import { useTabs } from "@/app/context/TabsContext";
import { useSearchParams } from "next/navigation";
import { JSX } from "react";
import ProgramDetails from "@/components/ProgramInformation";
import { useEffect } from "react";
import DoughnutChartLabel from "@/components/PieChart";
import { class_breakdown } from "@/lib/constants/list";

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
      <section>
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
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
        <ul className="flex flex-col gap-y-3 py-9">
          {class_breakdown.map((list, index) => (
            <li key={index}>
              <strong>{list.title}</strong> {list.description}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Our Program Details
        </h1>
        <ProgramDetails title={title} />
      </section>
    </div>
  );
}
