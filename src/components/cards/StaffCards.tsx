import { Person } from "@/lib/types/cards";
import { formatIconName, formatURL } from "@/lib/utils/format";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../buttons/button-dynamic";
import { Tooltip, TooltipContent } from "../ui/tooltip";

export const StaffCards = (person: Person) => {
  const router = useRouter();
  const handleClick = () => {
    if (person.description) {
      router.push(`/about_us/our_staff/${formatURL(person.name)}`);
    }
  };
  return (
    <section
      onClick={handleClick}
      className="group flex flex-col justify-between"
    >
      <div>
        <Image
          alt=""
          src={person.image}
          width={400}
          height={300}
          className="rounded-2xl w-full aspect-2/3 object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-6 h-full">
        <section className="flex flex-col justify-between gap-4 h-full">
          <div>
            <h3 className="font-semibold text-xl tracking-tight">
              {person.name}
            </h3>
            <p className="text-sm">{person.role}</p>
          </div>
          {person.icons && (
            <div className="flex gap-3 h-full">
              {person.icons.map((Icon, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Icon className="w-6 h-6 text-primary dark:text-chart-2 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>{formatIconName(Icon.name)}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}
        </section>

        {person.description && (
          <>
            <p className="pt-4 text-sm">{person.description}</p>
            <DynamicButton className="w-full">Learn More</DynamicButton>
          </>
        )}
      </div>
    </section>
  );
};
