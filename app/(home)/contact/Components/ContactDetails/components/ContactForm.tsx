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
    <div className="bg-[#071330] rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Send Us A Message
          </h3>
          <p className="text-xs text-slate-300 font-sans">
            Fill out the form below for service inquiries or quotes.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
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
                placeholder="john@example.com"
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
                placeholder="+91 9100694137"
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
              SERVICE INTERESTED *
            </label>
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
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
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
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
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </button>
        </form>
      ) : (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Inquiry Sent!</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-sm mx-auto">
            Thank you for reaching out to Amaze PMS. Our executive team will respond to your inquiry within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
