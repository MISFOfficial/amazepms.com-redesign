export interface MissionItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconType: "target" | "eye" | "heart";
  themeColor: string;
  badgeBg: string;
}

export const missionItemsData: MissionItem[] = [
  {
    id: "mission",
    tag: "01 / MISSION",
    title: "Our Mission",
    description:
      "Our Mission is to be a leading provider of comprehensive property management solutions in the PAN INDIA. We are committed to delivering exceptional services that exceed our clients expectations, while prioritizig technology, sustainability, and the well being of our employees.",
    iconType: "target",
    themeColor: "from-orange-500 to-amber-500",
    badgeBg: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    id: "vision",
    tag: "02 / VISION",
    title: "Our Vision",
    description:
      "Our Vision is to empower commercial towers, residential townships, and corporate hubs across India with integrated property management tools, 100% in-house workforce, and sustainable operational frameworks needed to navigate the complex real estate ecosystem.",
    iconType: "eye",
    themeColor: "from-blue-600 to-cyan-500",
    badgeBg: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    id: "values",
    tag: "03 / VALUES",
    title: "Our Core Values",
    description:
      "Our Values are built on transparent audits, uncompromised EHS safety standards, 100% in-house compliance, and dedicated staff welfare to deliver reliable operational excellence for every client.",
    iconType: "heart",
    themeColor: "from-indigo-600 to-purple-500",
    badgeBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
];
