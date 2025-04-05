import Image from "next/image";

export default function TestimonialGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <Image
          alt="Tuple logo"
          src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
          className="h-12 self-start"
          width={48}
          height={48}
        />
      </div>
      <figure className="flex flex-col flex-auto justify-between mt-10">
        <blockquote className="text-gray-900 text-lg/8">
          <p>
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
            tortor consequat at. Vulputate gravida sociis enim nullam ultricies
            habitant malesuada lorem ac.”
          </p>
        </blockquote>
        <figcaption className="flex gap-x-4 mt-8">
          <Image
            alt="Judith Black profile picture"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="bg-gray-50 rounded-full size-14"
            width={56}
            height={56}
          />

          <div className="text-base">
            <div className="font-semibold text-gray-900">Judith Black</div>
          </div>
        </figcaption>
      </figure>
      <div className="flex flex-col pt-10 sm:pt-16 lg:pt-0 lg:pl-8 xl:pl-20 border-gray-900/10 border-t lg:border-t-0 lg:border-l">
        <Image
          alt="Reform logo"
          src="https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg"
          className="h-12 self-start"
          width={48}
          height={48}
        />
        <figure className="flex flex-col flex-auto justify-between mt-10">
          <blockquote className="text-gray-900 text-lg/8">
            <Image
              alt="Joseph Rodriguez profile picture"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="bg-gray-50 rounded-full size-14"
              width={56}
              height={56}
            />
          </blockquote>
          <figcaption className="flex items-center gap-x-6 mt-10">
            <Image
              alt="Joseph Rodriguez profile picture"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="bg-gray-50 rounded-full size-14"
              width={56}
              height={56}
            />
            <div className="text-base">
              <div className="font-semibold text-gray-900">
                Joseph Rodriguez
              </div>
              <div className="mt-1 text-gray-500">CEO of Reform</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
