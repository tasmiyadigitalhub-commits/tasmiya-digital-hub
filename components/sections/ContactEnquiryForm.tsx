"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Info, MessageSquare, Send } from "lucide-react";
import { servicesList, pricingPackages } from "@/lib/content";
import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface FormErrors {
  fullName?: string;
  email?: string;
  whatsapp?: string;
  message?: string;
}

const packageOptions = [
  ...pricingPackages.map((pkg) => `Package: ${pkg.name}`),
  ...servicesList.map((svc) => `Service: ${svc.shortTitle}`),
  "General Consultation",
];

function resolveInitialTopic(
  packageParam: string | null,
  serviceParam: string | null
): string {
  if (packageParam) {
    const matchedPkg = pricingPackages.find(
      (p) => p.id === packageParam || p.name.toLowerCase() === packageParam.toLowerCase()
    );
    if (matchedPkg) {
      return `Package: ${matchedPkg.name}`;
    }
  }
  if (serviceParam) {
    const matchedSvc = servicesList.find(
      (s) =>
        s.id === serviceParam ||
        s.shortTitle.toLowerCase() === serviceParam.toLowerCase() ||
        s.title.toLowerCase() === serviceParam.toLowerCase()
    );
    if (matchedSvc) {
      return `Service: ${matchedSvc.shortTitle}`;
    }
  }
  return "General Consultation";
}

