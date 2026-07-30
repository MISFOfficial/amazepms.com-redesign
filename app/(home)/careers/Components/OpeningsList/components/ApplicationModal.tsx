"use client";

import React, { useState } from "react";
import { X, Send, Mail, Briefcase, CheckCircle2 } from "lucide-react";
import { JobOpeningItem } from "./Content";

interface ApplicationModalProps {
  job: JobOpeningItem | null;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  job,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
  });

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--black)]/80 backdrop-blur-md p-4 transition-all">
      <div className="relative w-full max-w-lg bg-[var(--white)] primary-rounded p-6 sm:p-8 border border-[var(--primary)]/20  text-[var(--black)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--white)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono font-bold uppercase mb-2">
                <Briefcase className="w-3.5 h-3.5 text-[var(--secondary)]" />
                <span>APPLYING FOR</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] tracking-tight">
                {job.title}
              </h3>
              <p className="text-xs text-[var(--black)]/70 font-sans mt-1">
                Send your details to our recruitment team or email CV to{" "}
                <a
                  href="mailto:careers@amazepms.com"
                  className="text-[var(--secondary)] underline font-semibold"
                >
                  careers@amazepms.com
                </a>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 primary-rounded bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] "
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 primary-rounded bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] "
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9908538137"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 primary-rounded bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] "
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
                  YEARS OF EXPERIENCE / SUMMARY
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your relevant work experience..."
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-4 py-3 primary-rounded bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] "
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 primary-rounded bg-[var(--primary)] text-[var(--white)] font-bold text-xs sm:text-sm hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2 "
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>

                <a
                  href={`mailto:careers@amazepms.com?subject=Application for ${job.title}`}
                  className="py-3 px-4 primary-rounded bg-[var(--primary)]/10 text-[var(--primary)] font-semibold text-xs sm:text-sm hover:bg-[var(--primary)] hover:text-[var(--white)] transition-colors flex items-center justify-center gap-2 border border-[var(--primary)]/20"
                >
                  <Mail className="w-4 h-4 text-[var(--secondary)]" />
                  <span>Send via Email</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--secondary)]/15 border border-[var(--secondary)]/30 text-[var(--secondary)] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--primary)]">
              Application Received!
            </h3>
            <p className="text-xs sm:text-sm text-[var(--black)]/80 font-sans max-w-sm mx-auto">
              Thank you for applying for the position of{" "}
              <span className="text-[var(--secondary)] font-semibold">
                {job.title}
              </span>
              . Our recruitment team will review your profile and reach out
              shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[var(--primary)] text-[var(--white)] font-bold text-xs hover:bg-[var(--secondary)] transition-colors mt-2"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
