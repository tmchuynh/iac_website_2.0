"use client";
import { useSearchParams } from "next/navigation";
import { useTabs } from "@/app/context/TabsContext";

import ProgramDetails from "@/components/ProgramInformation";
import { useEffect } from "react";

export default function ProgramsPage() {
  const searchParams = useSearchParams();
  const { defaultTab } = useTabs(); // Access defaultTab from context

  const title = searchParams.get("title") || defaultTab; // Use defaultTab if title is not provided

  useEffect(() => {
    console.log(title); // Debugging log
  }, [title]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-4 py-20 w-11/12">
      <ProgramDetails title={title} />
    </div>
  );
}
