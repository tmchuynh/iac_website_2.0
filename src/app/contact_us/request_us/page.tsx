"use client";

import Image from "next/image";
import RequestFormSchool from "@/components/forms/RequestFormSchool";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RequestUs() {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="lg:left-1/2 lg:absolute lg:inset-0">
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/52195092_265855.jpg"
          className="lg:absolute w-full h-64 sm:h-80 lg:h-full object-cover"
          width={600}
          height={800}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:mx-auto pt-16 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:max-w-7xl">
        <div className="px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 max-w-3xl lg:max-w-7xl text-pretty">
            <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
              Let's work together
            </h1>
            <p className="mt-2 text-md">
              Thank you for reaching out to us! We truly value your message and
              appreciate the time you’ve taken to connect. Your inquiries help
              us continue providing the best possible service to our partners
              and families.
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
    </div>
  );
}
