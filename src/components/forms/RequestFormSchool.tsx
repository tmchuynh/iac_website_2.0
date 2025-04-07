import { Button } from "../ui/button";

export default function RequestFormSchool() {
  return (
    <form action="#" method="POST" className="mt-16">
      <div className="gap-x-8 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block font-semibold">
            First name
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block font-semibold">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex md:flex-row flex-col items-end gap-4">
            <label htmlFor="phone" className="block font-semibold">
              Phone
            </label>
            <code id="phone-description" className="text-accent text-xs">
              **Optional
            </code>
          </div>
          <div className="mt-2.5">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-describedby="phone-description"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="school" className="block font-semibold">
              School
            </label>
          </div>
          <div className="mt-2.5">
            <input
              id="school"
              name="school"
              type="text"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="principal" className="block font-semibold">
              Principal's Name
            </label>
          </div>
          <div className="mt-2.5">
            <input
              id="principal"
              name="principal"
              type="text"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="schoolContact" className="block font-semibold">
              School's Contact Email
            </label>
          </div>
          <div className="mt-2.5">
            <input
              id="schoolContact"
              name="schoolContact"
              type="email"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="grades" className="block font-semibold">
            Grade Level(s)
          </label>
          <div className="mt-2.5">
            <input
              id="grades"
              name="grades"
              type="text"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="flex md:flex-row flex-col items-end gap-4">
            <label htmlFor="message" className="block font-semibold">
              What programs are you interested in?
            </label>
            <code id="message-description" className="text-accent text-xs">
              **Max 500 characters
            </code>
          </div>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-describedby="message-description"
              className="block px-3.5 py-2 rounded-md w-full outline-1 -outline-offset-1"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10 pt-8">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
