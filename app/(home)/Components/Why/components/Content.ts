export interface WhyPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
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
    title: "Operational Scale & Coverage",
    tagline: "Managing 20M+ Sq.ft with military-grade precision across PAN India",
    stat: "20M+",
    statLabel: "Sq.ft Portfolio",
    iconName: "Building2",
    gradient: "from-blue-600 to-cyan-600",
    points: [
      "Managing an area of more than 20 million Sq.ft across diverse portfolios",
      "100% In-House verified operational staff without outsourcing",
      "Liaison with Government agencies for seamless regulatory approvals",
      "Availability of 24/7 emergency backup response staff",
    ],
  },
  {
    id: "safety",
    number: "02",
    title: "Risk, Safety & Compliance",
    tagline: "Continuous EHS, fire, technical and process audits for 100% safety",
    stat: "100%",
    statLabel: "Compliance Rate",
    iconName: "ShieldCheck",
    gradient: "from-indigo-600 to-blue-600",
    points: [
      "Periodic Risk Assessment of equipment and operational measures",
      "Site-specific SOPs & customized checklists for all facility services",
      "Comprehensive EHS, Security, Technical, Fire & Safety audits",
      "Strict compliance & customer satisfaction quality tracking",
    ],
  },
  {
    id: "optimization",
    number: "03",
    title: "Cost Optimization & Audits",
    tagline: "Audits focused on power saving, AMC negotiations & cost reduction",
    stat: "30%",
    statLabel: "Cost Savings",
    iconName: "TrendingUp",
    gradient: "from-blue-700 to-indigo-700",
    points: [
      "Internal regular site audits proposing site improvement plans",
      "Power saving methods and manpower optimization strategies",
      "Coordination and supervision towards Annual Shutdown Maintenance",
      "Proactive AMC tracking and contract negotiations",
    ],
  },
  {
    id: "welfare",
    number: "04",
    title: "Training & Staff Welfare",
    tagline: "Yearly training calendars and industry-leading employee benefits",
    stat: "15K+",
    statLabel: "Happy Staff",
    iconName: "Award",
    gradient: "from-cyan-600 to-blue-600",
    points: [
      "Yearly training calendar conducted by dedicated Training Officers",
      "Festival sweets, rewards, and RD/ID recognition gifts",
      "₹2 Lakhs medical insurance & ₹1 Lakh compensation policy",
      "Academic scholarships up to ₹1 Lakh for staff children",
    ],
  },
];
