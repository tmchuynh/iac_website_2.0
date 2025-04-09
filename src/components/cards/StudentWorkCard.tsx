import { Work } from "@/lib/types/information";
import Image from "next/image";
import Link from "next/link";
import { MdStarRate } from "react-icons/md";
import DynamicButton from "../buttons/button-dynamic";

export default function StudentWorkCard({
  work,
  index,
}: {
  work: Work;
  index: number;
}) {
  return (
    <Link
      href={`/programs/student_showcase/${encodeURIComponent(
        work.school || "unknown"
      )}/${encodeURIComponent(work.grade || "unknown")}/${encodeURIComponent(
        work.title
      )}?author=${encodeURIComponent(work.author)}&date=${encodeURIComponent(
        work.date
      )}`}
    >
      <div
        key={index}
        className="group relative shadow-lg hover:shadow-xl rounded-4xl transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-secondary via-primary to-tertiary opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
        <div className="relative bg-background m-[4px] rounded-2xl overflow-hidden">
          <div className="relative h-11/12 overflow-clip aspect-8/6">
            <Image
              alt={work.title}
              className="w-full h-full transform transition-transform duration-700 object-cover ease-out md:group-hover:scale-105 lg:group-hover:scale-110"
              src={work.mainImage}
              width={800}
              height={600}
            />
          </div>
          <div className="-mt-2 p-6 border rounded-b-2xl">
            <h3 className="font-[Caveat] font-bold text-xl">{work.title}</h3>
            <p className="mb-4 font-[PatrickHandSC] text-sm">{work.grade}</p>
            <div className="flex justify-between items-center">
              <span className="bg-clip-text bg-gradient-to-r from-secondary dark:from-chart-1 via-primary/90 dark:via-secondary to-tertiary/75 dark:to-tertiary font-bold text-2xl text-transparent">
                {work.school}
              </span>
              <DynamicButton hoverEffect="spin" icon={MdStarRate}>
                View Project
              </DynamicButton>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
