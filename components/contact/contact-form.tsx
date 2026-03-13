"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setSubmitted(false);

    const response = await fetch("/api/contact/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      throw new Error(payload.error ?? "Failed to submit form.");
    }

    setSubmitted(true);
    reset();
  };

  return (
    <div className="fx-card rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] md:p-8">
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Book a Free Discovery Call</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Share your product goals and we will send a practical execution plan.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4" />
            <p>
              Request received. We will contact you within 24 hours with a proposed scope and
              timeline.
            </p>
          </div>
        </div>
      ) : null}

      <form
        className="mt-6 space-y-5 sm:mt-8"
        onSubmit={handleSubmit(async (values) => {
          try {
            await onSubmit(values);
          } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to submit form.";
            setSubmitted(false);
            setSubmitError(message);
          }
        })}
      >
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand"
            placeholder="Ava Thompson"
            {...register("name", { required: "Name is required." })}
          />
          {errors.name ? <p className="mt-2 text-xs text-red-600">{errors.name.message}</p> : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand"
            placeholder="ava@startup.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email.",
              },
            })}
          />
          {errors.email ? (
            <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand"
            placeholder="CodePrompt"
            {...register("company")}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="message">
            What are you building?
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand"
            placeholder="We need an MVP for a B2B SaaS workflow product..."
            {...register("message", { required: "Please share a short project brief." })}
          />
          {errors.message ? (
            <p className="mt-2 text-xs text-red-600">{errors.message.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-base btn-primary w-full px-6 py-3 text-sm font-semibold disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Project Brief"}
        </button>
        {submitError ? <p className="text-center text-xs text-red-600">{submitError}</p> : null}
      </form>
    </div>
  );
}
