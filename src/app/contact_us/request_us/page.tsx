"use client";

import RequestFormSchool from "@/components/forms/RequestFormSchool";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RequestUs() {
  const router = useRouter();

  return (
    <main className="relative mx-auto px-4 py-8">
      <div className="lg:left-1/2 lg:absolute lg:inset-0">
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/52195092_265855.jpg"
          className="lg:absolute w-full h-64 sm:h-80 lg:h-full object-cover"
          width={600}
          height={800}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 mx-auto pt-16 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 w-11/12">
        <div className="px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 max-w-3xl lg:max-w-7xl text-pretty">
            <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
              Your students deserve the best.
            </p>
            <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
              Bring Our Programs to Your Campus
            </h1>
            <p className="mt-2 text-md">
              Request us at your school and give your students access to
              enriching, hands-on learning experiences that inspire curiosity,
              creativity, and confidence. Our programs are designed to be
              inclusive, engaging, and tailored to meet the diverse needs of
              learners across all grade levels. Whether you're looking to
              enhance your school day, support after-school enrichment, or host
              a special event, we bring high-quality, interactive education
              right to your campus.
            </p>
            <p>
              If you need immediate assistance, please don’t hesitate to contact
              our office during business hours. <br />
              Office number:
              <Button
                variant="link"
                onClick={() => router.push("tel:7145090069")}
                className="p-1"
              >
                (714) 509-0069
              </Button>
            </p>
            <RequestFormSchool />
          </div>
        </div>
      </div>
    </main>
  );
}
