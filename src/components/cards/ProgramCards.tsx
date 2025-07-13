import { useTabs } from "@/app/context/TabsContext";
import { Program } from "@/lib/types/cards";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import DynamicButton from "../buttons/button-dynamic";
import { Card, CardContent, CardHeader } from "../ui/card";

export const ProgramCards = ({
  program,
  index,
}: {
  program: Program;
  index: number;
}) => {
  const { setDefaultTab } = useTabs();
  function handleClick(program: string) {
    setDefaultTab(program); // Ensure the active tab is set correctly
  }

  return (
    <Link href={`/programs?title=${program.title}`} className="group">
      <Card
        key={program.title}
        className="flex flex-col gap-3 justify-between bg-card shadow-md p-0 border border-border rounded-3xl h-full"
      >
        <CardHeader className="p-0">
          <Image
            src={program.image}
            alt={program.title + " image"}
            width={150}
            height={100}
            className="rounded-t-3xl h-48 min-w-full object-cover object-center"
          />
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col justify-between pb-6 xl:pb-5 pt-7 xl:pt-2 px-6 xl:px-5 h-full">
            <div className="flex flex-col gap-x-4 items-center justify-between">
              <h2
                id={program.title}
                className={cn(
                  index % 3 === 0
                    ? "md:text-secondary"
                    : index % 2 === 0
                      ? "md:text-accent"
                      : "md:text-tertiary",
                  "font-bold text-lg text-tertiary font-[PermanentMarker] md:text-xl lg:text-2xl xl:text-3xl"
                )}
              >
                {program.title}
              </h2>
              <p>{program.description}</p>
            </div>
            <DynamicButton
              onClick={() => handleClick(program.title)}
              className="mt-2 w-full text-wrap"
            >
              More Information
            </DynamicButton>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
