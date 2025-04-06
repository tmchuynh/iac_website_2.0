import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: TrashIcon,
  },
];

export default function FeaturedColumns() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            Stay on top of customer support
          </h2>
          <p className="mt-6 text-gray-600 text-lg/8">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
          <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="font-semibold text-base/7 text-gray-900">
                  <div className="flex justify-center items-center bg-indigo-600 mb-6 rounded-lg size-10">
                    <feature.icon
                      aria-hidden="true"
                      className="text-white size-6"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-1 text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="font-semibold text-indigo-600 text-sm/6"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
