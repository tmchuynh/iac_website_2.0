import { staffCategories } from "@/lib/constants/staff";
import { unformatURL } from "@/lib/utils/format";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  // Destructure the name from params and decode it
  const { name } = params;
  const decodedName = unformatURL(name);

  let person = null;

  for (const category of staffCategories) {
    person = category.members.find((member) => member.name === decodedName);
    if (person) {
      person = { ...person, category: category.category };
      break;
    }
  }

  if (!person) {
    return new Response("Person not found", { status: 404 });
  }

  return new Response(JSON.stringify(person), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
