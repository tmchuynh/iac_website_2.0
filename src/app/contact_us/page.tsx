"use client";

import DynamicButton from "@/components/buttons/button-dynamic";
import ResponsiveLogo from "@/components/images/ResponsiveLogo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Send } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  "Other",
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.inquiryType &&
      formData.message
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact_us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Contact form submitted:", formData);
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
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "An error occurred while submitting your message. Please try again."
      );
    }

    setIsSubmitting(false);
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
        <div className="space-y-3 md:hidden mb-8">
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
          <form onSubmit={handleSubmit} className="space-y-6 md:col-span-2">
            <div className="space-y-4">
              <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
                Get in Touch
              </h3>

              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      updateFormData("firstName", e.target.value)
                    }
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

              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">
                    Phone Number{" "}
                    <span className="text-muted-foreground text-xs">
                      (Optional)
                    </span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      updateFormData("phoneNumber", e.target.value)
                    }
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">
                  What can we help you with?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) =>
                    updateFormData("inquiryType", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[80px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="flex gap-2 items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="border-2 border-white/30 border-t-white rounded-full h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Let's Talk
                  </>
                )}
              </Button>
            </div>

            <p className="text-muted-foreground text-sm">
              By submitting this form, I agree to the{" "}
              <a href="#" className="font-semibold underline">
                privacy policy
              </a>
              .
            </p>
          </form>

          {/* Testimonial */}
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

      {/* Hero Image */}
      <div className="xl:mx-auto xl:px-8 py-10 lg:max-w-7xl">
        <Image
          alt=""
          src="/images/Class_Photos/Soccer/53995092_141122.jpg"
          className="shadow-md xl:rounded-3xl w-full aspect-5/2 object-cover"
          width={2832}
          height={1130}
        />
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <div>Thank you for reaching out to us, {formData.firstName}!</div>
              <div>
                We have received your message and will respond to you at{" "}
                <strong>{formData.email}</strong> within 1-2 business days.
              </div>
              {formData.phoneNumber && (
                <div>
                  If we need to reach you sooner, we'll call you at{" "}
                  <strong>{formData.phoneNumber}</strong>.
                </div>
              )}
              <div className="text-muted-foreground text-sm">
                We appreciate your interest in International Activities Club and
                look forward to connecting with you soon!
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
