"use client";

import FeedbackForm from "@/components/forms/FeedbackForm";
import FadedImage from "@/components/images/FadedImage";
import { useRouter } from "next/navigation";

export default function ProvideFeedbackPage() {
  const router = useRouter();
  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <code className="font-semibold text-base/7">Your voice matters.</code>
      <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
        We Value Your Feedback
      </h1>

      <FadedImage imageSrc="/images/Class_Photos/Basketball/20156202_141123.JPG" />
      <p>
        At International Activities Club, we’re always striving to improve our
        programs and provide meaningful, enriching experiences for all students,
        educators, and families we serve. Your feedback helps us grow, improve,
        and continue creating programs that inspire curiosity, creativity, and
        confidence in every learner.
      </p>

      <h2 className="my-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
        How You Can Help
      </h2>
      <p>
        Please take a few moments to share your thoughts with us. We welcome:
      </p>

      <ul className="flex flex-col gap-2 py-2 list-disc list-inside">
        <li>Comments about your recent experience</li>
        <li>Suggestions for improvement</li>
        <li>Ideas for future programs</li>
        <li>Praise for team members or instructors</li>
        <li>Anything else you’d like us to know</li>
      </ul>

      <p>
        All feedback is appreciated, and responses may remain anonymous if
        preferred. Your insights are invaluable to us.
      </p>

      <FeedbackForm />
    </main>
  );
}
