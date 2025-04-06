import Image from "next/image";

export default function BentoGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
        <h2 className="font-semibold text-base/7 text-indigo-600">
          Deploy faster
        </h2>
        <p className="mt-2 max-w-lg font-semibold text-4xl text-gray-950 text-pretty sm:text-5xl tracking-tight">
          Everything you need to deploy your app
        </p>
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 mt-10 sm:mt-16">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px bg-white rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] h-full overflow-hidden">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                className="object-left h-80 object-cover"
                width={500}
                height={320}
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-indigo-600 text-sm/4">
                  Performance
                </h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow-sm rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px bg-white rounded-lg lg:rounded-tr-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] h-full overflow-hidden">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                className="lg:object-right object-left h-80 object-cover"
                width={500}
                height={320}
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-indigo-600 text-sm/4">
                  Releases
                </h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                  Push to deploy
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa, laoreet dapibus ex elit vitae odio.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow-sm rounded-lg lg:rounded-tr-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px bg-white rounded-lg lg:rounded-bl-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)] h-full overflow-hidden">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="object-left h-80 object-cover"
                width={600}
                height={800}
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-indigo-600 text-sm/4">
                  Speed
                </h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                  Built for power users
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Sed congue eros non finibus molestie. Vestibulum euismod
                  augue.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow-sm rounded-lg lg:rounded-bl-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px bg-white rounded-lg" />
            <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] h-full overflow-hidden">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
                width={600}
                height={800}
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-indigo-600 text-sm/4">
                  Integrations
                </h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam
                  maximus arcu.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow-sm rounded-lg ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px bg-white rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] h-full overflow-hidden">
              <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
                width={600}
                height={800}
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-indigo-600 text-sm/4">
                  Network
                </h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                  Globally distributed CDN
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Aenean vulputate justo commodo auctor vehicula in malesuada
                  semper.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow-sm rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
