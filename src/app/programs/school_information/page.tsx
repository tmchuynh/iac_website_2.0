"use client";

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
          Partner With Us
        </h1>
        <p>
          Our key partners, including school districts and a wide range of
          organizations, are united by a shared dedication to fostering
          creativity and innovation in the next generation. These collaborations
          are built on the belief that empowering young minds is crucial for
          shaping a brighter future. Together, we provide resources, support,
          and educational opportunities that encourage curiosity, exploration,
          and inventive thinking. Our collective mission is to inspire, mentor,
          and equip youth with the skills they need to become the creators and
          innovators of tomorrow. We strive to cultivate an environment where
          imagination has no limits, and the innovative spirit of the next
          generation is celebrated. By working together, we are shaping a future
          full of fresh ideas, groundbreaking discoveries, and impactful
          contributions to society.
        </p>

        <p className="leading-relaxed">
          Join our growing network of schools dedicated to fostering creativity
          and innovation in the next generation. Together, we can create
          impactful educational experiences that prepare students for a bright
          future. We are proud to collaborate with a diverse range of schools
          that share our vision of empowering students through innovative and
          enriching educational programs. Here are some of the amazing schools
          we partner with:
        </p>
        <div className="mt-6 text-center">
          <Button onClick={() => router.push("/contact_us")}>
            Get In Touch
          </Button>
        </div>
        <div className="mt-8">
          <LogoCloud />
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
          Imagine welcoming a dedicated and accomplished organization to your
          school, with a mission to empower students through a diverse
          curriculum. The subjects enhance critical thinking, strategic
          thinking, communication, and problem-solving skills, while fostering
          effective collaboration with peers. This initiative encourages
          proactive thinking, logical expression of thoughts, and emotional
          well-being. It also introduces fundamental software engineering
          concepts. This collaboration enriches students' educational journey,
          equipping them with comprehensive skills and knowledge to excel
          academically and navigate the modern world.
        </p>
        <p>
          If you have any questions, need assistance, or would like to learn
          more about our program, please don't hesitate to reach out to us at
          <Button
            variant="link"
            className="p-1"
            onClick={() => router.push("mailto:justin@iacafterschools.com")}
          >
            justin@iacafterschools.com
          </Button>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2 text-lg lg:text-2xl">
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
          Thank you for considering IAC's A.R.C. for your school's educational
          after school program(s). We look forward to working with you to create
          a future where every student has the opportunity to learn, grow, and
          thrive.
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
