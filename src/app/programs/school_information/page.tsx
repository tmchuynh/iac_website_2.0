"use client";

import LogoCloud from "@/components/LogoCloud";
import HeroSection from "@/components/page_headers/hero";
import { success_plan } from "@/lib/constants/list";
import { useRouter } from "next/navigation";

export default function SchoolInformationPage() {
  const router = useRouter();
  return (
    <>
      <HeroSection imageSrc="/images/Class_Photos/Soccer/soccer-7.jpg" />
      <main>
        <h1 className="my-4 text-balance uppercase tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Our Partners
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

        <section className="mb-12">
          <h1 className="my-4 text-balance uppercase tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Trusted By These Amazing Schools
          </h1>
          <LogoCloud />
        </section>

        <section className="mb-12">
          <h1 className="my-4 text-balance uppercase tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Join Us in Shaping the Future
          </h1>
          <p className="text-center">
            We invite you to join us in this exciting journey of creativity and
            innovation. Together, we can empower the next generation to think
            critically, solve problems, and make a positive impact on the world.
            Let's inspire young minds to dream big and turn their ideas into
            reality!
          </p>
          <p className="text-center">
            If you are a school or organization interested in partnering with
            us, please reach out to us at{" "}
          </p>
        </section>

        <section className="mb-12">
          <h1 className="my-4 text-balance uppercase tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Enrichment Made Easy
          </h1>
          <p>
            Our program goes beyond traditional learning methods, emphasizing
            not just rote memorization but a deep understanding and practical
            application of knowledge. We focus on developing critical thinking
            and problem-solving skills to equip students with the tools needed
            for real-world success. Embracing the diversity in our learners’
            abilities, backgrounds, and ages, we ensure an inclusive and
            personalized approach that caters to both beginners and advanced
            students, offering value and enrichment for all. We are proud to
            introduce IAC’s cutting-edge "A.R.C." initiative, which brings
            academic enrichment programs directly to your school.
          </p>

          <ul className="py-2 flex flex-col gap-3">
            {success_plan.map((item, index) => (
              <li key={index} className="flex gap-2 text-balance">
                <div className="">
                  <strong className="tracking-wide">{item.title}:</strong>{" "}
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
