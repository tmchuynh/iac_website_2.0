import { showcase } from "@/lib/constants/student_work";

export async function GET(
  _request: Request,
  { params }: { params: { school: string; grade: string; name: string } }
) {
  const { school, grade, name } = params;

  // Find all works with the matching title (name)
  const matchingWorks = showcase
    .flatMap((item) => item.works)
    .filter((work) => work.title === name);

  // If no works match the title, return a 404 response
  if (matchingWorks.length === 0) {
    return new Response("Showcase item not found", { status: 404 });
  }

  // Filter works by school if there are multiple matches
  const schoolFilteredWorks = matchingWorks.filter(
    (work) => work.school === school
  );

  // If no works match the school, return a 404 response
  if (schoolFilteredWorks.length === 0) {
    return new Response("Showcase item not found for the specified school", {
      status: 404,
    });
  }

  // Filter works by grade if there are still multiple matches
  const gradeFilteredWorks = schoolFilteredWorks.filter(
    (work) => work.grade === grade
  );

  // If no works match the grade, return a 404 response
  if (gradeFilteredWorks.length === 0) {
    return new Response("Showcase item not found for the specified grade", {
      status: 404,
    });
  }

  // Return the first matching work (there should only be one at this point)
  const result = gradeFilteredWorks[0];

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
