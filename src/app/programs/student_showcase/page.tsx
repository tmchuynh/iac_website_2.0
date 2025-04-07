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
        <h1 className="my-4 font-extrabold text-balance text-center text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          Showcasing Children's Creativity
        </h1>
        <h2 className="pt-5 font-bold text-2xl">
          A Celebration of Imagination, Innovation, and Expression
        </h2>
        <p>
          Welcome to our student creativity showcase—a space dedicated to
          honoring the limitless imagination and extraordinary potential of
          young minds. Here, we celebrate not just what students create, but why
          they create, spotlighting the courage, curiosity, and critical
          thinking that drive their ideas forward.
        </p>
        <p>
          Each piece you see—whether it’s a vibrant work of art, an original
          story, a hand-built model, or a scientific exploration—represents a
          child’s journey of learning and discovery. These creations are more
          than just projects; they are personal expressions of thought, emotion,
          culture, and vision. Through them, students demonstrate their ability
          to explore the world around them, challenge assumptions, and bring new
          ideas to life.
        </p>
        <p>
          This showcase is a reflection of our core belief: that every child has
          a voice worth hearing and a story worth sharing. By providing space
          for creative freedom, we empower students to take risks, think
          independently, and grow in confidence. We aim to inspire them not only
          to learn but to love learning—and to understand that their ideas can
          shape the future.
        </p>
        <p>
          As you browse this collection, we invite you to appreciate each
          submission for its originality, its message, and the heart behind it.
          Every sketch, sentence, experiment, and presentation reveals something
          powerful: the unfiltered brilliance of youth.
        </p>
        <h2 className="pt-8 font-bold text-2xl">Respecting Student Privacy</h2>
        <p>
          Participation in this showcase is entirely voluntary. We deeply value
          the trust placed in us by students and their families. In honoring
          student choice, some works have been submitted anonymously. You may
          notice that names are omitted in certain instances to protect those
          who prefer to keep their identity private.
        </p>
        <p>
          Thank you for joining us in recognizing and celebrating the future
          creators, storytellers, thinkers, and innovators of tomorrow.
        </p>
        <p>Let their work remind us:</p>
        <p>
          ✨ When children are given the freedom to imagine, incredible things
          happen. ✨
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 font-semibold text-2xl tracking-widest">
          QuickLinks
        </h2>
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
