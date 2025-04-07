"use client";

import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import DynamicButton from "../buttons/button-dynamic";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const features = [
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: TrashIcon,
  },
];

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto lg:mx-0 max-w-2xl">
        <h2 className="font-semibold text-5xl text-pretty tracking-tight">
          The Quality of Our Classes is Unmatched
        </h2>
        <p className="mt-6 text-lg/8">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
        <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <div
                className={cn(
                  "flex justify-center items-center border rounded-2xl w-12 h-12",
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
              <DynamicButton onClick={() => router.push(feature.href)}>
                Learn more
              </DynamicButton>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
