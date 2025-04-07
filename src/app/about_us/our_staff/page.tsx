"use client";

import { StaffCards } from "@/components/cards/StaffCards";
import { staffCategories } from "@/lib/constants/staff";

export default function OurStaffPage() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
        Our Staff
      </h1>
      <p>
        Meet our dedicated and passionate team, the driving force behind the
        success of our program. Their expertise and commitment create an
        environment where students can thrive and reach their full potential.
        From educators to administrators, each member brings unique skills and
        experiences to ensure a seamless and impactful experience for our
        students.
      </p>
      <p>
        Our staff works tirelessly to positively influence students’ lives
        through direct teaching, providing support services, and managing the
        program. Their shared goal is to provide the best possible experience
        for every student, making a meaningful and lasting impact.
      </p>
      <p>
        We take immense pride in our staff and their exceptional contributions.
        Their dedication and passion set us apart and are key to the success of
        our program. We are excited to share their stories and show you the
        important roles they play in creating a supportive and enriching
        environment for our students.
      </p>
      <p>
        If you have any questions or would like to learn more about our staff,
        we are happy to provide more information. Thank you for taking the time
        to learn about our incredible team! We’re confident you’ll be as
        impressed by their work as we are.
      </p>

      <section className="py-8">
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

          return category.category === "Founder" ||
            category.category === "Senior Instructors" ? (
            <section key={index} className="mb-12">
              <h1 className="my-4 pb-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
                {category.category}
              </h1>

              <ul
                role="list"
                className="gap-x-6 gap-y-20 lg:gap-x-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 xl:grid-cols-5 xl:col-span-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
              >
                {category.members.map((staff, index) => (
                  <StaffCards
                    key={index}
                    {...staff}
                    description={staff.bio || ""}
                    icons={staff.icons || []}
                  />
                ))}
              </ul>
            </section>
          ) : (
            <section key={index} className="mb-12">
              <h1 className="my-4 pb-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
                {category.category}
              </h1>

              <ul
                role="list"
                className="gap-x-6 gap-y-20 lg:gap-x-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 xl:grid-cols-5 xl:col-span-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
              >
                {sortedMembers.map((staff, index) => (
                  <StaffCards
                    key={index}
                    {...staff}
                    description={staff.bio || ""}
                    icons={staff.icons || []}
                  />
                ))}
              </ul>
            </section>
          );
        })}
      </section>
    </main>
  );
}
