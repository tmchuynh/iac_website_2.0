import { FaChevronCircleRight } from "react-icons/fa";
import Image from "next/image";

export default function SplitPhoto() {
  return (
    <div className="bg-white">
      <div className="relative bg-linear-to-b from-indigo-100/20 overflow-hidden isolate">
        <div className="lg:gap-x-8 lg:grid lg:grid-cols-2 mx-auto lg:px-8 lg:py-40 pt-10 pb-24 sm:pb-32 max-w-7xl">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <Image
                className="h-11"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={44}
                height={44}
              />
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="bg-indigo-600/10 px-3 py-1 rounded-full ring-1 ring-indigo-600/10 ring-inset font-semibold text-indigo-600 text-sm/6">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 font-medium text-gray-600 text-sm/6">
                    <span>Just shipped v0.1.0</span>
                    <FaChevronCircleRight
                      className="text-gray-400 size-5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
              <h1 className="mt-10 font-semibold text-5xl text-gray-900 text-pretty sm:text-7xl tracking-tight">
                Supercharge your web app
              </h1>
              <p className="mt-6 text-gray-600 text-lg/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Documentation
                </a>
                <a href="#" className="font-semibold text-gray-900 text-sm/6">
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-auto lg:mx-0 mt-20 sm:mt-24 lg:mt-0 lg:w-screen md:max-w-2xl">
          <div
            className="right-1/2 -z-10 absolute inset-y-0 bg-white shadow-indigo-600/10 shadow-xl -mr-10 md:-mr-20 lg:-mr-36 ring-1 ring-indigo-50 w-[200%] skew-x-[-30deg]"
            aria-hidden="true"
          />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
              <div
                className="left-1/2 -z-10 absolute -inset-y-px bg-indigo-100 opacity-20 ml-10 md:ml-20 lg:ml-36 ring-1 ring-white ring-inset w-[200%] skew-x-[-30deg]"
                aria-hidden="true"
              />
              <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                <div className="mx-auto md:mx-0 max-w-2xl md:max-w-none">
                  <div className="bg-gray-900 rounded-tl-xl w-screen overflow-hidden">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="flex -mb-px font-medium text-gray-400 text-sm/6">
                        <div className="bg-white/5 px-4 py-2 border-r border-r-white/10 border-b border-b-white/20 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="px-4 py-2 border-gray-600/10 border-r">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">
                      {/* Your code example */}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 md:rounded-3xl ring-1 ring-black/10 ring-inset pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 -z-10 absolute inset-x-0 bg-linear-to-t from-white h-24 sm:h-32" />
    </div>
  );
}
