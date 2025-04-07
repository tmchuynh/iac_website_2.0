"use client";

import { features } from "@/lib/constants/list";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DynamicButton from "../buttons/button-dynamic";

export default function FeaturedColumns() {
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
    <div className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto lg:mx-0">
        <code className="font-semibold text-base/7">
          Shaping the Future Through Innovation, Excellence, and Equity - Our
          Commitment
        </code>
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          The Quality of Our Classes is Unmatched
        </h1>
        <p className="mt-6 max-w-4xl text-lg/8">
          Parents and school partners trust IAC because of our unwavering
          commitment to excellence. The result? Confident, inspired learners who
          leave our programs not just with new skills—but with a deeper passion
          for learning and the confidence to apply those skills in school, in
          life, and beyond. Simply put, the quality of our classes is
          unmatched—and we wouldn’t have it any other way.
        </p>
      </div>
      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
        <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col justify-between">
              <div>
                <div
                  className={cn(
                    "flex justify-center items-center border rounded-2xl mb-4 w-12 h-12",
                    {
                      "bg-secondary": theme === "light",
                      "bg-primary": theme === "dark",
                    }
                  )}
                >
                  <feature.icon
                    className={cn("w-6 h-6", {
                      "text-background": theme === "light",
                      "text-foreground": theme === "dark",
                    })}
                    aria-hidden="true"
                  />
                </div>
                <p>{feature.name}</p>
                <p>{feature.description}</p>
              </div>
              <DynamicButton
                onClick={() => router.push(feature.href)}
                className="w-full"
              >
                {feature.button}
              </DynamicButton>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
