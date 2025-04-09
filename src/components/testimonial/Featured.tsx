import Image from "next/image";
export default function FeaturedTestimonial() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 xl:pb-32">
      <div className="pb-20 sm:pb-24 xl:pb-0">
        <div className="flex xl:flex-row flex-col items-center xl:items-stretch gap-x-8 gap-y-10 sm:gap-y-8 mx-auto px-6 lg:px-8">
          <div className="xl:flex-none -mt-8 xl:-mb-8 w-full xl:w-96 max-w-4xl">
            <div className="relative md:-mx-8 xl:mx-0 w-full h-full aspect-4/3 xl:aspect-auto">
              <Image
                alt="Chess Medals"
                src="/images/Class_Photos/Chess/20996992_141111.jpg"
                className="absolute inset-0 shadow-2xl rounded-2xl size-full object-cover"
                width={2102}
                height={1401}
              />
            </div>
          </div>
          <div className="xl:flex-auto xl:px-16 xl:py-24 w-full">
            <figure className="relative pt-6 sm:pt-12 isolate">
              <blockquote className="font-[WindSong] font-semibold text-lg/8 md:text-xl/8 xl:text-2xl/9 leading-8">
                "...my sons attend Hicks Canyon Elementary and have been in
                several after-school programs provided by IAC. They always have
                a great time, and [instructors]{" "}
                <mark>always go the extra mile</mark> to help my son, Taylor, so
                he can get the most out of the program. Also, when I was having
                a financially difficult time last year, [Justin] gave us a big
                discount, telling me that it was their passion to help out the
                community. I'm happy to say that I no longer need the{" "}
                <mark>financial assistance</mark> for the program, but it was so
                meaningful to feel that someone in the community cared about my
                kids' well-being and opportunities to experience wholesome
                activities."
              </blockquote>
              <figcaption className="flex items-center gap-x-4 mt-8">
                <Image
                  alt="Hicks Canyon Elementary School"
                  src="/images/School_Icons/hicks.png"
                  className="flex-none rounded-full w-20 h-20 object-cover"
                  width={96}
                  height={96}
                />
                <div>
                  <cite className="font-[GrapeNuts] font-semibold">
                    Chess Parent
                  </cite>
                  <div className="mt-1">Hicks Canyon Elementary School</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
