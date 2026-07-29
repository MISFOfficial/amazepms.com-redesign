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
