import DynamicButton from "@/components/buttons/button-dynamic";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <section className="mx-auto w-11/12">
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          Let’s talk about your project
        </h1>
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
              <DynamicButton>Let’s talk</DynamicButton>
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
            <figure className="mt-10">
              <blockquote className="font-semibold text-lg/8">
                <p>
                  "Watching my once-shy daughter perform confidently on stage
                  was a dream come true. The theater staff at IAC excel at
                  nurturing talent and fostering self-esteem. Her enthusiasm for
                  school has grown significantly, and she comes home eager to
                  share her experiences."
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 mt-8">
                <Image
                  alt="Arroyo Elementary School"
                  src="/images/School_Icons/arroyo.png"
                  className="flex-none rounded-full w-20 h-20 object-cover"
                  width={96}
                  height={96}
                />
                <div>
                  <div className="font-semibold text-base">Theater Parent</div>
                  <div className="text-sm/6">Arroyo Elementary School</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div className="xl:mx-auto xl:px-8 py-10 lg:max-w-7xl">
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/53995092_141122.jpg"
          className="shadow-md xl:rounded-3xl w-full aspect-5/2 object-cover"
          width={2832}
          height={1130}
        />
      </div>
    </main>
  );
}
