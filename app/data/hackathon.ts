export interface Hackathon {
  name: string;
  organizer: string;
  date: string;
  project?: string;
  result?: string;
  link?: string;
  certificate?: string;
}

export const hackathons: Hackathon[] = [
  {
    name: "IBM Bob 2.0 Hackathon",
    organizer: "lablab.ai",
    date: "Sep 2026",
    project: "TicketLens",
    result: "Certificate of Completion",
    link: "https://github.com/Sayron123/bob-first-day",
    certificate: "/resume/IBMBOB.pdf",
  },
];