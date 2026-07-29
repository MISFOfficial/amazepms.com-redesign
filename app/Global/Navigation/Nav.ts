export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  description?: string;
  subItems?: { title: string; href: string; description?: string }[];
}

export const Nav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn about Amaze Property Management Services",
  },
  {
    title: "Services",
    href: "/services",
    badge: "Popular",
    description: "Comprehensive Facility & Maintenance Solutions",
    subItems: [
      { title: "Building Maintenance", href: "/services/building-maintenance", description: "Preventative & corrective facility care" },
      { title: "HVAC & Electrical", href: "/services/hvac-electrical", description: "Climate control & power system services" },
      { title: "Plumbing & Sanitization", href: "/services/plumbing", description: "Water management & deep sanitization" },
      { title: "Security & Guarding", href: "/services/security", description: "24/7 physical & digital surveillance" },
      { title: "Commercial Cleaning", href: "/services/cleaning", description: "Daily & specialized janitorial services" },
    ],
  },
  {
    title: "Recruitments",
    href: "/recruitments",
    description: "Verified staff & skilled workforce management",
  },
  {
    title: "Our Strength",
    href: "/our-strength",
    description: "Our infrastructure, technology & workforce scale",
  },
  {
    title: "Our Clients",
    href: "/our-clients",
    description: "Trusted corporate & residential partners",
  },
  {
    title: "Gallery",
    href: "/gallery",
    description: "Visual showcase of property projects",
  },
  {
    title: "Careers",
    href: "/careers",
    badge: "Hiring",
    description: "Join the Amaze Property Management team",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch for property service queries",
  },
];

export const EmergencyContact = {
  phone: "+1 (800) 555-AMAZE",
  displayPhone: "+1 (800) 555-2629",
  email: "support@amazepms.com",
  hours: "24/7 Emergency Service Center",
  address: "Suite 400, Property Tech Tower, Business Hub",
};

export const ServiceCategories = [
  { id: "hvac", name: "HVAC & AC Service", count: "24/7 Available", tags: ["Ac Repair", "Chiller", "Duct Clean"] },
  { id: "plumbing", name: "Plumbing & Leak Care", count: "Urgent Response", tags: ["Pipe Fix", "Drainage", "Pumps"] },
  { id: "electrical", name: "Electrical & Lighting", count: "Certified Techs", tags: ["Wiring", "Generators", "Solar"] },
  { id: "security", name: "Facility Security & Access", count: "On-site / Guard", tags: ["CCTV", "Guards", "Biometrics"] },
  { id: "cleaning", name: "Deep Sanitization & Housekeeping", count: "Eco-Friendly", tags: ["Office Cleaning", "Disinfection"] },
  { id: "pest", name: "Pest Control & Fumigation", count: "Safe Treatment", tags: ["Termite", "Rodent", "Insect"] },
];