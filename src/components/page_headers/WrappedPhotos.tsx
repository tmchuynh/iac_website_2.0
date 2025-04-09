import Image from "next/image";

export default function WrappedPhotos() {
  return (
    <div className="mt-32 sm:mt-40 overflow-hidden">
      <div className="lg:flex mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex-none gap-x-12 gap-y-16 lg:gap-y-8 grid grid-cols-1 mx-auto lg:mx-0 lg:min-w-full max-w-2xl lg:max-w-none">
          <div className="lg:col-end-1 lg:pb-8 lg:w-full lg:max-w-lg">
            <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
              The IAC Advantage
            </p>
            <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
              Our people
            </h1>
            <p className="mt-6 text-xl/8">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base/7">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>
          <div className="flex flex-wrap justify-end items-start gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto lg:flex-none lg:ml-auto w-0 lg:w-auto lg:self-end">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                className="rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
              />
            </div>
            <div className="lg:flex lg:justify-end lg:items-start lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:w-[37rem] contents">
              <div className="flex flex-none justify-end order-first w-64 lg:w-auto self-end">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="flex-none rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                />
              </div>
              <div className="flex flex-auto lg:flex-none justify-end w-96 lg:w-auto">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  className="flex-none rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                />
              </div>
              <div className="sm:block sm:flex-auto lg:flex-none hidden sm:w-0 lg:w-auto">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
