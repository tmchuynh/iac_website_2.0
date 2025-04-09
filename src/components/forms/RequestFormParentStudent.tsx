"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import DynamicButton from "../buttons/button-dynamic";

export function RequestFormParentStudent() {
  const router = useRouter();

  return (
    <section>
      <div className="mx-auto">
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
          Request Us @ Your School
        </h1>
        <div className="mb-4 text-pretty leading-relaxed">
          <h2 className="font-[PermanentMarker] font-bold text-lg text-secondary md:text-xl lg:text-2xl">
            We’re Excited to Connect With You!
          </h2>
          <p>
            Thank you for reaching out to IAC’s A.R.C. Program! We truly
            appreciate your interest in bringing our enriching, student-centered
            programs to your school. Your message has been received, and our
            team is reviewing it with care.
          </p>
          <p>
            We value the time you've taken to connect with us, and we’re
            committed to providing thoughtful, timely responses to all
            inquiries. Whether you’re requesting more information, exploring
            partnership options, or looking to schedule a consultation, we’re
            here to help every step of the way.
          </p>
          <h2 className="font-[PermanentMarker] font-bold text-lg text-secondary md:text-xl lg:text-2xl">
            Here’s What to Expect:
          </h2>
          <ul className="flex flex-col gap-2 py-2 list-disc list-inside">
            <li>
              A member of our team will get back to you as soon as possible with
              the information or support you need.
            </li>
            <li>
              In the meantime, feel free to explore more about our programs,
              curriculum offerings, or partnership benefits on our website.
            </li>
            <li>
              If your request is time-sensitive or urgent, we encourage you to
              reach out directly by phone.
            </li>
          </ul>
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
          </p>
          <div className="flex flex-col gap-4">
            <form action="#" className="flex flex-col gap-4">
              <div className="gap-4 grid grid-cols-2">
                <div>
                  <Label className="mb-2 font-medium text-left">
                    Your Name
                  </Label>
                  <Input
                    placeholder="John Smith"
                    name="name"
                    className="dark:placeholder:text-accent placeholder:text-muted"
                  />
                </div>
                <div>
                  <Label className="mb-2 font-medium text-left">
                    Grade Level(s)
                  </Label>
                  <Input
                    placeholder="1-5"
                    name="grades"
                    className="dark:placeholder:text-accent placeholder:text-muted"
                  />
                </div>
              </div>
              <div className="gap-4 grid grid-cols-3">
                <div>
                  <Label className="mb-2 font-medium text-left">School</Label>
                  <Input
                    placeholder="Cerro Villa Middle School"
                    name="school"
                    className="dark:placeholder:text-accent placeholder:text-muted"
                  />
                </div>
                <div>
                  <Label className="mb-2 font-medium text-left">
                    Principal's Name
                  </Label>
                  <Input
                    placeholder="Karen Smith"
                    name="principal"
                    className="dark:placeholder:text-accent placeholder:text-muted"
                  />
                </div>
                <div>
                  <Label className="mb-2 font-medium text-left">
                    School's Contact Info
                  </Label>
                  <Input
                    placeholder="karensmith@orangeusd.org.org"
                    name="contact_info"
                    className="dark:placeholder:text-accent placeholder:text-muted"
                  />
                </div>
              </div>
              <div>
                <Label className="mb-2 font-medium text-left">
                  More information
                </Label>
                <Textarea
                  placeholder="Message"
                  name="message"
                  className="dark:placeholder:text-accent placeholder:text-muted"
                />
              </div>
              <Button className="w-full" type="submit">
                Send message
              </Button>
            </form>
          </div>
          <p>
            We look forward to the opportunity to collaborate and help create
            meaningful, future-focused learning experiences for your students.
          </p>
          <p>
            Thank you for considering IAC’s A.R.C. as your educational partner!
          </p>
        </div>
      </div>
    </section>
  );
}
