import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useTabs } from "@/app/context/TabsContext";
import { Program } from "@/lib/types/cards";
import Image from "next/image";

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
    setDefaultTab(program);
    router.push(`/info/programs#${program}`);
  }

  return (
    <div
      key={program.title}
      className={cn(
        index % 5 === 0 ? "md:ring-2 md:ring-secondary" : "ring-1 ring-muted",
        "rounded-3xl p-8 xl:p-10 flex flex-col justify-between gap-3"
      )}
    >
      <div className="flex flex-col justify-between items-center gap-x-4">
        <Image
          src={program.image}
          alt={program.title + " image"}
          width={400}
          height={192}
          className="pb-5 min-w-full h-48 object-cover object-center"
        />
        <h3
          id={program.title}
          className={cn(
            index % 3 === 0 ? "md:text-secondary" : "md:text-foreground",
            "text-lg/8 font-semibold"
          )}
        >
          {program.title}
        </h3>
        <p>{program.description}</p>
      </div>
      <Button
        variant={index % 2 === 0 ? "outline" : "default"}
        onClick={() => handleClick(program.title)}
        className="group mt-2 w-full text-wrap"
      >
        More Information
        <span className="inline-block transition-transform group-hover:translate-x-4 duration-300 ease-in-out">
          <LuArrowBigRightDash />
        </span>
      </Button>
    </div>
  );
};
