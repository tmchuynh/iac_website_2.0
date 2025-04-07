import { Person } from "@/lib/types/cards";
import { formatIconName, formatURL } from "@/lib/utils/format";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DynamicButton from "../buttons/button-dynamic";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

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
      <div className="flex flex-col justify-between h-full">
        <section className="flex flex-col justify-between h-1/2">
          <div>
            <h3 className="mt-6 font-semibold text-lg tracking-tight">
              {person.name}
            </h3>
            <p className="text-md tracking-tighter">{person.role}</p>
          </div>
          {person.icons && (
            <div className="flex gap-4">
              {person.icons.map((Icon, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Icon className="w-5 h-5" />
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
