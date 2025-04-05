import { Person } from "@/lib/types/cards";

export const StaffCards = (person: Person) => {
  return (
    <div>
      <img
        alt=""
        src={person.image}
        className="aspect-3/2 w-full rounded-2xl object-cover"
      />
      <h3 className="mt-6 text-lg font-semibold tracking-tight">
        {person.name}
      </h3>
      <p className="text-md">{person.role}</p>
      {person.description && <p className="text-sm">{person.description}</p>}
    </div>
  );
};
