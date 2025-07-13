"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  name: string;
  grades: string;
  school: string;
  principal: string;
  contactInfo: string;
  message: string;
}

export function RequestFormParentStudent() {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    grades: "",
    school: "",
    principal: "",
    contactInfo: "",
    message: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.grades &&
      formData.school &&
      formData.principal &&
      formData.contactInfo &&
      formData.message
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact_us/request_parent_student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Parent/Student request form submitted:", formData);
        setShowDialog(true);

        // Reset form
        setFormData({
          name: "",
          grades: "",
          school: "",
          principal: "",
          contactInfo: "",
          message: "",
        });
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
      <section></section>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Request Sent Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <p>
                Thank you for your interest in bringing our programs to{" "}
                <strong>{formData.school}</strong>!
              </p>
              <p>
                We have received your request and will reach out to both you and
                the school administration to discuss program options and next
                steps.
              </p>
              <p>
                If you have any immediate questions, please feel free to call
                our office at <strong>(714) 509-0069</strong> during business
                hours.
              </p>
              <p className="text-muted-foreground text-sm">
                We appreciate your advocacy for quality educational programming!
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
