"use client";

import DynamicButton from "@/components/buttons/button-dynamic";
import { faqs } from "@/lib/constants/frequently_asked_questions";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();
  return (
    <div>
      <div className="mx-auto px-6 lg:px-8 py-16 sm:py-24 max-w-7xl">
        <h2 className="font-semibold text-4xl sm:text-5xl tracking-tight">
          Frequently asked questions
        </h2>
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
      </div>
    </div>
  );
}
