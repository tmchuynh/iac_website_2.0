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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  FileText,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  positionsInterest: string[];
  availabilityDays: string[];
  wednesdayAcknowledgment: boolean;
  experience: string;
  message: string;
  resume: File | null;
  coverLetter: File | null;
  // Position-specific experience fields
  chessExperience: string;
  adminExperience: string;
  classroomManagementExperience: string;
  soccerExperience: string;
  basketballExperience: string;
  volleyballExperience: string;
  flagFootballExperience: string;
  creativeWritingExperience: string;
  performingArtsExperience: string;
  artsCraftsExperience: string;
  publicSpeakingExperience: string;
  comicBookExperience: string;
  substituteExperience: string;
  // Experience with children (for educational background or better)
  childrenExperience: string;
}

const positions = [
  "Program Instructor - Chess",
  "Program Instructor - Soccer",
  "Program Instructor - Basketball",
  "Program Instructor - Volleyball",
  "Program Instructor - Flag Football",
  "Program Instructor - Creative Writing",
  "Program Instructor - Performing Arts",
  "Program Instructor - Art & Crafts",
  "Program Instructor - Public Speaking",
  "Program Instructor - Comic Book",
  "Administrative Assistant",
  "Substitute Instructor",
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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
  const [currentStep, setCurrentStep] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPositions, setSubmittedPositions] = useState<string[]>([]);
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    positionsInterest: [],
    availabilityDays: [],
    wednesdayAcknowledgment: false,
    experience: "",
    message: "",
    resume: null,
    coverLetter: null,
    chessExperience: "",
    adminExperience: "",
    classroomManagementExperience: "",
    soccerExperience: "",
    basketballExperience: "",
    volleyballExperience: "",
    flagFootballExperience: "",
    creativeWritingExperience: "",
    performingArtsExperience: "",
    artsCraftsExperience: "",
    publicSpeakingExperience: "",
    comicBookExperience: "",
    substituteExperience: "",
    childrenExperience: "",
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

  const togglePosition = (position: string) => {
    setFormData((prev) => ({
      ...prev,
      positionsInterest: prev.positionsInterest.includes(position)
        ? prev.positionsInterest.filter((p) => p !== position)
        : [...prev.positionsInterest, position],
    }));
  };

  const toggleAvailabilityDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      availabilityDays: prev.availabilityDays.includes(day)
        ? prev.availabilityDays.filter((d) => d !== day)
        : [...prev.availabilityDays, day],
    }));
  };

  const isStep1Valid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.city &&
      formData.state &&
      formData.positionsInterest.length > 0 &&
      formData.availabilityDays.length > 0 &&
      formData.wednesdayAcknowledgment &&
      formData.experience
    );
  };

  const isStep2Valid = () => {
    return formData.resume;
  };

  const isFormValid = () => {
    return isStep1Valid() && isStep2Valid();
  };

  const getProgress = () => {
    return (currentStep / 3) * 100;
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const showChildrenExperienceField = () => {
    return (
      formData.experience === "Educational background" ||
      formData.experience === "Professional teaching experience" ||
      formData.experience === "Extensive experience in field"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only allow submission on step 3
    if (currentStep !== 3) return;

    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      // Convert files to base64 for transmission
      const resumeBase64 = formData.resume
        ? await fileToBase64(formData.resume)
        : null;
      const coverLetterBase64 = formData.coverLetter
        ? await fileToBase64(formData.coverLetter)
        : null;

      // Prepare data for API call
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        city: formData.city,
        state: formData.state,
        positionsInterest: formData.positionsInterest,
        availabilityDays: formData.availabilityDays,
        wednesdayAcknowledgment: formData.wednesdayAcknowledgment,
        experience: formData.experience,
        message: formData.message,
        resume: resumeBase64
          ? {
              name: formData.resume!.name,
              type: formData.resume!.type,
              data: resumeBase64,
            }
          : null,
        coverLetter: coverLetterBase64
          ? {
              name: formData.coverLetter!.name,
              type: formData.coverLetter!.type,
              data: coverLetterBase64,
            }
          : null,
        chessExperience: formData.chessExperience,
        adminExperience: formData.adminExperience,
        classroomManagementExperience: formData.classroomManagementExperience,
        soccerExperience: formData.soccerExperience,
        basketballExperience: formData.basketballExperience,
        volleyballExperience: formData.volleyballExperience,
        flagFootballExperience: formData.flagFootballExperience,
        creativeWritingExperience: formData.creativeWritingExperience,
        performingArtsExperience: formData.performingArtsExperience,
        artsCraftsExperience: formData.artsCraftsExperience,
        publicSpeakingExperience: formData.publicSpeakingExperience,
        comicBookExperience: formData.comicBookExperience,
        substituteExperience: formData.substituteExperience,
        childrenExperience: formData.childrenExperience,
      };

      const response = await fetch("/api/contact_us/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        console.log("Application form submitted:", formData);
        setSubmittedFirstName(formData.firstName); // Store first name before clearing
        setSubmittedEmail(formData.email); // Store email before clearing
        setSubmittedPositions([...formData.positionsInterest]); // Store positions before clearing
        setShowDialog(true);

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          city: "",
          state: "",
          positionsInterest: [],
          availabilityDays: [],
          wednesdayAcknowledgment: false,
          experience: "",
          message: "",
          resume: null,
          coverLetter: null,
          chessExperience: "",
          adminExperience: "",
          classroomManagementExperience: "",
          soccerExperience: "",
          basketballExperience: "",
          volleyballExperience: "",
          flagFootballExperience: "",
          creativeWritingExperience: "",
          performingArtsExperience: "",
          artsCraftsExperience: "",
          publicSpeakingExperience: "",
          comicBookExperience: "",
          substituteExperience: "",
          childrenExperience: "",
        });
        setCurrentStep(1);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "An error occurred while submitting your application. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  // Helper function to convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
        const base64 = result.split(",")[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
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
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          // Prevent Enter key from submitting form unless on step 3
          if (e.key === "Enter" && currentStep !== 3) {
            e.preventDefault();
          }
        }}
        className="pb-24 sm:pb-32 py-24"
      >
        <div className="space-y-6 lg:mr-0 mx-auto">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-muted-foreground text-sm">
              <span>Step {currentStep} of 3</span>
              <span>{Math.round(getProgress())}% Complete</span>
            </div>
            <Progress value={getProgress()} className="w-full" />
            <div className="flex justify-between text-muted-foreground text-xs">
              <span>Personal Info</span>
              <span>Documents</span>
              <span>Additional Info</span>
            </div>
          </div>

          {/* Step 1: Personal Information, Position & Availability */}
          {currentStep === 1 && (
            <div className="space-y-6">
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
                      onChange={(e) =>
                        updateFormData("lastName", e.target.value)
                      }
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
                  <div className="space-y-3">
                    <Label>
                      Positions of Interest{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      Select all positions you're interested in applying for:
                    </p>
                    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                      {positions.map((position) => (
                        <div
                          key={position}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={position}
                            checked={formData.positionsInterest.includes(
                              position
                            )}
                            onCheckedChange={() => togglePosition(position)}
                          />
                          <Label
                            htmlFor={position}
                            className="font-normal leading-relaxed text-sm cursor-pointer"
                          >
                            {position}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>
                      Availability <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      Select the days you're available to work:
                    </p>
                    <div className="gap-3 grid grid-cols-2 sm:grid-cols-5">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox
                            id={day}
                            checked={formData.availabilityDays.includes(day)}
                            onCheckedChange={() => toggleAvailabilityDay(day)}
                          />
                          <Label
                            htmlFor={day}
                            className="font-normal text-sm cursor-pointer"
                          >
                            {day}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="wednesdayAcknowledgment"
                        checked={formData.wednesdayAcknowledgment}
                        onCheckedChange={(checked) =>
                          updateFormData("wednesdayAcknowledgment", checked)
                        }
                      />
                      <Label
                        htmlFor="wednesdayAcknowledgment"
                        className="leading-relaxed text-sm cursor-pointer"
                      >
                        <span className="text-red-500">*</span> I understand
                        that Wednesdays are the only day that work can be
                        promised for
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">
                      Experience Level <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) =>
                        updateFormData("experience", value)
                      }
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

              <div className="flex justify-end pt-6">
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStep1Valid()}
                  className="flex gap-2 items-center"
                >
                  Next: Documents
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Required Documents */}
          {currentStep === 2 && (
            <div className="space-y-6">
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

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex gap-2 items-center"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStep2Valid()}
                  className="flex gap-2 items-center"
                >
                  Next: Additional Info
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
                  Additional Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about yourself</Label>
                  <p className="text-muted-foreground text-sm">
                    Share your passion for education, relevant experience, or
                    why you'd like to join our team
                  </p>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    placeholder="Tell us what makes you excited about working with children and education..."
                  />
                </div>

                {/* Position-specific experience questions */}
                {formData.positionsInterest.includes(
                  "Program Instructor - Chess"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="chessExperience">
                      Tell us about your past experience teaching and/or playing
                      chess
                    </Label>
                    <Textarea
                      id="chessExperience"
                      rows={3}
                      value={formData.chessExperience}
                      onChange={(e) =>
                        updateFormData("chessExperience", e.target.value)
                      }
                      placeholder="Describe your chess background, teaching experience, tournament play, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Administrative Assistant"
                ) && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="adminExperience">
                        Tell us about your previous experience in administration
                      </Label>
                      <Textarea
                        id="adminExperience"
                        rows={3}
                        value={formData.adminExperience}
                        onChange={(e) =>
                          updateFormData("adminExperience", e.target.value)
                        }
                        placeholder="Describe your administrative experience, office skills, software proficiency, etc..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="classroomManagementExperience">
                        Tell us about your previous experience with classroom
                        management
                      </Label>
                      <Textarea
                        id="classroomManagementExperience"
                        rows={3}
                        value={formData.classroomManagementExperience}
                        onChange={(e) =>
                          updateFormData(
                            "classroomManagementExperience",
                            e.target.value
                          )
                        }
                        placeholder="Describe your experience managing classrooms, working with students, etc..."
                      />
                    </div>
                  </>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Soccer"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="soccerExperience">
                      Tell us about your past experience teaching and/or playing
                      soccer
                    </Label>
                    <Textarea
                      id="soccerExperience"
                      rows={3}
                      value={formData.soccerExperience}
                      onChange={(e) =>
                        updateFormData("soccerExperience", e.target.value)
                      }
                      placeholder="Describe your soccer background, coaching experience, playing history, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Basketball"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="basketballExperience">
                      Tell us about your past experience teaching and/or playing
                      basketball
                    </Label>
                    <Textarea
                      id="basketballExperience"
                      rows={3}
                      value={formData.basketballExperience}
                      onChange={(e) =>
                        updateFormData("basketballExperience", e.target.value)
                      }
                      placeholder="Describe your basketball background, coaching experience, playing history, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Volleyball"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="volleyballExperience">
                      Tell us about your past experience teaching and/or playing
                      volleyball
                    </Label>
                    <Textarea
                      id="volleyballExperience"
                      rows={3}
                      value={formData.volleyballExperience}
                      onChange={(e) =>
                        updateFormData("volleyballExperience", e.target.value)
                      }
                      placeholder="Describe your volleyball background, coaching experience, playing history, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Flag Football"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="flagFootballExperience">
                      Tell us about your past experience teaching and/or playing
                      flag football
                    </Label>
                    <Textarea
                      id="flagFootballExperience"
                      rows={3}
                      value={formData.flagFootballExperience}
                      onChange={(e) =>
                        updateFormData("flagFootballExperience", e.target.value)
                      }
                      placeholder="Describe your flag football background, coaching experience, playing history, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Creative Writing"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="creativeWritingExperience">
                      Tell us about your past experience teaching and/or
                      practicing creative writing
                    </Label>
                    <Textarea
                      id="creativeWritingExperience"
                      rows={3}
                      value={formData.creativeWritingExperience}
                      onChange={(e) =>
                        updateFormData(
                          "creativeWritingExperience",
                          e.target.value
                        )
                      }
                      placeholder="Describe your creative writing background, teaching experience, published works, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Performing Arts"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="performingArtsExperience">
                      Tell us about your past experience teaching and/or
                      practicing performing arts
                    </Label>
                    <Textarea
                      id="performingArtsExperience"
                      rows={3}
                      value={formData.performingArtsExperience}
                      onChange={(e) =>
                        updateFormData(
                          "performingArtsExperience",
                          e.target.value
                        )
                      }
                      placeholder="Describe your performing arts background, teaching experience, performance history, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Art & Crafts"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="artsCraftsExperience">
                      Tell us about your past experience teaching and/or
                      practicing arts & crafts
                    </Label>
                    <Textarea
                      id="artsCraftsExperience"
                      rows={3}
                      value={formData.artsCraftsExperience}
                      onChange={(e) =>
                        updateFormData("artsCraftsExperience", e.target.value)
                      }
                      placeholder="Describe your arts & crafts background, teaching experience, artistic skills, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Public Speaking"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="publicSpeakingExperience">
                      Tell us about your past experience teaching and/or
                      practicing public speaking
                    </Label>
                    <Textarea
                      id="publicSpeakingExperience"
                      rows={3}
                      value={formData.publicSpeakingExperience}
                      onChange={(e) =>
                        updateFormData(
                          "publicSpeakingExperience",
                          e.target.value
                        )
                      }
                      placeholder="Describe your public speaking background, teaching experience, speaking engagements, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Program Instructor - Comic Book"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="comicBookExperience">
                      Tell us about your past experience teaching and/or
                      creating comic books
                    </Label>
                    <Textarea
                      id="comicBookExperience"
                      rows={3}
                      value={formData.comicBookExperience}
                      onChange={(e) =>
                        updateFormData("comicBookExperience", e.target.value)
                      }
                      placeholder="Describe your comic book background, teaching experience, creative work, etc..."
                    />
                  </div>
                )}

                {formData.positionsInterest.includes(
                  "Substitute Instructor"
                ) && (
                  <div className="space-y-2">
                    <Label htmlFor="substituteExperience">
                      Tell us about your past experience as a substitute or
                      flexible instructor
                    </Label>
                    <Textarea
                      id="substituteExperience"
                      rows={3}
                      value={formData.substituteExperience}
                      onChange={(e) =>
                        updateFormData("substituteExperience", e.target.value)
                      }
                      placeholder="Describe your substitute teaching experience, flexibility, adaptability, etc..."
                    />
                  </div>
                )}

                {/* Experience with children field for educational background or better */}
                {showChildrenExperienceField() && (
                  <div className="space-y-2">
                    <Label htmlFor="childrenExperience">
                      Tell us about your past experience working with children
                    </Label>
                    <Textarea
                      id="childrenExperience"
                      rows={3}
                      value={formData.childrenExperience}
                      onChange={(e) =>
                        updateFormData("childrenExperience", e.target.value)
                      }
                      placeholder="Describe your experience working with children, age groups, teaching methods, etc..."
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex gap-2 items-center"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="flex gap-2 items-center"
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
          )}
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
            <DialogDescription>
              Thank you for your interest in joining our team,{" "}
              {submittedFirstName}!
            </DialogDescription>
            <div className="space-y-2">
              <div>
                We have received your application for the{" "}
                <strong>{submittedPositions.join(", ")}</strong> position
                {submittedPositions.length > 1 ? "s" : ""} and will review it
                carefully.
              </div>
              <div>
                Our hiring team will contact you at{" "}
                <strong>{submittedEmail}</strong> within 1-2 weeks if your
                qualifications match our current openings.
              </div>
              <div className="bg-blue-50 mt-4 p-3 border border-blue-200 rounded-md">
                <div className="text-blue-800 text-sm">
                  <strong>Next Steps:</strong>
                </div>
                <ul className="space-y-1 mt-1 text-blue-700 text-sm">
                  <li>• We'll review your application and documents</li>
                  <li>
                    • Qualified candidates will be contacted for an interview
                  </li>
                  <li>
                    • Please feel free to call us at{" "}
                    <strong>(714) 509-0069</strong> if you have any questions
                  </li>
                </ul>
              </div>
              <div className="text-muted-foreground text-sm">
                We appreciate your interest in making a positive impact on
                children's lives through education!
              </div>
            </div>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
