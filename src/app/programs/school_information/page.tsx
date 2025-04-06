"use client";

import DynamicButton from "@/components/buttons/button-dynamic";
import LogoCloud from "@/components/LogoCloud";
import { Button } from "@/components/ui/button";
import { arc_program, success_plan } from "@/lib/constants/list";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { FaCalendarAlt, FaCheckDouble, FaMoneyBillAlt } from "react-icons/fa";
import { LuArrowBigRightDash } from "react-icons/lu";

/**
 * Renders the School Information page component.
 *
 * This page provides comprehensive information about school partnerships and programs:
 * - Partner With Us section describing collaboration opportunities
 * - Enrichment Made Easy section detailing the A.R.C. educational initiative
 * - Get Involved Today section with next steps and contact information
 *
 * The component includes:
 * - Navigation capabilities using Next.js router
 * - Responsive layout with Tailwind CSS
 * - Interactive buttons for contact and email
 * - Icon-based feature highlights
 * - Dynamic content rendering from success_plan and arc_program data
 *
 * @returns {JSX.Element} A main container with multiple informational sections about
 * school partnerships and educational programs
 */
export default function SchoolInformationPage(): JSX.Element {
  const router = useRouter();
  return (
    <main className="mx-auto px-4 py-8 w-11/12">
      <section className="py-12">
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Our Partners in Innovation
        </h1>
        <p>
          At IAC, we are proud to collaborate with a diverse network of school
          districts and educational organizations that share our unwavering
          commitment to fostering creativity, innovation, and lifelong learning
          in the next generation.
        </p>
        <p>
          These partnerships are rooted in a shared belief: that empowering
          young minds is essential to building a brighter, more innovative
          future. Together, we provide students with the resources, mentorship,
          and opportunities needed to explore, imagine, and invent. By
          encouraging curiosity and critical thinking, we help cultivate
          future-ready learners who are confident, capable, and inspired to
          shape the world around them.
        </p>

        <p>
          Our collective mission is clear—to inspire, mentor, and equip youth
          with the creative tools and practical skills to become the
          problem-solvers, leaders, and changemakers of tomorrow. Through these
          strategic collaborations, we’re creating spaces where imagination has
          no boundaries and students are free to pursue bold ideas with purpose.
        </p>

        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Join Our Growing Network
        </h1>
        <p>
          We invite schools and educational leaders to join our ever-expanding
          network dedicated to delivering meaningful, future-focused learning
          experiences. By working together, we can co-create transformative
          after-school programs that enrich students’ lives and prepare them for
          the challenges and opportunities of the modern world.
        </p>

        <p>
          We are honored to work alongside forward-thinking institutions that
          share our vision. Here are just a few of the incredible schools we’re
          proud to partner with:
        </p>
        <div className="mt-8">
          <LogoCloud />
        </div>
        <div className="mt-6">
          <DynamicButton onClick={() => router.push("/contact_us")}>
            Get In Touch
          </DynamicButton>
        </div>
      </section>

      <section className="mb-12">
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Enrichment Made Easy
        </h1>
        <p>
          Our program goes beyond traditional learning methods, emphasizing not
          just rote memorization but a deep understanding and practical
          application of knowledge. We focus on developing critical thinking and
          problem-solving skills to equip students with the tools needed for
          real-world success. Embracing the diversity in our learners’
          abilities, backgrounds, and ages, we ensure an inclusive and
          personalized approach that caters to both beginners and advanced
          students, offering value and enrichment for all. We are proud to
          introduce IAC’s cutting-edge "A.R.C." initiative, which brings
          academic enrichment programs directly to your school.
        </p>

        <ul className="flex flex-col gap-3 py-2">
          {success_plan.map((item, index) => (
            <li key={index} className="flex gap-2 text-balance">
              <div className="">
                <strong className="tracking-wide">{item.title}</strong>{" "}
                {item.description}
              </div>
            </li>
          ))}
        </ul>

        <p>
          The A.R.C. for Education program is designed to create a comprehensive
          and immersive learning experience that integrates three core
          pillars—immersion, effectiveness, and inclusivity—into every aspect of
          the educational journey. Each of these components functions
          harmoniously, much like a well-conducted orchestra, ensuring that all
          students, regardless of age, background, or skill level, have the
          support and resources they need to build a strong and lasting
          educational foundation.
        </p>

        <ul className="flex flex-col gap-3 py-2">
          {arc_program.map((item, index) => (
            <li key={index} className="flex gap-2 text-balance">
              <div className="">
                <strong className="tracking-wide">{item.title}</strong>{" "}
                {item.description}
              </div>
            </li>
          ))}
        </ul>

        <p>
          Together, these pillars of immersion, effectiveness, and inclusivity
          form the foundation of a powerful educational experience that empowers
          students to explore, grow, and excel. The A.R.C. for Education program
          is not just about academic achievement; it's about preparing students
          to be the innovators, problem-solvers, and leaders of tomorrow. By
          blending these elements, we create a nurturing and stimulating
          environment where students are encouraged to think critically, take
          risks, and explore new ideas. This holistic approach prepares students
          for success in an ever-changing world, equipping them with the tools
          and mindset needed to shape a brighter and more transformative future.
        </p>
        <p>
          Ultimately, our mission is to provide a learning environment where
          every student has the opportunity to reach their full potential.
          Through the synergy of these foundational elements, we aim to inspire
          and empower the next generation of thinkers, creators, and leaders who
          will drive positive change in their communities and beyond. By giving
          students the tools to succeed and the confidence to pursue their
          dreams, we help shape a future filled with innovation, growth, and
          boundless possibilities.
        </p>
      </section>

      <section className="pb-12">
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Get Involved Today
        </h1>
        <p>
          Imagine partnering with a dynamic, mission-driven organization
          committed to preparing students for success in today’s fast-paced,
          interconnected world. IAC’s A.R.C. Program delivers an enriching,
          multi-dimensional curriculum designed to foster critical thinking,
          strategic problem-solving, effective communication, and collaboration.
        </p>
        <p>
          Our approach goes beyond traditional academics—empowering students
          with emotional intelligence, confidence, and resilience. By
          introducing essential concepts in software engineering and real-world
          applications, we equip learners with the tools they need to thrive in
          both academic and future professional environments.
        </p>
        <h2 className="mb-6 font-bold text-2xl">
          Ready to Bring A.R.C. to Your School?
        </h2>
        <p>
          We’d love to connect and explore how we can support your school’s
          after-school programming goals. Whether you're interested in learning
          more or ready to take the next step, we’re here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2 lg:text-2xl">
          <div className="flex flex-col items-center gap-3 text-center tracking-widest">
            <div className="mx-auto p-2 rounded-md w-fit">
              <FaCalendarAlt className="w-8 h-8" />
            </div>
            <p>Schedule a consultation</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center tracking-widest">
            <div className="mx-auto p-2 rounded-md w-fit">
              <FaMoneyBillAlt className="w-8 h-8" />
            </div>
            <p>Discuss pricing and plan options</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center tracking-widest">
            <div className="mx-auto p-2 rounded-md w-fit">
              <FaCheckDouble className="w-8 h-8" />
            </div>
            <p>Review site specific program requirements</p>
          </div>
        </div>
        <p>
          For questions, additional information, or to begin the conversation,
          please reach out to us at
          <Button
            variant="link"
            className="p-1"
            onClick={() => router.push("mailto:justin@iacafterschools.com")}
          >
            justin@iacafterschools.com
          </Button>
          .
        </p>
        <p>
          Thank you for considering IAC’s A.R.C. as a partner in your school’s
          educational after-school programs. We are excited about the
          opportunity to collaborate and help shape a future where every student
          is empowered to learn, grow, and thrive. We look forward to working
          together in support of your school’s vision for student success.
        </p>
        <Button onClick={() => router.push("/contact")} className="group mt-2">
          Get In Touch
          <span className="inline-block transition-transform group-hover:translate-x-4 duration-300 ease-in-out">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </section>
    </main>
  );
}
