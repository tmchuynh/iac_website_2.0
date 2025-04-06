"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import LogoCloud from "@/components/LogoCloud";
import { Button } from "@/components/ui/button";
import { arc_program, success_plan } from "@/lib/constants/list";
import { programs } from "@/lib/constants/programs";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import {
  FaBook,
  FaBrain,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCheckDouble,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
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
      <section className="pt-12">
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
      </section>

      <section className="gap-4 grid grid-cols-1 lg:grid-cols-2 py-6">
        <div className="flex flex-col gap-3">
          <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
            After-School Programs
          </h1>
          <p>
            Our institution offers high-quality extracurricular activities,
            extending beyond traditional classes. Our experienced team visits
            your school weekly, dedicating 60-90 minutes to hands-on experiences
            that nurture each student's growth, self-expression, and unique
            talents. We aim to provide well-rounded and enriching experiences,
            helping students unlock their full potential.
          </p>
          <div className="gap-3 lg:gap-6 grid grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <FaBook className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10" />
              <p>No additional resources needed</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FaChalkboardTeacher className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10" />{" "}
              <p>No extra staff needed</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FaComputer className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10" />{" "}
              <p>No IT support needed</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FaBrain className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10" />{" "}
              <p>No headaches and no stress</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
            Proactive and Passionate
          </h1>
          <p>
            We understand the challenges schools face in offering diverse
            after-school programs due to financial constraints, specialized
            resources, and logistical issues. At IAC, we take pride in
            addressing these challenges with our mobile and well-equipped
            instructors. Our instructors are experts in their fields and come
            fully prepared with all necessary resources. This ensures a seamless
            and comprehensive learning experience, whether it's chess,
            performing arts, creative writing, basketball, soccer, or
            volleyball, alleviating the burden on schools.
          </p>
          <div className="flex flex-wrap justify-around gap-5 mx-auto w-8/12">
            {programs.map((program, index) =>
              program.icons.map((Icon, iconIndex) =>
                iconIndex === 0 ? (
                  <div
                    key={index}
                    className="bg-accent p-3 rounded-2xl text-background"
                  >
                    <Icon className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10" />
                  </div>
                ) : null
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-6">
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
