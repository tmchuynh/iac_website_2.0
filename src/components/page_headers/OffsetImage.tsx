import Image from "next/image";

export default function OffsetImage() {
  return (
    <div className="relative -z-10 bg-linear-to-b pt-14 overflow-hidden isolate">
      <div className="gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
            Empowering Students through Immersion, Effectiveness, and
            Inclusivity
          </p>
          <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
            Our Mission
          </h1>
          <p>
            At IAC’s A.R.C. (Academic Resource Connection) program, our mission
            is deeply rooted in compassion, inspiration, and an unwavering
            commitment to every student's success. We believe that education is
            not just about knowledge acquisition but about awakening a lifelong
            love of learning, nurturing the whole individual, and equipping
            students with the tools they need to flourish—academically,
            socially, and emotionally. Our goal is not merely to teach, but to
            ignite genuine passion, instill unwavering confidence, and cultivate
            creative expression in each learner. In doing so, we empower
            students to thrive in a dynamic, fast-changing world where
            adaptability, empathy, and innovation are key to success. To realize
            this ambitious vision, our educational approach is built upon three
            core pillars—Immersion, Effectiveness, and Inclusivity—each serving
            as a critical component of a transformative and meaningful learning
            journey:
          </p>
        </div>
        <div className="mx-auto md:pt-64 lg:pt-48 2xl:pt-24 pb-5 md:pb-24 2xl:pb-2 2xl:w-5/6">
          <Image
            alt=""
            src="/images/Class_Photos/Performing_Arts/22195092_265855.jpg"
            className="rounded-xl object-cover object-center"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
