"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto py-12 md:py-24 w-11/12">
          <div className="flex flex-col mx-8 md:py-12 lg:py-0">
            <div className="md:flex hidden sm:mb-8">
              <div className="relative px-3 py-1 ring-1 hover:ring-gray-900/20 rounded-full text-sm/6">
                <a href="/register" className="text-xl tracking-widest">
                  Registration is now open. Book before classes fill up!{" "}
                </a>
              </div>
            </div>

            <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider uppercase">
              Superior classes, exceptional instructors, outstanding outcomes.
            </h1>
            <p>
              We take pride in offering programs that excel in quality and
              performance at every level. Our offerings have garnered
              enthusiastic support from both students and parents. At IAC, we
              are dedicated to making these programs accessible and affordable
              for everyone!
            </p>

            <div className="flex flex-wrap gap-6 items-center mt-10">
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
            <Image
              alt="IAC Logo"
              src="/images/white_logo.png"
              className="h-28 w-auto object-contain"
              priority={true}
              width={1200}
              height={800}
            />
          ) : (
            <Image
              alt="IAC Logo"
              src="/images/purple_logo.png"
              className="h-40 xl:h-64 w-auto object-contain"
              priority={true}
              width={1200}
              height={800}
            />
          )}
        </div>
      </div>
    </>
  );
}
