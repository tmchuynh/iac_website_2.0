import { FaBuilding, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function RequestUs() {
  return (
    <div className="relative bg-white">
      <div className="lg:left-1/2 lg:absolute lg:inset-0">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="lg:absolute bg-gray-50 w-full h-64 sm:h-80 lg:h-full object-cover"
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:mx-auto pt-16 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:max-w-7xl">
        <div className="px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 max-w-xl lg:max-w-lg">
            <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
              Let's work together
            </h2>
            <p className="mt-2 text-gray-600 text-lg/8">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="gap-x-8 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block bg-white px-3.5 py-2 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block bg-white px-3.5 py-2 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block bg-white px-3.5 py-2 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block font-semibold text-gray-900 text-sm/6"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block bg-white px-3.5 py-2 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-gray-900"
                    >
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block bg-white px-3.5 py-2 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label
                      htmlFor="message"
                      className="block font-semibold text-gray-900 text-sm/6"
                    >
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block bg-white px-3.5 py-2 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <dl className="space-y-4 mt-10 text-base/7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <FaBuilding
                        aria-hidden="true"
                        className="w-6 h-7 text-gray-400"
                      />
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
                      <FaPhoneAlt
                        aria-hidden="true"
                        className="w-6 h-7 text-gray-400"
                      />
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
                      <FaEnvelope
                        aria-hidden="true"
                        className="w-6 h-7 text-gray-400"
                      />
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
              <div className="flex justify-end mt-10 pt-8 border-gray-900/10 border-t">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-center text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
