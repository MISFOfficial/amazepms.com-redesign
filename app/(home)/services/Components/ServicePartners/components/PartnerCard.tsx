"use client";

import React from "react";
import Image from "next/image";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { ServicePartnerItem } from "./Content";

interface PartnerCardProps {
  partner: ServicePartnerItem;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const servicesList = partner.subtitleServices.split(",").map((s) => s.trim());

  const renderLogo = () => {
    switch (partner.logoType) {
      case "amaze":
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            <div className="relative w-56 h-28 sm:w-60 sm:h-32">
              <Image
                src="/logo.png"
                alt="Amaze Property Management Solutions"
                fill
                className="object-contain"
              />
            </div>
          </div>
        );
      case "action_force":
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            <div className="relative w-56 h-28 sm:w-60 sm:h-32">
              <Image
                src="/Af.png"
                alt="Action Force Security Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        );
      case "afs":
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            <div className="relative w-56 h-28 sm:w-60 sm:h-32">
              <Image
                src="/AFS.png"
                alt="AFS Facility Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[var(--white)] primary-rounded  border border-[var(--primary)]/20  hover:border-[var(--secondary)] hover: transition-all duration-500 overflow-hidden flex flex-col justify-between group text-[var(--black)]">
      {/* Top Logo Container */}
      <div className="relative p-8 bg-[var(--primary)]/5 flex items-center justify-center min-h-[200px] border-b border-[var(--primary)]/15">
        {/* Top-Left Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 text-[11px] font-mono font-bold tracking-wide ">
          {partner.badge}
        </div>

        {/* Center Logo Showcase */}
        <div className="group-hover:scale-105 transition-transform duration-500">
          {renderLogo()}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)] leading-snug group-hover:text-[var(--secondary)] transition-colors">
          {partner.title}
        </h3>

        {/* Service Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--primary)]/5 border border-[var(--primary)]/15 text-xs font-medium text-[var(--black)]/80"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
          <span>LEARN MORE ABOUT PARTNER</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
