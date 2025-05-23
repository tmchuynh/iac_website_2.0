"use client";

import DynamicButton from "@/components/buttons/button-dynamic";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();
  return (
    <main className="relative mx-auto px-4 py-8 md:py-12 lg:py-24 2xl:py-40 xl:py-32 w-11/12">
      <section className="mx-auto w-11/12">
        <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
          We Would Love to Hear From You!
        </p>
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Contact Us
        </h1>
        <p className="mt-2 pb-4 md:pb-7 lg:pb-9 xl:pb-12 text-lg/8">
          Whether you’re a parent, educator, school administrator, or community
          partner, we welcome your questions, ideas, and feedback. Have a
          question about one of our programs? Interested in bringing our
          enrichment experiences to your school or organization? Looking to
          explore collaboration or partnership opportunities? Or maybe you just
          want to connect and learn more—we’re here for it all. Our team is
          ready to assist and guide you every step of the way. Don’t hesitate to
          reach out—we look forward to starting the conversation with you!
        </p>
        <DynamicButton
          onClick={() => router.push("/contact_us/register")}
          className="md:hidden w-full"
        >
          Register For a Program!
        </DynamicButton>
        <DynamicButton
          onClick={() => router.push("/contact_us/provide_feedback")}
          className="md:hidden w-full"
        >
          Provide Feedback
        </DynamicButton>

        <ResponsiveLogo />

        <DynamicButton
          onClick={() => router.push("/contact_us/request_us")}
          className="md:hidden w-full"
        >
          Request a Program
        </DynamicButton>
        <DynamicButton
          onClick={() => router.push("/contact_us/apply")}
          className="md:hidden w-full"
        >
          Want to Join Us?
        </DynamicButton>

        <div className="gap-7 grid grid-cols-1 md:grid-cols-3 mt-16">
          <form action="#" method="POST" className="md:col-span-2">
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
                    type="text"
                    autoComplete="family-name"
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
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
          <div className="md:col-span-1">
            <figure className="mt-10">
              <blockquote className="font-[Caveat] text-lg md:text-xl leading-4 md:leading-8">
                "Watching my once-shy daughter perform confidently on stage was{" "}
                <mark>a dream come true</mark>. The theater staff at
                International Activities Club excel at nurturing talent and
                fostering self-esteem. Her enthusiasm for school has grown
                significantly, and she comes home eager to share her
                experiences."
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
                  <cite className="font-[GrapeNuts] font-semibold">
                    Theater Parent
                  </cite>
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
