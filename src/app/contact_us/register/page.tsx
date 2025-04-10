"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import RegisterForm from "@/components/forms/RegisterForm";
import FadedImage from "@/components/images/FadedImage";
import LoadingIndicator from "@/components/loading/Loading";
import { credit_card_procedure } from "@/lib/constants/list";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const Register: FC = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  if (loading) {
    <LoadingIndicator />;
  }

  return (
    <main className="relative mx-auto px-4 py-8 md:py-12 lg:py-24 2xl:py-40 xl:py-32 w-11/12">
      <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
        Come Join Us for an Unforgettable Experience!
      </p>
      <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
        Register Today
      </h1>

      <p>
        We are thrilled to have you here! Whether you’re a first time student or
        returning student, we invite you to register for our programs and
        experience the joy of learning and growth with us. Our classes are
        designed to inspire, engage, and empower students of all ages. Join us
        in creating unforgettable memories and meaningful connections. Let’s
        embark on this exciting journey together!
      </p>

      <DynamicButton
        onClick={() => router.push("/contact_us")}
        className="md:hidden mb-3 w-full"
      >
        Contact Us
      </DynamicButton>

      <p>
        To register for a program, please fill out the form below. If you have
        any questions or need assistance, feel free to reach out to us. We’re
        here to help you every step of the way. Thank you for choosing us as
        your partner in learning and growth. We can’t wait to welcome you to our
        community!
      </p>
      <p>
        Please note that we have updated our credit card processing procedure.
        To ensure a smooth and secure transaction, we kindly ask you to follow
        the new steps outlined below. Your cooperation is greatly appreciated as
        we strive to enhance your experience with us. Thank you for your
        understanding and support!
      </p>
      <p>
        We are excited to announce that we have partnered with a new payment
        processor to enhance your registration experience. This change will
        allow us to provide you with a more secure and efficient payment
        process. As part of this transition, we have updated our credit card
        processing procedure. We appreciate your understanding and support as we
        work to improve our services. If you have any questions or concerns,
        please feel free to reach out to us. Thank you for being a valued member
        of our community!
      </p>

      <FadedImage imageSrc="/images/Class_Photos/Flag_Football/36252635_241856.jpg" />

      <h3 className="font-[Caveat] font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
        New Credit Card Processing Procedure
      </h3>
      <ol className="flex flex-col gap-2 my-3 list-decimal">
        {credit_card_procedure.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ol>

      <p>
        If you are a returning parent/student, we would also love to hear about
        your experience in our programs and classes. Your feedback is invaluable
        to us and helps us continue to improve and provide the best possible
        experience for our students. Please take a moment to share your thoughts
        with us by filling out the feedback form below. Thank you for your
        continued support!
      </p>

      <DynamicButton
        onClick={() => router.push("/contact_us/provide_feedback")}
        className="md:hidden mb-12 w-full"
      >
        Provide Feedback
      </DynamicButton>

      <RegisterForm />
    </main>
  );
};

export default Register;
