"use client";

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
import { CheckCircle, FileText, Upload, X } from "lucide-react";
import { useState } from "react";

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  positionInterest: string;
  availabilityType: string;
  experience: string;
  message: string;
  resume: File | null;
  coverLetter: File | null;
}

const positions = [
  "Program Instructor - Chess",
  "Program Instructor - Sports (Soccer, Basketball, Volleyball)",
  "Program Instructor - Creative Writing",
  "Program Instructor - Performing Arts",
  "Program Instructor - Art & Crafts",
  "Program Coordinator",
  "Administrative Assistant",
  "Substitute Instructor",
  "Other",
];

const availabilityOptions = [
  "Part-time (After school hours)",
  "Part-time (Weekends)",
  "Part-time (Both after school and weekends)",
  "Full-time",
  "Substitute/As needed",
];

const experienceLevels = [
  "No experience (Willing to learn)",
  "Some experience with children",
  "Educational background",
  "Professional teaching experience",
  "Extensive experience in field",
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function ApplicationForm() {
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    positionInterest: "",
    availabilityType: "",
    experience: "",
    message: "",
    resume: null,
    coverLetter: null,
  });

  const updateFormData = (field: keyof ApplicationFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (
    field: "resume" | "coverLetter",
    file: File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.city &&
      formData.state &&
      formData.positionInterest &&
      formData.availabilityType &&
      formData.experience &&
      formData.resume
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Application form submitted:", formData);
    setIsSubmitting(false);
    setShowDialog(true);
  };

  const FileUploadArea = ({
    id,
    label,
    file,
    onChange,
    required = false,
  }: {
    id: string;
    label: string;
    file: File | null;
    onChange: (file: File | null) => void;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="p-6 border-2 border-muted-foreground/25 hover:border-muted-foreground/50 border-dashed rounded-lg transition-colors">
        {file ? (
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <FileText className="h-4 w-4" />
              <span className="text-sm truncate">{file.name}</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onChange(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <label htmlFor={id} className="cursor-pointer">
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
              <div className="mt-2">
                <span className="font-medium text-sm">Upload a file</span>
                <span className="text-muted-foreground text-sm">
                  {" "}
                  or drag and drop
                </span>
              </div>
              <p className="mt-1 text-muted-foreground text-xs">
                PDF, DOC, DOCX up to 10MB
              </p>
            </div>
            <input
              id={id}
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0] || null;
                onChange(selectedFile);
              }}
            />
          </label>
        )}
      </div>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="pb-24 sm:pb-32 py-24">
        <div className="space-y-6 lg:mr-0 mx-auto">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Personal Information
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
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">
                  State <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => updateFormData("state", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Position & Availability */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Position & Availability
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="positionInterest">
                  Position of Interest <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.positionInterest}
                  onValueChange={(value) =>
                    updateFormData("positionInterest", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availabilityType">
                  Availability <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.availabilityType}
                  onValueChange={(value) =>
                    updateFormData("availabilityType", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">
                  Experience Level <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => updateFormData("experience", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Required Documents
            </h3>

            <FileUploadArea
              id="resume"
              label="Resume"
              file={formData.resume}
              onChange={(file) => handleFileUpload("resume", file)}
              required
            />

            <FileUploadArea
              id="coverLetter"
              label="Cover Letter"
              file={formData.coverLetter}
              onChange={(file) => handleFileUpload("coverLetter", file)}
            />
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Additional Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us about yourself</Label>
              <p className="text-muted-foreground text-sm">
                Share your passion for education, relevant experience, or why
                you'd like to join our team
              </p>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => updateFormData("message", e.target.value)}
                className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[80px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                placeholder="Tell us what makes you excited about working with children and education..."
              />
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="flex gap-2 items-center w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="border-2 border-white/30 border-t-white rounded-full h-4 w-4 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          </div>
        </div>
      </form>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Application Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <p>
                Thank you for your interest in joining our team,{" "}
                {formData.firstName}!
              </p>
              <p>
                We have received your application for the{" "}
                <strong>{formData.positionInterest}</strong> position and will
                review it carefully.
              </p>
              <p>
                Our hiring team will contact you at{" "}
                <strong>{formData.email}</strong> within 1-2 weeks if your
                qualifications match our current openings.
              </p>
              <p className="text-muted-foreground text-sm">
                We appreciate your interest in making a positive impact on
                children's lives through education!
              </p>
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
