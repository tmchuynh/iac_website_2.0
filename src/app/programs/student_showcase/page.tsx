"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import CenteredSimple from "@/components/CTA/CenteredSimple";
import RequestFormSchool from "@/components/forms/RequestFormSchool";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import PageHeaderTestimonial from "@/components/page_headers/PageHeaderTestimonial";
import StudentsWorkSection from "@/components/programs/StudentsWorkSection";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <main className="mx-auto px-4 py-10 lg:py-20 w-11/12">
      <ResponsiveLogo className="lg:mx-0" />
      <section className="mb-12">
        <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
          A Celebration of Imagination, Innovation, and Expression
        </p>
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider uppercase">
          Showcasing Children's Creativity
        </h1>

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
        <h2 className="my-4 font-[PermanentMarker] font-extrabold text-balance text-lg text-secondary md:text-2xl lg:text-3xl tracking-wider uppercase">
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
        <h2 className="my-4 font-[PermanentMarker] font-extrabold text-balance text-lg text-secondary md:text-2xl lg:text-3xl tracking-wider uppercase">
          Respecting Student Privacy
        </h2>
        <p>
          Participation in the Student Showcase is entirely voluntary. We
          recognize and respect the diverse comfort levels and preferences of
          our students and their families when it comes to sharing personal work
          in a public setting. In order to honor student choice and protect
          family privacy, some entries may be presented anonymously or include
          only limited identifying information, such as first names or general
          grade levels. We deeply value the trust that families place in us by
          allowing us to highlight student creativity, effort, and growth. Every
          piece submitted—whether attributed or anonymous—is treated with equal
          care, dignity, and appreciation. Our goal is to celebrate each
          student’s unique voice and contribution while upholding the highest
          standards of integrity, inclusion, and respect.
        </p>

        <CenteredSimple />

        <p>
          Thank you for being part of this meaningful celebration of student
          voice. By joining us, you are helping to uplift and honor the
          creativity, curiosity, and courage of tomorrow’s creators, leaders,
          and changemakers. Your support sends a powerful message—that their
          ideas matter, their expressions are valued, and their potential is
          limitless. When students are encouraged to explore, experiment, and
          express themselves through creative learning, they begin to see
          themselves as empowered contributors to their communities and the
          world.
        </p>
        <p>
          Together, we are cultivating an environment where imagination thrives,
          confidence grows, and every student’s voice has the opportunity to
          shine.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="mb-2 font-[Caveat] font-semibold text-2xl tracking-widest">
          QuickLinks
        </h3>
        <StudentsWorkSection />
      </section>

      <section className="mb-12">
        <PageHeaderTestimonial />
      </section>

      <section className="mb-12">
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider uppercase">
          Request Us @ Your School
        </h1>
        <div className="-mb-11 mx-auto">
          <div className="mb-4 leading-relaxed text-pretty">
            <h2 className="font-[PermanentMarker] font-bold text-lg text-secondary md:text-xl lg:text-2xl">
              We’re Excited to Connect With You!
            </h2>
            <p>
              Thank you for reaching out to IAC’s A.R.C. Program! We truly
              appreciate your interest in bringing our enriching,
              student-centered programs to your school. Your message has been
              received, and our team is reviewing it with care.
            </p>
            <p>
              We value the time you've taken to connect with us, and we’re
              committed to providing thoughtful, timely responses to all
              inquiries. Whether you’re requesting more information, exploring
              partnership options, or looking to schedule a consultation, we’re
              here to help every step of the way.
            </p>
            <div className="my-5">
              <h2 className="font-[PermanentMarker] font-bold text-lg text-secondary md:text-xl lg:text-2xl">
                Here’s What to Expect:
              </h2>
              <ul className="flex flex-col gap-2 py-2 list-disc list-inside">
                <li>
                  A member of our team will get back to you as soon as possible
                  with the information or support you need.
                </li>
                <li>
                  In the meantime, feel free to explore more about our programs,
                  curriculum offerings, or partnership benefits on our website.
                </li>
                <li>
                  If your request is time-sensitive or urgent, we encourage you
                  to reach out directly by phone.
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <h2 className="font-[PermanentMarker] font-bold text-lg text-secondary md:text-xl lg:text-2xl">
                Need Immediate Assistance?
              </h2>
              <p>
                Call our office at
                <DynamicButton
                  variant="link"
                  onClick={() => router.push("tel:7145090069")}
                >
                  (714) 509-0069
                </DynamicButton>
                We look forward to the opportunity to collaborate and help
                create meaningful, future-focused learning experiences for your
                students. Thank you for considering IAC’s A.R.C. as your
                educational partner!
              </p>
            </div>
          </div>
        </div>
        <RequestFormSchool />
      </section>
    </main>
  );
}
