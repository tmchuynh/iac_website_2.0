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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Send, Star } from "lucide-react";
import { useState } from "react";

interface FeedbackFormData {
  name: string;
  email: string;
  participationType: string;
  program: string;
  school: string;
  overallRating: number;
  feedbackType: string[];
  specificAreas: string[];
  programSuggestions: string;
  staffRecognition: string;
  improvements: string;
  additionalComments: string;
  anonymous: boolean;
  contactBack: boolean;
}

const participationTypes = [
  "Student participant",
  "Parent/Guardian",
  "Teacher/Educator",
  "School administrator",
  "Community member",
  "Other",
];

const programs = [
  "Chess",
  "Soccer",
  "Basketball",
  "Volleyball",
  "Flag Football",
  "Performing Arts",
  "Creative Writing",
  "Art Club",
  "Comic Book Art Club",
  "Public Speaking",
  "Dance",
  "Multiple programs",
  "Other",
];

const feedbackTypes = [
  "Program content feedback",
  "Instructor performance",
  "Administrative experience",
  "Facility/venue feedback",
  "Communication feedback",
  "Scheduling feedback",
  "Suggest new programs",
  "General praise",
  "Areas for improvement",
];

const specificAreas = [
  "Age-appropriate content",
  "Student engagement",
  "Learning outcomes",
  "Safety measures",
  "Inclusivity/accessibility",
  "Communication with families",
  "Registration process",
  "Program duration",
  "Class size",
  "Materials/equipment",
];

