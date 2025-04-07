"use client";

const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

const values = [
  {
    name: "Be world-class",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Share everything you know",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Always learning",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Be supportive",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
  {
    name: "Take responsibility",
    description:
      "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
  },
  {
    name: "Enjoy downtime",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

export default function OurMissionPage() {
  return (
    <main className="relative mx-auto px-4 py-10 lg:py-30 w-11/12">
      <div className="relative -z-10 bg-linear-to-b from-indigo-100/20 pt-14 overflow-hidden isolate">
        <div
          aria-hidden="true"
          className="right-1/2 -z-10 absolute inset-y-0 bg-white shadow-indigo-600/10 shadow-xl -mr-96 sm:-mr-80 lg:-mr-96 ring-1 ring-indigo-50 w-[200%] origin-top-right skew-x-[-30deg]"
        />
        <div className="mx-auto px-6 lg:px-8 py-32 sm:py-40 max-w-7xl">
          <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            {/* <h1 class="lg:col-span-2 max-w-2xl font-semibold text-5xl text-balance text-gray-900 sm:text-7xl tracking-tight xl:col-auto">We’re changing the way people connect</h1> */}
            <h1 className="lg:col-span-2 max-w-2xl font-semibold text-5xl text-balance text-gray-900 sm:text-7xl tracking-tight xl:col-auto">
              We’re a passionate group of people building the future of
              ecommerce
            </h1>
            <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
              <p className="font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt. Qui irure qui lorem cupidatat commodo.
              </p>
            </div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              className="xl:row-span-2 xl:row-end-2 mt-10 sm:mt-16 lg:mt-0 xl:mt-36 rounded-2xl w-full max-w-lg lg:max-w-none aspect-6/5 object-cover"
            />
          </div>
        </div>
        <div className="bottom-0 -z-10 absolute inset-x-0 bg-linear-to-t from-white h-24 sm:h-32" />
      </div>

      <div className="mt-32 sm:mt-40 overflow-hidden">
        <div className="lg:flex mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="lg:flex-none gap-x-12 gap-y-16 lg:gap-y-8 grid grid-cols-1 mx-auto lg:mx-0 lg:min-w-full max-w-2xl lg:max-w-none">
            <div className="lg:col-end-1 lg:pb-8 lg:w-full lg:max-w-lg">
              <h2 className="font-semibold text-4xl text-gray-900 sm:text-5xl tracking-tight">
                Our people
              </h2>
              <p className="mt-6 text-gray-600 text-xl/8">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
                error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
            </div>
            <div className="flex flex-wrap justify-end items-start gap-6 sm:gap-8 lg:contents">
              <div className="flex-auto lg:flex-none lg:ml-auto w-0 lg:w-auto lg:self-end">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  className="bg-gray-50 rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                />
              </div>
              <div className="lg:flex lg:justify-end lg:items-start lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:w-[37rem] contents">
                <div className="flex flex-none justify-end order-first w-64 lg:w-auto self-end">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="flex-none bg-gray-50 rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  />
                </div>
                <div className="flex flex-auto lg:flex-none justify-end w-96 lg:w-auto">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    className="flex-none bg-gray-50 rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                  />
                </div>
                <div className="sm:block sm:flex-auto lg:flex-none hidden sm:w-0 lg:w-auto">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="bg-gray-50 rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 sm:mt-40 px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            We approach work as a place to make the world better
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
            euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit
            eu in id. Integer vel nibh.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-end gap-8 mx-auto lg:mx-0 mt-16 lg:mt-20 max-w-2xl lg:max-w-none">
          <div className="flex sm:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-none justify-between sm:items-end lg:items-start gap-x-16 gap-y-8 bg-gray-50 p-8 rounded-2xl sm:w-3/4 lg:w-72 sm:max-w-md lg:max-w-none">
            <p className="flex-none font-bold text-3xl text-gray-900 tracking-tight">
              250k
            </p>
            <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
              <p className="font-semibold text-gray-900 text-lg tracking-tight">
                Users on the platform
              </p>
              <p className="mt-2 text-base/7 text-gray-600">
                Vel labore deleniti veniam consequuntur sunt nobis.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-auto justify-between sm:items-end lg:items-start gap-x-16 gap-y-8 lg:gap-y-44 bg-gray-900 p-8 rounded-2xl lg:w-full lg:max-w-sm">
            <p className="flex-none font-bold text-3xl text-white tracking-tight">
              $8.9 billion
            </p>
            <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
              <p className="font-semibold text-lg text-white tracking-tight">
                We’re proud that our customers have made over $8 billion in
                total revenue.
              </p>
              <p className="mt-2 text-base/7 text-gray-400">
                Eu duis porta aliquam ornare. Elementum eget magna egestas.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row-reverse lg:flex-col flex-col-reverse lg:flex-auto justify-between sm:items-end lg:items-start gap-x-16 gap-y-8 lg:gap-y-28 bg-indigo-600 p-8 rounded-2xl sm:w-11/12 lg:w-full sm:max-w-xl lg:max-w-none">
            <p className="flex-none font-bold text-3xl text-white tracking-tight">
              401,093
            </p>
            <div className="lg:flex-none sm:w-80 lg:w-auto sm:shrink">
              <p className="font-semibold text-lg text-white tracking-tight">
                Transactions this year
              </p>
              <p className="mt-2 text-base/7 text-indigo-200">
                Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
                duis porta aliquam ornare.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 sm:mt-40 px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            Our values
          </h2>
          <p className="mt-6 text-gray-600 text-lg/8">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className="gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 max-w-2xl lg:max-w-none text-base/7">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mx-auto -mt-12 sm:mt-0 xl:-mt-8 px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            Our mission
          </h2>
          <div className="flex lg:flex-row flex-col gap-x-8 gap-y-20 mt-6">
            <div className="lg:flex-auto lg:w-full lg:max-w-2xl">
              <p className="text-gray-600 text-xl/8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="space-y-8 w-64 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="font-semibold text-5xl text-gray-900 tracking-tight">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="my-4 font-extrabold text-balance text-lg text-secondary lg:text-4xl uppercase tracking-wider">
          What Powers Us Through - Our Mission
        </h1>
        <section className="py-4">
          <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
            Empowering Students through Immersion, Effectiveness, and
            Inclusivity
          </h2>
          <p>
            At IAC’s A.R.C. (Academic Resource Connection) program, our mission
            is deeply rooted in compassion, inspiration, and an unwavering
            commitment to every student's success. We believe that education is
            not just about knowledge acquisition but about awakening a lifelong
            love of learning, nurturing the whole individual, and equipping
            students with the tools they need to flourish—academically,
            socially, and emotionally. Our goal is not merely to teach, but to
            ignite genuine passion, instill unwavering confidence, and cultivate
            creative expression in each learner. In doing so, we empower
            students to thrive in a dynamic, fast-changing world where
            adaptability, empathy, and innovation are key to success. To realize
            this ambitious vision, our educational approach is built upon three
            core pillars—Immersion, Effectiveness, and Inclusivity—each serving
            as a critical component of a transformative and meaningful learning
            journey:
          </p>
        </section>

        <section className="py-4">
          <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
            Immersion: Active, Engaged Learning
          </h2>
          <p>
            At the heart of our educational philosophy lies a fundamental
            belief: true learning occurs when students are active
            participants—fully engaged, personally invested, and inspired by the
            process of discovery. Immersion is not simply a method; it is a
            mindset that transforms education from a passive experience into a
            vibrant, hands-on journey of exploration and growth.
          </p>
          <p>
            Through immersive learning, we go beyond traditional instruction to
            create environments where students learn by doing. Our programs
            provide rich, experiential opportunities across a wide range of
            disciplines—including STEM, the arts, world languages, humanities,
            and leadership development. Whether students are engineering a
            prototype, composing music, debating ethical dilemmas, or leading a
            community initiative, they are consistently challenged to apply
            their knowledge in meaningful, real-world contexts.
          </p>

          <p>
            By embedding learning in authentic scenarios, we awaken curiosity,
            nurture creativity, and promote intellectual risk-taking. Students
            are encouraged to ask questions, challenge assumptions, and
            experiment without fear of failure. This approach not only deepens
            conceptual understanding but also cultivates a genuine love of
            learning—one that endures beyond the classroom.
          </p>

          <p>
            Moreover, our immersive model is designed to develop essential
            21st-century competencies: critical thinking, creative
            problem-solving, effective communication, and adaptive innovation.
            Students emerge from our programs better equipped to navigate
            complexity, approach challenges with confidence, and lead with
            purpose. Ultimately, immersion empowers students to think
            independently, act responsibly, and contribute meaningfully to their
            communities and the world around them.
          </p>
        </section>

        <div className="xl:mx-auto xl:px-8 py-3 md:py-6 lg:py-9 2xl:py-20 xl:py-12 lg:max-w-7xl">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="shadow-xl xl:rounded-3xl w-full aspect-5/2 object-cover"
          />
        </div>

        <section className="py-4">
          <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
            Effectiveness: Results-Driven Education
          </h2>

          <p>
            Every element of the A.R.C. curriculum is purposefully and
            meticulously crafted to maximize educational impact and deliver
            meaningful, measurable outcomes. At the core of our Effectiveness
            pillar is a steadfast commitment to results-driven education—one
            that balances academic rigor with the cultivation of essential life
            and career skills.
          </p>

          <p>
            Our curriculum integrates challenging, standards-aligned academic
            content with practical competencies such as leadership, effective
            communication, emotional intelligence, and collaborative teamwork.
            These are not treated as supplementary but as foundational, ensuring
            that students are prepared not only to succeed in academic settings
            but to excel in the complex, interconnected world beyond the
            classroom.
          </p>

          <p>
            Grounded in evidence-based methodologies, our instructional approach
            is dynamic and responsive. We employ ongoing assessments,
            data-informed instruction, and personalized feedback to guide both
            teaching and learning. This continuous loop of evaluation and
            refinement ensures that our strategies remain relevant, impactful,
            and aligned with each student’s unique learning journey.
          </p>

          <p>
            Structured assessments—both formative and summative—are complemented
            by reflective practices that encourage students to set goals,
            monitor their progress, and take ownership of their growth.
            Educators use this insight to tailor support, celebrate
            achievements, and address challenges proactively.
          </p>

          <p>
            Our unwavering focus on effectiveness goes beyond academic
            achievement. We are equally dedicated to fostering social and
            emotional development, resilience, and adaptability—qualities that
            are vital for personal fulfillment and long-term success. By
            equipping students with a robust, versatile skill set, our strategic
            and intentional approach empowers them to thrive as capable,
            confident individuals in both their academic and future professional
            pursuits.
          </p>
        </section>

        <section className="py-4">
          <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
            Inclusivity: Supporting Every Learner
          </h2>

          <p>
            Inclusivity is not simply an aspiration at IAC—it is a foundational
            belief that informs every decision, practice, and interaction within
            the A.R.C. program. We hold a deep and enduring commitment to
            honoring the diversity of our students—their abilities, cultural
            backgrounds, life experiences, and learning styles. We recognize
            that each learner brings a distinct voice, set of strengths, and
            potential for growth, and we are dedicated to creating equitable
            opportunities that allow every student to thrive.
          </p>

          <p>
            Our inclusive educational model is built on the principle that
            personalized learning fosters meaningful engagement and success. We
            provide adaptive, flexible pathways that are intentionally designed
            to meet students where they are, whether they are just beginning
            their academic journey, ready for accelerated enrichment, or in need
            of additional support. Through individualized instruction,
            responsive mentoring, and thoughtful scaffolding, we ensure that all
            learners are supported with compassion, dignity, and high
            expectations.
          </p>

          <p>
            Educators and mentors within the A.R.C. program are trained to
            recognize and respond to diverse needs, creating learning
            environments where every student feels seen, heard, and valued. This
            commitment to inclusivity extends beyond academics—it encompasses
            emotional well-being, cultural responsiveness, and a deep respect
            for each student's lived experience.
          </p>

          <p>
            By fostering an inclusive community, we cultivate a culture where
            diversity is not only acknowledged but celebrated. Differences are
            welcomed as opportunities for learning and growth, and students are
            encouraged to share their perspectives, collaborate across lines of
            difference, and engage in meaningful dialogue. This inclusive ethos
            strengthens our community, enriches the educational experience for
            all, and prepares students to become empathetic, open-minded
            contributors to a diverse and interconnected world.
          </p>
        </section>

        <section className="py-4">
          <h2 className="font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
            A Mission to Transform Education and Lives
          </h2>

          <p>
            Through the powerful integration of our three foundational
            pillars—Immersion, Effectiveness, and Inclusivity—IAC’s A.R.C.
            (Academic Resource Connection) program delivers a transformative
            educational experience that reaches far beyond the boundaries of
            traditional classrooms. This approach is not merely about academic
            success; it is about shaping well-rounded individuals who are
            prepared to engage thoughtfully and lead purposefully in an
            ever-evolving world.
          </p>

          <p>
            Our mission is to cultivate a lifelong passion for learning by
            fostering an environment rich in exploration, critical thinking, and
            meaningful engagement. We believe that genuine curiosity is the
            engine of personal and intellectual growth, and we strive to empower
            students to view challenges as opportunities for discovery and
            resilience.
          </p>

          <p>
            The A.R.C. program is designed to nurture academic excellence while
            simultaneously developing the skills and values that define truly
            empowered individuals—innovative thinkers, empathetic collaborators,
            and proactive global citizens. By embracing a holistic and inclusive
            educational model, we aim to support every learner in realizing
            their full potential, both in the classroom and in life.
          </p>

          <p>
            At IAC, we are committed to continuous excellence and
            forward-thinking innovation. We equip students not only with
            knowledge and skills, but also with the confidence, character, and
            compassion necessary to make meaningful, lasting contributions to
            their communities and the world at large. Our mission is not simply
            to educate—it is to inspire, to uplift, and to empower the next
            generation of change-makers.
          </p>
        </section>
      </section>
    </main>
  );
}
