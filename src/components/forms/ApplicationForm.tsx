import DynamicButton from "../buttons/button-dynamic";
import { Button } from "../ui/button";

export default function ApplicationForm() {
  return (
    <form
      action="#"
      method="POST"
      className="px-6 lg:px-8 lg:py-48 pt-20 pb-24 sm:pb-32"
    >
      <div className="mx-auto lg:mr-0 max-w-xl lg:max-w-lg">
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
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block font-semibold text-sm/6">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block font-semibold text-sm/6"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block px-3.5 py-2 rounded-md w-full text-base outline-1 -outline-offset-1"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block font-semibold text-sm/6">
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
        <div className="flex justify-end mt-8">
          <DynamicButton>Send message</DynamicButton>
        </div>
      </div>
    </form>
  );
}
