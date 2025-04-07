"use client";
import FadedImage from "@/components/FadedImage";
import RegisterForm from "@/components/forms/RegisterForm";
import LoadingIndicator from "@/components/loading/Loading";
import { credit_card_procedure } from "@/lib/constants/list";
import { FC, useState } from "react";

const Register: FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    <LoadingIndicator />;
  }

  return (
    <main className="relative mx-auto px-4 py-8 w-11/12">
      <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
        Register Today
      </h1>

      <FadedImage imageSrc="/images/Class_Photos/Basketball/20156202_141123.JPG" />

      <h3 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
        New Credit Card Processing Procedure
      </h3>
      <ol className="flex flex-col gap-2 my-3 list-decimal">
        {credit_card_procedure.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ol>

      <RegisterForm />
    </main>
  );
};

export default Register;
