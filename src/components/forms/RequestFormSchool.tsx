"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

interface SchoolFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schoolName: string;
  principalName: string;
  schoolEmail: string;
  gradeLevels: string[];
  interestedPrograms: string[];
  additionalInfo: string;
}

const programOptions = [
  "Chess",
  "Volleyball",
  "Basketball",
  "Soccer",
  "Performing Arts",
  "Creative Writing",
  "Art Club",
  "Comic Book Art Club",
  "Public Speaking Class",
  "Flag Football",
  "Dance",
  "Science Exploration",
  "Other",
];

const gradeLevels = [
  "Pre-K",
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "Mixed Grade Levels",
];

export default function RequestFormSchool() {
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SchoolFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    principalName: "",
    schoolEmail: "",
    gradeLevels: [],
    interestedPrograms: [],
    additionalInfo: "",
  });

  const updateFormData = (field: keyof SchoolFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProgramChange = (program: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interestedPrograms: checked
        ? [...prev.interestedPrograms, program]
        : prev.interestedPrograms.filter((p) => p !== program),
    }));
  };

  const handleGradeLevelChange = (gradeLevel: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      gradeLevels: checked
        ? [...prev.gradeLevels, gradeLevel]
        : prev.gradeLevels.filter((g) => g !== gradeLevel),
    }));
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.schoolName &&
      formData.principalName &&
      formData.schoolEmail &&
      formData.gradeLevels.length > 0 &&
      formData.interestedPrograms.length > 0
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact_us/request_us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("School request form submitted:", formData);
        setShowDialog(true);
      } else {
        throw new Error("Failed to submit request");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      alert(
        "An error occurred while submitting your request. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 mt-16">
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Contact Information
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
                <Label htmlFor="phone">
                  Phone Number{" "}
                  <span className="text-muted-foreground text-xs">
                    (Optional)
                  </span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  autoComplete="tel"
                />
              </div>
            </div>
          </div>

          {/* School Information */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              School Information
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="schoolName">
                  School Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="schoolName"
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => updateFormData("schoolName", e.target.value)}
                  required
                />
              </div>

              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="principalName">
                    Principal's Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="principalName"
                    type="text"
                    value={formData.principalName}
                    onChange={(e) =>
                      updateFormData("principalName", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolEmail">
                    School Contact Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="schoolEmail"
                    type="email"
                    value={formData.schoolEmail}
                    onChange={(e) =>
                      updateFormData("schoolEmail", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Program Interest */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Program Interest
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>
                  Grade Level(s) <span className="text-red-500">*</span>
                </Label>
                <p className="text-muted-foreground text-sm">
                  Select all grade levels you would like to serve
                </p>
                <div className="gap-3 grid grid-cols-2 md:grid-cols-3">
                  {gradeLevels.map((grade) => (
                    <div key={grade} className="flex items-center space-x-2">
                      <Checkbox
                        id={grade}
                        checked={formData.gradeLevels.includes(grade)}
                        onCheckedChange={(checked) =>
                          handleGradeLevelChange(grade, checked as boolean)
                        }
                      />
                      <Label htmlFor={grade} className="text-sm">
                        {grade}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  What programs are you interested in?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <p className="text-muted-foreground text-sm">
                  Select all programs that would be a good fit for your students
                </p>
                <div className="gap-3 grid grid-cols-2 md:grid-cols-3">
                  {programOptions.map((program) => (
                    <div key={program} className="flex items-center space-x-2">
                      <Checkbox
                        id={program}
                        checked={formData.interestedPrograms.includes(program)}
                        onCheckedChange={(checked) =>
                          handleProgramChange(program, checked as boolean)
                        }
                      />
                      <Label htmlFor={program} className="text-sm">
                        {program}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <p className="text-muted-foreground text-sm">
                  Tell us more about your needs, preferred timing, number of
                  students, or any special requirements (Max 500 characters)
                </p>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  maxLength={500}
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    updateFormData("additionalInfo", e.target.value)
                  }
                  className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[80px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                  placeholder="Describe your program needs, preferred schedule, or any questions..."
                />
                <div className="text-right text-muted-foreground text-xs">
                  {formData.additionalInfo.length}/500 characters
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
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
                Send Request
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Request Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <span className="block">
                Thank you for your interest in bringing our programs to{" "}
                {formData.schoolName}!
              </span>
              <span className="block">
                We have received your request and will contact you at{" "}
                <strong>{formData.email}</strong> within 2-3 business days to
                discuss program options, scheduling, and next steps.
              </span>
              <span className="block">
                If you have any immediate questions, please feel free to call
                our office at <strong>(714) 509-0069</strong> during business
                hours.
              </span>
              <span className="text-muted-foreground text-sm">
                We look forward to partnering with your school to provide
                engaging educational experiences for your students!
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
