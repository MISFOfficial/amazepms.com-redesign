"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "PMS Services",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--white)] rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20 shadow-xl space-y-6 text-[var(--black)]">
      <div className="flex items-center gap-3 pb-4 border-b border-[var(--primary)]/15">
        <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5 text-[var(--secondary)]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--primary)] tracking-tight">
            Send Us A Message
          </h3>
          <p className="text-xs text-[var(--black)]/70 font-sans">
            Fill out the form below for service inquiries or quotes.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
              YOUR NAME *
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] shadow-sm"
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
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 9100694137"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
              SERVICE INTERESTED *
            </label>
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] shadow-sm"
            >
              <option>PMS Services</option>
              <option>MEP Services</option>
              <option>House Keeping Services</option>
              <option>Security Services</option>
              <option>Gardening Services</option>
              <option>Deep Cleaning Services</option>
              <option>Maid Cleaning Services</option>
              <option>Facade Services</option>
              <option>Project Cleaning Services</option>
              <option>Pest Control Services</option>
              <option>Office Support Services</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-[var(--black)]/80 mb-1.5 font-bold">
              MESSAGE / REQUIREMENT *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your facility size, location, and required services..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[var(--white)] border border-[var(--primary)]/20 text-[var(--black)] placeholder-[var(--black)]/40 text-xs sm:text-sm focus:outline-none focus:border-[var(--secondary)] shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[var(--primary)] text-[var(--white)] font-bold text-xs sm:text-sm hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </button>
        </form>
      ) : (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[var(--secondary)]/15 border border-[var(--secondary)]/30 text-[var(--secondary)] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--primary)]">Inquiry Sent!</h3>
          <p className="text-xs sm:text-sm text-[var(--black)]/80 font-sans max-w-sm mx-auto">
            Thank you for reaching out to Amaze PMS. Our executive team will respond to your inquiry within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold hover:bg-[var(--primary)] hover:text-[var(--white)] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

