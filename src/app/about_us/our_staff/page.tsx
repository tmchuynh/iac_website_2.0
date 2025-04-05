"use client";

import { StaffCards } from "@/components/cards/StaffCards";
import { staffCategories } from "@/lib/constants/staff";

export default function OurStaffPage() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <h1>Our Staff</h1>
      <p>Meet our dedicated team members.</p>

      {staffCategories.map((category, index) => {
        // Sort members by last name, then by first name
        const sortedMembers = [...category.members].sort((a, b) => {
          const [aFirstName, aLastName] = a.name.split(" ");
          const [bFirstName, bLastName] = b.name.split(" ");

          // Compare by last name first, then by first name
          return (
            aFirstName.localeCompare(bFirstName) ||
            aLastName.localeCompare(bLastName)
          );
        });

        return (
          <section key={index} className="mb-12">
            <h2 className="mb-6 font-bold text-2xl">{category.category}</h2>

            <ul
              role="list"
              className="gap-x-6 gap-y-20 lg:gap-x-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
            >
              {sortedMembers.map((staff, index) => (
                <StaffCards
                  key={index}
                  {...staff}
                  description={staff.bio || ""}
                />
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
