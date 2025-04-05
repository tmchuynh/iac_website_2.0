"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function OffsetImage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="top-0 z-50 absolute inset-x-0">
        <nav
          aria-label="Global"
          className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                width={32}
                height={32}
                className="w-auto h-8"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="lg:flex lg:gap-x-12 hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-sm/6"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end hidden">
            <a href="#" className="font-semibold text-sm/6">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="z-50 fixed inset-0" />
          <DialogPanel className="right-0 z-50 fixed inset-y-0 px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  width={32}
                  height={32}
                  className="w-auto h-8"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 rounded-md"
              >
                <span className="sr-only">Close menu</span>
                <IoIosAdd aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="relative bg-linear-to-b from-indigo-100/20 pt-14 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="right-1/2 -z-10 absolute inset-y-0 shadow-indigo-600/10 shadow-xl -mr-96 sm:-mr-80 lg:-mr-96 ring-1 w-[200%] origin-top-right skew-x-[-30deg]"
        />
        <div className="mx-auto px-6 lg:px-8 py-32 sm:py-40 max-w-7xl">
          <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <h1 className="lg:col-span-2 max-w-2xl font-semibold text-5xl text-balance sm:text-7xl tracking-tight xl:col-auto">
              We’re changing the way people connect
            </h1>
            <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
              <p className="font-medium text-lg text-pretty sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <a
                  href="#"
                  className="shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm"
                >
                  Get started
                </a>
                <a href="#" className="font-semibold text-sm/6">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              width={1280}
              height={1067}
              className="xl:row-span-2 xl:row-end-2 mt-10 sm:mt-16 lg:mt-0 xl:mt-36 rounded-2xl w-full max-w-lg lg:max-w-none aspect-6/5 object-cover"
            />
          </div>
        </div>
        <div className="bottom-0 -z-10 absolute inset-x-0 bg-linear-to-t from-white h-24 sm:h-32" />
      </div>
    </div>
  );
}
