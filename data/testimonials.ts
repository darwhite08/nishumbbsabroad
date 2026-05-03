export interface Testimonial {
  id: string;
  studentName: string;
  university: string;
  country: string;
  countrySlug: string;
  currentYear: string;
  tag: "MBBS Student" | "Parent" | "FMGE Graduate" | "Alumni";
  rating: number;
  quote: string;
  photo?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    studentName: "Ananya Mishra",
    university: "Kazan Federal University",
    country: "Russia",
    countrySlug: "russia",
    currentYear: "3rd Year MBBS",
    tag: "MBBS Student",
    rating: 5,
    quote: "I was terrified about going to Russia — the cold weather, the language, being so far from home. Our team addressed every single concern before I even asked. Two years in, I can say it was the best decision of my life.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    featured: true,
  },
  {
    id: "t2",
    studentName: "Karthik Subramaniam",
    university: "Tbilisi State Medical University",
    country: "Georgia",
    countrySlug: "georgia",
    currentYear: "2nd Year MBBS",
    tag: "MBBS Student",
    rating: 5,
    quote: "The counseling was incredibly detailed. They didn't just tell me which university — they explained WHY that university for my NEET score and budget. Real advice, not marketing talk.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    featured: true,
  },
  {
    id: "t3",
    studentName: "Riya Patel",
    university: "Kursk State Medical University",
    country: "Russia",
    countrySlug: "russia",
    currentYear: "4th Year MBBS",
    tag: "MBBS Student",
    rating: 5,
    quote: "When my friends were being misled by random agents, I found Worldwise Education. The fact that every counselor is a doctor who studied abroad makes a massive difference. They prepared me for FMGE from Year 1.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    featured: true,
  },
  {
    id: "t4",
    studentName: "Rajiv Sharma",
    university: "",
    country: "India",
    countrySlug: "russia",
    currentYear: "Parent of 2nd Year Student",
    tag: "Parent",
    rating: 5,
    quote: "As a parent, my biggest worry was safety. The team spent an hour with us addressing every concern — from food and accommodation to how our daughter would manage winters. We trust them completely.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    featured: true,
  },
  {
    id: "t5",
    studentName: "Sneha Reddy",
    university: "Kathmandu University School of Medical Sciences",
    country: "Nepal",
    countrySlug: "nepal",
    currentYear: "3rd Year MBBS",
    tag: "MBBS Student",
    rating: 5,
    quote: "Nepal was my top choice because of family proximity. Worldwise helped me understand exactly what to expect and matched me to the right university. The FMGE guidance every semester has kept me on track.",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    featured: true,
  },
  {
    id: "t6",
    studentName: "Dr. Vikram Singh",
    university: "University of Perpetual Help",
    country: "Philippines",
    countrySlug: "philippines",
    currentYear: "FMGE Cleared 2024",
    tag: "FMGE Graduate",
    rating: 5,
    quote: "I cleared FMGE on my first attempt. The year-wise FMGE roadmap they gave me before I boarded my flight is what made the difference. I followed it from Year 1 and it paid off.",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
    featured: true,
  },
  {
    id: "t7",
    studentName: "Meera Krishnan",
    university: "Tashkent Medical Academy",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    currentYear: "2nd Year MBBS",
    tag: "MBBS Student",
    rating: 4,
    quote: "Budget was my primary constraint and Uzbekistan was the perfect solution. The warm climate, affordable living, and good education — Worldwise guided me to the right place.",
    featured: false,
  },
  {
    id: "t8",
    studentName: "Rohan Joshi",
    university: "Kyrgyz State Medical Academy",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    currentYear: "3rd Year MBBS",
    tag: "MBBS Student",
    rating: 4,
    quote: "Worldwise was transparent about the challenges including FMGE difficulty, and helped me build a preparation strategy from Day 1. Honest guidance, not false promises.",
    featured: false,
  },
];
