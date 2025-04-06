import DynamicButton from "@/components/buttons/button-dynamic";

const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <div className="">
      <div className="mx-auto px-6 lg:px-8 py-24 lg:py-40 sm:pt-32 max-w-7xl">
        <div className="lg:gap-8 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-semibold text-3xl text-pretty sm:text-4xl tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-pretty">
              Can’t find the answer you’re looking for?
            </p>
            <DynamicButton text="Contact Us" />
          </div>
          <div className="lg:col-span-7 mt-10 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-base/7">{faq.question}</dt>
                  <dd className="mt-2">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
