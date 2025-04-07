"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import ResponsiveLogo from "@/components/ResponsiveLogo";
import { faqs } from "@/lib/constants/frequently_asked_questions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <ResponsiveLogo />

      <section>
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 max-w-2xl">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{" "}
          <DynamicButton
            variant="link"
            onClick={() => {
              router.push("/contact_us");
            }}
          >
            sending us an email{" "}
          </DynamicButton>
          and we’ll get back to you as soon as we can.
        </p>
      </section>

      <section className="">
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className={cn("py-5", index > 0 && "border-t")}>
              <h2 className="my-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
                {faq.category}
              </h2>
              {faq.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <h4 className="pt-6 font-bold text-accent text-lg md:text-xl lg:text-2xl">
                    {item.question}
                  </h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="xl:mx-auto xl:px-8 py-10 lg:max-w-7xl">
        <Image
          alt=""
          src="/images/Class_Photos/Basketball/20250402_142789.JPG"
          className="object-top shadow-md xl:rounded-3xl w-full aspect-5/2 object-cover"
          width={2832}
          height={1130}
        />
      </div>
    </main>
  );
}
