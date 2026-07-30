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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all">
      <div className="relative w-full max-w-lg bg-[#071330] rounded-3xl p-6 sm:p-8 border border-blue-900/60 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>APPLYING FOR</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {job.title}
              </h3>
              <p className="text-xs text-slate-300 font-sans mt-1">
                Send your details to our recruitment team or email CV to{" "}
                <a
                  href="mailto:careers@amazepms.com"
                  className="text-cyan-400 underline"
                >
                  careers@amazepms.com
                </a>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  YEARS OF EXPERIENCE / SUMMARY
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your relevant work experience..."
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>

                <a
                  href={`mailto:careers@amazepms.com?subject=Application for ${job.title}`}
                  className="py-3 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/15"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Send via Email</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-sm mx-auto">
              Thank you for applying for the position of{" "}
              <span className="text-cyan-300 font-semibold">{job.title}</span>. Our recruitment team will review your profile and reach out shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors mt-2"
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
