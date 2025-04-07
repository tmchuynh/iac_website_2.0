"use client";
import LoadingIndicator from "@/components/loading/Loading";
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
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
        {staffMember.name}
      </h1>
      <p className="mt-4 text-lg">{staffMember.bio}</p>
      {/* Add more fields as needed */}
    </div>
  );
}
