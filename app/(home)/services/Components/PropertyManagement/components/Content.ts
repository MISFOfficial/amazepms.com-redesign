export interface PropertyServiceItem {
  id: string;
  title: string;
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
  { id: "1", title: "Security Services", iconType: "security" },
  { id: "2", title: "House Keeping Services", iconType: "housekeeping" },
  { id: "3", title: "Technical Services", iconType: "technical" },
  { id: "4", title: "Pest Control", iconType: "pest" },
  { id: "5", title: "Help Desk Management", iconType: "helpdesk" },
  { id: "6", title: "Gardening", iconType: "gardening" },
  { id: "7", title: "Swimming Pool Maintenance", iconType: "pool" },
  { id: "8", title: "Club House Management", iconType: "clubhouse" },
  { id: "9", title: "Facade Cleaning", iconType: "facade" },
  { id: "10", title: "Tenant Management", iconType: "tenant" },
  { id: "11", title: "Home Repairs", iconType: "homerepairs" },
  { id: "12", title: "Events and Promotions Management", iconType: "events" },
  { id: "13", title: "Office Support Staff", iconType: "officestaff" },
  { id: "14", title: "Payroll Management", iconType: "payroll" },
  { id: "15", title: "Repair and Maintenance", iconType: "repairmaint" },
  { id: "16", title: "Home Cleaning", iconType: "homecleaning" },
  { id: "17", title: "Maid Services", iconType: "maid" },
  { id: "18", title: "Parking Management", iconType: "parking" },
  { id: "19", title: "New revenue opportunities", iconType: "revenue" },
];
