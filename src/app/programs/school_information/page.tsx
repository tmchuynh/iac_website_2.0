"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import FadedImage from "@/components/images/FadedImage";
import LogoCloud from "@/components/images/LogoCloud";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/constants/programs";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

export default function SchoolInformationPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="mx-auto px-4 py-8 w-11/12">
      <section className="pt-12">
        <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
          The Schools We Work With
        </p>
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Our Partners in Innovation
        </h1>
        <p>
          At IAC, we are honored to collaborate with a wide network of school
          districts and educational organizations that share our commitment to
          nurturing creativity, innovation, and lifelong learning. Our
          enrichment programs are trusted by schools and families alike for
          their quality, impact, and ability to meaningfully support student
          development. Whether integrated into existing curricula or offered as
          independent experiences, our programs are recognized for delivering
          engaging, high-value opportunities that enrich and empower students.
        </p>
        <p>
          These partnerships are built on a common belief: that equipping young
          minds with the tools to think creatively and critically is essential
          for building a more innovative and inclusive future. Together, we
          provide students with access to exceptional instruction, mentorship,
          and the freedom to explore, discover, and create. By promoting
          curiosity and encouraging bold thinking, we prepare students to become
          future-ready learners who are confident, capable, and driven to make a
          difference.
        </p>
        <p>
          Our shared mission is to inspire and equip the next generation of
          leaders, problem-solvers, and creators. Through these strategic
          collaborations, we are cultivating environments where imagination
          thrives, learning is dynamic, and students are empowered to turn their
          ideas into action. With every partnership, we take another step toward
          building a world where education fuels innovation and every learner
          has the opportunity to lead with purpose.
        </p>
      </section>

      <section className="gap-6 grid grid-cols-1 lg:grid-cols-2 py-6 lg:py-12">
        <div className="flex flex-col gap-3 text-pretty">
          <h2 className="my-4 font-[PermanentMarker] font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
            After-School Programs
          </h2>
          <p>
            Our institution proudly offers high-quality after-school programs
            designed to enrich the student experience beyond the traditional
            classroom setting. These extracurricular activities are thoughtfully
            curated to inspire creativity, build essential life skills, and
            foster personal growth. Delivered directly on your school’s campus,
            our team visits weekly to provide 60 to 90 minutes of engaging,
            hands-on instruction that supports student development in a fun,
            structured, and meaningful way.
          </p>
          <div className="gap-3 lg:gap-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 mx-auto 2xl:w-10/12">
            <div className="flex flex-col items-center gap-2 text-center">
              <FaBook className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10 text-tertiary/75" />
              <p>No additional resources needed</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FaChalkboardTeacher className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10 text-tertiary/75" />
              <p>No extra staff needed</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FaComputer className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10 text-tertiary/75" />
              <p>No IT support needed</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FaBrain className="w-5 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10 text-tertiary/75" />
              <p>No headaches and no stress</p>
            </div>
          </div>
          <p>
            Each session is led by a passionate, experienced educator who brings
            both subject-matter expertise and a deep commitment to student
            success. Our instructors do more than teach—they mentor, motivate,
            and guide students as they explore new interests and discover their
            individual strengths. Through personalized support and dynamic
            instruction, they create an environment where every student feels
            seen, supported, and encouraged to reach their full potential.
          </p>
          <p>
            Our programs are turnkey and hassle-free for schools. There is no
            need for additional resources, extra staffing, or IT support. We
            handle all logistics, materials, and instruction—allowing your
            school to offer a wide range of enrichment opportunities without
            added workload. With no stress and no headaches, administrators can
            confidently offer students a program that is as enriching as it is
            effortless to implement.
          </p>
          <p>
            By combining educational excellence with convenience and care, our
            after-school programs provide a well-rounded experience that
            supports academic success, social development, and creative
            expression—all in a safe, supportive space where students can grow
            and thrive.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-pretty">
          <ResponsiveLogo />
          <h2 className="my-4 font-[PermanentMarker] font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
            Proactive and Passionate
          </h2>
          <p>
            At IAC, we recognize the real-world challenges schools face in
            providing diverse, high-quality after-school programs—often due to
            financial limitations, staffing shortages, and logistical
            complexities. That’s why we’ve built our model around proactive
            solutions that remove these barriers. Our mobile team of expert
            instructors arrives fully prepared with all the materials,
            equipment, and curriculum needed to deliver exceptional enrichment
            experiences on-site—no additional staffing, planning, or support
            required from the school.
          </p>
          <p>
            Each instructor is not only a subject expert but also a passionate
            educator committed to creating engaging, meaningful learning
            experiences. Whether it’s chess, creative writing, performing arts,
            basketball, soccer, or volleyball, every session is thoughtfully
            crafted to spark curiosity, build skills, and promote student
            confidence. With everything handled by IAC, schools can offer a wide
            array of extracurricular activities without the usual stress or
            logistical hurdles.
          </p>
          <div className="flex flex-wrap justify-around gap-5 mx-auto md:w-2/3 lg:w-11/12 2xl:w-full">
            {programs.map((program, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-accent p-3 rounded-2xl lg:w-15 xl:w-20 lg:h-15 xl:h-20 text-background"
              >
                <Image
                  src={program.titleIcon}
                  alt=""
                  className="xl:w-10 xl:h-10"
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
          <p>
            Our programs are designed to do more than teach content—they are
            built to develop well-rounded individuals. Through collaborative
            projects, interactive challenges, and team-based activities,
            students build essential life skills such as communication,
            leadership, empathy, and resilience. We foster a learning
            environment where students are encouraged to share ideas, support
            one another, and grow together.
          </p>
          <p>
            By blending practical skill-building with social-emotional
            development, IAC creates a space where students are empowered to
            thrive both individually and as part of a community. Our proactive
            approach ensures schools can expand their enrichment offerings with
            ease—while students gain the confidence and capabilities they need
            to succeed in school, in life, and beyond.
          </p>
        </div>
      </section>

      <FadedImage imageSrc="/images/Class_Photos/Soccer/53995092_141122.jpg" />

      <section className="py-6">
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Join Our Growing Network
        </h1>
        <p>
          We invite schools, administrators, and educational leaders to become
          part of our ever-expanding network committed to delivering meaningful,
          future-focused learning experiences. At IAC, we believe in the power
          of collaboration to create lasting educational impact. By partnering
          with like-minded institutions, we co-design transformative
          after-school programs that inspire curiosity, foster creativity, and
          equip students with the skills needed to thrive in a rapidly evolving
          world.
        </p>
        <p>
          Our enrichment offerings are intentionally diverse, spanning a wide
          range of disciplines—from athletics and performing arts to STEM,
          humanities, and digital creativity. This variety empowers students to
          explore new passions, strengthen existing talents, and develop a more
          well-rounded understanding of the world around them. Whether a student
          is coding a game, performing on stage, competing in sports, writing a
          short story, or illustrating a comic book, each experience is designed
          to engage both the mind and the heart.
        </p>
        <DynamicButton
          onClick={() => router.push("/contact_us")}
          className="mx-0 mb-3"
        >
          Get In Touch
        </DynamicButton>
        <p>
          Through our partnerships, we’ve had the privilege of working alongside
          forward-thinking institutions that share our vision of accessible,
          high-quality enrichment. These schools understand the importance of
          investing in whole-child development and recognize the value of
          programs that balance academic rigor with creativity, collaboration,
          and real-world application.
        </p>
        <p>
          We are proud to highlight just a few of the exceptional schools and
          communities we’ve partnered with—organizations that are helping shape
          the next generation of leaders, innovators, and changemakers through
          enriching, student-centered learning experiences.
        </p>
        <div className="mt-8">
          <LogoCloud />
        </div>
      </section>

      <section className="py-5 lg:py-12">
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Get Involved Today
        </h1>
        <p>
          Imagine partnering with a dynamic, mission-driven organization
          dedicated to preparing students for success in today’s fast-paced,
          interconnected world. IAC’s A.R.C. (Academic Resource Connection)
          Program delivers a rich, multi-dimensional curriculum that cultivates
          critical thinking, strategic problem-solving, effective communication,
          and meaningful collaboration.
        </p>
        <p>
          Our approach extends beyond traditional academics—empowering students
          with the emotional intelligence, confidence, and resilience they need
          to excel. By introducing foundational concepts in software engineering
          and connecting learning to real-world applications, A.R.C. equips
          students with essential tools for both academic success and future
          career readiness.
        </p>
        <h3 className="font-[Caveat] font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
          Ready to Bring A.R.C. to Your School?
        </h3>
        <p>
          We would be honored to collaborate with your school and support your
          after-school programming goals. Whether you're gathering information
          or ready to implement, we’re here to guide you every step of the way.
        </p>

        <ul className="flex flex-col justify-center space-y-6 py-6">
          <li className="flex items-start gap-4">
            <FaCalendarAlt
              className={cn(
                "-mt-1 lg:-mt-2 w-6 md:w-7 lg:w-8 xl:w-9 h-6 md:h-7 lg:h-8 xl:h-9 shrink-0",
                { "text-secondary": theme === "light" },
                { "text-foreground": theme === "dark" }
              )}
            />
            <span>
              Schedule a consultation to explore your school's specific needs
              and goals
            </span>
          </li>

          <li className="flex items-start gap-4">
            <FaMoneyBillAlt
              className={cn(
                "-mt-1 lg:-mt-2 w-6 md:w-7 lg:w-8 xl:w-9 h-6 md:h-7 lg:h-8 xl:h-9 shrink-0",
                { "text-secondary": theme === "light" },
                { "text-foreground": theme === "dark" }
              )}
            />
            <span>
              Discuss pricing and program options that align with your budget
              and timeline
            </span>
          </li>

          <li className="flex items-start gap-4">
            <FaCheckDouble
              className={cn(
                "-mt-1 lg:-mt-2 w-6 md:w-7 lg:w-8 xl:w-9 h-6 md:h-7 lg:h-8 xl:h-9 shrink-0",
                { "text-secondary": theme === "light" },
                { "text-foreground": theme === "dark" }
              )}
            />
            <span>
              Review site-specific requirements to ensure a seamless integration
            </span>
          </li>
        </ul>

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
          Thank you for considering IAC’s A.R.C. Program as a partner in your
          after-school enrichment efforts. We are excited about the opportunity
          to collaborate and help shape a future where every student is
          empowered to learn, grow, and thrive. We look forward to working with
          you in support of your school’s vision for student success.
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
