export interface WhyPillar {
  id: string;
  number: string;
  title: string;
  stat: string;
  statLabel: string;
  iconName: string;
  points: string[];
  gradient: string;
}

export const whyPillarsData: WhyPillar[] = [
  {
    id: "scale",
    number: "01",
    title: "Portfolio & Service Operations",
    stat: "20M+",
    statLabel: "Sq.ft Area",
    iconName: "Building2",
    gradient: "from-[var(--primary)] to-[var(--secondary)]",
    points: [
      "Managing an area of more than 20 million Sq.ft across different portfolios",
      "All services are Inhouse",
      "Availability of back up staff to take care of emergencies.",
    ],
  },
  {
    id: "safety",
    number: "02",
    title: "Training, Risk & SOP Standards",
    stat: "100%",
    statLabel: "In-House SOPs",
    iconName: "ShieldCheck",
    gradient: "from-[var(--secondary)] to-[var(--primary)]",
    points: [
      "Yearly training calendar will be shared and conducted by Training Officer.",
      "Risk Assessment of Equipment and its Operations and Recommend measures from time to time.",
      "Site specific SOP's / Checklists for all the services.",
    ],
  },
  {
    id: "optimization",
    number: "03",
    title: "Site Audits & Maintenance",
    stat: "Cost",
    statLabel: "Optimization",
    iconName: "TrendingUp",
    gradient: "from-[var(--primary)] to-[var(--black)]",
    points: [
      "Internal team will audit the site on a regular basis and propose the site improvement plans. The plan would include Power Saving Methods, Manpower Optimization will help in reducing the cost.",
      "Coordination and Supervision towards Annual Shutdown Maintenance and mobilizing.",
      "Liaison with Government agencies.",
    ],
  },
  {
    id: "welfare",
    number: "04",
    title: "EHS Audits & Staff Welfare",
    stat: "Staff",
    statLabel: "Welfare Care",
    iconName: "Award",
    gradient: "from-[var(--secondary)] to-[var(--primary)]",
    points: [
      "EHS, Security, Technical, Fire & Safety, Inventory, Process, Soft Services, Compliance, Customer Satisfaction audits.",
      "AMC Tracking and Negotiations",
      "STAFF WELFARE:- 1. Diwali Sweets, 2. Gifts on RD/ID, Rewards on RD/ID, 2lakhs Insurance, 10k funeral expenses, 1 lakh compensation, Ranker students & staff 1 lakh, 50 thousand, 25 thousand from the company.",
    ],
  },
];

