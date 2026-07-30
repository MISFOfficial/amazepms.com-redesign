"use client";

import React from "react";
import FooterCTA from "./components/FooterCTA";
import FooterBrand from "./components/FooterBrand";
import FooterNavColumn from "./components/FooterNav";
import FooterPresenceContact from "./components/FooterPresenceContact";
import FooterBottom from "./components/FooterBottom";

export function Footer() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Strength", href: "/our-strength" },
    { name: "Gallery", href: "/gallery" },
  ];

  const quickLinks = [
    { name: "Our Clients", href: "/our-clients" },
    { name: "Recruitments", href: "/recruitments" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[var(--primary)] text-[var(--white)]  relative">
      {/* 1. Service Consultation CTA Banner */}
      <FooterCTA />

      {/* 2. Main Multi-Column Footer Content */}
      <div className="ratio py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & ISO Certification */}
          <FooterBrand />

          {/* Menu Navigation Column */}
          <FooterNavColumn title="Menu" items={menuItems} />

          {/* Quick Links Column */}
          <FooterNavColumn title="Quick Links" items={quickLinks} />

          {/* Presence & Contact Information */}
          <FooterPresenceContact />
        </div>
      </div>

      {/* 3. Bottom Bar & Copyright */}
      <FooterBottom />
    </footer>
  );
}

export default Footer;
