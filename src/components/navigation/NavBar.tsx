import {
  about,
  contact,
  programs,
  recentPosts,
} from "@/lib/constants/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Example() {
  return (
    <Popover className="relative z-50 shadow-sm isolate">
      <div className="py-5">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <PopoverButton className="inline-flex items-center gap-x-1 font-semibold focus-visible:outline-none">
            International Activities Club
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
        </div>
      </div>

      <PopoverPanel
        transition
        className="top-0 -z-10 absolute inset-x-0 bg-background data-closed:opacity-0 shadow-lg pt-16 data-closed:-translate-y-1 data-enter:duration-200 data-leave:duration-150 data-enter:ease-out data-leave:ease-in"
      >
        <div className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-9 mx-auto px-6 lg:px-8 py-10 max-w-7xl">
          <div className="gap-6 sm:gap-8 grid grid-cols-2 md:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="font-medium">About IAC</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {about.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 py-2 font-semibold"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="flex-none size-6"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Unforgettable Programs</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {programs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 py-2 font-semibold"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="flex-none size-6"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Reach Out to Us</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {contact.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 py-2 font-semibold"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="flex-none size-6"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="gap-10 sm:gap-8 grid grid-cols-1 lg:grid-cols-2 lg:col-span-4">
            <h3 className="sr-only">Recent posts</h3>
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="relative flex sm:flex-row flex-col lg:flex-col sm:items-start lg:items-stretch gap-x-8 gap-y-6 max-w-2xl isolate"
              >
                <div className="relative flex-none">
                  <Image
                    alt=""
                    src={post.imageUrl}
                    width={400}
                    height={225}
                    className="rounded-lg w-full sm:h-32 lg:h-auto aspect-2/1 object-cover sm:aspect-video"
                  />
                </div>
                <div>
                  <h4 className="mt-2 font-semibold">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-2 text-sm">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
