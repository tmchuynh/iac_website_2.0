import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useTabs } from "@/app/context/TabsContext";
import { Program } from "@/lib/types/cards";
import Image from "next/image";
import Link from "next/link";
import DynamicButton from "../buttons/button-dynamic";

export const ProgramCards = ({
  program,
  index,
}: {
  program: Program;
  index: number;
}) => {
  const router = useRouter();
  const { setDefaultTab } = useTabs();
  function handleClick(program: string) {
    setDefaultTab(program); // Ensure the active tab is set correctly
  }

  return (
    <Link href={`/programs?title=${program.title}`} className="group">
      <div
        key={program.title}
        className="flex flex-col justify-between gap-3 shadow-md border rounded-3xl h-full"
      >
        <Image
          src={program.image}
          alt={program.title + " image"}
          width={150}
          height={100}
          className="rounded-t-3xl min-w-full h-48 object-cover object-center"
        />
        <div className="flex flex-col justify-between px-2 xl:px-5 xl:pt-2 pb-2 xl:pb-5 h-full">
          <div className="flex flex-col justify-between items-center gap-x-4">
            <h3
              id={program.title}
              className={cn(
                index % 3 === 0 ? "md:text-secondary" : "md:text-foreground",
                "text-xl font-semibold"
              )}
            >
              {program.title}
            </h3>
            <p>{program.description}</p>
          </div>
          <DynamicButton
            text="More Information"
            onClick={() => handleClick(program.title)}
            className="mt-2 w-full text-wrap"
          />
        </div>
      </div>
    </Link>
  );
};
