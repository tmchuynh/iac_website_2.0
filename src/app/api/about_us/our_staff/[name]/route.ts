import { staffCategories } from "@/lib/constants/staff";
import { unformatURL } from "@/lib/utils/format";

export async function GET(
  _request: Request,
  context: { params: { name: string } }
) {
  const { params } = await context;
  const { name } = params;
  const decodedName = unformatURL(name);

  let person = null;

  // Loop through each category and its members to find the matching person
  for (const category of staffCategories) {
    person = category.members.find((member) => member.name === decodedName);
    if (person) {
      person = { ...person, category: category.category }; // Include category context
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
