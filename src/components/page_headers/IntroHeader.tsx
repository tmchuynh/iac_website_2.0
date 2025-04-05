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
      <div className="">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center mx-auto py-12 md:py-24 w-11/12">
          <div className="flex flex-col mx-8 md:py-12 lg:py-0">
            <div className="md:flex hidden sm:mb-8">
              <div className="relative px-3 py-1 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm/6">
                <a
                  href="/register"
                  className="font-[CuteRabbit] text-xl tracking-widest"
                >
                  Registration is now open. Book before classes fill up!{" "}
                </a>
              </div>
            </div>

            <h2 className="max-w-2xl font-semibold text-4xl text-balance sm:text-5xl tracking-wider">
              Superior classes, exceptional instructors, outstanding outcomes.
            </h2>
            <p>
              We take pride in offering programs that excel in quality and
              performance at every level. Our offerings have garnered
              enthusiastic support from both students and parents. At IAC, we
              are dedicated to making these programs accessible and affordable
              for everyone!
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
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
              className="w-auto h-28 object-contain"
            />
          ) : (
            <img
              alt="IAC Logo"
              src="/images/tShirtLogo.png"
              className="w-auto h-40 xl:h-64 object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
}