const StarRating = ({
  rating,
  onRatingChange,
}: {
  rating: number;
  onRatingChange: (rating: number) => void;
}) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300 hover:text-yellow-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default function FeedbackForm() {
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    participationType: "",
    program: "",
    school: "",
    overallRating: 0,
    feedbackType: [],
    specificAreas: [],
    programSuggestions: "",
    staffRecognition: "",
    improvements: "",
    additionalComments: "",
    anonymous: false,
    contactBack: false,
  });

  const updateFormData = (field: keyof FeedbackFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (
    field: "feedbackType" | "specificAreas",
    value: string,
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const isFormValid = () => {
    if (formData.anonymous) {
      return (
        formData.participationType &&
        formData.overallRating > 0 &&
        formData.feedbackType.length > 0
      );
    }
    return (
      formData.name &&
      formData.email &&
      formData.participationType &&
      formData.overallRating > 0 &&
      formData.feedbackType.length > 0
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      // If using the existing API endpoint
      const apiData = {
        name: formData.anonymous ? "Anonymous" : formData.name,
        email: formData.anonymous ? "anonymous@feedback.com" : formData.email,
        message: `
Participation Type: ${formData.participationType}
Program: ${formData.program}
School: ${formData.school}
Overall Rating: ${formData.overallRating}/5 stars
Feedback Type: ${formData.feedbackType.join(", ")}
Specific Areas: ${formData.specificAreas.join(", ")}

Program Suggestions: ${formData.programSuggestions}
Staff Recognition: ${formData.staffRecognition}
Improvements: ${formData.improvements}
Additional Comments: ${formData.additionalComments}

Contact Back: ${formData.contactBack ? "Yes" : "No"}
        `.trim(),
      };

      const res = await fetch("/api/contact_us/provide_feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (res.ok) {
        setShowDialog(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          participationType: "",
          program: "",
          school: "",
          overallRating: 0,
          feedbackType: [],
          specificAreas: [],
          programSuggestions: "",
          staffRecognition: "",
          improvements: "",
          additionalComments: "",
          anonymous: false,
          contactBack: false,
        });
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert(
        "An error occurred while submitting your feedback. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="lg:flex-auto space-y-8 mt-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
            Your Information
          </h3>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="anonymous"
              checked={formData.anonymous}
              onCheckedChange={(checked) =>
                updateFormData("anonymous", checked)
              }
            />
            <Label htmlFor="anonymous" className="text-sm">
              Submit feedback anonymously
            </Label>
          </div>

          {!formData.anonymous && (
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  required={!formData.anonymous}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  required={!formData.anonymous}
                />
              </div>
            </div>
          )}

          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="participationType">
                How are you connected to IAC?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.participationType}
                onValueChange={(value) =>
                  updateFormData("participationType", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {participationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="program">
                Which program is this feedback about?
              </Label>
              <Select
                value={formData.program}
                onValueChange={(value) => updateFormData("program", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="school">School/Location (if applicable)</Label>
            <Input
              id="school"
              type="text"
              value={formData.school}
              onChange={(e) => updateFormData("school", e.target.value)}
              placeholder="Enter school or program location"
            />
          </div>
        </div>

        {/* Overall Rating */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
            Overall Experience
          </h3>

          <div className="space-y-2">
            <Label>
              Overall Rating <span className="text-red-500">*</span>
            </Label>
            <p className="text-muted-foreground text-sm">
              How would you rate your overall experience with IAC?
            </p>
            <StarRating
              rating={formData.overallRating}
              onRatingChange={(rating) =>
                updateFormData("overallRating", rating)
              }
            />
          </div>
        </div>

        {/* Feedback Type */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
            Feedback Categories
          </h3>

          <div className="space-y-2">
            <Label>
              What type of feedback are you providing?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <p className="text-muted-foreground text-sm">
              Select all that apply
            </p>
            <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
              {feedbackTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={formData.feedbackType.includes(type)}
                    onCheckedChange={(checked) =>
                      handleMultiSelect(
                        "feedbackType",
                        type,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specific Areas */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
            Specific Areas (Optional)
          </h3>

          <div className="space-y-2">
            <Label>Which specific areas would you like to comment on?</Label>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3">
              {specificAreas.map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <Checkbox
                    id={area}
                    checked={formData.specificAreas.includes(area)}
                    onCheckedChange={(checked) =>
                      handleMultiSelect(
                        "specificAreas",
                        area,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={area} className="text-sm">
                    {area}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
            Detailed Feedback
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="programSuggestions">New Program Ideas</Label>
              <textarea
                id="programSuggestions"
                rows={3}
                value={formData.programSuggestions}
                onChange={(e) =>
                  updateFormData("programSuggestions", e.target.value)
                }
                className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[60px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                placeholder="Suggest topics, activities, or programs you'd like to see..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="staffRecognition">Staff Recognition</Label>
              <textarea
                id="staffRecognition"
                rows={3}
                value={formData.staffRecognition}
                onChange={(e) =>
                  updateFormData("staffRecognition", e.target.value)
                }
                className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[60px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                placeholder="Recognize an instructor or staff member who made your experience memorable..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="improvements">Areas for Improvement</Label>
              <textarea
                id="improvements"
                rows={3}
                value={formData.improvements}
                onChange={(e) => updateFormData("improvements", e.target.value)}
                className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[60px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                placeholder="Share suggestions for how we can improve our programs or services..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalComments">Additional Comments</Label>
              <textarea
                id="additionalComments"
                rows={4}
                value={formData.additionalComments}
                onChange={(e) =>
                  updateFormData("additionalComments", e.target.value)
                }
                className="flex bg-background disabled:opacity-50 px-3 py-2 border border-input focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md min-h-[80px] w-full text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:outline-none"
                placeholder="Share any other thoughts, experiences, or feedback..."
              />
            </div>
          </div>
        </div>

        {/* Contact Preferences */}
        {!formData.anonymous && (
          <div className="space-y-4">
            <h3 className="pb-2 border-b border-border font-semibold text-primary text-xl">
              Contact Preferences
            </h3>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="contactBack"
                checked={formData.contactBack}
                onCheckedChange={(checked) =>
                  updateFormData("contactBack", checked)
                }
              />
              <Label htmlFor="contactBack" className="text-sm">
                I would like someone from IAC to follow up with me about my
                feedback
              </Label>
            </div>
          </div>
        )}

        <div className="pt-6">
          <Button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className="flex gap-2 items-center"
          >
            {isSubmitting ? (
              <>
                <div className="border-2 border-white/30 border-t-white rounded-full h-4 w-4 animate-spin" />
                Submitting Feedback...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Feedback
              </>
            )}
          </Button>
        </div>

        <p className="text-muted-foreground text-sm">
          By submitting this form, I agree to the{" "}
          <a href="#" className="font-semibold underline">
            privacy policy
          </a>
          . All feedback is reviewed with care and helps us improve our
          programs.
        </p>
      </form>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Feedback Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <p>
                Thank you for taking the time to share your valuable feedback
                with us!
              </p>
              <p>
                Your insights help us continuously improve our programs and
                better serve students, educators, and families in our community.
              </p>
              {formData.contactBack && !formData.anonymous && (
                <p>
                  Since you requested follow-up, we will contact you at{" "}
                  <strong>{formData.email}</strong> within a few business days
                  to discuss your feedback further.
                </p>
              )}
              <p className="text-muted-foreground text-sm">
                We truly appreciate your partnership in helping us create
                meaningful educational experiences!
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
