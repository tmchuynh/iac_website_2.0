import { FaBuilding, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import ApplicationForm from "@/components/forms/ApplicationForm";

export default function Apply() {
  return (
    <div className="relative isolate">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
        <div className="relative lg:static px-6 lg:px-8 lg:py-48 pt-24 sm:pt-32 pb-20">
          <div className="mx-auto lg:mx-0 max-w-xl lg:max-w-lg">
            <div className="left-0 -z-10 absolute inset-y-0 ring-1 w-full lg:w-1/2 overflow-hidden">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <div className="lg:flex-none lg:mt-6 lg:w-80">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                className="w-auto h-12"
              />

              <figure className="mt-10">
                <blockquote className="font-semibold text-lg/8">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="flex gap-x-6 mt-10">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                    className="flex-none rounded-full size-12"
                  />

                  <div>
                    <div className="font-semibold text-base">
                      Brenna Goyette
                    </div>
                    <div className="text-sm/6">CEO of Workcation</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <dl className="space-y-4 mt-10 text-base/7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <FaBuilding aria-hidden="true" className="w-6 h-7" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <FaPhoneAlt aria-hidden="true" className="w-6 h-7" />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (555) 234-5678"
                    className="hover:text-gray-900"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FaEnvelope aria-hidden="true" className="w-6 h-7" />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-gray-900"
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
}
