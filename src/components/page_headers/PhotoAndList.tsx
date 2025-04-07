import { jobOpenings } from "@/lib/constants/list";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCheckDouble } from "react-icons/fa6";
import DynamicButton from "../buttons/button-dynamic";
import { Card } from "../ui/card";

export default function PhotoAndList() {
  const router = useRouter();

  return (
    <>
      <section className="gap-3 grid grid-cols-1 md:grid-cols-5 xl:grid-cols-9 py-5">
        <div className="md:col-span-2 xl:col-span-3">
          <h2 className="my-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
            We’re always looking for awesome people to join us
          </h2>
          <p className="mt-6 text-xl/8">
            We’re continually seeking passionate, driven individuals to grow
            with us and be part of something exciting.
          </p>
          <DynamicButton
            onClick={() => router.push("/contact_us/apply")}
            className="m-0 mt-10 w-3/4"
          >
            Contact Us to Apply
          </DynamicButton>
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
                    <li key={index} className="flex gap-x-2 ml-3">
                      <FaCheckDouble className="mt-3 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
