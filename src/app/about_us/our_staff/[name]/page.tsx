"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import LoadingIndicator from "@/components/loading/Loading";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function StaffPage() {
  const { name } = useParams();
  const router = useRouter();
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
      <code className="font-semibold text-base/7">
        {staffMember.moreInfo.bio}
      </code>
      <section className="gap-1 grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image
            src={staffMember.image}
            alt={staffMember.name}
            className="shadow-lg rounded-lg object-cover"
            width={500}
            height={500}
          />
          {(staffMember.moreInfo.email || staffMember.moreInfo.phone) && (
            <div className="px-2 py-8">
              <h3 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
                Contact Me:
              </h3>
              {staffMember.moreInfo.email && (
                <p className="mt-4 text-base/7">
                  Email:{" "}
                  <DynamicButton
                    variant="link"
                    icon={FaMessage}
                    onClick={() =>
                      router.push(`mailto:${staffMember.moreInfo.email}`)
                    }
                  >
                    {staffMember.moreInfo.email}
                  </DynamicButton>
                </p>
              )}
              {staffMember.moreInfo.phone && (
                <p className="text-base/7">
                  Phone:{" "}
                  <DynamicButton
                    icon={FaPhoneAlt}
                    hoverEffect="translate"
                    variant="link"
                    onClick={() =>
                      router.push(`tel:${staffMember.moreInfo.phone}`)
                    }
                  >
                    {staffMember.moreInfo.phone}
                  </DynamicButton>
                </p>
              )}
            </div>
          )}
        </div>
        <div className="lg:col-span-3">
          <code className="font-semibold text-base/7">{staffMember.role}</code>
          <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
            {staffMember.name}
          </h1>
          <p
            className="mt-4 indent-8"
            dangerouslySetInnerHTML={{
              __html: staffMember?.moreInfo?.text
                ? staffMember.moreInfo.text
                    .split("<br />")
                    .map(
                      (line: any) =>
                        `<span style="display: flex; text-indent: 2em; margin: 2px 0px;">${line}</span>`
                    )
                    .join("<p> </p>")
                : "",
            }}
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {staffMember?.moreInfo?.images?.map((image: string, index: number) => (
          <div key={index} className="mt-8">
            <Image
              src={image}
              alt={`Additional image ${index + 1}`}
              className="shadow-lg rounded-lg object-cover aspect-square"
              width={400}
              height={400}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
