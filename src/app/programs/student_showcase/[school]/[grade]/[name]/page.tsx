"use client";
import LoadingIndicator from "@/components/loading/Loading";
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
        if (grade) queryParams.append("grade", grade as string);
        if (subject) queryParams.append("subject", subject);
        if (title) queryParams.append("title", name as string);
        if (date) queryParams.append("date", date);

        const response = await fetch(
          `/api/programs/student_showcase/${school}/${grade}/${name}?${queryParams.toString()}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch showcase item");
        }

        const data = await response.json();
        console.log(data);
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
        <div className="py-3 md:py-8 lg:py-16 w-1/2 h-1/2">
          <Image
            src={showcaseItem.mainImage}
            alt={showcaseItem.title}
            className="shadow-xl rounded-4xl aspect-5/4 object-cover object-center"
            width={1200}
            height={1000}
            priority
          />
        </div>
      )}
      {showcaseItem.icons.length > 2 && (
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-4">
          {showcaseItem.icons.map(
            (icon: string, index: number) =>
              index > 2 && (
                <Image
                  key={index}
                  src={`${icon}`}
                  alt={`${showcaseItem.title}_Image_Icon_${index}`}
                  className="rounded-lg"
                  width={80}
                  height={80}
                />
              )
          )}
        </div>
      )}
      <h2 className="my-4 font-[PermanentMarker] font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
        {showcaseItem.title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg">{showcaseItem.description}</p>
      <div className="flex md:flex-row flex-col justify-center items-center gap-6 lg:gap-10 xl:gap-20 mt-4">
        {showcaseItem.author !== "Anonymous" && (
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`${showcaseItem.icons[0]}`}
              alt={`${showcaseItem.title}_Image_Icon_0`}
              width={40}
              height={40}
            />
            <p className="text-sm/6">
              <strong>Author</strong>: {showcaseItem.author}
            </p>
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`${showcaseItem.icons[1]}`}
            alt={`${showcaseItem.title}_Image_Icon_1`}
            width={40}
            height={40}
          />
          <p className="text-sm/6">
            <strong>Date</strong>: {showcaseItem.date}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`${showcaseItem.icons[2]}`}
            alt={`${showcaseItem.title}_Image_Icon_2`}
            width={40}
            height={40}
          />
          <p className="text-sm/6">
            <strong>School</strong>: {showcaseItem.school}
          </p>
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
                    `<span style="display: flex; text-indent: 2em; ">${line}</span>`
                )
                .join("<p> </p>"),
            }}
          />
        )}
        {showcaseItem.images && (
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
            {showcaseItem.images.map((image: string, index: number) => {
              console.log(
                `Image URL: ${image}, Index: ${index}, Title: ${showcaseItem.title}`
              );
              return (
                <Image
                  key={index}
                  src={image}
                  alt={`${showcaseItem.title} image ${index + 1}`}
                  className="rounded-lg"
                  width={300}
                  height={200}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
