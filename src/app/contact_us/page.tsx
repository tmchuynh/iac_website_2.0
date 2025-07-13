"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DynamicButton from "@/components/buttons/button-dynamic";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  inquiryType: string;
  message: string;
}

const inquiryTypes = [
  "General question",
  "Program information",
  "Registration inquiry",
  "School partnership",
  "Employment opportunity",
  "Feedback or suggestion",
  "Technical support",
  "Other"
];

export default function ContactUs() {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  });

  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.inquiryType &&
           formData.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", formData);
    setIsSubmitting(false);
    setShowDialog(true);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      inquiryType: "",
      message: "",
    });
  };
  return (
    <main className="relative mx-auto px-4 py-8 md:py-12 lg:py-24 2xl:py-40 xl:py-32 w-11/12">
      <section className="mx-auto w-11/12">
        <p className="mt-5 font-[NothingYouCouldDo] font-semibold text-tertiary">
          We Would Love to Hear From You!
        </p>
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl tracking-wider uppercase">
          Contact Us
        </h1>
        <p className="mt-2 pb-4 md:pb-7 lg:pb-9 xl:pb-12 text-lg/8">
          Whether you’re a parent, educator, school administrator, or community
          partner, we welcome your questions, ideas, and feedback. Have a
          question about one of our programs? Interested in bringing our
          enrichment experiences to your school or organization? Looking to
          explore collaboration or partnership opportunities? Or maybe you just
          want to connect and learn more—we’re here for it all. Our team is
          ready to assist and guide you every step of the way. Don’t hesitate to
          reach out—we look forward to starting the conversation with you!
        </p>
        
        {/* Quick Action Buttons for Mobile */}
        <div className="md:hidden space-y-3 mb-8">
          <DynamicButton
            onClick={() => router.push("/contact_us/register")}
            className="w-full"
          >
            Register For a Program!
          </DynamicButton>
          <DynamicButton
            onClick={() => router.push("/contact_us/provide_feedback")}
            className="w-full"
          >
            Provide Feedback
          </DynamicButton>
          <DynamicButton
            onClick={() => router.push("/contact_us/request_us")}
            className="w-full"
          >
            Request a Program
          </DynamicButton>
          <DynamicButton
            onClick={() => router.push("/contact_us/apply")}
            className="w-full"
          >
            Want to Join Us?
          </DynamicButton>
        </div>

        <ResponsiveLogo />

        <div className="gap-7 grid grid-cols-1 md:grid-cols-3 mt-16">
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                Get in Touch
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    autoComplete="given-name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-sm/6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block font-semibold text-sm/6"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="url"
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-semibold text-sm/6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 w-full">
              <DynamicButton className="mx-0">Let’s talk</DynamicButton>
            </div>
            <p className="mt-4 text-sm/6">
              By submitting this form, I agree to the{" "}
              <a href="#" className="font-semibold">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <div className="md:col-span-1">
            <figure className="mt-10">
              <blockquote className="font-[WaitingfortheSunrise] leading-4 md:leading-8 text-lg md:text-xl">
                "Watching my once-shy daughter perform confidently on stage was{" "}
                <mark>a dream come true</mark>. The theater staff at
                International Activities Club excel at nurturing talent and
                fostering self-esteem. Her enthusiasm for school has grown
                significantly, and she comes home eager to share her
                experiences."
              </blockquote>
              <figcaption className="flex gap-x-4 items-center mt-8">
                <Image
                  alt="Arroyo Elementary School"
                  src="/images/School_Icons/arroyo.png"
                  className="flex-none rounded-full h-20 w-20 object-cover"
                  width={96}
                  height={96}
                />
                <div>
                  <cite className="font-[GrapeNuts] font-semibold">
                    Theater Parent
                  </cite>
                  <div className="text-sm/6">Arroyo Elementary School</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div className="xl:mx-auto xl:px-8 py-10 lg:max-w-7xl">
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/53995092_141122.jpg"
          className="shadow-md xl:rounded-3xl w-full aspect-5/2 object-cover"
          width={2832}
          height={1130}
        />
      </div>
    </main>
  );
}
