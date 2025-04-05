export default function CenteredSimple() {
  return (
    <div className="">
      <div className="px-6 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-4xl text-balance sm:text-5xl tracking-tight">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="flex justify-center items-center gap-x-6 mt-10">
            <a
              href="#"
              className="shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm"
            >
              Get started
            </a>
            <a href="#" className="font-semibold text-sm/6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
