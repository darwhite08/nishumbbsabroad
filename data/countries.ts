export interface Country {
  slug: string;
  name: string;
  flag: string;
  duration: string;
  durationYears: number;        // numeric for filtering (use max if range)
  budgetMin: number;            // total cost min in lakhs
  budgetMax: number;            // total cost max in lakhs
  internshipIncluded: boolean;  // clinical internship year within the degree
  feeRangePerYear: string;
  totalCost: string;
  language: string;
  climate: string;
  nmcApproved: boolean;
  tagline: string;
  heroImage: string;
  whyChoose: { icon: string; title: string; description: string }[];
  eligibility: { criteria: string; requirement: string }[];
  feeStructure: { year: string; tuition: string; hostel: string; misc: string; total: string }[];
  admissionTimeline: { month: string; step: string }[];
  lifeAbroad: {
    climate: string;
    food: string;
    safety: string;
    transport: string;
    currency: string;
  };
  fmgeNote: string;
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
}

export const countries: Country[] = [
  {
    slug: "russia", durationYears: 6, budgetMin: 25, budgetMax: 45, internshipIncluded: false,
    name: "Russia",
    flag: "🇷🇺",
    duration: "6 years",
    feeRangePerYear: "₹3L – ₹5.5L/year",
    totalCost: "₹24L – ₹45L",
    language: "English",
    climate: "Cold winters (−25°C in Siberia), mild summers",
    nmcApproved: true,
    tagline: "Affordable, NMC-Approved, Time-Tested",
    heroImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80",
    whyChoose: [
      { icon: "GraduationCap", title: "Top FMGE Performance", description: "Kazan State Medical University (est. 1814) achieves 45–65% FMGE pass rates — the highest from Russia. Volgograd and Omsk also perform strongly at 40–55%." },
      { icon: "IndianRupee", title: "Wide Fee Range", description: "From ₹3.15L/year (Northern State) to ₹5.4L/year (Kazan). Total cost ₹24–45L depending on university — choose your budget tier." },
      { icon: "Shield", title: "NMC, WHO & ECFMG Approved", description: "All recommended Russian universities hold NMC, WHO, and ECFMG recognition. Mandatory for Indian practice eligibility." },
      { icon: "Globe", title: "15,000+ Indian Students", description: "The largest Indian student community abroad. Established mess facilities, Indian communities, and peer support networks in every major university city." },
    ],
    eligibility: [
      { criteria: "NEET", requirement: "Qualified (mandatory)" },
      { criteria: "PCB Marks", requirement: "Minimum 50% (40% SC/ST/OBC)" },
      { criteria: "Age", requirement: "17 years as of Dec 31 of admission year" },
      { criteria: "IELTS/TOEFL", requirement: "Not required" },
    ],
    feeStructure: [
      { year: "Year 1", tuition: "₹3,70,000", hostel: "₹80,000", misc: "₹60,000", total: "₹5,10,000" },
      { year: "Year 2", tuition: "₹3,70,000", hostel: "₹80,000", misc: "₹40,000", total: "₹4,90,000" },
      { year: "Year 3", tuition: "₹4,20,000", hostel: "₹80,000", misc: "₹40,000", total: "₹5,40,000" },
      { year: "Year 4", tuition: "₹4,20,000", hostel: "₹80,000", misc: "₹40,000", total: "₹5,40,000" },
      { year: "Year 5", tuition: "₹4,70,000", hostel: "₹80,000", misc: "₹40,000", total: "₹5,90,000" },
      { year: "Year 6", tuition: "₹4,70,000", hostel: "₹80,000", misc: "₹40,000", total: "₹5,90,000" },
    ],
    admissionTimeline: [
      { month: "March–April", step: "Apply and receive invitation letter" },
      { month: "May–June", step: "NEET result, shortlist universities" },
      { month: "July", step: "Submit documents, apply for visa" },
      { month: "August", step: "Visa processing (4–6 weeks)" },
      { month: "September", step: "Travel and arrive at university" },
      { month: "October", step: "Classes begin" },
    ],
    lifeAbroad: {
      climate: "Winters vary: −10°C in southern cities, −25°C in Siberian cities. Essential to budget ₹15,000–₹20,000 for winter gear in Year 1. Most students adapt within one semester.",
      food: "Indian mess and restaurants available in all major university cities. Indian groceries widely available.",
      safety: "Generally safe. University campuses have security. Travel in groups recommended in initial months.",
      transport: "Excellent metro systems in major cities. Buses and trams in smaller cities.",
      currency: "Russian Ruble (RUB). Monthly living expense ~₹15,000–₹20,000.",
    },
    fmgeNote: "Russia has FMGE pass rates ranging from 25–65% depending on the university. Top performers: Kazan State (45–65%), Omsk (45–55%), Volgograd (40–50%). Budget universities score lower (15–35%). We guide students to choose universities with proven FMGE track records and provide year-wise preparation from Day 1.",
    faqs: [
      { question: "Which Russian university has the best FMGE pass rate?", answer: "Kazan State Medical University (est. 1814) leads with 45–65% FMGE pass rate. Omsk State (45–55%) and Volgograd (40–50%) are also strong. Budget universities like Kemerovo (20–35%) score lower." },
      { question: "Is MBBS from Russia valid in India?", answer: "Yes, if you graduate from an NMC-approved, WDOMS-listed university and clear the FMGE/NExT exam. All our recommended universities meet this requirement." },
      { question: "How cold is Russia? Can I survive?", answer: "It varies by city. Volgograd and Omsk are moderate (−10°C to −15°C). Siberian cities like Kemerovo can hit −25°C. With proper winter gear (budget ₹15,000–₹20,000), most students adapt in their first semester." },
      { question: "What is the FMGE pass rate from Russia?", answer: "It depends heavily on the university. Top universities: Kazan (45–65%), Omsk (45–55%), Volgograd (40–50%). Mid-tier: Tyumen (30–45%), North Ossetia (25–40%). Budget: Kemerovo (20–35%), Chechen (15–30%). University selection is critical." },
      { question: "Do I need to learn Russian?", answer: "Teaching is in English. Basic Russian is helpful for clinical interactions in later years — universities provide language courses in Year 1 and 2." },
    ],
    whatsappMessage: "Hi, I'm interested in MBBS in Russia. Please guide me.",
  },
  {
    slug: "georgia", durationYears: 6, budgetMin: 30, budgetMax: 50, internshipIncluded: false,
    name: "Georgia",
    flag: "🇬🇪",
    duration: "6 years",
    feeRangePerYear: "₹5L – ₹8L/year",
    totalCost: "₹30L – ₹50L",
    language: "English",
    climate: "Mild, four seasons",
    nmcApproved: true,
    tagline: "European-Quality Education, Affordable Fees",
    heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80",
    whyChoose: [
      { icon: "Building2", title: "European-Style Education", description: "Georgian universities follow European medical education standards, combining theory and clinical practice." },
      { icon: "Shield", title: "High NMC Recognition", description: "Multiple Georgian universities are NMC-approved with strong FMGE performance records." },
      { icon: "Sun", title: "Safe & Beautiful Country", description: "Georgia is one of the safest countries for international students with a warm, welcoming culture." },
      { icon: "IndianRupee", title: "Reasonable Cost", description: "₹30–50L total — competitive with Russia but with a European academic environment." },
    ],
    eligibility: [
      { criteria: "NEET", requirement: "Qualified (mandatory)" },
      { criteria: "PCB Marks", requirement: "Minimum 50% (40% SC/ST/OBC)" },
      { criteria: "Age", requirement: "17 years as of Dec 31 of admission year" },
      { criteria: "IELTS/TOEFL", requirement: "Not required" },
    ],
    feeStructure: [
      { year: "Year 1", tuition: "₹5,50,000", hostel: "₹90,000", misc: "₹60,000", total: "₹7,00,000" },
      { year: "Year 2", tuition: "₹5,50,000", hostel: "₹90,000", misc: "₹40,000", total: "₹6,80,000" },
      { year: "Year 3", tuition: "₹6,00,000", hostel: "₹90,000", misc: "₹40,000", total: "₹7,30,000" },
      { year: "Year 4", tuition: "₹6,00,000", hostel: "₹90,000", misc: "₹40,000", total: "₹7,30,000" },
      { year: "Year 5", tuition: "₹6,50,000", hostel: "₹90,000", misc: "₹40,000", total: "₹7,80,000" },
      { year: "Year 6", tuition: "₹6,50,000", hostel: "₹90,000", misc: "₹40,000", total: "₹7,80,000" },
    ],
    admissionTimeline: [
      { month: "March–April", step: "Initial counseling and university selection" },
      { month: "May–June", step: "NEET qualification confirmed, application submission" },
      { month: "July", step: "Acceptance letter, visa application" },
      { month: "August", step: "Visa processing (3–4 weeks)" },
      { month: "September", step: "Arrive in Tbilisi/Kutaisi" },
      { month: "October", step: "Orientation and classes begin" },
    ],
    lifeAbroad: {
      climate: "Mild continental climate. Summers warm (25–30°C), winters cold but not extreme (0–5°C).",
      food: "Indian restaurants in Tbilisi. Spices and Indian groceries available. Students often cook at home.",
      safety: "Georgia ranks among the safest countries in Europe for foreigners. Very low crime rate.",
      transport: "Good public transport in Tbilisi. Affordable taxis and metro.",
      currency: "Georgian Lari (GEL). Monthly living expenses ~₹18,000–₹25,000.",
    },
    fmgeNote: "Georgian universities have a relatively strong FMGE track record (~50–55%). The European-style curriculum aligns well with FMGE question patterns.",
    faqs: [
      { question: "Is Georgia safe for Indian students?", answer: "Yes, Georgia is considered one of the safest countries for international students in the region." },
      { question: "Is MBBS from Georgia NMC approved?", answer: "Yes, multiple Georgian universities are on the NMC approved list. We only work with compliant universities." },
      { question: "What language is teaching in?", answer: "All MBBS programs for international students are taught fully in English." },
      { question: "Can I easily visit India from Georgia?", answer: "Yes, direct and connecting flights available. Travel time is approximately 6–8 hours." },
      { question: "What is the FMGE pass rate from Georgia?", answer: "Approximately 50–55%, one of the higher rates among popular MBBS abroad destinations." },
    ],
    whatsappMessage: "Hi, I'm interested in MBBS in Georgia. Please guide me.",
  },
  {
    slug: "kazakhstan", durationYears: 5, budgetMin: 15, budgetMax: 30, internshipIncluded: false,
    name: "Kazakhstan",
    flag: "🇰🇿",
    duration: "5 years",
    feeRangePerYear: "₹3L – ₹4.5L/year",
    totalCost: "₹15L – ₹30L",
    language: "English",
    climate: "Continental, cold winters",
    nmcApproved: true,
    tagline: "Best FMGE Rates in Central Asia",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    whyChoose: [
      { icon: "TrendingUp", title: "Al-Farabi: 51% FMGE Rate", description: "Al-Farabi Kazakh National University (Top 200 globally) achieves ~51% FMGE pass rate — the highest in Kazakhstan and among the best in Central Asia." },
      { icon: "Clock", title: "5-Year Program", description: "Complete MBBS in 5 years (not 6) — saving 1 full year and ₹3–6L in costs compared to Russia or Georgia." },
      { icon: "IndianRupee", title: "₹15L–₹30L Total Cost", description: "One of the most affordable NMC-approved destinations. Semey and Karaganda start from ₹15L total — among the lowest anywhere." },
      { icon: "Shield", title: "NMC, WHO, ECFMG Approved", description: "All recommended universities hold NMC, WHO, and ECFMG recognition. Mandatory for Indian practice rights." },
    ],
    eligibility: [
      { criteria: "NEET", requirement: "Qualified (mandatory)" },
      { criteria: "PCB Marks", requirement: "Minimum 50% (40% SC/ST/OBC)" },
      { criteria: "Age", requirement: "17 years as of Dec 31 of admission year" },
      { criteria: "IELTS/TOEFL", requirement: "Not required" },
    ],
    feeStructure: [
      { year: "Year 1", tuition: "₹3,50,000", hostel: "₹65,000", misc: "₹45,000", total: "₹4,60,000" },
      { year: "Year 2", tuition: "₹3,50,000", hostel: "₹65,000", misc: "₹30,000", total: "₹4,45,000" },
      { year: "Year 3", tuition: "₹3,80,000", hostel: "₹65,000", misc: "₹30,000", total: "₹4,75,000" },
      { year: "Year 4", tuition: "₹3,80,000", hostel: "₹65,000", misc: "₹30,000", total: "₹4,75,000" },
      { year: "Year 5", tuition: "₹4,20,000", hostel: "₹65,000", misc: "₹30,000", total: "₹5,15,000" },
    ],
    admissionTimeline: [
      { month: "March–April", step: "Counseling, shortlist universities" },
      { month: "May–June", step: "NEET result, application submission" },
      { month: "July", step: "Acceptance letter, document preparation" },
      { month: "August", step: "Visa application and processing" },
      { month: "September", step: "Travel to Almaty or Astana" },
      { month: "October", step: "Classes commence" },
    ],
    lifeAbroad: {
      climate: "Cold winters: Astana (−20°C to −30°C), Almaty (milder, −10°C to −15°C). Almaty is strongly preferred for climate-sensitive students.",
      food: "Indian mess available near universities in Almaty and Astana. Indian community growing rapidly.",
      safety: "Generally safe. Kazakh people are hospitable. Petty crime low.",
      transport: "Modern transport in Almaty and Astana. Metro in Almaty. Affordable taxis everywhere.",
      currency: "Kazakhstani Tenge (KZT). Monthly expenses ~₹12,000–₹18,000.",
    },
    fmgeNote: "Kazakhstan has the highest FMGE pass rates in Central Asia. Al-Farabi KazNU leads at ~51%, followed by Astana Medical University at ~35.9%. Our team doctors (Dr. Nishu Yadav and Dr. Lokesh Attri) graduated from Semey Medical University and cleared FMGE on their first attempt — proving that consistent preparation from Year 1 is the key, regardless of university.",
    faqs: [
      { question: "Which Kazakhstan university has the best FMGE rate?", answer: "Al-Farabi Kazakh National University leads at ~51% FMGE pass rate. Astana Medical University is second at ~35.9%. KazNMU (Asfendiyarov) follows at ~27%. For budget options, Semey and Karaganda are solid at 21–25%." },
      { question: "Why only 5 years in Kazakhstan?", answer: "Kazakhstan follows a 5-year MBBS program (similar to European countries). It is fully recognized by NMC. This saves you 1 full year and ₹3–6L in costs compared to Russia." },
      { question: "Is Kazakhstan cheaper than Russia?", answer: "Yes. Total cost in Kazakhstan: ₹15–30L. Russia: ₹24–45L. Kazakhstan is 15–40% cheaper depending on universities compared." },
      { question: "Is MBBS from Kazakhstan valid in India?", answer: "Yes, from NMC-approved, WDOMS-listed universities, after clearing FMGE/NExT. All our recommended Kazakhstan universities meet this." },
      { question: "Almaty or Astana — which city is better?", answer: "Almaty is generally preferred — milder climate, larger Indian community, and Al-Farabi (top university) is located there. Astana has Astana Medical University with excellent FMGE results but harsher winters." },
    ],
    whatsappMessage: "Hi, I'm interested in MBBS in Kazakhstan. Please guide me.",
  },
  {
    slug: "uzbekistan", durationYears: 6, budgetMin: 18, budgetMax: 35, internshipIncluded: false,
    name: "Uzbekistan",
    flag: "🇺🇿",
    duration: "5–6 years",
    feeRangePerYear: "₹3L – ₹5L/year",
    totalCost: "₹18L – ₹35L",
    language: "English",
    climate: "Hot summers, mild winters",
    nmcApproved: true,
    tagline: "Lowest Fees, Warm Climate, Easy Admission",
    heroImage: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1200&q=80",
    whyChoose: [
      { icon: "IndianRupee", title: "Lowest Cost Destination", description: "Total MBBS cost ₹18–35L. One of the most affordable NMC-approved destinations for Indian students." },
      { icon: "Sun", title: "Warm Climate", description: "Unlike Russia and Kazakhstan, Uzbekistan has a warmer climate more familiar to Indian students." },
      { icon: "UserCheck", title: "Easy Admission Process", description: "Straightforward admission process with minimal documentation requirements." },
      { icon: "Globe", title: "NMC Approved Universities", description: "Key universities are NMC-approved and WDOMS-listed." },
    ],
    eligibility: [
      { criteria: "NEET", requirement: "Qualified (mandatory)" },
      { criteria: "PCB Marks", requirement: "Minimum 50% (40% SC/ST/OBC)" },
      { criteria: "Age", requirement: "17 years as of Dec 31 of admission year" },
      { criteria: "IELTS/TOEFL", requirement: "Not required" },
    ],
    feeStructure: [
      { year: "Year 1", tuition: "₹3,50,000", hostel: "₹60,000", misc: "₹40,000", total: "₹4,50,000" },
      { year: "Year 2", tuition: "₹3,50,000", hostel: "₹60,000", misc: "₹30,000", total: "₹4,40,000" },
      { year: "Year 3", tuition: "₹4,00,000", hostel: "₹60,000", misc: "₹30,000", total: "₹4,90,000" },
      { year: "Year 4", tuition: "₹4,00,000", hostel: "₹60,000", misc: "₹30,000", total: "₹4,90,000" },
      { year: "Year 5", tuition: "₹4,50,000", hostel: "₹60,000", misc: "₹30,000", total: "₹5,40,000" },
    ],
    admissionTimeline: [
      { month: "March–May", step: "Counseling and university selection" },
      { month: "June", step: "NEET result, document collection" },
      { month: "July", step: "Application and invitation letter" },
      { month: "August", step: "Visa application (2–3 weeks processing)" },
      { month: "September", step: "Travel to Tashkent or Samarkand" },
      { month: "October", step: "Classes begin" },
    ],
    lifeAbroad: {
      climate: "Hot summers (35–40°C), mild winters. Very similar to north Indian weather.",
      food: "Indian food easily available. Large Indian community. Familiar vegetables and spices.",
      safety: "Very safe country. Low crime rate. Uzbek people known for hospitality.",
      transport: "Good public transport. Affordable taxis. Uber equivalent available.",
      currency: "Uzbekistani Som (UZS). Monthly expenses ~₹10,000–₹15,000.",
    },
    fmgeNote: "FMGE pass rates from Uzbekistan are improving. The warm climate and familiar environment help students focus better on studies. We recommend consistent FMGE preparation from Year 2.",
    faqs: [
      { question: "Is Uzbekistan safe for Indian students?", answer: "Yes, Uzbekistan is one of the safest destinations in Central Asia. Very low crime rates and welcoming to foreigners." },
      { question: "Is the weather in Uzbekistan suitable for Indians?", answer: "Yes! The climate is similar to north India — hot summers and mild winters. Much more comfortable than Russia or Kazakhstan." },
      { question: "Are Uzbekistan universities NMC approved?", answer: "Yes, we only work with NMC-approved, WDOMS-listed universities in Uzbekistan." },
      { question: "What is the total cost of MBBS in Uzbekistan?", answer: "Total cost over 5–6 years is approximately ₹18–35L, making it one of the most affordable options." },
      { question: "How is the food situation for vegetarians?", answer: "Vegetarian options are available. Indian mess and restaurants are present in cities with large Indian student communities." },
    ],
    whatsappMessage: "Hi, I'm interested in MBBS in Uzbekistan. Please guide me.",
  },
  {
    slug: "kyrgyzstan", durationYears: 6, budgetMin: 15, budgetMax: 30, internshipIncluded: false,
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    duration: "5–6 years",
    feeRangePerYear: "₹2.5L – ₹4.5L/year",
    totalCost: "₹15L – ₹30L",
    language: "English",
    climate: "Cold winters, warm summers",
    nmcApproved: true,
    tagline: "Lowest Fees in Central Asia",
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
    whyChoose: [
      { icon: "IndianRupee", title: "Most Affordable Option", description: "Total cost ₹15–30L. The most budget-friendly destination for MBBS abroad." },
      { icon: "BookOpen", title: "English Medium", description: "All MBBS programs for international students taught in English." },
      { icon: "Users", title: "Large Indian Community", description: "Over 10,000 Indian students in Kyrgyzstan. Strong peer support networks." },
      { icon: "Shield", title: "NMC Approved", description: "Partner universities are NMC-approved. Essential for Indian licensing eligibility." },
    ],
    eligibility: [
      { criteria: "NEET", requirement: "Qualified (mandatory)" },
      { criteria: "PCB Marks", requirement: "Minimum 50% (40% SC/ST/OBC)" },
      { criteria: "Age", requirement: "17 years as of Dec 31 of admission year" },
      { criteria: "IELTS/TOEFL", requirement: "Not required" },
    ],
    feeStructure: [
      { year: "Year 1", tuition: "₹2,80,000", hostel: "₹55,000", misc: "₹35,000", total: "₹3,70,000" },
      { year: "Year 2", tuition: "₹2,80,000", hostel: "₹55,000", misc: "₹25,000", total: "₹3,60,000" },
      { year: "Year 3", tuition: "₹3,20,000", hostel: "₹55,000", misc: "₹25,000", total: "₹4,00,000" },
      { year: "Year 4", tuition: "₹3,20,000", hostel: "₹55,000", misc: "₹25,000", total: "₹4,00,000" },
      { year: "Year 5", tuition: "₹3,60,000", hostel: "₹55,000", misc: "₹25,000", total: "₹4,40,000" },
    ],
    admissionTimeline: [
      { month: "April–May", step: "Counseling and university shortlisting" },
      { month: "June", step: "Application submission after NEET result" },
      { month: "July", step: "Invitation letter and visa application" },
      { month: "August", step: "Visa (2–3 weeks), pre-departure briefing" },
      { month: "September", step: "Travel to Bishkek" },
      { month: "October", step: "Orientation and classes" },
    ],
    lifeAbroad: {
      climate: "Cold winters (−10°C to −20°C), warm summers. Mountains and fresh air.",
      food: "Indian mess available. Indian community large enough to support Indian food supply chains.",
      safety: "Generally safe. University areas well-monitored. Exercise standard urban precautions.",
      transport: "Minibuses (marshrutkas) and taxis common. Affordable transport.",
      currency: "Kyrgyzstani Som (KGS). Monthly expenses ~₹10,000–₹14,000.",
    },
    fmgeNote: "Important: Kyrgyzstan has lower FMGE pass rates than some other destinations (~30–40%). We recommend this destination only for budget-constrained students who commit to rigorous FMGE preparation from Year 1. We provide enhanced FMGE coaching support for Kyrgyzstan students.",
    faqs: [
      { question: "Is Kyrgyzstan a good option for low-budget students?", answer: "Yes, if you are budget-constrained and committed to consistent FMGE preparation. The low fees make it accessible, but FMGE pass rates require focused effort." },
      { question: "What is the FMGE pass rate from Kyrgyzstan?", answer: "Approximately 30–40%. Lower than other destinations. However, students who prepare consistently from Year 1 have much better outcomes." },
      { question: "Are there good hospitals for clinical training?", answer: "Clinical training quality varies by university. We only recommend universities with good hospital tie-ups." },
      { question: "Is Kyrgyzstan NMC approved?", answer: "Yes, our partner universities in Kyrgyzstan are NMC-approved and WDOMS-listed." },
      { question: "How long is the visa process?", answer: "Typically 2–3 weeks. We assist with all visa documentation to ensure a smooth process." },
    ],
    whatsappMessage: "Hi, I'm interested in MBBS in Kyrgyzstan. Please guide me.",
  },

  {
    slug: "philippines", durationYears: 6, budgetMin: 25, budgetMax: 45, internshipIncluded: true,
    name: "Philippines",
    flag: "🇵🇭",
    duration: "5.5–6 years",
    feeRangePerYear: "₹4.5L – ₹7L/year",
    totalCost: "₹25L – ₹45L",
    language: "English",
    climate: "Tropical, warm year-round",
    nmcApproved: true,
    tagline: "US-Style Curriculum, USMLE Ready",
    heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
    whyChoose: [
      { icon: "Globe", title: "US-Style Curriculum", description: "Philippines follows the American medical education model. Ideal for students considering USMLE or international practice." },
      { icon: "Languages", title: "English-First Country", description: "English is an official language. No language barrier whatsoever." },
      { icon: "Award", title: "Strong Clinical Exposure", description: "Philippine hospitals provide extensive clinical experience. High-volume hospitals with diverse patient cases." },
      { icon: "TrendingUp", title: "USMLE Pathway", description: "Philippine medical graduates have a clear pathway to USMLE Step 1, 2, and 3 for US residency." },
    ],
    eligibility: [
      { criteria: "NEET", requirement: "Qualified (mandatory)" },
      { criteria: "PCB Marks", requirement: "Minimum 50% (40% SC/ST/OBC)" },
      { criteria: "Age", requirement: "17 years as of Dec 31 of admission year" },
      { criteria: "IELTS/TOEFL", requirement: "Not required (English medium country)" },
    ],
    feeStructure: [
      { year: "Year 1", tuition: "₹5,00,000", hostel: "₹80,000", misc: "₹60,000", total: "₹6,40,000" },
      { year: "Year 2", tuition: "₹5,00,000", hostel: "₹80,000", misc: "₹40,000", total: "₹6,20,000" },
      { year: "Year 3", tuition: "₹5,50,000", hostel: "₹80,000", misc: "₹40,000", total: "₹6,70,000" },
      { year: "Year 4", tuition: "₹5,50,000", hostel: "₹80,000", misc: "₹40,000", total: "₹6,70,000" },
      { year: "Year 5", tuition: "₹6,00,000", hostel: "₹80,000", misc: "₹40,000", total: "₹7,20,000" },
      { year: "Year 6 (clinical)", tuition: "₹6,00,000", hostel: "₹80,000", misc: "₹40,000", total: "₹7,20,000" },
    ],
    admissionTimeline: [
      { month: "March–May", step: "Counseling, university selection" },
      { month: "June", step: "NEET result, application submission" },
      { month: "July", step: "Acceptance letter, student visa application" },
      { month: "August", step: "Visa processing (4–6 weeks)" },
      { month: "September", step: "Travel to Manila or Cebu" },
      { month: "October–November", step: "Classes begin (Philippines has different semester start)" },
    ],
    lifeAbroad: {
      climate: "Tropical warm climate year-round. Typhoon season June–November. Air-conditioned campuses and dorms.",
      food: "Filipino food similar to Southeast Asian cuisine. Indian restaurants and groceries in Manila and other cities.",
      safety: "Safe in university areas. Standard urban precautions. Manila has some areas to avoid.",
      transport: "Jeepneys, tricycles, Grab (ride-sharing). Affordable transport.",
      currency: "Philippine Peso (PHP). ₹1 ≈ 0.7 PHP. Monthly expenses ~₹18,000–₹25,000.",
    },
    fmgeNote: "Philippines has a good FMGE pass rate (~50–60%). The US-style curriculum aligns well with FMGE examination patterns. Additionally, graduates are well-positioned for USMLE if they want to practice internationally.",
    faqs: [
      { question: "Is Philippines good for USMLE preparation?", answer: "Yes, Philippines is one of the best countries for students targeting USMLE. The US-style curriculum and English-medium education provide strong preparation." },
      { question: "Is the climate in Philippines suitable?", answer: "Philippines is tropical and warm year-round. Perfect for students from warmer Indian states. Campuses and dorms are air-conditioned." },
      { question: "Is English widely spoken?", answer: "Yes, English is an official language in Philippines. There is zero language barrier." },
      { question: "What is the FMGE pass rate from Philippines?", answer: "Approximately 50–60%. The US-style curriculum aligns well with FMGE patterns." },
      { question: "Is Philippines NMC approved?", answer: "Yes, our partner universities in Philippines are NMC-approved and WDOMS-listed." },
    ],
    whatsappMessage: "Hi, I'm interested in MBBS in Philippines. Please guide me.",
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
