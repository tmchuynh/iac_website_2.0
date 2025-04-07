"use client";
import LoadingIndicator from "@/components/loading/Loading";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function StaffPage() {
  const { name } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [staffMember, setStaffMember] = useState<any>(null); // Changed type to `any` for flexibility

  useEffect(() => {
    const fetchStaffMember = async () => {
      try {
        const response = await fetch(`/api/about_us/our_staff/${name}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStaffMember(data); // Ensure state is updated with fetched data
      } catch (error) {
        console.error("Error fetching staff member:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffMember();
  }, [name]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="relative mx-auto px-4 py-10 lg:py-30 w-11/12">
      <div className="gap-1 grid grid-cols-1 lg:grid-cols-5">
        <Image
          src={staffMember.image}
          alt={staffMember.name}
          className="lg:col-span-2 shadow-lg rounded-lg object-cover"
          width={500}
          height={500}
        />
        <section className="lg:col-span-3">
          <p className="font-semibold text-base/7">{staffMember.role}</p>
          <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
            {staffMember.name}
          </h1>
          <p
            className="mt-4 indent-8"
            dangerouslySetInnerHTML={{
              __html: staffMember?.moreInfo?.text
                ? staffMember.moreInfo.text
                    .split("<br/>")
                    .map(
                      (line: any) =>
                        `<span style="display: flex; text-indent: 2em; margin: 2px 0px;">${line}</span>`
                    )
                    .join("<br/>")
                : "",
            }}
          />
        </section>
      </div>
    </main>
  );
}
