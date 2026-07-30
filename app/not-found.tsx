import React from "react";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Users,
  PhoneCall,
  ArrowRight,
  Compass,
  Building2,
  ChevronRight,
} from "lucide-react";
import PropertyPattern from "@/app/Global/Patterns/PropertyPattern";
import Navigation from "./Global/Navigation/Navigation";
import Footer from "./Global/Footer/Footer";

export const metadata = {
  title: "404 - Page Not Found | Amaze PMS",
  description:
    "The page you are looking for does not exist or has been moved. Navigate back to Amaze Property Management Solutions home page.",
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Home",
      description: "Return to our main operational overview",
      href: "/",
      icon: Home,
    },
    {
      title: "Services",
      description: "Explore our PMS, Technical & Security solutions",
      href: "/services",
      icon: Briefcase,
    },
    {
      title: "Our Clients",
      description: "Discover our esteemed PAN India client portfolio",
      href: "/our-clients",
      icon: Users,
    },
    {
      title: "Contact Us",
      description: "Get 24/7 direct helpline & office location",
      href: "/contact",
      icon: PhoneCall,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--white)] text-[var(--black)] relative overflow-hidden">
      {/* Main 404 Hero Section */}
      <main className="relative py-16 sm:py-24 lg:py-32 my-auto">
        <PropertyPattern variant="construction" opacity={0.15} />

        <div className="ratio relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          {/* Large 404 Display & Heading */}
          <div className="space-y-3">
            <h1 className="text-7xl sm:text-9xl font-extrabold text-[var(--primary)] tracking-tighter font-mono leading-none">
              4<span className="text-[var(--secondary)]">0</span>4
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold text-[var(--black)] tracking-tight">
              Page Not Found
            </h2>
            <p className="text-xs sm:text-base text-[var(--black)]/75 max-w-xl mx-auto font-sans leading-relaxed">
              The property page or facility resource you requested does not
              exist or may have been relocated during our site updates.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--primary)] text-[var(--white)] text-xs sm:text-sm font-bold uppercase tracking-wider primary-rounded hover:bg-[var(--secondary)] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--white)] text-[var(--primary)] border border-[var(--primary)]/20 text-xs sm:text-sm font-bold uppercase tracking-wider primary-rounded hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors"
            >
              <Building2 className="w-4 h-4 text-[var(--secondary)]" />
              <span>Contact Support</span>
            </Link>
          </div>

          {/* Quick Links Navigation Grid */}
          <div className="pt-10 border-t border-[var(--primary)]/15 text-left">
            <span className="text-xs font-mono text-[var(--secondary)] font-bold uppercase tracking-wider block text-center mb-6">
              Popular Pages You Might Be Looking For
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className="p-4 bg-[var(--white)] primary-rounded border border-[var(--primary)]/15 hover:border-[var(--secondary)] transition-all group flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 primary-rounded bg-[var(--primary)]/10 text-[var(--secondary)] flex items-center justify-center group-hover:bg-[var(--secondary)] group-hover:text-[var(--white)] transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-[var(--black)]/40 group-hover:text-[var(--secondary)] group-hover:translate-x-1 transition-all" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-[11px] text-[var(--black)]/70 font-sans mt-0.5">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
