import { staffCategories } from "@/lib/constants/staff";
import { unformatURL } from "@/lib/utils/format";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  _context: unknown // Do not annotate the parameter with the specific type inline
): Promise<NextResponse> {
  // Now cast the second argument to a type that suits your needs.
  const { params } = _context as { params: Record<string, string> };
  const { name } = params;
  const decodedName = unformatURL(name);

  let person = null;
  // Iterate over staffCategories to locate the matching staff member.
  for (const category of staffCategories) {
    person = category.members.find((member) => member.name === decodedName);
    if (person) {
      // Include category information in the returned object.
      person = { ...person, category: category.category };
      break;
    }
  }

  if (!person) {
    return NextResponse.json({ error: "Person not found" }, { status: 404 });
  }

  return NextResponse.json(person, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
