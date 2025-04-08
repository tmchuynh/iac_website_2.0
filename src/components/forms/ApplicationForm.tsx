import { FaPhotoFilm } from "react-icons/fa6";
import DynamicButton from "../buttons/button-dynamic";

export default function ApplicationForm() {
  return (
    <form
      action="#"
      method="POST"
      className="px-6 lg:px-8 py-24 pb-24 sm:pb-32"
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
                required
                type="text"
                autoComplete="given-name"
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                required
                type="text"
                autoComplete="family-name"
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                required
                type="email"
                autoComplete="email"
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                required
                type="tel"
                autoComplete="tel"
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="resume" className="block font-medium text-sm/6">
              Resume
            </label>
            <div className="mt-2">
              <label
                htmlFor="resume-upload"
                className="flex justify-center hover:bg-gray-50 px-6 py-10 rounded-lg transition-colors cursor-pointer outline-1 -outline-offset-1"
              >
                <div className="text-center">
                  <FaPhotoFilm aria-hidden="true" className="mx-auto size-12" />
                  <div className="flex items-center mt-4 text-sm">
                    <span className="font-semibold">
                      Upload a file or drag and drop
                    </span>
                  </div>
                  <p className="text-xs/5">PDF, DOC, DOCX</p>
                </div>
                <input
                  id="resume-upload"
                  name="resume-upload"
                  type="file"
                  className="dark:placeholder:text-accent placeholder:text-muted sr-only"
                  accept=".pdf,.doc,.docx"
                  aria-describedby="resume-upload-description"
                  required
                />
              </label>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="cover-letter"
              className="block font-medium text-sm/6"
            >
              Cover Letter
            </label>
            <div className="mt-2">
              <label
                htmlFor="cover-letter-upload"
                className="flex justify-center hover:bg-gray-50 px-6 py-10 rounded-lg transition-colors cursor-pointer outline-1 -outline-offset-1"
              >
                <div className="text-center">
                  <FaPhotoFilm aria-hidden="true" className="mx-auto size-12" />
                  <div className="flex items-center mt-4 text-sm">
                    <span className="font-semibold">
                      Upload a file or drag and drop
                    </span>
                  </div>
                  <p className="text-xs/5">PDF, DOC, DOCX</p>
                </div>
                <input
                  id="cover-letter-upload"
                  name="cover-letter-upload"
                  type="file"
                  className="dark:placeholder:text-accent placeholder:text-muted sr-only"
                  accept=".pdf,.doc,.docx"
                  aria-describedby="cover-letter-upload-description"
                  required
                />
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block font-semibold text-sm/6">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="city"
                name="city"
                required
                type="text"
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="state" className="block font-semibold text-sm/6">
              State / Province
            </label>
            <div className="mt-2.5">
              <input
                id="state"
                name="state"
                required
                type="text"
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
