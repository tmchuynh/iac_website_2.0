"use client";

import { programs } from "@/lib/constants/programs";
import { ProgramCards } from "./cards/ProgramCards";

export default function ProgramsSection() {
  return (
    <section className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
      {programs.map((program, index) => (
        <ProgramCards program={program} index={index} key={program.title} />
      ))}
    </section>
  );
}
