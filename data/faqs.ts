export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  "General",
  "Eligibility",
  "Admission Process",
  "Fees",
  "Visa",
  "Life Abroad",
  "Post-MBBS",
];

export const faqs: FAQ[] = [
  // General
  {
    id: "g1",
    category: "General",
    question: "What is MBBS abroad?",
    answer: "MBBS abroad refers to completing your Bachelor of Medicine, Bachelor of Surgery (MBBS) degree at a foreign medical university. Indian students who cannot secure a government medical seat in India — due to high competition — opt to pursue MBBS in countries like Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, or the Philippines at a fraction of the cost of Indian private colleges.",
  },
  {
    id: "g2",
    category: "General",
    question: "Is MBBS from abroad valid in India?",
    answer: "Yes, absolutely — but with a key condition. You must graduate from an NMC (National Medical Commission) approved university that is listed in the WDOMS (World Directory of Medical Schools). After returning to India, you must clear the FMGE (Foreign Medical Graduate Examination) or NExT (National Exit Test) to get your Indian medical license. We only work with NMC-approved universities.",
  },
  {
    id: "g3",
    category: "General",
    question: "Which countries are best for MBBS abroad?",
    answer: "The best country depends on your NEET score, budget, climate preference, and career goals. Russia and Georgia offer excellent quality at reasonable costs. Kazakhstan and Uzbekistan are more affordable. Nepal and Bangladesh are culturally closest to India with no language barrier. Philippines is ideal for students targeting USMLE. Our doctors will help you match to the best fit for your specific situation.",
  },
  {
    id: "g4",
    category: "General",
    question: "Is the degree globally recognized?",
    answer: "Yes, degrees from NMC-approved, WDOMS-listed universities are recognized in India and in most countries worldwide. For countries like the USA, UK, Canada, or Australia, additional licensing exams (USMLE, PLAB, AMC, etc.) are required — similar to what Indian medical graduates face.",
  },
  {
    id: "g5",
    category: "General",
    question: "Why choose a consultancy led by doctors?",
    answer: "Most consultancies are run by business professionals who have never set foot in a foreign medical university. Our team consists of doctors who actually studied MBBS abroad — in Russia, Georgia, Kazakhstan, and Philippines. We know what daily life is like, which hospitals have good clinical exposure, which universities prepare you well for FMGE, and what mistakes to avoid. This is the difference between advice from a salesperson and advice from someone who has lived it.",
  },
  // Eligibility
  {
    id: "e1",
    category: "Eligibility",
    question: "Is NEET mandatory for MBBS abroad?",
    answer: "Yes. Since 2018, the National Medical Commission (NMC) regulation makes NEET qualification mandatory for all Indian students wishing to study MBBS abroad. You must have a valid NEET scorecard showing you have qualified (even the minimum passing score is sufficient for most countries).",
  },
  {
    id: "e2",
    category: "Eligibility",
    question: "What is the minimum NEET score needed for MBBS abroad?",
    answer: "There is no minimum NEET score requirement for foreign universities beyond NEET qualification itself (passing the exam). However, the NMC requires you to be NEET-qualified. Higher NEET scores give you more options, but even students with scores in the 200–350 range have good options abroad.",
  },
  {
    id: "e3",
    category: "Eligibility",
    question: "What PCB percentage do I need in Class 12?",
    answer: "You need a minimum of 50% aggregate in Physics, Chemistry, and Biology in Class 12 for general category students. SC/ST/OBC students require a minimum of 40%. Some specific universities may have their own slightly different requirements.",
  },
  {
    id: "e4",
    category: "Eligibility",
    question: "Is there an age limit for MBBS abroad?",
    answer: "Yes. You must be at least 17 years of age as of December 31 of the year of admission. There is no upper age limit for MBBS abroad (the NMC had proposed a 25-year upper limit but it was challenged and is not currently enforced).",
  },
  {
    id: "e5",
    category: "Eligibility",
    question: "Can I apply if I'm from the arts or commerce stream?",
    answer: "No. MBBS admission requires Physics, Chemistry, and Biology as mandatory subjects in Class 11 and 12. Arts or Commerce students are not eligible. The PCB combination with English is the minimum academic requirement.",
  },
  {
    id: "e6",
    category: "Eligibility",
    question: "What if I haven't appeared for NEET yet?",
    answer: "You must clear NEET before you can apply to any foreign medical university. If you haven't appeared yet, prepare for NEET first. We can guide you on NEET preparation resources and then help you plan your MBBS abroad journey once you have your score.",
  },
  // Admission Process
  {
    id: "a1",
    category: "Admission Process",
    question: "When does the MBBS admission process start?",
    answer: "The admission season typically runs from March to October. NEET results are announced in June, so most applications for foreign universities happen between June and August. Some universities accept applications earlier (March–May) based on anticipated NEET qualification. We recommend starting counseling in March–April so you're ready to act immediately when NEET results come out.",
  },
  {
    id: "a2",
    category: "Admission Process",
    question: "How long does it take to get an admission letter?",
    answer: "After submitting your application to the university, admission letters (invitation letters) are typically issued within 2–4 weeks for most countries. Russia takes 3–4 weeks, Georgia and Bangladesh can be faster (1–2 weeks), and Philippines may take 4–6 weeks.",
  },
  {
    id: "a3",
    category: "Admission Process",
    question: "What documents do I need?",
    answer: "Standard documents required: Class 10 Marksheet, Class 12 Marksheet, NEET Scorecard, Passport (valid for 5+ years), 10–15 passport-size photos, Birth Certificate, Medical Fitness Certificate, Police Clearance Certificate (for some countries), and NMC Eligibility Certificate. We will give you a detailed country-specific checklist.",
  },
  {
    id: "a4",
    category: "Admission Process",
    question: "What is the NMC Eligibility Certificate?",
    answer: "The NMC (National Medical Commission) Eligibility Certificate is a mandatory certificate issued by NMC India to Indian students who wish to study MBBS abroad. It verifies that you meet the Indian eligibility criteria (NEET qualification, PCB percentage, etc.). Applying for it is a crucial step in the process and we help you complete this application.",
  },
  {
    id: "a5",
    category: "Admission Process",
    question: "Can I apply to multiple countries at the same time?",
    answer: "Yes, and we recommend keeping 2–3 country options open initially. Once you have your NEET score, we help you narrow down and apply to the best-fit options. Final admission is taken at only one university.",
  },
  // Fees
  {
    id: "f1",
    category: "Fees",
    question: "How much does MBBS abroad cost?",
    answer: "Total cost varies by country: Russia ₹25–45L, Georgia ₹30–50L, Kazakhstan ₹20–40L, Uzbekistan ₹18–35L, Kyrgyzstan ₹15–30L, Bangladesh ₹25–40L, Nepal ₹30–55L, Philippines ₹25–45L. These include tuition, hostel, and living costs over the full duration. Compare this to Indian private medical colleges which cost ₹60L–₹1 crore+ with additional capitation fees.",
  },
  {
    id: "f2",
    category: "Fees",
    question: "Are there any hidden fees or donations?",
    answer: "No capitation fees, no donations, no hidden management quota charges — this is one of the major advantages of MBBS abroad. The fee structure we share is what you pay. There may be minor charges for registration, exam fees, or equipment that are standard across all students.",
  },
  {
    id: "f3",
    category: "Fees",
    question: "Can I get an education loan for MBBS abroad?",
    answer: "Yes. Most nationalized banks and several private banks offer education loans for MBBS abroad from NMC-approved universities. Banks like SBI, Bank of Baroda, Union Bank, and HDFC Bank have specific education loan products for overseas medical education. Loan amount eligibility typically covers tuition and living costs.",
  },
  {
    id: "f4",
    category: "Fees",
    question: "When do I pay university fees?",
    answer: "University fees are typically paid semester-by-semester or annually. The first payment is usually made before or just after arriving at the university. We provide a clear payment schedule for each university so you can plan your finances accordingly.",
  },
  {
    id: "f5",
    category: "Fees",
    question: "What is the consultancy fee?",
    answer: "Our initial counseling is 100% free. We provide one counseling session, university shortlisting, and eligibility assessment at no charge. Our service fees, if any, cover application support, document assistance, and visa guidance. We will be fully transparent about any charges before you commit.",
  },
  // Visa
  {
    id: "v1",
    category: "Visa",
    question: "How long does the student visa process take?",
    answer: "Visa processing times: Russia (4–6 weeks), Georgia (3–4 weeks), Kazakhstan (3–4 weeks), Uzbekistan (2–3 weeks), Kyrgyzstan (2–3 weeks), Bangladesh (1–2 weeks), Nepal (no visa required for Indians!), Philippines (4–6 weeks). We assist with all visa documentation to minimize delays.",
  },
  {
    id: "v2",
    category: "Visa",
    question: "Is the student visa easy to get?",
    answer: "Generally yes, for legitimate students with proper documentation. The key is having all documents in order. We have successfully guided hundreds of students through the visa process for each of our destination countries. Rejection rates for well-prepared applications are very low.",
  },
  {
    id: "v3",
    category: "Visa",
    question: "Can I work part-time on a student visa?",
    answer: "Regulations vary by country. Russia, Georgia, and Philippines allow part-time work for students in some circumstances. However, we strongly advise against working during the MBBS program — the academic workload is demanding and FMGE preparation should be your focus. Financial planning before departure is better than working abroad.",
  },
  // Life Abroad
  {
    id: "l1",
    category: "Life Abroad",
    question: "Is it safe for Indian students?",
    answer: "Yes. Our partner university countries are generally safe for Indian students. Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, and Philippines all have established Indian student communities. University campuses have security. We brief students on local safety norms before departure.",
  },
  {
    id: "l2",
    category: "Life Abroad",
    question: "Is Indian food available abroad?",
    answer: "Yes, in all our destination countries. India has large diaspora and student communities in each destination, which has created Indian mess facilities, restaurants, and grocery stores. Nepal and Bangladesh have the most similar cuisine to India. Russia and Kazakhstan have Indian restaurants in university cities. Philippines has Indian communities in Manila.",
  },
  {
    id: "l3",
    category: "Life Abroad",
    question: "Will I face a language barrier?",
    answer: "All MBBS programs for international students are taught in English. There is no language requirement for admission. However, basic local language skills help for everyday interactions (grocery shopping, interacting with local patients in clinics). Universities provide basic language courses. Bangladesh, Nepal, and Philippines (English-speaking) have the least language adjustment needed.",
  },
  {
    id: "l4",
    category: "Life Abroad",
    question: "Can I visit India during holidays?",
    answer: "Yes. Most universities have summer breaks of 1–2 months and semester breaks where you can return to India. Nepal requires no visa. Russia, Kazakhstan, Georgia, Uzbekistan, Philippines students typically visit once a year. Bangladesh students can visit more frequently due to proximity.",
  },
  // Post-MBBS
  {
    id: "p1",
    category: "Post-MBBS",
    question: "What is FMGE/NExT?",
    answer: "FMGE (Foreign Medical Graduate Examination) is the licensing exam that Indian students who have studied MBBS abroad must clear to practice medicine in India. The government is transitioning to NExT (National Exit Test), which will be common for both Indian and foreign medical graduates. Clearing this exam is mandatory. We prepare students for FMGE from Year 1 of their MBBS.",
  },
  {
    id: "p2",
    category: "Post-MBBS",
    question: "What is the FMGE pass rate?",
    answer: "Nationally, the FMGE pass rate for first-time takers is approximately 15–25%. However, this average includes many unprepared students. Students who prepare consistently throughout their MBBS have much higher success rates. Nepal has the best track record (~60%), followed by Philippines and Georgia (~50–55%), Russia (~45–50%), and Central Asian countries (35–45%).",
  },
  {
    id: "p3",
    category: "Post-MBBS",
    question: "Can I do PG in India after MBBS abroad?",
    answer: "Yes, after clearing FMGE/NExT and obtaining your Indian medical registration, you are eligible to appear for NEET PG (National Eligibility cum Entrance Test for Postgraduate). There is no distinction between Indian and foreign MBBS graduates for PG entrance. Your NEET PG score determines your PG seat.",
  },
  {
    id: "p4",
    category: "Post-MBBS",
    question: "Can I practice abroad after my degree?",
    answer: "It depends on the country. For the USA, you need USMLE (Philippines-educated students have a good pathway). For UK, you need PLAB. For UAE and Middle East, the degree from NMC-approved universities is generally accepted with local registration. For Australia, AMC exam is required. Philippines-educated doctors have the broadest international practice opportunities.",
  },
  {
    id: "p5",
    category: "Post-MBBS",
    question: "Is there any internship requirement?",
    answer: "After clearing FMGE/NExT, you must complete a 1-year compulsory internship (rotating internship) at an NMC-recognized hospital in India before you receive your permanent medical registration and can practice independently.",
  },
];
