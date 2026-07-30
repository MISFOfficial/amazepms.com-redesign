export interface PropertyServiceItem {
  id: string;
  number: string;
  title: string;
  category: "Security & Safety" | "Soft Services" | "Technical & MEP" | "Operations" | "Lifestyle & Amenities" | "Specialized";
  iconType:
    | "security"
    | "housekeeping"
    | "technical"
    | "pest"
    | "helpdesk"
    | "gardening"
    | "pool"
    | "clubhouse"
    | "facade"
    | "tenant"
    | "homerepairs"
    | "events"
    | "officestaff"
    | "payroll"
    | "repairmaint"
    | "homecleaning"
    | "maid"
    | "parking"
    | "revenue";
}

export const propertyServicesData: PropertyServiceItem[] = [
  { id: "1", number: "01", title: "Security Services", category: "Security & Safety", iconType: "security" },
  { id: "2", number: "02", title: "House Keeping Services", category: "Soft Services", iconType: "housekeeping" },
  { id: "3", number: "03", title: "Technical Services", category: "Technical & MEP", iconType: "technical" },
  { id: "4", number: "04", title: "Pest Control", category: "Specialized", iconType: "pest" },
  { id: "5", number: "05", title: "Help Desk Management", category: "Operations", iconType: "helpdesk" },
  { id: "6", number: "06", title: "Gardening", category: "Soft Services", iconType: "gardening" },
  { id: "7", number: "07", title: "Swimming Pool Maintenance", category: "Lifestyle & Amenities", iconType: "pool" },
  { id: "8", number: "08", title: "Club House Management", category: "Lifestyle & Amenities", iconType: "clubhouse" },
  { id: "9", number: "09", title: "Facade Cleaning", category: "Soft Services", iconType: "facade" },
  { id: "10", number: "10", title: "Tenant Management", category: "Operations", iconType: "tenant" },
  { id: "11", number: "11", title: "Home Repairs", category: "Technical & MEP", iconType: "homerepairs" },
  { id: "12", number: "12", title: "Events and Promotions Management", category: "Operations", iconType: "events" },
  { id: "13", number: "13", title: "Office Support Staff", category: "Operations", iconType: "officestaff" },
  { id: "14", number: "14", title: "Payroll Management", category: "Operations", iconType: "payroll" },
  { id: "15", number: "15", title: "Repair and Maintenance", category: "Technical & MEP", iconType: "repairmaint" },
  { id: "16", number: "16", title: "Home Cleaning", category: "Soft Services", iconType: "homecleaning" },
  { id: "17", number: "17", title: "Maid Services", category: "Soft Services", iconType: "maid" },
  { id: "18", number: "18", title: "Parking Management", category: "Operations", iconType: "parking" },
  { id: "19", number: "19", title: "New revenue opportunities", category: "Operations", iconType: "revenue" },
];
