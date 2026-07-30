export interface StageData {
  stageNumber: string;
  stageBadge: string;
  title: string;
  steps: string[];
}

export const functionalApproachData: StageData[] = [
  {
    stageNumber: "1",
    stageBadge: "STAGE - 1",
    title: "Client Engagement & Assessment",
    steps: [
      "Getting connected with the client",
      "Understanding the client requirement",
      "Site Survey & studying existing processes",
      "Submission of proposal & Costing approval",
    ],
  },
  {
    stageNumber: "2",
    stageBadge: "STAGE - 2",
    title: "Planning & Mobilization",
    steps: [
      "Contract confirmation by the client",
      "Resource planning, recruitment & training",
      "Preparation of site specific SOP's",
      "Finalizing the service agreement",
    ],
  },
  {
    stageNumber: "3",
    stageBadge: "STAGE - 3",
    title: "Deployment & Transition",
    steps: [
      "Deployment of contract start up team",
      "Parallel deployment of security force",
      "Taking over from the existing service provider",
      "Regular visits and co-ordination by management team",
    ],
  },
  {
    stageNumber: "4",
    stageBadge: "STAGE - 4",
    title: "Monitoring & Continuous Quality",
    steps: [
      "Onsite monitoring by the operations team",
      "Review of security posture & procedures",
      "Site specific training",
      "Feedback & Suggestions from client",
    ],
  },
];
