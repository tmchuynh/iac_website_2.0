import { Work } from "@/lib/types/information";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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
          <div className="relative">
            <Image
              alt={`${work.title}_${work.author}_${work.school}`}
              className="w-full transform transition-transform duration-700 object-cover ease-out md:group-hover:scale-105 lg:group-hover:scale-110"
              src={`${work.mainImage}`}
              width={800}
              height={600}
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 font-bold text-xl">{work.title}</h3>
            <p className="mb-4 text-sm">{work.grade}</p>
            <div className="flex justify-between items-center">
              <span className="bg-clip-text bg-gradient-to-r from-secondary via-primary/90 to-tertiary/75 font-bold text-2xl text-transparent">
                {work.school}
              </span>
              <Button className="group-hover:scale-105">
                <svg
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                  <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                </svg>
                View Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
