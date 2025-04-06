"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import DynamicButton from "../buttons/button-dynamic";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ContentAndScreenshot() {
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
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="md:max-w-lg">
            {theme === "dark" ? (
              <Image
                alt="IAC Logo"
                src="/images/white_logo.png"
                className="w-auto h-40 xl:h-52 object-contain"
                priority={true}
                width={3600}
                height={1200}
              />
            ) : (
              <Image
                alt="IAC Logo"
                src="/images/purple_logo.png"
                className="w-auto h-40 xl:h-52 object-contain"
                priority={true}
                width={3600}
                height={1200}
              />
            )}
          </div>
          <p className="font-semibold text-tertiary uppercase">
            Bringing Enrichment to Your School
          </p>
          <h1 className="my-4 font-extrabold text-balance text-lg text-primary lg:text-4xl uppercase tracking-wider">
            Superior classes, exceptional instructors, outstanding outcomes.
          </h1>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-xl lg:max-w-none">
            <div>
              <p>
                Our dynamic after-school program offers an exciting range of
                activities, including soccer, volleyball, basketball, performing
                arts, creative writing, chess, and coding. With experienced
                instructors and top-quality resources, we provide a fun and
                enriching environment where your child can explore and develop
                new passions. Our innovative approach covers a broad spectrum of
                skills in sports, arts, and technology. Your child will enjoy
                engaging in creative projects, teamwork challenges, and much
                more, all within a safe, supportive setting tailored for their
                growth and success.
              </p>
            </div>
            <div>
              <p>
                Our programs have earned widespread popularity and strong
                approval from both students and parents alike.
              </p>
              <p className="mt-8">
                Our programs consistently uphold high standards of quality and
                excellence across all activities.
              </p>
              <p className="mt-8">
                IAC is committed to making our programs accessible and
                affordable for all!
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
      <div className="relative pt-16 lg:pt-20 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <Image
            alt=""
            src="/images/Class_Photos/Soccer/53995092_144851.jpg"
            className="shadow-2xl mb-[-12%] rounded-xl ring-1 ring-gray-900/10 aspect-video object-cover"
            width={3600}
            height={1200}
          />
          <div aria-hidden="true" className="relative">
            <div className="bottom-0 absolute -inset-x-20 bg-linear-to-t from-white pt-[27%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
