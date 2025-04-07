import Image from "next/image";

const jobOpenings = [
  {
    id: 1,
    role: "Full-time designer",
    href: "#",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Laravel developer",
    href: "#",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "React Native developer",
    href: "#",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
];

export default function PhotoAndList() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex lg:flex-row flex-col justify-between items-end gap-16 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="lg:flex-auto w-full lg:max-w-lg">
            <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
              We’re always looking for awesome people to join us
            </h1>
            <p className="mt-6 text-gray-600 text-xl/8">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id.
            </p>
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              className="bg-gray-50 mt-16 rounded-2xl w-full lg:h-[34.5rem] aspect-6/5 object-cover lg:aspect-auto"
              width={600}
              height={800}
            />
          </div>
          <div className="lg:flex-auto w-full lg:max-w-xl">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="flex-none w-full font-semibold text-gray-900 text-lg tracking-tight">
                      <a href={opening.href}>
                        {opening.role}
                        <span aria-hidden="true" className="absolute inset-0" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="flex-none mt-2 w-full text-base/7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 font-semibold text-base/7 text-gray-900">
                      {opening.salary}
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center gap-x-3 mt-4 text-base/7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        aria-hidden="true"
                        className="flex-none size-0.5 fill-gray-300"
                      >
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="flex mt-8 pt-8 border-gray-100 border-t">
              <a
                href="#"
                className="font-semibold text-indigo-600 text-sm/6 hover:text-indigo-500"
              >
                View all openings <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
