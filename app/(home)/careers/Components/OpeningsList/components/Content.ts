export interface JobOpeningItem {
  id: string;
  title: string;
  category: "Management" | "Technical" | "Security" | "Soft Services" | "Operations";
  location: string;
  type: string;
}

export const careersHeaderData = {
  badge: "CAREERS",
  heading: "Work With Us",
  subheading: "Take the next step in your career with Amaze",
  introText:
    "We are hiring passionate professionals working in the field of property management services. Apply with your Curriculum Vitae to",
  email: "careers@amazepms.com",
};

export const jobOpeningsData: JobOpeningItem[] = [
  {
    id: "job-1",
    title: "Facility Manager",
    category: "Management",
    location: "Hyderabad / PAN India",
    type: "Full-Time",
  },
  {
    id: "job-2",
    title: "Assistant Facility Manager",
    category: "Management",
    location: "Hyderabad / PAN India",
    type: "Full-Time",
  },
  {
    id: "job-3",
    title: "Operations Manager",
    category: "Operations",
    location: "Hyderabad / PAN India",
    type: "Full-Time",
  },
  {
    id: "job-4",
    title: "Security Officer",
    category: "Security",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-5",
    title: "Electrician",
    category: "Technical",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-6",
    title: "Field Officer - Technical",
    category: "Technical",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-7",
    title: "Field Officer - Security",
    category: "Security",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-8",
    title: "Plumber",
    category: "Technical",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-9",
    title: "Carpenter",
    category: "Technical",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-10",
    title: "Gardener",
    category: "Soft Services",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-11",
    title: "House Keeping Supervisor",
    category: "Soft Services",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-12",
    title: "House Keeper",
    category: "Soft Services",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-13",
    title: "Fire & Safety Technicians",
    category: "Technical",
    location: "PAN India",
    type: "Full-Time",
  },
  {
    id: "job-14",
    title: "Help Desk Executive",
    category: "Operations",
    location: "PAN India",
    type: "Full-Time",
  },
];
