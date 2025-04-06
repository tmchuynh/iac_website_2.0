"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LoadingIndicator from "@/components/loading/Loading";
import CannotFind from "@/components/loading/CannotFind";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function StudentIndividualShowcasePage() {
  const searchParams = useSearchParams();
  const { school, grade, name } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [showcaseItem, setShowcaseItem] = useState<any>(null);

  useEffect(() => {
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

        // Ensure the query parameters are prefixed with "?"
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

  if (!showcaseItem) {
    return <CannotFind />;
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto py-19 w-11/12">
      <h1 className="font-bold text-3xl">{showcaseItem.title}</h1>
      <p className="mt-4 text-lg">{showcaseItem.description}</p>
      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="font-bold text-xl">Author: {showcaseItem.author}</h2>
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
      {!showcaseItem.images && (
        <Image
          src={showcaseItem.mainImage}
          alt={showcaseItem.title}
          className="mt-4 max-w-full h-auto"
          width={1000}
          height={800}
          priority
        />
      )}
      <div>
        {showcaseItem.writing && (
          <p
            className="mt-4 indent-8"
            dangerouslySetInnerHTML={{
              __html: showcaseItem.writing
                .split("\n")
                .map((line: any, index: number) =>
                  index === 0
                    ? line
                    : `<span style="display: inline-flex; text-indent: 2em;">${line}</span>`
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
                className="border border-input rounded-lg"
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
