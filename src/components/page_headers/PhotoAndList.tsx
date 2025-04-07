import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa6";
import { Card } from "../ui/card";
import { jobOpenings } from "@/lib/constants/list";

export default function PhotoAndList() {
  return (
    <>
      <section className="gap-3 grid grid-cols-1 md:grid-cols-5 xl:grid-cols-9 py-5">
        <div className="md:col-span-2 xl:col-span-3">
          <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
            We’re always looking for awesome people to join us
          </h1>
          <p className="mt-6 text-xl/8">
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
            euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit
            eu in id.
          </p>
        </div>
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/52195092_265842.jpg"
          className="md:col-span-3 xl:col-span-6 rounded-2xl w-full lg:h-[34.5rem] aspect-6/5 object-cover lg:aspect-auto"
          width={600}
          height={800}
        />
      </section>
      <section>
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {jobOpenings.map((opening, index) => (
            <Card key={index} className="shadow-lg p-8">
              <div className="relative flex flex-wrap gap-x-3">
                <p className="flex-none w-full font-semibold text-lg tracking-tight">
                  {opening.role}
                </p>
                <p className="flex-none mt-2 w-full text-base/7">
                  {opening.description}
                </p>
              </div>
              <div>
                <ul className="flex flex-col gap-y-4 py-3">
                  {opening.preferredSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-x-2">
                      <FaCheckDouble />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex mt-8 pt-8 border-gray-100 border-t">
          <a
            href="#"
            className="font-semibold text-indigo-600 text-sm/6 hover:text-indigo-500"
          >
            View all openings <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>
    </>
  );
}
