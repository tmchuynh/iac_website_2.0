import ApplicationForm from "@/components/forms/ApplicationForm";
import FadedImage from "@/components/images/FadedImage";
import Image from "next/image";

export default function Apply() {
  return (
    <main className="relative mx-auto px-4 pt-24 pb-52 w-11/12">
      <FadedImage imageSrc="/images/Class_Photos/Chess/30990092_141156.jpg" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
        <div className="relative lg:static px-6 lg:px-8 pb-20">
          <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
            Join Our Team
          </p>
          <div className="mx-auto lg:mx-0">
            <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
              Be Part of the Journey
            </h1>
            <p className="mt-6 text-lg/8">
              We’re always looking for amazing people to join the ride and help
              us shape what’s next. Whether you’re a creative thinker, a
              problem-solver, or someone who simply wants to make a difference,
              there’s a place for you here. As we grow, we’re building a team of
              passionate, talented individuals who are excited to collaborate,
              innovate, and push boundaries. If you’re ready to contribute your
              skills to something meaningful and be part of a dynamic,
              forward-thinking team—we’d love to meet you.
            </p>
            <div className="lg:flex-none lg:mt-6">
              <figure className="mt-10">
                <blockquote className="font-semibold text-lg/8">
                  "I am at a loss for words; upon reading [Justin's] email, I
                  couldn't help but feel an overwhelming sense of relief. The
                  appreciation of the scholarship is truly a blessing to me, and
                  the many years of [my son's] participation have made such an
                  impact on his life! People like [Justin] really do make such
                  an impact.”
                </blockquote>
                <figcaption className="flex items-center gap-x-4 mt-8">
                  <Image
                    alt="Peters Canyon Elementary School"
                    src="/images/School_Icons/peterscanyon.png"
                    className="flex-none rounded-full w-20 h-20 object-cover"
                    width={96}
                    height={96}
                  />
                  <div>
                    <div className="font-semibold text-base">Chess Parent</div>
                    <div className="text-sm/6">
                      Peters Canyon Elementary School
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <ApplicationForm />
      </div>
    </main>
  );
}
