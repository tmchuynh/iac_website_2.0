"use client";

import { RequestForm } from "@/components/forms/RequestForm";
import StudentsWorkSection from "@/components/StudentsWorkSection";

export default function StudentShowcasePage() {
  return (
    <main className="mx-auto px-4 py-8 w-11/12">
      <section className="mb-12">
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Showcasing Children's Creativity
        </h1>
        <p className="">
          Celebrating imagination, innovation, and learning, this showcase
          highlights the incredible talents and boundless creativity of
          children. Each piece of work tells a unique story, reflecting their
          curiosity, dedication, and passion for discovery. Through art,
          writing, science projects, and more, we aim to nurture their growth
          and inspire them to dream big, think boldly, and express themselves
          freely. Join us in honoring their efforts and marveling at the amazing
          potential of young minds.
        </p>
        <p>
          All pieces shown on the website are voluntary by the students. Some
          students wanted to stay anonymous and their names aren't shown on our
          website to respect their privacy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 font-semibold text-2xl tracking-widest">
          QuickLinks
        </h2>
        <StudentsWorkSection />
      </section>

      <section className="mb-12">
        <RequestForm />
      </section>
    </main>
  );
}
