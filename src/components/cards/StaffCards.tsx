import { Person } from "@/lib/types/cards";
import { formatURL } from "@/lib/utils/format";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const StaffCards = (person: Person) => {
  const router = useRouter();
  const handleClick = () => {
    if (person.description) {
      router.push(`/about_us/our_staff/${formatURL(person.name)}`);
    }
  };
  return (
    <div onClick={handleClick}>
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
      {person.description && <p className="text-sm">{person.description}</p>}
    </div>
  );
};
