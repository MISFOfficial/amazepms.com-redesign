export interface GalleryImageItem {
  id: string;
  src: string;
  title: string;
  category: "Staff Lineup" | "On-Site Operations" | "Training & SOPs";
  description: string;
}

export const galleryItemsData: GalleryImageItem[] = [
  {
    id: "gal-1",
    src: "/Gallary/gallery2.png",
    title: "Security Force Lineup & Briefing",
    category: "Staff Lineup",
    description: "Statutory security personnel in full uniform receiving daily operational briefing.",
  },
  {
    id: "gal-2",
    src: "/Gallary/gallery3.png",
    title: "In-House Technical Staff",
    category: "Staff Lineup",
    description: "Trained technical and engineering workforce ready for site deployment.",
  },
  {
    id: "gal-3",
    src: "/Gallary/gallery4.png",
    title: "NSDC Classroom Training Session",
    category: "Training & SOPs",
    description: "Rigorous classroom instruction covering safety, EHS compliance, and customer service.",
  },
  {
    id: "gal-4",
    src: "/Gallary/gallery5.png",
    title: "Housekeeping Protocol Lineup",
    category: "Staff Lineup",
    description: "Housekeeping team adhering to health, hygiene, and PPE safety standards.",
  },
  {
    id: "gal-5",
    src: "/Gallary/gallery6.png",
    title: "Facility Operations Lineup",
    category: "Staff Lineup",
    description: "Dedicated facility management team before shift hand-over.",
  },
  {
    id: "gal-6",
    src: "/Gallary/gallery7.png",
    title: "On-Site Kitchen Deep Cleaning",
    category: "On-Site Operations",
    description: "Professional deep cleaning of commercial kitchen appliances using eco-chemicals.",
  },
  {
    id: "gal-7",
    src: "/About/about1.png",
    title: "On-Site Facility Maintenance",
    category: "On-Site Operations",
    description: "Specialized maintenance and surface sanitation by Amaze PMS staff.",
  },
];
