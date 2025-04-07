"use client";

import { StaffCards } from "@/components/cards/StaffCards";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import { staffCategories } from "@/lib/constants/staff";

export default function OurStaffPage() {
  return (
    <main className="relative mx-auto px-4 py-8 md:py-12 lg:py-20 2xl:py-40 xl:py-32 w-11/12">
      <code className="font-semibold text-base/7">Dedicated to Excellence</code>
      <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
        Our Staff
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <p>
            At the heart of our program is a dedicated and passionate team—the
            driving force behind every success story. Their unwavering
            commitment and collective expertise create the foundation for a
            nurturing and inspiring environment where students are empowered to
            thrive, grow, and achieve their full potential. Our team is composed
            of a diverse group of professionals, including educators, support
            staff, and administrators, each bringing a unique blend of skills,
            backgrounds, and experiences. Together, they work in harmony to
            deliver high-quality programming, foster meaningful connections, and
            ensure every student receives the support and encouragement they
            need to flourish.
          </p>
        </div>
        <ResponsiveLogo />
      </div>

      <p>
        From direct instruction to behind-the-scenes coordination, our staff
        plays a vital role in shaping an enriching experience for every learner.
        They go above and beyond—designing dynamic lessons, offering guidance,
        and cultivating a positive atmosphere that promotes creativity,
        confidence, and community. We take immense pride in our team’s
        dedication. Their compassion, innovation, and professionalism are what
        truly set our program apart. Each staff member contributes not only
        their expertise but also their heart, making a lasting difference in the
        lives of the students we serve.
      </p>
      <p>
        We invite you to learn more about the incredible individuals who make
        this program possible. Their stories reflect a shared mission: to create
        opportunities, inspire curiosity, and champion the success of every
        student. If you have questions or would like to connect with a member of
        our staff, we are more than happy to provide additional information.
        Thank you for taking the time to get to know our team. We are confident
        that their commitment and care will leave a lasting impression—just as
        it has on all those they serve.
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
              <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
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
              <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
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
