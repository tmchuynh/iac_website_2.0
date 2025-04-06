import { FaBuilding, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import ApplicationForm from "@/components/forms/ApplicationForm";

export default function Apply() {
  return (
    <div className="relative isolate">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
        <div className="relative lg:static px-6 lg:px-8 lg:py-48 pt-24 sm:pt-32 pb-20">
          <div className="mx-auto lg:mx-0 max-w-xl lg:max-w-lg">
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
                width={600}
                height={600}
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
                    width={96}
                    height={96}
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
