"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LoadingIndicator from "@/components/loading/Loading";
import CannotFind from "@/components/loading/CannotFind";
import Image from "next/image";

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
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <h1 className="font-bold text-3xl">{showcaseItem.title}</h1>
      <p className="mt-4 text-lg">{showcaseItem.description}</p>
      <Image
        src={showcaseItem.mainImage}
        alt={showcaseItem.title}
        className="mt-4 max-w-full h-auto"
        width={1000}
        height={800}
        priority
      />
      <div className="mt-4">
        <h2 className="font-bold text-xl">Author: {showcaseItem.author}</h2>
        <p>Date: {showcaseItem.date}</p>
        <p className="mt-4">{showcaseItem.writing}</p>
      </div>
    </div>
  );
}
