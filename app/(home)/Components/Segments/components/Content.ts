export interface SegmentStation {
  id: string;
  stationNumber: string;
  title: string;
  category: string;
  iconName: string;
  imageBg?: string;
  description: string;
}

export const railwaySegmentsData: SegmentStation[] = [
  {
    id: "seg-1",
    stationNumber: "01",
    title: "Commercial and IT Parks",
    category: "IT & Tech Hubs",
    iconName: "Building2",
    description: "Full-scale facility maintenance, HVAC management, and 24/7 security for high-tech tech parks.",
  },
  {
    id: "seg-2",
    stationNumber: "02",
    title: "Corporate Offices",
    category: "Enterprise Workspaces",
    iconName: "Briefcase",
    description: "Premium workplace management, housekeeping, visitor access controls, and energy audits.",
  },
  {
    id: "seg-3",
    stationNumber: "03",
    title: "Educational Institutions",
    category: "Universities & Schools",
    iconName: "GraduationCap",
    description: "Safe campus security, sanitation protocols, and infrastructure upkeep for learning environments.",
  },
  {
    id: "seg-4",
    stationNumber: "04",
    title: "Residential Communities",
    category: "Gated Townships",
    iconName: "Home",
    description: "360-degree gated community management, STP operations, and resident welfare services.",
  },
  {
    id: "seg-5",
    stationNumber: "05",
    title: "Hotels and Hospitals",
    category: "Healthcare & Hospitality",
    iconName: "Hospital",
    description: "Hygiene compliance, bio-waste management, and emergency response infrastructure.",
  },
  {
    id: "seg-6",
    stationNumber: "06",
    title: "Industries",
    category: "Industrial Infrastructure",
    iconName: "Factory",
    description: "Heavy machinery facility upkeep, EHS safety audits, and industrial workforce management.",
  },
  {
    id: "seg-7",
    stationNumber: "07",
    title: "Infrastructure and Construction Sites",
    category: "Mega Developments",
    iconName: "HardHat",
    description: "Site security, perimeter guarding, equipment maintenance, and safety compliance.",
  },
  {
    id: "seg-8",
    stationNumber: "08",
    title: "Malls, Multiplex's and Retail Stores",
    category: "Commercial Retail",
    iconName: "ShoppingBag",
    description: "Footfall crowd management, valet services, cleanliness drives, and escalation handling.",
  },
  {
    id: "seg-9",
    stationNumber: "09",
    title: "Manufacturing Units",
    category: "Production Plants",
    iconName: "Cpu",
    description: "Plant security, zero-downtime maintenance, and strict environmental compliance.",
  },
  {
    id: "seg-10",
    stationNumber: "10",
    title: "Special Events",
    category: "Expositions & Summits",
    iconName: "Calendar",
    description: "Rapid event deployment, crowd management, VIP escorting, and venue sanitization.",
  },
  {
    id: "seg-11",
    stationNumber: "11",
    title: "Ware Houses",
    category: "Logistics Hubs",
    iconName: "Warehouse",
    description: "Supply chain security, inventory perimeter watch, fire safety, and loading dock management.",
  },
  {
    id: "seg-12",
    stationNumber: "12",
    title: "Pharma",
    category: "Cleanroom & Life Sciences",
    iconName: "Pill",
    description: "Strict sterile environment management, temperature monitoring, and US-FDA audit support.",
  },
];
