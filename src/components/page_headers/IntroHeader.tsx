"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeroSection from "./hero";
import { Button } from "../ui/button";

export default function IntroHeader() {
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
    <>
      <HeroSection imageSrc="/images/Class_Photos/Soccer/soccer-5.jpg" />

      <div className="">
        <div className="mx-auto w-11/12 md:py-24 py-12 flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="mx-8 flex flex-col md:py-12 lg:py-0">
            <div className="hidden sm:mb-8 md:flex">
              <div className="relative rounded-full px-3 py-1 text-sm/6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a
                  href="/register"
                  className="font-[CuteRabbit] tracking-widest text-xl"
                >
                  Registration is now open. Book before classes fill up!{" "}
                </a>
              </div>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-wider text-balance  sm:text-5xl font-[Luckiest]">
              Superior classes, exceptional instructors, outstanding outcomes.
            </h2>
            <p>
              We take pride in offering programs that excel in quality and
              performance at every level. Our offerings have garnered
              enthusiastic support from both students and parents. At IAC, we
              are dedicated to making these programs accessible and affordable
              for everyone!
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button onClick={() => router.push("/register")}>
                Book Classes Today!
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => router.push("/info/programs")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {theme === "dark" ? (
            <img
              alt="IAC Logo"
              src="/images/whiteLogo.png"
              className="h-28 w-auto object-contain"
            />
          ) : (
            <img
              alt="IAC Logo"
              src="/images/tShirtLogo.png"
              className="h-40 xl:h-64 w-auto object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
}
