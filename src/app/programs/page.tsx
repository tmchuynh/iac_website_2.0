"use client";
import { useTabs } from "@/app/context/TabsContext";
import DynamicButton from "@/components/buttons/button-dynamic";
import ApplyToJoinCTA from "@/components/CTA/ApplyToJoinCTA";
import DoughnutChartLabel from "@/components/images/PieChart";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import LoadingIndicator from "@/components/loading/Loading";
import ImageTilesHeader from "@/components/page_headers/ImageTilesHeader";
import ProgramDetails from "@/components/programs/ProgramInformation";
import { class_breakdown } from "@/lib/constants/list";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

/**
 * Component that renders program details based on URL search parameters or default tab.
 *
 * This component extracts the "title" parameter from URL search parameters and uses it
 * to display the appropriate program details. If no title is present in the URL,
 * it falls back to the default tab provided by the useTabs hook.
 *
 * @returns A ProgramDetails component initialized with the title from search parameters or default tab
 */
function ProgramContent() {
  const searchParams = useSearchParams();
  const { defaultTab } = useTabs();

  const getTitleFromSearchParams = (): string => {
    const title = searchParams.get("title");
    return title ? title : defaultTab;
  };

  return <ProgramDetails title={getTitleFromSearchParams()} />;
}

export default function ProgramsPage() {
  const router = useRouter();

  return (
    <>
      <ImageTilesHeader />

      <div className="flex flex-col justify-center items-center mx-auto px-4 w-11/12">
        <section>
          <Suspense fallback={<LoadingIndicator />}>
            <ProgramContent />
          </Suspense>
        </section>

        <ResponsiveLogo />

        <section>
          <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
            Class Breakdown
          </h1>
          <p>
            To ensure an organized and impactful learning experience, our
            classes are carefully designed with a structured approach that
            breaks down the curriculum into several distinct segments. Each
            segment is strategically crafted to focus on key aspects of
            learning, allowing students to fully engage with the material and
            make the most of every lesson. This segmented structure maximizes
            educational benefits by targeting specific skills and knowledge
            areas at the right time, enhancing the overall learning process.
          </p>
          <DynamicButton
            onClick={() => router.push("/programs/testimonials")}
            className="md:hidden w-full"
          >
            Hear From Our Community
          </DynamicButton>
          <DynamicButton
            onClick={() => router.push("/programs/frequently_asked_questions")}
            className="md:hidden w-full"
          >
            Frequently Asked Questions
          </DynamicButton>
          <DoughnutChartLabel />
          <p>
            By dividing the class into well-defined parts, we ensure that
            students receive clear, focused instruction while also allowing for
            flexibility and interactive learning. This structure promotes
            continuous engagement, fosters a deeper understanding of the subject
            matter, and helps students retain information more effectively.
            Whether it's introducing new concepts, reinforcing previously
            learned material, or encouraging collaborative activities, every
            segment serves a unique purpose to create a comprehensive and
            enriching educational journey.
          </p>
          <ul className="flex flex-col gap-y-3 py-4 list-disc">
            {class_breakdown.map((list, index) => (
              <li key={index}>
                <strong>{list.title}</strong>: {list.description}
              </li>
            ))}
          </ul>
        </section>

        <ApplyToJoinCTA />
      </div>
    </>
  );
}
