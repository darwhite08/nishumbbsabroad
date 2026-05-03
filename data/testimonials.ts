export interface Testimonial {
  id: string;
  studentName: string;
  university: string;
  country: string;
  countrySlug: string;
  currentYear: string;
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
    rating: 5,
    quote: "I was terrified about going to Russia — the cold weather, the language, being so far from home. Dr. Arjun addressed every single concern before I even asked. Two years in, I can say it was the best decision of my life. The team even helped me find a great Indian mess near campus.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    featured: true,
  },
  {
    id: "t2",
    studentName: "Karthik Subramaniam",
    university: "Tbilisi State Medical University",
    country: "Georgia",
    countrySlug: "georgia",
    currentYear: "2nd Year MBBS",
    rating: 5,
    quote: "The counseling was incredibly detailed. They didn't just tell me which university — they explained WHY that university for my NEET score and budget. Dr. Priya has studied at TSMU herself so the advice was real, not just marketing talk.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    featured: true,
  },
  {
    id: "t3",
    studentName: "Riya Patel",
    university: "Kursk State Medical University",
    country: "Russia",
    countrySlug: "russia",
    currentYear: "4th Year MBBS",
    rating: 5,
    quote: "When my friends were being misled by random agents, I found NishU MBBS Abroad. The fact that every counselor is a doctor who studied abroad makes a massive difference. They prepared me for things no agent would tell you — like FMGE prep from Year 1.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    featured: true,
  },
  {
    id: "t4",
    studentName: "Mohammed Farhan",
    university: "Astana Medical University",
    country: "Kazakhstan",
    countrySlug: "kazakhstan",
    currentYear: "1st Year MBBS",
    rating: 5,
    quote: "Just completed my first semester in Astana. The transition was smooth because I was so well-prepared. NishU's pre-departure briefing covered everything from what clothes to pack to which apps to download before landing.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    featured: false,
  },
  {
    id: "t5",
    studentName: "Sneha Reddy",
    university: "Kathmandu University School of Medical Sciences",
    country: "Nepal",
    countrySlug: "nepal",
    currentYear: "3rd Year MBBS",
    rating: 5,
    quote: "Nepal was my top choice because of family proximity. NishU helped me understand exactly what to expect and matched me to the right university. The FMGE guidance they've been providing every semester has kept me on track.",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    featured: true,
  },
  {
    id: "t6",
    studentName: "Vikram Singh",
    university: "University of Perpetual Help",
    country: "Philippines",
    countrySlug: "philippines",
    currentYear: "2nd Year MBBS",
    rating: 5,
    quote: "I wanted USMLE prep and Philippines was the clear answer. Dr. Sunita's guidance was specific and practical — she had studied there herself. Manila is a vibrant, English-speaking city and I absolutely love it here.",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
    featured: true,
  },
  {
    id: "t7",
    studentName: "Meera Krishnan",
    university: "Tashkent Medical Academy",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    currentYear: "2nd Year MBBS",
    rating: 4,
    quote: "Budget was my primary constraint and Uzbekistan was the perfect solution. The warm climate, affordable living, and good education — NishU guided me to the right place. Very happy with the decision.",
    featured: false,
  },
  {
    id: "t8",
    studentName: "Rohan Joshi",
    university: "Kyrgyz State Medical Academy",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    currentYear: "3rd Year MBBS",
    rating: 4,
    quote: "Kyrgyzstan isn't for everyone, but for my budget it was the only option that made sense. NishU was transparent about the challenges including FMGE difficulty, and helped me build a preparation strategy from Day 1.",
    featured: false,
  },
];
