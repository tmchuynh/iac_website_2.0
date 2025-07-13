import { Person } from "@/lib/types/cards";
import { formatIconName, formatURL } from "@/lib/utils/format";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../buttons/button-dynamic";
import { Card } from "../ui/card";
import { Tooltip, TooltipContent } from "../ui/tooltip";

export const StaffCards = (person: Person) => {
  const router = useRouter();
  const handleClick = () => {
    if (person.description) {
      router.push(`/about_us/our_staff/${formatURL(person.name)}`);
    }
  };
  return (
    <Card
      onClick={handleClick}
      className="group flex flex-col justify-between shadow-md p-0"
    >
      <div>
        <Image
          alt=""
          src={person.image}
          width={400}
          height={300}
          className="rounded-t-2xl w-full aspect-2/3 object-cover"
        />
      </div>
      <div className="flex flex-col justify-between pb-6 px-6 h-full">
        <section className="flex flex-col gap-4 justify-between h-full">
          <div>
            <h3 className="font-[Caveat] font-semibold text-2xl tracking-tight">
              {person.name}
            </h3>
            <p className="font-[PatrickHandSC] text-sm">{person.role}</p>
          </div>
          {person.icons && (
            <div className="flex gap-3 h-full">
              {person.icons.map((Icon, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Icon className="h-6 w-6 text-secondary transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>{formatIconName(Icon.name)}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}
        </section>

        {person.description && (
          <>
            <p className="pt-4 leading-5">{person.description}</p>
            <DynamicButton className="w-full">Learn More</DynamicButton>
          </>
        )}
      </div>
    </Card>
  );
};
