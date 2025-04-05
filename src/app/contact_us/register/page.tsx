"use client";
import RegisterForm from "@/components/forms/RegisterForm";
import LoadingIndicator from "@/components/loading/Loading";
import HeroSection from "@/components/page_headers/hero";
import { credit_card_procedure } from "@/lib/constants/list";
import { FC, useState } from "react";

const Register: FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    <LoadingIndicator />;
  }

  return (
    <>
      <HeroSection imageSrc="/images/Class_Photos/Performing_Arts/pa-8.jpg" />
      <main className="mx-auto px-4 py-8 w-11/12">
        <section className="mb-5">
          <div className="text-center">
            <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
              Register Today
            </h1>
          </div>

          <div className="mx-auto mb-12 w-11/12">
            <h2 className="mb-2 font-semibold text-2xl text-destructive underline tracking-widest">
              New Credit Card Processing Procedure
            </h2>
            <ol className="list-decimal">
              {credit_card_procedure.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <RegisterForm />
        </section>
      </main>
    </>
  );
};

export default Register;
