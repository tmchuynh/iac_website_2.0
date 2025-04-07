"use client";

import DynamicButton from "@/components/buttons/button-dynamic";
import { faqs } from "@/lib/constants/frequently_asked_questions";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
        Frequently Asked Questions
      </h1>
      <p className="mt-6 max-w-2xl">
        Have a different question and can’t find the answer you’re looking for?
        Reach out to our support team by{" "}
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
      <div className="mt-20">
        <dl className="sm:gap-x-6 sm:gap-y-16 lg:gap-x-10 space-y-16 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <p className="border-b font-bold tracking-wider">
                {faq.question}
              </p>
              <p>{faq.answer}</p>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}
