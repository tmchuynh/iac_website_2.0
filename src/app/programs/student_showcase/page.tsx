"use client";

import { RequestFormParentStudent } from "@/components/forms/RequestFormParentStudent";
import Testimonial from "@/components/page_headers/Testimonial";
import StudentsWorkSection from "@/components/StudentsWorkSection";
import { JSX } from "react";

/**
 * Renders the Student Showcase page component.
 *
 * This page displays student work and creativity in a structured layout with the following sections:
 * - A header section with title and descriptive text about the showcase
 * - A QuickLinks section showing student work examples
 * - A request form section for parents and students
 *
 * The page uses a responsive layout with consistent padding and margin spacing.
 * Content includes privacy disclaimers regarding student anonymity.
 *
 * @returns {JSX.Element} A main container with multiple sections for the student showcase
 */
export default function StudentShowcasePage(): JSX.Element {
  return (
    <main className="mx-auto px-4 py-10 lg:py-20 w-11/12">
      <section className="mb-12">
        <h1 className="my-4 pb-4 font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
          Showcasing Children's Creativity
        </h1>
        <h2 className="my-4 font-extrabold text-balance text-lg text-secondary md:text-2xl lg:text-3xl uppercase tracking-wider">
          A Celebration of Imagination, Innovation, and Expression
        </h2>
        <p>
          Welcome to our Student Creativity Showcase—a space where the
          brilliance of young minds comes to life. This showcase honors not just
          what students create, but the thought, imagination, and heart behind
          each piece. Here, we shine a light on the curiosity, courage, and
          critical thinking that inspire children to turn their ideas into
          powerful works of art, writing, performance, and innovation.
        </p>
        <p>
          Each submission—whether it's an original story, a digital comic, a
          compelling speech, a performance, or a collaborative classroom
          project—reflects a child’s unique perspective and creative journey.
          These works are more than assignments; they are personal expressions
          of thought, identity, and vision. Through this showcase, students are
          empowered to think independently, explore without limits, and
          communicate their ideas with confidence.
        </p>
        <h2 className="my-4 font-extrabold text-balance text-lg text-secondary md:text-2xl lg:text-3xl uppercase tracking-wider">
          WHY WE SHOWCASE
        </h2>
        <p>
          This showcase reflects our belief that every child has a voice worth
          hearing and a story worth sharing. We encourage risk-taking, celebrate
          originality, and nurture creative freedom. Through this process,
          students grow in self-confidence, learn to value their work, and gain
          a deeper appreciation for the power of their ideas. We invite you to
          explore each submission with an open mind and heart—recognizing not
          just the final product, but the journey of learning, reflection, and
          growth behind it. Every sentence, sketch, build, or performance is a
          testament to the vibrant inner worlds of our young creators.
        </p>
        <p>
          As you browse this collection, we invite you to appreciate each
          submission for its originality, its message, and the heart behind it.
          Every sketch, sentence, experiment, and presentation reveals something
          powerful: the unfiltered brilliance of youth.
        </p>
        <h2 className="my-4 font-extrabold text-balance text-lg text-secondary md:text-2xl lg:text-3xl uppercase tracking-wider">
          Respecting Student Privacy
        </h2>
        <p>
          Participation in the Student Showcase is voluntary. To honor student
          choice and family privacy, some entries may appear anonymously or with
          limited identifying details. We deeply appreciate the trust placed in
          us and take great care to ensure that all work is celebrated with
          integrity and respect.
        </p>

        <h2 className="my-4 font-extrabold text-balance text-lg text-secondary md:text-2xl lg:text-3xl uppercase tracking-wider">
          CELEBRATING STUDENT VOICE
        </h2>
        <p>
          ✨ When children are given the freedom to imagine, incredible things
          happen. ✨
        </p>
        <p>
          Thank you for joining us in uplifting the voices of tomorrow's
          creators, leaders, and changemakers. Your support encourages students
          to continue exploring, experimenting, and expressing themselves
          through the power of creative learning.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="mb-2 font-semibold text-2xl tracking-widest">
          QuickLinks
        </h3>
        <StudentsWorkSection />
      </section>

      <section className="mb-12">
        <Testimonial />
      </section>

      <section className="mb-12">
        <RequestFormParentStudent />
      </section>
    </main>
  );
}
