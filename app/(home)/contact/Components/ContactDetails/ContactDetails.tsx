"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { contactInfoData } from "./components/Content";
import ContactForm from "./components/ContactForm";

export function ContactDetails() {
  return (
    <section className="relative w-full bg-[var(--white)] py-16 sm:py-24 border-b border-[var(--primary)]/10 overflow-hidden text-[var(--black)]">
      <div className="ratio relative z-10 space-y-12">
        {/* Main Grid: Left Services & Right Office Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact For Our Services */}
          <div className="lg:col-span-6 bg-[var(--white)] rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Logo & Title Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-[var(--primary)]/15">
                <div className="relative w-36 h-14 bg-[var(--white)] p-2 rounded-xl shrink-0 shadow-md border border-[var(--primary)]/10">
                  <Image
                    src="/logo.png"
                    alt="Amaze PMS Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary)] tracking-tight">
                    {contactInfoData.servicesTitle}
                  </h2>
                  <span className="text-xs font-mono text-[var(--secondary)] font-semibold">
                    Comprehensive Property Management Solutions
                  </span>
                </div>
              </div>

              {/* 2 Column Services Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-3">
                  {contactInfoData.servicesColumn1.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--black)]/80">
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
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--black)]/80">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="pt-4 border-t border-[var(--primary)]/15 text-xs font-mono text-[var(--black)]/60">
              ⚡ Available 24/7 for commercial & residential site management inquiries.
            </div>
          </div>

          {/* Right Column: Office Address & Stay Connected */}
          <div className="lg:col-span-6 bg-[var(--white)] rounded-3xl p-6 sm:p-8 border border-[var(--primary)]/20 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] tracking-tight">
                  {contactInfoData.addressTitle}
                </h2>
                <h3 className="text-sm font-bold text-[var(--secondary)] font-sans mt-1">
                  {contactInfoData.stayConnectedHead}
                </h3>
              </div>

              {/* Address Box */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/15">
                  <MapPin className="w-5 h-5 text-[var(--secondary)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-[var(--primary)] font-bold uppercase block mb-0.5">
                      CORPORATE HEADQUARTERS
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--black)]/80 leading-relaxed font-sans">
                      {contactInfoData.address}
                    </p>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-colors">
                  <Phone className="w-5 h-5 text-[var(--secondary)] shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-[var(--primary)] font-bold uppercase block">
                      DIRECT CALL
                    </span>
                    <a
                      href={`tel:${contactInfoData.phone}`}
                      className="text-base font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors font-mono"
                    >
                      {contactInfoData.phone}
                    </a>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-colors">
                  <Mail className="w-5 h-5 text-[var(--secondary)] shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-[var(--primary)] font-bold uppercase block">
                      OFFICIAL EMAIL
                    </span>
                    <a
                      href={`mailto:${contactInfoData.email}`}
                      className="text-base font-bold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {contactInfoData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-[var(--primary)]/15 flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--black)]/60">
                PAN India Operations
              </span>
              <a
                href={`tel:${contactInfoData.phone}`}
                className="px-4 py-2 rounded-xl bg-[var(--primary)] text-[var(--white)] font-bold text-xs hover:bg-[var(--secondary)] transition-colors shadow-md"
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

