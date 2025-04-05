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
    <div onClick={handleClick} className="group">
      <Image
        alt=""
        src={person.image}
        width={400}
        height={300}
        className="rounded-2xl w-full aspect-3/2 object-cover"
      />
      <h3 className="mt-6 font-semibold text-lg tracking-tight">
        {person.name}
      </h3>
      <p className="text-md">{person.role}</p>
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
      {person.description && (
        <>
          <p className="text-sm">{person.description}</p>
          <DynamicButton text="Learn More" onClick={handleClick} />
        </>
      )}
    </div>
  );
};
