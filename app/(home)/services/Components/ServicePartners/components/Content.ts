export interface ServicePartnerItem {
  id: string;
  badge: string;
  badgeBg: string;
  title: string;
  subtitleServices: string;
  logoType: "amaze" | "action_force" | "afs";
}

export const servicePartnersData: ServicePartnerItem[] = [
  {
    id: "partner-1",
    badge: "MEP Services",
    badgeBg: "bg-blue-600 text-white",
    title: "Amaze Property Management Solutions Pvt Ltd",
    subtitleServices:
      "PMS Services, Housekeeping, MEP, Gardening, Pest Control Services",
    logoType: "amaze",
  },
  {
    id: "partner-2",
    badge: "Security Services",
    badgeBg: "bg-blue-600 text-white",
    title: "Action & Protection Security Force",
    subtitleServices:
      "Security Services, Fire Training, Escort Services, Event Security, Help Desk Services",
    logoType: "action_force",
  },
  {
    id: "partner-3",
    badge: "Support Staff",
    badgeBg: "bg-blue-600 text-white",
    title: "Action Facility Services Pvt Ltd",
    subtitleServices:
      "Home Services, Deep Cleaning Services, Support Staff, Project Cleaning, Sofa, Carpet Cleaning Services",
    logoType: "afs",
  },
];
