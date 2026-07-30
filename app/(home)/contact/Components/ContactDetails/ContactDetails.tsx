"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";
import { contactInfoData } from "./components/Content";
import ContactForm from "./components/ContactForm";

export function ContactDetails() {
  return (
    <section className="relative w-full bg-slate-950 py-16 sm:py-24 border-b border-blue-950/80 overflow-hidden text-white">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="ratio relative z-10 space-y-12">
        {/* Main Grid: Left Services & Right Office Info matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact For Our Services matching Screenshot */}
          <div className="lg:col-span-6 bg-[#071330] rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Logo & Title Header matching Screenshot */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-white/10">
                <div className="relative w-36 h-14 bg-white p-2 rounded-xl shrink-0 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Amaze PMS Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {contactInfoData.servicesTitle}
                  </h2>
                  <span className="text-xs font-mono text-cyan-300">
                    Comprehensive Property Management Solutions
                  </span>
                </div>
              </div>

              {/* 2 Column Services Checklist matching Screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-3">
                  {contactInfoData.servicesColumn1.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  {contactInfoData.servicesColumn2.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              ⚡ Available 24/7 for commercial & residential site management inquiries.
            </div>
          </div>

          {/* Right Column: Office Address & Stay Connected matching Screenshot */}
          <div className="lg:col-span-6 bg-[#071330] rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header matching Screenshot */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {contactInfoData.addressTitle}
                </h2>
                <h3 className="text-sm font-bold text-cyan-400 font-sans mt-1">
                  {contactInfoData.stayConnectedHead}
                </h3>
              </div>

              {/* Address Box matching Screenshot */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-cyan-300 uppercase block mb-0.5">
                      CORPORATE HEADQUARTERS
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed font-sans">
                      {contactInfoData.address}
                    </p>
                  </div>
                </div>

                {/* Phone Contact matching Screenshot */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-cyan-300 uppercase block">
                      DIRECT CALL
                    </span>
                    <a
                      href={`tel:${contactInfoData.phone}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors font-mono"
                    >
                      {contactInfoData.phone}
                    </a>
                  </div>
                </div>

                {/* Email Contact matching Screenshot */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-cyan-300 uppercase block">
                      OFFICIAL EMAIL
                    </span>
                    <a
                      href={`mailto:${contactInfoData.email}`}
                      className="text-base font-bold text-cyan-300 hover:text-white transition-colors"
                    >
                      {contactInfoData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                PAN India Operations
              </span>
              <a
                href={`tel:${contactInfoData.phone}`}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shadow-md"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-3xl mx-auto pt-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
