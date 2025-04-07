"use client";

import FeaturedColumns from "@/components/page_headers/FeaturedColumns";
import ResponsiveLogo from "@/components/ResponsiveLogo";
import Image from "next/image";

export default function OurCommitmentPage() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <FeaturedColumns />
      <section className="gap-5 grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-3">
          <p>
            At IAC, our commitment transcends traditional education—we dedicate
            ourselves to creating meaningful, lasting impacts on every student's
            academic journey and personal growth. Our comprehensive,
            compassionate approach focuses on sustainable educational practices
            designed to equip students with the skills and confidence necessary
            to succeed both now and throughout their lives.
          </p>

          <section className="py-4">
            <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
              Refined and Relevant Curriculum
            </h2>
            <p>
              Our curriculum is thoughtfully designed based on cutting-edge
              educational research, continuous evaluation, and robust
              data-driven insights. By regularly updating our lessons and
              resources, we ensure alignment with evolving academic standards
              and global best practices. We prioritize deeper comprehension,
              creativity, and critical thinking, enabling students to
              confidently approach and solve real-world problems. Our goal is to
              create a meaningful educational experience that inspires students
              to innovate and approach challenges with curiosity and resilience.
            </p>
          </section>

          <section className="py-4">
            <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
              Access to Advanced Resources and Technology
            </h2>
            <p>
              At IAC, we are passionately committed to providing students with
              state-of-the-art resources and the latest technological tools.
              Regularly refreshed to reflect new advancements in STEM and
              digital education, our resources offer hands-on experiences that
              prepare students for a rapidly evolving, technology-driven future.
              We ensure our students stay ahead of emerging trends and are fully
              equipped to face tomorrow’s opportunities with proficiency and
              confidence.
            </p>
          </section>

          <section className="py-4">
            <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
              Holistic Development for Lifelong Success
            </h2>
            <p>
              True education goes beyond academics—it nurtures every aspect of a
              student's development. Our programs integrate rigorous academic
              learning with comprehensive social-emotional support, leadership
              training, resilience-building activities, and interpersonal skill
              development. By fostering emotional intelligence, empathy, and
              strong leadership qualities, we help students become thoughtful,
              empathetic individuals ready to make positive contributions within
              their communities and beyond.
            </p>
          </section>

          <section className="flex justify-center items-center w-full h-1/5">
            <ResponsiveLogo className="2xl:flex hidden" />
          </section>
        </div>
        <Image
          src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
          alt="Commitment"
          className="col-span-2"
          width={900}
          height={300}
        />
      </section>

      <section className="py-4">
        <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
          Strategic Multi-Year Success Plans
        </h2>
        <p>
          Rather than temporary solutions, we invest in long-term, sustainable
          growth strategies. Our Comprehensive Success Plan lays out a clear,
          multi-year educational pathway, strategically designed to equip
          students with essential life skills, continuous personal growth, and
          academic excellence. Students leave our programs not only
          well-prepared academically but also equipped with critical
          adaptability, confidence, and skills for ongoing educational pursuits
          and future career success.
        </p>
      </section>

      <section className="py-4">
        <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
          Continuous Feedback and Improvement
        </h2>
        <p>
          Feedback and continuous improvement lie at the heart of everything we
          do. Regular assessments, structured reflections from students and
          instructors, and thorough data analysis drive constant enhancements in
          our teaching methods, curriculum content, and resource selection. By
          emphasizing this continuous feedback loop, students become empowered
          to recognize and take ownership of their personal and academic growth,
          developing the lifelong learning habits necessary for sustained
          success.
        </p>
      </section>

      <section className="lg:flex 2xl:flex flex-wrap justify-between gap-4 hidden xl:hidden py-4">
        <Image
          src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
          alt="Commitment"
          className="w-1/5 aspect-square object-cover"
          width={1000}
          height={500}
        />
        <Image
          src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
          alt="Commitment"
          className="w-1/5 aspect-square object-cover"
          width={1000}
          height={500}
        />
        <Image
          src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
          alt="Commitment"
          className="w-1/5 aspect-square object-cover"
          width={1000}
          height={500}
        />
        <Image
          src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
          alt="Commitment"
          className="w-1/5 aspect-square object-cover"
          width={1000}
          height={500}
        />
      </section>

      <section className="gap-5 grid grid-cols-1 lg:grid-cols-9">
        <div className="flex xl:flex flex-col gap-4 lg:hidden 2xl:hidden col-span-2">
          <Image
            src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
            alt="Commitment"
            width={1000}
            height={500}
          />
          <Image
            src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
            alt="Commitment"
            width={1000}
            height={500}
          />
        </div>
        <div className="col-span-5 lg:col-span-9 2xl:col-span-9 xl:col-span-5">
          <section className="py-4">
            <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
              Collaborative and Engaging Learning Environments
            </h2>
            <p>
              We deeply believe in the transformative power of collaborative
              learning. Our classrooms and activities are carefully structured
              to foster teamwork, communication, and mutual respect. Through
              meaningful dialogue and cooperative problem-solving, students
              enhance their academic performance, build stronger social
              connections, and gain valuable communication skills. This
              nurturing, collaborative environment helps students grow into
              compassionate and thoughtful individuals capable of empathy and
              understanding.
            </p>
          </section>

          <section className="py-4">
            <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
              Preparation for Future Opportunities
            </h2>
            <p>
              Career readiness and real-world preparation are integral
              components of our curriculum from day one. Students are exposed to
              diverse career pathways, mentorship opportunities, and realistic,
              practical scenarios, enabling them to navigate their futures with
              clarity and confidence. Our approach ensures that every student
              leaves our programs with a clear vision of their future potential,
              equipped with the necessary skills, knowledge, and insights to
              achieve their goals and aspirations.
            </p>
          </section>

          <section className="py-4">
            <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
              Commitment to Equity and Inclusion
            </h2>
            <p>
              At the core of our mission is the unwavering commitment to equity
              and inclusion. We ensure every student, regardless of background,
              learning style, or ability, has equal access to opportunities and
              support. Our programs actively promote diversity, equity, and
              belonging, fostering inclusive environments where every student
              feels valued, respected, and encouraged to contribute their unique
              perspectives and strengths.
            </p>
          </section>

          <p>
            Ultimately, our commitment at IAC is to build a brighter, more
            equitable future, one student at a time. Driven by innovation,
            excellence, and heartfelt compassion, we empower students to become
            informed, proactive citizens, visionary leaders, and catalysts for
            positive change in their communities and the world.
          </p>
        </div>
        <div className="flex xl:flex flex-col gap-4 lg:hidden 2xl:hidden col-span-2">
          <Image
            src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
            alt="Commitment"
            width={1000}
            height={500}
          />
          <Image
            src={"/images/Class_Photos/Chess/20990092_141152.jpg"}
            alt="Commitment"
            width={1000}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
