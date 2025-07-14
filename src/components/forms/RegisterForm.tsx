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
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface FormData {
  // Step 1
  studentName: string;
  preferredName: string;
  grade: string;
  teacherName: string;
  afterClassCare: string;
  elementarySchool: string;
  classTypes: string[];

  // Step 2
  parentName: string;
  phoneNumber: string;
  emailAddress: string;
  alternateContactName: string;
  alternateContactPhone: string;

  // Step 3
  paymentType: string;
  iacAuthorization: boolean;
}

const grades = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
];

const classOptions = [
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
  "Other",
];

const afterCareOptions = [
  "Wait to be picked up",
  "Walk or ride bike home",
  "goes to on campus Daycare",
  "Other",
];

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmailAddress, setSubmittedEmailAddress] = useState("");
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    preferredName: "",
    grade: "",
    teacherName: "",
    afterClassCare: "",
    elementarySchool: "",
    classTypes: [],
    parentName: "",
    phoneNumber: "",
    emailAddress: "",
    alternateContactName: "",
    alternateContactPhone: "",
    paymentType: "",
    iacAuthorization: false,
  });

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClassTypeChange = (classType: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      classTypes: checked
        ? [...prev.classTypes, classType]
        : prev.classTypes.filter((type) => type !== classType),
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.studentName &&
          formData.grade &&
          formData.teacherName &&
          formData.afterClassCare &&
          formData.elementarySchool &&
          formData.classTypes.length > 0
        );
      case 2:
        return (
          formData.parentName && formData.phoneNumber && formData.emailAddress
        );
      case 3:
        return formData.paymentType && formData.iacAuthorization;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps && isStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only allow submission on the final step
    if (currentStep !== totalSteps) return;

    if (!isStepValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact_us/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration form submitted:", formData);
        setSubmittedEmailAddress(formData.emailAddress); // Store email before clearing
        setShowDialog(true);

        // Reset form data
        setFormData({
          studentName: "",
          preferredName: "",
          grade: "",
          teacherName: "",
          afterClassCare: "",
          elementarySchool: "",
          classTypes: [],
          parentName: "",
          phoneNumber: "",
          emailAddress: "",
          alternateContactName: "",
          alternateContactPhone: "",
          paymentType: "",
          iacAuthorization: false,
        });
        setCurrentStep(1);
      } else {
        throw new Error("Failed to submit registration");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert(
        "An error occurred while submitting your registration. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8 mx-auto p-6">
      <div className="space-y-2 text-center">
        <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-2xl text-balance text-primary md:text-2xl lg:text-4xl xl:text-5xl tracking-wider uppercase">
          Class Sign-up Form
        </h1>
        <p className="text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Progress value={progressPercentage} className="w-full" />
        <div className="flex justify-between text-muted-foreground text-sm">
          <span className={currentStep >= 1 ? "text-primary font-medium" : ""}>
            Student Info
          </span>
          <span className={currentStep >= 2 ? "text-primary font-medium" : ""}>
            Parent Info
          </span>
          <span className={currentStep >= 3 ? "text-primary font-medium" : ""}>
            Payment
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          // Prevent Enter key from submitting form unless on final step
          if (e.key === "Enter" && currentStep !== totalSteps) {
            e.preventDefault();
          }
        }}
        className="space-y-6"
      >
        {/* Step 1: Student Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-semibold text-2xl">Student Information</h2>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="studentName">
                    Student Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="studentName"
                    placeholder="First and Last"
                    value={formData.studentName}
                    onChange={(e) =>
                      updateFormData("studentName", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredName">
                    Preferred name or also known as
                  </Label>
                  <Input
                    id="preferredName"
                    value={formData.preferredName}
                    onChange={(e) =>
                      updateFormData("preferredName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="grade">
                    Grade <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(value) => updateFormData("grade", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacherName">
                    Teacher's Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="teacherName"
                    value={formData.teacherName}
                    onChange={(e) =>
                      updateFormData("teacherName", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  After Class Care Options{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <p className="text-muted-foreground text-sm">
                  After class my child will:
                </p>
                <RadioGroup
                  value={formData.afterClassCare}
                  onValueChange={(value) =>
                    updateFormData("afterClassCare", value)
                  }
                >
                  {afterCareOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="elementarySchool" className="mb-0">
                  Elementary School <span className="text-red-500">*</span>
                </Label>
                <p className="text-muted-foreground text-sm">
                  School where the class will be held
                </p>
                <Input
                  id="elementarySchool"
                  value={formData.elementarySchool}
                  onChange={(e) =>
                    updateFormData("elementarySchool", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="mb-0">
                  Class Type <span className="text-red-500">*</span>
                </Label>
                <p className="text-muted-foreground text-sm">
                  Check all classes that your child is signing up for
                </p>
                <div className="gap-2 grid grid-cols-2 md:grid-cols-3">
                  {classOptions.map((classType) => (
                    <div
                      key={classType}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={classType}
                        checked={formData.classTypes.includes(classType)}
                        onCheckedChange={(checked) =>
                          handleClassTypeChange(classType, checked as boolean)
                        }
                      />
                      <Label htmlFor={classType} className="text-sm">
                        {classType}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Parent Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-semibold text-2xl">Parent Information</h2>

              <div className="space-y-2">
                <Label htmlFor="parentName">
                  Parent Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="parentName"
                  placeholder="First and Last"
                  value={formData.parentName}
                  onChange={(e) => updateFormData("parentName", e.target.value)}
                  required
                />
              </div>

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      updateFormData("phoneNumber", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailAddress">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) =>
                      updateFormData("emailAddress", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="alternateContact" className="mb-0">
                  Alternate/Emergency Contact
                </Label>
                <p className="text-muted-foreground text-sm">
                  Please provide the name and phone number of an alternate
                  contact person. *Not Required*
                </p>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <Input
                    placeholder="Contact Name"
                    value={formData.alternateContactName}
                    onChange={(e) =>
                      updateFormData("alternateContactName", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Contact Phone"
                    type="tel"
                    value={formData.alternateContactPhone}
                    onChange={(e) =>
                      updateFormData("alternateContactPhone", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment Information */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-semibold text-2xl">Payment Type</h2>

              <div className="space-y-4">
                <Label className="mb-0">
                  Please choose your preferred payment method below.{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <p className="text-muted-foreground text-sm">
                  Check payments can be mailed to the address on the flyer.
                  Credit Card payments will be invoiced from Square once the
                  minimum number of students have enrolled.
                </p>

                <RadioGroup
                  value={formData.paymentType}
                  onValueChange={(value) =>
                    updateFormData("paymentType", value)
                  }
                >
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                    <div className="space-y-2 p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="check" id="check" />
                        <Label htmlFor="check">Check</Label>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mx-auto border-2 border-gray-300 rounded h-10 w-16">
                          <span className="font-bold text-xs">IAC</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card">Credit Card</Label>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center bg-black mx-auto rounded h-10 w-16 text-white">
                          <span className="font-bold text-xs">Square</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="zelle" id="zelle" />
                        <Label htmlFor="zelle">Zelle</Label>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center bg-purple-600 mx-auto rounded h-10 w-16 text-white">
                          <span className="font-bold text-xs">Zelle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4 bg-muted p-4 rounded-lg">
                <h3 className="font-semibold">IAC Authorization</h3>
                <p className="text-sm">
                  Please scroll to the top of the page after submitting the form
                  to verify that it has been received.
                </p>
                <p className="text-sm">
                  I, the undersigned parent or legal guardian of the child named
                  above, hereby give my consent and approval for my child to
                  participate in the activity organized by IAC. I understand
                  that the activity may involve certain risks and hazards, such
                  as injury, illness, or property damage, and I agree to assume
                  all such risks on behalf of myself and my child. I also agree
                  to release, indemnify, and hold harmless IAC, its employees,
                  volunteers, agents, and contractors from any and all
                  liability, claims, costs, or damages arising from or related
                  to my child's participation in the activity, whether caused by
                  negligence or otherwise. I have read and understood this
                  waiver and I sign it voluntarily.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="iacAuthorization"
                    checked={formData.iacAuthorization}
                    onCheckedChange={(checked) =>
                      updateFormData("iacAuthorization", checked)
                    }
                    required
                  />
                  <Label htmlFor="iacAuthorization">
                    I agree <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex gap-2 items-center"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="flex gap-2 items-center"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!isStepValid() || isSubmitting}
              className="flex gap-2 items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="border-2 border-white/30 border-t-white rounded-full h-4 w-4 animate-spin" />
                  Submitting Registration...
                </>
              ) : (
                <>
                  Submit Registration
                  <CheckCircle className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Registration Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <span className="block">
                Thank you for registering for our classes!
              </span>
              <span className="block">
                An email will be sent to{" "}
                <strong>{submittedEmailAddress}</strong> with an invoice that
                should be paid in a reasonable and timely manner.
              </span>
              <span className="block">
                We appreciate your enrollment and look forward to seeing your
                child in class!
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
