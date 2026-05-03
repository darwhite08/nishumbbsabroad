export interface TeamMember {
  id: string;
  name: string;
  qualification: string;
  university: string;
  country: string;
  role: string;
  bio: string;
  photo: string;
  linkedIn?: string;
  featured: boolean;
}

export const team: TeamMember[] = [
  {
    id: "dr-arjun-sharma",
    name: "Dr. Arjun Sharma",
    qualification: "MBBS",
    university: "Kazan Federal University",
    country: "Russia",
    role: "Founder & Lead Counselor",
    bio: "Dr. Arjun graduated from Kazan Federal University in 2015 and returned to India to clear FMGE on his first attempt. Having experienced the entire journey himself — from NEET anxiety to settling in Russia — he founded NishU MBBS Abroad to guide students with genuine, doctor-to-doctor honesty. He has personally counseled over 200 students.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    featured: true,
  },
  {
    id: "dr-priya-nair",
    name: "Dr. Priya Nair",
    qualification: "MBBS",
    university: "Tbilisi State Medical University",
    country: "Georgia",
    role: "Co-Founder & Georgia Specialist",
    bio: "Dr. Priya studied in Tbilisi, Georgia and has an intimate understanding of the Georgian medical education system. She specializes in counseling students who want a European-style education and helps them navigate university selection, visa process, and settling into life in Tbilisi.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    featured: true,
  },
  {
    id: "dr-rahul-verma",
    name: "Dr. Rahul Verma",
    qualification: "MBBS",
    university: "Al-Farabi Kazakh National University",
    country: "Kazakhstan",
    role: "Central Asia Specialist",
    bio: "Dr. Rahul studied in Almaty, Kazakhstan and is the team's go-to expert for Kazakhstan, Uzbekistan, and Kyrgyzstan. He helps students understand the nuances of Central Asian medical education and prepares them for FMGE from Day 1.",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    featured: true,
  },
  {
    id: "dr-sunita-gupta",
    name: "Dr. Sunita Gupta",
    qualification: "MBBS",
    university: "University of Perpetual Help",
    country: "Philippines",
    role: "Philippines & South Asia Specialist",
    bio: "Dr. Sunita studied in Manila and is passionate about the Philippines for students with USMLE aspirations. She also handles Nepal and Bangladesh counseling, leveraging her understanding of South Asian medical education systems.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    featured: false,
  },
];
