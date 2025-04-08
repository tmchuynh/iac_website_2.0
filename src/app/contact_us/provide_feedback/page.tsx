"use client";
import FeedbackForm from "@/components/forms/FeedbackForm";
import FadedImage from "@/components/images/FadedImage";

export default function ProvideFeedbackPage() {
  return (
    <main className="relative mx-auto px-4 py-8 md:py-12 lg:py-24 2xl:py-40 xl:py-32 w-11/12">
      <code className="font-semibold text-base/7">Your voice matters.</code>
      <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
        We Value Your Feedback
      </h1>
      <FadedImage imageSrc="/images/Class_Photos/Basketball/20156202_141123.JPG" />
      <p>
        At International Activities Club, we’re deeply committed to delivering
        programs that are not only engaging but truly impactful for every
        student, educator, and family we serve. We believe that meaningful
        learning happens through intentional design, inclusive experiences, and
        continuous reflection. That’s why your feedback is so important to us.
      </p>
      <p>
        Whether you've participated in one of our enrichment classes, partnered
        with us as a school, or experienced our programming in your community,
        your insights help shape our future. They guide us as we refine our
        offerings, enhance accessibility, and ensure that every program sparks
        curiosity, nurtures creativity, and builds lasting confidence in
        learners of all backgrounds.
      </p>
      <p>
        Together, with your input, we can continue to grow, evolve, and create
        experiences that truly make a difference.
      </p>
      <h2 className="my-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
        How You Can Help
      </h2>
      <p>
        Your voice plays a vital role in shaping the future of our programs. By
        sharing your thoughts and experiences, you help us better understand
        what’s working, where we can grow, and how we can continue to serve
        students, educators, and families in the most meaningful way possible.
      </p>
      <p>
        We invite you to take a few moments to fill out our feedback form. Every
        response—big or small—makes a difference. Here are a few ways you can
        contribute:
      </p>
      <ul className="flex flex-col gap-2 py-2 list-disc list-inside">
        <li>
          <strong>Share your recent experience:</strong> Tell us what stood out,
          what you enjoyed, and how the program impacted you or your students.
        </li>
        <li>
          <strong>Offer suggestions for improvement:</strong> We’re always
          learning too—your ideas can help us refine and strengthen our
          offerings.
        </li>
        <li>
          <strong>Suggest new program ideas:</strong> Is there a topic, theme,
          or activity you'd love to see in the future? We’re all ears.
        </li>
        <li>
          <strong> Recognize our team:</strong> If an instructor or staff member
          made your experience memorable, we’d love to pass along your praise.
        </li>
        <li>
          <strong>Tell us anything else:</strong> General feedback, concerns, or
          creative suggestions are all welcome.
        </li>
      </ul>
      <p>
        All feedback is reviewed with care, and you have the option to remain
        anonymous if you prefer. Your insights are truly invaluable to us, and
        we’re grateful for the opportunity to learn and grow with your support.
      </p>
      <FeedbackForm />
    </main>
  );
}
