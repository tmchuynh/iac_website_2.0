import { showcase } from "@/lib/constants/student_work";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  const subject = searchParams.get("subject");
  const title = searchParams.get("title");
  const date = searchParams.get("date");

  let result = null;

  // Search by author and subject
  if (author && subject) {
    result = showcase
      .find((item) => item.subject === subject)
      ?.works.find((work) => work.author === author);
  }

  // Search by title and author
  if (title && author) {
    result = showcase
      .flatMap((item) => item.works)
      .find((work) => work.title === title && work.author === author);
  }

  // Search by title and subject
  if (title && subject) {
    result = showcase
      .find((item) => item.subject === subject)
      ?.works.find((work) => work.title === title);
  }

  // Search by title and date
  if (title && date) {
    result = showcase
      .flatMap((item) => item.works)
      .find((work) => work.title === title && work.date === date);
  }

  // Search by author and date
  if (author && date) {
    result = showcase
      .flatMap((item) => item.works)
      .find((work) => work.author === author && work.date === date);
  }

  if (!result) {
    return new Response("Showcase item not found", { status: 404 });
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
