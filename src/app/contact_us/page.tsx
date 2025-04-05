import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative px-6 lg:px-8 py-24 sm:py-32 isolate">
      <svg
        aria-hidden="true"
        className="-z-10 absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 h201v201h-201Z M299.5 h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
          Let’s talk about your project
        </h2>
        <p className="mt-2 text-lg/8">
          We help companies and individuals build out their brand guidelines.
        </p>
        <div className="flex lg:flex-row flex-col gap-16 sm:gap-y-20 mt-16">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="gap-x-8 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-semibold text-sm/6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block font-semibold text-sm/6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block font-semibold text-sm/6"
                >
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block font-semibold text-sm/6"
                >
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-semibold text-sm/6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button type="submit">Let’s talk</Button>
            </div>
            <p className="mt-4 text-sm/6">
              By submitting this form, I agree to the{" "}
              <a href="#" className="font-semibold">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <div className="lg:flex-none lg:mt-6 lg:w-80">
            <Image
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
              className="w-auto h-12"
            />
            <figure className="mt-10">
              <blockquote className="font-semibold text-lg/8">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="flex gap-x-6 mt-10">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  className="flex-none rounded-full size-12"
                />
                <div>
                  <div className="font-semibold text-base">Brenna Goyette</div>
                  <div className="text-sm/6">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
