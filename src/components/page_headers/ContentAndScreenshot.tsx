"use client";
import { useRouter } from "next/navigation";
import DynamicButton from "../buttons/button-dynamic";
import FadedImage from "../FadedImage";
import ResponsiveLogo from "../ResponsiveLogo";

export default function ContentAndScreenshot() {
  const router = useRouter();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <ResponsiveLogo />
          <p className="font-semibold text-tertiary uppercase">
            Bringing Enrichment to Your School
          </p>
          <h1 className="my-4 font-extrabold text-balance text-lg text-primary lg:text-4xl uppercase tracking-wider">
            Superior classes, exceptional instructors, outstanding outcomes.
          </h1>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-xl lg:max-w-none">
            <div>
              <p>
                Our dynamic after-school program is designed to inspire, engage,
                and empower students through a diverse range of activities that
                promote personal growth and well-rounded development. With
                offerings that include soccer, volleyball, basketball,
                performing arts, creative writing, chess, and coding, there is
                something for every interest and passion. We believe in
                providing students with the freedom to explore, experiment, and
                excel in areas they love—while also introducing them to new and
                exciting opportunities they may not have encountered before.
              </p>
              <p>
                Led by experienced instructors who are passionate about their
                fields, our program blends fun with purpose. Each session is
                thoughtfully structured to help students build confidence,
                develop new skills, and foster creativity. Whether your child is
                learning to collaborate on the court, compose a short story,
                master a chess strategy, or write their first lines of code, our
                team ensures that learning is always engaging, hands-on, and
                meaningful.
              </p>
              <p>
                We take pride in our innovative approach, which integrates the
                best practices from both academic and enrichment models. Our
                curriculum is carefully curated to encourage exploration in
                sports, the arts, and technology, helping students grow
                intellectually, socially, and emotionally. From team-based
                challenges that build leadership and communication skills to
                solo creative projects that nurture imagination and
                self-expression, every activity is crafted to support holistic
                development.
              </p>
              <p>
                Most importantly, all of this takes place in a safe, inclusive,
                and supportive environment where every child is valued and
                encouraged to succeed. We understand the importance of creating
                a space where students feel comfortable taking risks, making
                mistakes, and discovering their strengths. Our after-school
                program not only extends learning beyond the classroom but also
                helps students build lasting friendships, strong character, and
                a genuine love for learning.
              </p>
            </div>
            <div>
              <p>
                Our programs have earned widespread popularity and enthusiastic
                approval from both students and parents alike. Families
                consistently commend the enriching experiences, engaging
                instruction, and positive impact our programs have on their
                children’s academic, creative, and personal growth. The high
                level of satisfaction is a reflection of our commitment to
                creating meaningful, memorable, and student-centered learning
                opportunities.
              </p>
              <p className="mt-8">
                At IAC, we pride ourselves on consistently maintaining high
                standards of quality and excellence across all activities. Every
                program is thoughtfully designed, led by passionate educators,
                and guided by best practices in curriculum development and
                instructional strategy. We continually assess and refine our
                offerings to ensure they remain effective, relevant, and
                inspiring for every learner.
              </p>
              <p className="mt-8">
                Equally important is our commitment to accessibility. IAC firmly
                believes that every student deserves the opportunity to benefit
                from exceptional educational experiences, regardless of their
                financial circumstances. We are dedicated to making our programs
                affordable and inclusive, offering flexible options and support
                to ensure that all families can participate and thrive within
                our community.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <DynamicButton className="w-1/4" onClick={() => router.push("/")}>
              Get Started Today
            </DynamicButton>
          </div>
        </div>
      </div>
      <FadedImage
        imageSrc={"/images/Class_Photos/Soccer/53995092_144851.jpg"}
      />
    </div>
  );
}
