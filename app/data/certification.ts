export interface Certification {
  name: string;
  issuer?: string;
  date: string;
}

export const certifications: Certification[] = [
  { name: "Cloud Technical Series: AI in Action", issuer: "Google Cloud APAC", date: "2026" },
  { name: "Foundations of PHP Web Development", date: "Mar 2026" },
  { name: "Cybersecurity Fundamentals", date: "2025" },
  { name: "IoT & Data-Driven Governance", date: "2025" },
];