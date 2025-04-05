"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplitImageTiles() {
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
    <div className="relative isolate">
      <svg
        aria-hidden="true"
        className="top-0 -z-10 absolute inset-x-0 w-full h-[64rem] [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible">
          <path
            d="M-200 0h201v201h-201Z M 0h201v201h-201Z M-400 h201v201h-201Z M200 h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div className="overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 pt-36 sm:pt-60 lg:pt-32 pb-32 max-w-7xl">
          <div className="lg:flex lg:items-center gap-x-14 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <div className="relative w-full lg:max-w-xl xl:max-w-2xl lg:shrink-0">
              <h1 className="font-semibold text-5xl text-pretty sm:text-6xl tracking-tight">
                Superior classes, exceptional instructors, outstanding outcomes.
              </h1>
              <p className="mt-8 sm:max-w-md lg:max-w-none font-medium text-lg text-pretty sm:text-xl/8">
                We take pride in offering programs that excel in quality and
                performance at every level. Our offerings have garnered
                enthusiastic support from both students and parents. At IAC, we
                are dedicated to making these programs accessible and affordable
                for everyone!
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <Button onClick={() => router.push("/contact_us/register")}>
                  Book Classes Today!
                </Button>
                <Button
                  variant={"secondaryOutline"}
                  onClick={() => router.push("/programs")}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-end sm:justify-start gap-8 mt-14 sm:-mt-44 lg:mt-0 sm:pl-20 lg:pl-0">
              <div className="flex-none space-y-8 lg:order-last xl:order-none ml-auto sm:ml-0 pt-32 sm:pt-80 lg:pt-36 xl:pt-80 w-44">
                <Image
                  alt="Featured image"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                  width={528}
                  height={792}
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset pointer-events-none" />
              </div>
              <Image
                alt="Featured image"
                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                className="shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                width={528}
                height={792}
              />

              <Image
                alt="Featured image"
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                className="shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                width={396}
                height={528}
              />

              <Image
                alt="Featured image"
                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                className="shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                width={400}
                height={528}
              />
              <div className="flex-none space-y-8 pt-32 sm:pt-0 w-44">
                <Image
                  alt="Featured image"
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                  width={528}
                  height={792}
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset pointer-events-none" />
              </div>
              <div className="relative">
                <Image
                  alt="Featured image"
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                  width={528}
                  height={792}
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
