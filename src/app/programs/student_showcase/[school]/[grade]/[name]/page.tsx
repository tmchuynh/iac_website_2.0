"use client";
import LoadingIndicator from "@/components/loading/Loading";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";

/**
 * Renders an individual student showcase page displaying detailed information about a student's work.
 *
 * @component
 * @description
 * This component displays a showcase item's details including:
 * - Title
 * - Description
 * - Author information
 * - Date
 * - School (if available)
 * - Main image or multiple images
 * - Writing content (if available)
 *
 * The component handles:
 * - Loading states with a LoadingIndicator
 * - Error states with a CannotFind component
 * - Dynamic routing parameters (school, grade, name)
 * - Query parameters (author, subject, title, date)
 * - Responsive image grid layout
 * - Formatted text display with indentation
 *
 * @returns {JSX.Element} A formatted display of the student's showcase item
 * @throws {Error} When failing to fetch the showcase data
 *
 * @example
 * // URL: /programs/student_showcase/highschool/12/john-doe?author=John&subject=Art
 * <StudentIndividualShowcasePage />
 */
export default function StudentIndividualShowcasePage(): JSX.Element {
  const searchParams = useSearchParams();
  const { school, grade, name } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [showcaseItem, setShowcaseItem] = useState<any>(null);

  useEffect(() => {
    /**
     * Fetches a specific showcase item based on URL parameters and query parameters.
     * @async
     * @function fetchShowcaseItem
     * @throws {Error} When the fetch request fails
     *
     * @description
     * Makes an API call to retrieve a showcase item using:
     * - URL parameters: school, grade, name
     * - Query parameters: author, subject, title, date
     *
     * The function updates the showcase item state upon successful fetch
     * and handles loading state management.
     *
     * @example
     * await fetchShowcaseItem();
     */
    const fetchShowcaseItem = async () => {
      try {
        const author = searchParams.get("author");
        const subject = searchParams.get("subject");
        const title = searchParams.get("title");
        const date = searchParams.get("date");

        const queryParams = new URLSearchParams();
        if (author) queryParams.append("author", author);
        if (subject) queryParams.append("subject", subject);
        if (title) queryParams.append("title", title);
        if (date) queryParams.append("date", date);

        const response = await fetch(
          `/api/programs/student_showcase/${school}/${grade}/${name}?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch showcase item");
        }

        const data = await response.json();
        setShowcaseItem(data);
      } catch (error) {
        console.error("Error fetching showcase item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowcaseItem();
  }, [searchParams]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto py-5 md:py-8 w-11/12">
      {!showcaseItem.images && (
        <div className="py-3 md:py-8 lg:py-16">
          <Image
            src={showcaseItem.mainImage}
            alt={showcaseItem.title}
            className="shadow-xl mt-4 rounded-4xl max-w-full h-auto"
            width={1000}
            height={800}
            priority
          />
        </div>
      )}
      <code className="font-semibold text-base/7">{showcaseItem.subject}</code>
      <h2 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
        {showcaseItem.title}
      </h2>
      <p className="mt-4 text-lg">{showcaseItem.description}</p>
      <div className="flex flex-col justify-center items-center mt-4">
        <h3 className="font-bold text-xl">Author: {showcaseItem.author}</h3>
        <div className="flex gap-3 pt-3">
          <p>
            <strong>Date:</strong> {showcaseItem.date}
          </p>
          {showcaseItem.school && (
            <div className="flex items-center">
              <Separator orientation="vertical" className="mx-4" />
              <p className="ml-2">
                <strong>School:</strong> {showcaseItem.school}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="pb-8 md:pb-10 lg:pb-14 2xl:pb-32 xl:pb-20">
        {showcaseItem.writing && (
          <p
            className="mt-4 indent-8"
            dangerouslySetInnerHTML={{
              __html: showcaseItem.writing
                .split("\n")
                .map(
                  (line: any) =>
                    `<span style="display: flex; text-indent: 2em; margin: 2px 0px;">${line}</span>`
                )
                .join("<br/>"),
            }}
          />
        )}
        {showcaseItem.images && (
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
            {showcaseItem.images.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`${showcaseItem.title} image ${index + 1}`}
                className="rounded-lg"
                width={300}
                height={200}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
