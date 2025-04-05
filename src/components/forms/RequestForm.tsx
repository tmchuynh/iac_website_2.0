"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";

export function RequestForm() {
  const router = useRouter();

  return (
    <section className="px-8 py-8 w-11/12 mx-auto">
      <div className="container mx-auto">
        <h1 className="my-4 text-balance uppercase font-[Luckiest] tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Request Us @ Your School
        </h1>
        <div className="text-sm leading-relaxed text-pretty mb-4">
          <p>
            Thank you for reaching out to us! We truly value your message and
            appreciate the time you’ve taken to connect. Your inquiries help us
            continue providing the best possible service to our partners and
            families.
          </p>
          <hr className="my-1 invisible" />
          <p>
            Our team is currently reviewing your message and will respond as
            quickly as possible. We appreciate your patience as we work to
            address your questions, concerns, or feedback.
          </p>
          <hr className="my-1 invisible" />
          <p>
            If you need immediate assistance, please don’t hesitate to contact
            our office during business hours. <br />
            Office number:
            <Button
              variant="link"
              onClick={() => router.push("tel:7145090069")}
              className="p-1"
            >
              (714) 509-0069
            </Button>
          </p>
        </div>
        <div className="flex gap-4 flex-col">
          <form action="#" className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2 text-left font-medium">Your Name</Label>
                <Input
                  placeholder="John Smith"
                  name="name"
                  className="placeholder:text-muted"
                />
              </div>
              <div>
                <Label className="mb-2 text-left font-medium">
                  Grade Level(s)
                </Label>
                <Input
                  placeholder="1-5"
                  name="grades"
                  className="placeholder:text-muted"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="mb-2 text-left font-medium">School</Label>
                <Input
                  placeholder="Cerro Villa Middle School"
                  name="school"
                  className="placeholder:text-muted"
                />
              </div>
              <div>
                <Label className="mb-2 text-left font-medium">
                  Principal's Name
                </Label>
                <Input
                  placeholder="Karen Smith"
                  name="principal"
                  className="placeholder:text-muted"
                />
              </div>
              <div>
                <Label className="mb-2 text-left font-medium">
                  School's Contact Info
                </Label>
                <Input
                  placeholder="karensmith@orangeusd.org.org"
                  name="contact_info"
                  className="placeholder:text-muted"
                />
              </div>
            </div>
            <div>
              <Label className="mb-2 text-left font-medium">
                More information
              </Label>
              <Textarea
                placeholder="Message"
                name="message"
                className="placeholder:text-muted"
              />
            </div>
            <Button className="w-full" type="submit">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
