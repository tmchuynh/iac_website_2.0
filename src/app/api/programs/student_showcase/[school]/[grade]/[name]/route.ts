import { showcase } from "@/lib/constants/student_work";
import { NextRequest, NextResponse } from "next/server";

/**
 * Fetches a specific student showcase item based on school, grade, and name parameters.
 *
 * @param _request - The incoming HTTP request (unused in this function)
 * @param params - Route parameters object containing:
 *   - school: The school name to filter by
 *   - grade: The grade level to filter by
 *   - name: The title of the showcase work to retrieve
 *
 * @returns A Response object with:
 *   - Status 200 and JSON data if the showcase item is found
 *   - Status 404 with error message if no matching item exists for the given parameters
 *
 * @example
 * // Request to: /api/programs/student_showcase/lincoln-elementary/5/my-art-project
 * // Returns JSON data for "my-art-project" from "lincoln-elementary" grade "5"
 */
export async function GET(
  _request: NextRequest,
  _context: unknown
): Promise<NextResponse> {
  const { params } = _context as { params: Record<string, string> };
  const { school, grade, name } = await params;

  // Find all works with the matching title (name)
  const matchingWorks = showcase
    .flatMap((item) => item.works)
    .filter((work) => work.title === name);

  // If no works match the title, return a 404 response
  if (matchingWorks.length === 0) {
    return new NextResponse("Showcase item not found", { status: 404 });
  }

  // Filter works by school if there are multiple matches
  const schoolFilteredWorks = matchingWorks.filter(
    (work) => work.school === school
  );

  // If no works match the school, return a 404 response
  if (schoolFilteredWorks.length === 0) {
    return new NextResponse(
      "Showcase item not found for the specified school",
      {
        status: 404,
      }
    );
  }

  // Filter works by grade if there are still multiple matches
  const gradeFilteredWorks = schoolFilteredWorks.filter(
    (work) => work.grade === grade
  );

  // If no works match the grade, return a 404 response
  if (gradeFilteredWorks.length === 0) {
    return new NextResponse("Showcase item not found for the specified grade", {
      status: 404,
    });
  }

  // Return the first matching work (there should only be one at this point)
  const result = gradeFilteredWorks[0];

  return new NextResponse(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
