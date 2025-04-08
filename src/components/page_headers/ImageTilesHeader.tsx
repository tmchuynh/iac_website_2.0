import Image from "next/image";
import { JSX } from "react";

/**
 * A header component that displays a section with text content and image tiles in a mosaic layout.
 *
 * This component creates an attractive header with:
 * - A primary headline introducing program offerings
 * - Descriptive paragraphs about available programs
 * - A visually appealing grid of images showcasing program activities
 *
 * The layout is responsive:
 * - On large screens (lg and above): Shows text on the left side with a mosaic of images on the right
 * - On smaller screens: Stacks content vertically with a simplified image arrangement
 *
 * The component uses Tailwind CSS for styling and responsive design.
 *
 * @returns {JSX.Element} A header component with text and image tiles
 */
export default function ImageTilesHeader(): JSX.Element {
  return (
    <div className="py-32 overflow-hidden">
      <div className="lg:flex mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex-none gap-x-12 gap-y-16 lg:gap-y-8 grid grid-cols-1 mx-auto lg:mx-0 lg:min-w-full max-w-2xl lg:max-w-none">
          <div className="lg:col-end-1 lg:pb-8 lg:w-full lg:max-w-lg">
            <code className="font-semibold text-base/7">
              Discover the Perfect Fit for Your Journey
            </code>
            <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
              Learn About Our Different Programs
            </h1>
            <p className="mt-6 text-xl/8">
              Our detailed program descriptions are thoughtfully designed to
              guide you through a diverse selection of enriching experiences,
              each crafted to spark curiosity, foster growth, and meet you where
              you are.
            </p>
            <p className="mt-6 text-base/7">
              With options tailored to a variety of interests, age groups, and
              learning styles, you’ll have the tools to confidently explore
              programs that align with your goals—whether you're trying
              something brand new, building on a growing passion, or seeking to
              develop specific skills. Each description provides clear insights
              into what you can expect, the outcomes you’ll achieve, and how the
              experience supports your personal development, making it easier
              than ever to choose a path that inspires and empowers you.
            </p>
          </div>
          <div className="flex flex-wrap justify-end items-start gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto lg:flex-none lg:ml-auto w-0 lg:w-auto lg:self-end">
              <Image
                alt=""
                src="/images/Class_Photos/Chess/20996202_141199.jpg"
                className="rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                width={1152}
                height={842}
              />
            </div>
            <div className="lg:flex lg:justify-end lg:items-start lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:w-[37rem] contents">
              <div className="flex flex-none justify-end order-first w-64 lg:w-auto self-end">
                <Image
                  alt=""
                  src="/images/Class_Photos/Dance/52005092_269955.jpg"
                  className="flex-none rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  width={768}
                  height={604}
                />
              </div>
              <div className="flex flex-auto lg:flex-none justify-end w-96 lg:w-auto">
                <Image
                  alt=""
                  src="/images/Class_Photos/Flag_Football/20250402_141937.jpg"
                  className="flex-none rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                  width={1152}
                  height={842}
                />
              </div>
              <div className="sm:block sm:flex-auto lg:flex-none hidden sm:w-0 lg:w-auto">
                <Image
                  alt=""
                  src="/images/Class_Photos/Soccer/53995092_144851.jpg"
                  className="rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  width={768}
                  height={604}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
