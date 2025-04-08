import { staffCategories } from "@/lib/constants/staff";
import { unformatURL } from "@/lib/utils/format";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to retrieve information about a staff member.
 *
 * @param _request - The incoming Next.js request object.
 * @param _context - The context object containing route parameters.
 * @returns A NextResponse object containing either the staff member data or an error message.
 *
 * The function:
 * 1. Extracts the staff member's name from the URL parameters
 * 2. Decodes the name from its URL format
 * 3. Searches through staffCategories to find the matching staff member
 * 4. If found, adds the category information to the staff member object
 * 5. Returns the staff member data with CORS headers or a 404 error if not found
 */
export async function GET(
  _request: NextRequest,
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
