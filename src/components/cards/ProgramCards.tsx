import { cn } from "@/lib/utils/utils";
import { Button } from "../ui/button";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useTabs } from "@/app/context/TabsContext";
import { Program } from "@/lib/types/cards";

export const ProgramCards = (program: Program, index: number) => {
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
      <div className="flex flex-col items-center justify-between gap-x-4">
        <img
          src={program.image}
          alt={program.title + " image"}
          className="min-w-full pb-5 h-48 object-cover object-center"
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
        className="mt-2 group w-full text-wrap"
      >
        More Information
        <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
          <LuArrowBigRightDash />
        </span>
      </Button>
    </div>
  );
};
