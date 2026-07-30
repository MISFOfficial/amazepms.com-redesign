export interface SkillCardData {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

export const skillDevelopmentData: SkillCardData[] = [
  {
    id: "training",
    title: "Training Facility",
    badge: "NSDC AFFILIATED",
    items: [
      "Affiliated with National Skill Development Corporation (NSDC)",
      "Well Qualified and Experienced Trainers",
      "Having Training Facilities at Corporate Office and Branch Offices",
      "Manpower will be deployed after screening and training",
    ],
  },
  {
    id: "security",
    title: "Security",
    badge: "VIGILANCE",
    items: [
      "Incident Management",
      "Patrolling",
      "Visitor & Vendor Management",
      "Material Movement",
      "Command Control Centre",
      "Fire & Safety, Emergency Management",
      "Traffic & Parking Management",
      "VIP / Personal Protection",
    ],
  },
  {
    id: "mep",
    title: "MEP",
    badge: "ENGINEERING",
    items: [
      "Grounded Standards",
      "Do's & Don'ts",
      "Work Place Safety",
      "EHS Policy",
      "Fresh",
      "Shutdown Operations",
      "Process and Audits",
      "Planned Preventive Maintenance",
      "Risk Audits",
      "Inventory Control",
      "Work Permits and LOTO",
    ],
  },
  {
    id: "housekeeping",
    title: "House Keeping",
    badge: "HYGIENE",
    items: [
      "Grounded Standards",
      "Communication Skills",
      "Behavioral Approach",
      "Usage of Chemicals",
      "Usage of Machinery",
      "Fresh",
      "Do's & Don'ts",
      "EHS Policy",
      "Reporting System",
      "PPE Section",
      "Work Place Safety",
    ],
  },
];
