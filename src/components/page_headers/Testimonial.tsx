import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="relative overflow-hidden isolate">
      <div className="mx-auto lg:mx-0 max-w-2xl">
        <code className="font-semibold text-base/7">The IAC Advantage</code>
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Empowering Student Creativity
        </h1>
        <p className="mt-6 text-xl/8">
          At IAC, we believe creativity is the key to unlocking confidence,
          imagination, and innovation. Our programs are designed to support the
          whole child—giving them tools to think independently, create boldly,
          and share their voice with the world. From storytelling and design to
          performance and collaboration, every experience is built with purpose.
        </p>
      </div>
      <div className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-12 mx-auto lg:mx-0 mt-16 lg:mt-10 max-w-2xl lg:max-w-none">
        <div className="relative lg:order-last lg:col-span-5">
          <svg
            aria-hidden="true"
            className="-top-[40rem] left-1 -z-10 absolute w-[175.5rem] h-[64rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
          >
            <defs>
              <pattern
                id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect
              fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          <figure className="pl-8 border-l">
            <blockquote className="font-semibold text-xl/8">
              <p>
                "Due to one of my children's severe food allergies, we have been
                denied by multiple camps and classes who did not want the risk
                of having them as a student. However, Justin was very responsive
                and collaborated with me on ways to adapt the class to be a safe
                space. Both of my kids love learning about chess and practicing
                among their peers. I'm excited they are able to learn a game
                that teaches critical thinking and persistence.",
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 mt-8">
              <Image
                alt="Peters Canyon Elementary School"
                src="/images/School_Icons/peterscanyon.png"
                className="flex-none rounded-full w-20 h-20 object-cover"
                width={200}
                height={200}
              />
              <div className="text-sm/6">
                <div className="font-semibold">Chess Parent</div>
                <div>Peters Canyon Elementary School</div>
              </div>
            </figcaption>
          </figure>
          <h2 className="mt-16 font-bold text-2xl tracking-tight">
            No Barriers, Just Opportunity
          </h2>
          <p className="mt-6">
            Our team brings everything needed—curriculum, instructors, and
            materials—right to your school site. With no need for additional
            staff or resources, schools can focus on student engagement while we
            handle the logistics. It’s enrichment made simple, effective, and
            impactful.
          </p>
        </div>
        <div className="lg:col-span-7 max-w-2xl text-base/7">
          <ul role="list" className="space-y-8">
            <li className="flex gap-x-3">
              <Image
                src="/images/icons/extra/design-thinking.png"
                alt="IAC Logo"
                className="flex-none mt-1 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10"
                width={100}
                height={100}
              />
              <span>
                <strong className="font-semibold">Creative Confidence</strong>{" "}
                Students are encouraged to express their ideas freely, take
                creative risks, and develop a strong sense of self.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Image
                src="/images/icons/extra/learning-journey.png"
                alt="IAC Logo"
                className="flex-none mt-1 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10"
                width={100}
                height={100}
              />
              <span>
                <strong className="font-semibold">
                  Multi-Disciplinary Learning
                </strong>{" "}
                From public speaking and performing arts to chess and comic book
                design, our offerings span a wide range of interests and skills.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Image
                src="/images/icons/extra/collaboration.png"
                alt="IAC Logo"
                className="flex-none mt-1 md:w-7 lg:w-8 xl:w-10 h-5 md:h-7 lg:h-8 xl:h-10"
                width={100}
                height={100}
              />
              <span>
                <strong className="font-semibold">
                  Collaboration & Community
                </strong>{" "}
                We cultivate a positive, inclusive environment where students
                build teamwork, empathy, and communication through shared
                projects.
              </span>
            </li>
          </ul>
          <div className="py-6">
            <h2 className="font-bold text-2xl tracking-tight">
              Nurturing the Whole Child
            </h2>
            <p className="mt-6">
              We focus on more than just academics. Through hands-on exploration
              and expressive outlets, our programs help students build
              resilience, emotional intelligence, and leadership skills. It’s
              about developing well-rounded individuals who are confident in who
              they are and what they can achieve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