export function ContactEnquiryForm() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");
  const serviceParam = searchParams.get("service");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [region, setRegion] = useState("Pakistan");
  const [topic, setTopic] = useState(() =>
    resolveInitialTopic(packageParam, serviceParam)
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedData, setValidatedData] = useState<{
    fullName: string;
    email: string;
    whatsapp: string;
    topic: string;
    region: string;
    message: string;
  } | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your name (at least 2 characters).";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (whatsapp.trim()) {
      const digitsOnly = whatsapp.replace(/\D/g, "");
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        nextErrors.whatsapp =
          "If provided, please enter a valid phone/WhatsApp number (7–15 digits).";
      }
    }
    if (!message.trim() || message.trim().length < 15) {
      nextErrors.message =
        "Please share a short summary of your business and goals (at least 15 characters).";
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setValidatedData({
      fullName: fullName.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      topic,
      region,
      message: message.trim(),
    });
  };

  const handleReset = () => {
    setValidatedData(null);
    setFullName("");
    setEmail("");
    setWhatsapp("");
    setMessage("");
    setErrors({});
  };

  if (validatedData) {
    const whatsappPrefill = `Hello Tasmiya Digital Hub, I am interested in your services. Name: ${validatedData.fullName}, Topic: ${validatedData.topic}, Location: ${validatedData.region}. Details: ${validatedData.message}`;

    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-[#24143D]/15 bg-white p-8 sm:p-10"
      >
        <div className="flex items-start gap-3 text-[#24143D]">
          <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#663EC4]" aria-hidden="true" />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Form Validated — Not Yet Sent Automatically
            </h2>
            <p className="text-base leading-relaxed text-[#4A3F61]">
              Thank you, <strong className="text-[#24143D]">{validatedData.fullName}</strong>.
              Your details for <strong className="text-[#24143D]">{validatedData.topic}</strong>{" "}
              ({validatedData.region}) passed form validation.
            </p>
            <div className="rounded-xl border border-[#9875E8]/40 bg-[#F8F7FC] p-4 text-sm leading-relaxed text-[#24143D]">
              <strong className="font-semibold">Backend Not Connected:</strong> Because no
              email or database backend is connected yet, this form has{" "}
              <strong>not delivered</strong> a message automatically. Click the button
              below to send your validated enquiry straight to our official WhatsApp (
              {siteConfig.contact.whatsappNumberDisplay}).
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={getWhatsAppHref(whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
              >
                <MessageSquare className="h-4 w-4 text-[#9875E8]" aria-hidden="true" />
                <span>Send This Enquiry via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#24143D]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#24143D] transition-colors duration-150 hover:bg-[#F8F7FC]"
              >
                Edit Form Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project enquiry form"
      className="space-y-6 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-10"
    >
      {/* Explicit Frontend Validation Notice */}
      <div className="flex items-start gap-3 rounded-xl border border-[#9875E8]/40 bg-[#F8F7FC] p-4 text-sm text-[#24143D]">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]" aria-hidden="true" />
        <p className="leading-relaxed">
          {siteConfig.contact.formBackendNotice}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="enquiry-name" className="block text-sm font-semibold text-[#24143D]">
            Your Name <span className="text-[#663EC4]">*</span>
          </label>
          <input
            id="enquiry-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "error-name" : undefined}
            placeholder="e.g. Ayesha Khan"
            className={cn(
              "min-h-[44px] w-full rounded-lg border bg-white px-4 py-2.5 text-base text-[#24143D] placeholder:text-[#4A3F61]/55",
              errors.fullName ? "border-red-600" : "border-[#24143D]/20 focus:border-[#663EC4]"
            )}
          />
          {errors.fullName && (
            <p id="error-name" className="flex items-center gap-1.5 text-xs font-medium text-red-700">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="enquiry-email" className="block text-sm font-semibold text-[#24143D]">
            Email Address <span className="text-[#663EC4]">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            placeholder="you@yourbusiness.com"
            className={cn(
              "min-h-[44px] w-full rounded-lg border bg-white px-4 py-2.5 text-base text-[#24143D] placeholder:text-[#4A3F61]/55",
              errors.email ? "border-red-600" : "border-[#24143D]/20 focus:border-[#663EC4]"
            )}
          />
          {errors.email && (
            <p id="error-email" className="flex items-center gap-1.5 text-xs font-medium text-red-700">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* WhatsApp / Phone Optional */}
        <div className="space-y-2">
          <label htmlFor="enquiry-whatsapp" className="block text-sm font-semibold text-[#24143D]">
            WhatsApp / Phone <span className="font-normal text-[#4A3F61]">(Optional)</span>
          </label>
          <input
            id="enquiry-whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            value={whatsapp}
            onChange={(e) => {
              setWhatsapp(e.target.value);
              if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
            }}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "error-whatsapp" : undefined}
            placeholder="e.g. +92 3XX XXXXXXX"
            className={cn(
              "min-h-[44px] w-full rounded-lg border bg-white px-4 py-2.5 text-base text-[#24143D] placeholder:text-[#4A3F61]/55",
              errors.whatsapp ? "border-red-600" : "border-[#24143D]/20 focus:border-[#663EC4]"
            )}
          />
          {errors.whatsapp && (
            <p id="error-whatsapp" className="flex items-center gap-1.5 text-xs font-medium text-red-700">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.whatsapp}</span>
            </p>
          )}
        </div>

        {/* Region */}
        <div className="space-y-2">
          <label htmlFor="enquiry-region" className="block text-sm font-semibold text-[#24143D]">
            Business Location
          </label>
          <select
            id="enquiry-region"
            name="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="min-h-[44px] w-full rounded-lg border border-[#24143D]/20 bg-white px-4 py-2.5 text-base text-[#24143D] focus:border-[#663EC4]"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="United Arab Emirates / GCC">United Arab Emirates / GCC</option>
            <option value="United Kingdom / Europe">United Kingdom / Europe</option>
            <option value="North America">North America</option>
            <option value="Other International Location">Other International Location</option>
          </select>
        </div>
      </div>

      {/* Topic / Package */}
      <div className="space-y-2">
        <label htmlFor="enquiry-topic" className="block text-sm font-semibold text-[#24143D]">
          Service or Package Interest
        </label>
        <select
          id="enquiry-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="min-h-[44px] w-full rounded-lg border border-[#24143D]/20 bg-white px-4 py-2.5 text-base text-[#24143D] focus:border-[#663EC4]"
        >
          {packageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="enquiry-message" className="block text-sm font-semibold text-[#24143D]">
          Tell Us About Your Business &amp; Project <span className="text-[#663EC4]">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "error-message" : undefined}
          placeholder="Briefly describe your business, current website (if any), and what you would like to achieve..."
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-3 text-base text-[#24143D] placeholder:text-[#4A3F61]/55",
            errors.message ? "border-red-600" : "border-[#24143D]/20 focus:border-[#663EC4]"
          )}
        />
        {errors.message && (
          <p id="error-message" className="flex items-center gap-1.5 text-xs font-medium text-red-700">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="flex flex-col justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#24143D] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          <span>Validate &amp; Prepare Enquiry</span>
        </button>
        <p className="text-xs text-[#4A3F61]">
          Does not submit to a backend server yet · Direct WhatsApp works immediately.
        </p>
      </div>
    </form>
  );
}
