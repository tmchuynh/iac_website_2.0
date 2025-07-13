export default function BarDisplay() {
  return (
    <div className="mt-32 sm:mt-40 mx-auto px-6 lg:px-8 max-w-7xl">
      <div className="mx-auto lg:mx-0 max-w-2xl">
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider uppercase">
          We approach work as a place to make the world better
        </h1>
        <p className="mt-6 text-base/7">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod
          lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
          Integer vel nibh.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:items-end mt-16 lg:mt-20 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <div className="flex lg:flex-none lg:flex-col flex-col-reverse sm:flex-row-reverse gap-x-16 gap-y-8 sm:items-end lg:items-start justify-between p-8 rounded-2xl sm:max-w-md lg:max-w-none sm:w-3/4 lg:w-72">
          <p className="flex-none font-bold text-3xl tracking-tight">250k</p>
          <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
            <p className="font-semibold text-lg tracking-tight">
              Users on the platform
            </p>
            <p className="mt-2 text-base/7">
              Vel labore deleniti veniam consequuntur sunt nobis.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-auto lg:flex-col flex-col-reverse sm:flex-row-reverse gap-x-16 gap-y-8 lg:gap-y-44 sm:items-end lg:items-start justify-between bg-gray-900 p-8 rounded-2xl lg:max-w-sm lg:w-full">
          <p className="flex-none font-bold text-3xl tracking-tight">
            $8.9 billion
          </p>
          <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
            <p className="font-semibold text-lg tracking-tight">
              We’re proud that our customers have made over $8 billion in total
              revenue.
            </p>
            <p className="mt-2 text-base/7">
              Eu duis porta aliquam ornare. Elementum eget magna egestas.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-auto lg:flex-col flex-col-reverse sm:flex-row-reverse gap-x-16 gap-y-8 lg:gap-y-28 sm:items-end lg:items-start justify-between bg-indigo-600 p-8 rounded-2xl sm:max-w-xl lg:max-w-none sm:w-11/12 lg:w-full">
          <p className="flex-none font-bold text-3xl tracking-tight">401,093</p>
          <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
            <p className="font-semibold text-lg tracking-tight">
              Transactions this year
            </p>
            <p className="mt-2 text-base/7">
              Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
              duis porta aliquam ornare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
