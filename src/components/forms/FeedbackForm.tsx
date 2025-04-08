import DynamicButton from "@/components/buttons/button-dynamic";
import React, { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    // Add logic to handle form submission (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="lg:flex-auto">
      <div className="gap-x-8 gap-y-6 grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block font-semibold text-sm">
            Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block font-semibold text-sm">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block font-semibold text-sm">
            Feedback
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="block px-3.5 py-2 rounded-md w-full text-base dark:placeholder:text-accent placeholder:text-muted outline-1 -outline-offset-1"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <DynamicButton>Submit Feedback</DynamicButton>
      </div>
      <p className="mt-4 text-sm">
        By submitting this form, I agree to the{" "}
        <a href="#" className="font-semibold">
          privacy&nbsp;policy
        </a>
        .
      </p>
    </form>
  );
}
