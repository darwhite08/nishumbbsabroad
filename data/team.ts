export interface TeamMember {
  id: string;
  name: string;
  qualification: string;
  university: string;
  country: string;
  role: string;
  bio: string;
  photo: string;
  imagePosition?: string;
  linkedIn?: string;
  featured: boolean;
}

export const team: TeamMember[] = [
  {
    id: "dr-nishu-yadav",
    name: "Dr. Nishu Yadav",
    qualification: "MBBS",
    university: "Semey Medical University",
    country: "Kazakhstan",
    role: "Founder & Lead Counselor",
    bio: "Dr. Nishu Yadav completed his medical education across Ukraine and Kazakhstan, gaining diverse international exposure. He successfully cleared the FMGE with a strong score on his first attempt. With years of experience, he has been actively guiding students for MBBS abroad and FMGE preparation. His mission is to simplify the journey and support aspiring doctors at every step.",
    photo: "/images/nishu_yadav.jpg",
    featured: true,
  },
  {
    id: "dr-lokesh-attri",
    name: "Dr. Lokesh Attri",
    qualification: "MBBS",
    university: "Semey Medical University",
    country: "Kazakhstan",
    role: "Co-Founder & FMG Counselor",
    bio: "Dr. Lokesh Attri completed his medical education across Ukraine and Kazakhstan, gaining strong international clinical exposure. He cleared the FMGE on his first attempt with an impressive score of 210. He is actively counseling students for FMGE and guiding aspiring doctors for MBBS abroad with practical, experience-based support.",
    photo: "/images/lokesh_attri.jpg",
    featured: true,
  },
  {
    id: "dr-bindu-tyagi",
    name: "Dr. Bindu Tyagi",
    qualification: "MBBS",
    university: "Ternopil National Medical University",
    country: "Ukraine",
    role: "Co-Founder & MBBS Abroad Counselor",
    bio: "Dr. Bindu Tyagi completed her medical education at Ternopil National Medical University. She brings a student-focused approach to counseling, helping aspirants navigate MBBS abroad and FMGE preparation with clarity. She is especially committed to guiding students — particularly girls — on safety, academics, and adapting to life overseas.",
    photo: "/images/bindu_tyagi.jpg",
    imagePosition: "center",
    featured: true,
  },
];
