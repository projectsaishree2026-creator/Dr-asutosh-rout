export const doctor = {
  name: "Dr. Asutosh Rout",
  shortName: "Dr. Asutosh Rout",
  title: "T.B. Chest & Asthma Specialist",
  qualifications: "MBBS, MD (Pulmonary Medicine)",
  institution: "SCB Medical College, Cuttack",
  experience: "10+",
  patientsCount: "5,000+",
  clinicName: "Sai shree polyclinic",
  address: "Kathagola Rd, near shreema Hospital, Mangalabag, Cuttack, Odisha 753001, Sai Shree Poly Clinic",
  phone: "+91 7008512773",
  phoneDisplay: "+91 70085 12773",
  email: "dr.asutoshrout@saishreehealthcare.in",
  bio: "Dr. Asutosh Rout is a distinguished Pulmonary Medicine specialist committed to delivering expert, compassionate care for patients with chest and respiratory conditions. A graduate of the prestigious SCB Medical College, Cuttack, Dr. Rout brings over a decade of focused clinical practice to Sai shree polyclinic.",
  bioLong: "Dr. Asutosh Rout completed his MBBS and MD in Pulmonary Medicine from SCB Medical College, one of Odisha's foremost government medical institutions. With deep expertise in the diagnosis and management of tuberculosis, asthma, COPD, pneumonia, bronchiectasis, and asphyxia, he provides evidence-based, patient-centred care tailored to each individual's needs. His approach combines thorough clinical assessment with clear communication — empowering patients to understand their condition and participate in their own recovery.",
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Patients Treated", value: "5,000+" },
    { label: "Conditions Treated", value: "6+" },
    { label: "Success Rate", value: "98%" },
  ],
};

export const services = [
  {
    id: "tuberculosis",
    title: "Tuberculosis (T.B.)",
    shortTitle: "T.B. Management",
    icon: "shield",
    desc: "Expert diagnosis, DOTS therapy supervision, and comprehensive treatment planning for pulmonary and extra-pulmonary tuberculosis. From first consultation through to full recovery.",
    details: [
      "Sputum smear microscopy & culture",
      "Complete DOTS therapy guidance",
      "Drug-resistant TB management",
      "Contact tracing advice",
      "Follow-up monitoring & clearance",
    ],
    color: "blue",
  },
  {
    id: "asthma",
    title: "Asthma",
    shortTitle: "Asthma Care",
    icon: "wind",
    desc: "Personalised asthma management including trigger identification, inhaler technique training, and long-term control strategies for all age groups.",
    details: [
      "Spirometry & lung function tests",
      "Trigger identification & avoidance",
      "Inhaler therapy & technique training",
      "Step-up / step-down management",
      "Emergency action plans",
    ],
    color: "teal",
  },
  {
    id: "copd",
    title: "COPD",
    shortTitle: "COPD Treatment",
    icon: "activity",
    desc: "Advanced management of Chronic Obstructive Pulmonary Disease with pulmonary rehabilitation guidance, medication optimisation, and oxygen therapy assessment.",
    details: [
      "Spirometry & COPD staging",
      "Bronchodilator therapy",
      "Pulmonary rehabilitation",
      "Oxygen therapy assessment",
      "Exacerbation management",
    ],
    color: "blue",
  },
  {
    id: "pneumonia",
    title: "Pneumonia",
    shortTitle: "Pneumonia Care",
    icon: "zap",
    desc: "Accurate diagnosis via clinical examination and investigations, with evidence-based antibiotic management and close follow-up to ensure complete recovery.",
    details: [
      "Chest X-ray & CT assessment",
      "Antibiotic therapy selection",
      "Severity scoring (CURB-65)",
      "Inpatient / outpatient management",
      "Post-pneumonia follow-up",
    ],
    color: "teal",
  },
  {
    id: "bronchiectasis",
    title: "Bronchiectasis",
    shortTitle: "Bronchiectasis",
    icon: "layers",
    desc: "Specialised management including airway clearance physiotherapy, infection control strategies, and personalised long-term treatment.",
    details: [
      "HRCT chest evaluation",
      "Airway clearance techniques",
      "Infection prevention strategies",
      "Inhaled antibiotic therapy",
      "Long-term maintenance plans",
    ],
    color: "blue",
  },
  {
    id: "asphyxia",
    title: "Asphyxia",
    shortTitle: "Respiratory Emergencies",
    icon: "alert-circle",
    desc: "Prompt evaluation and management of acute respiratory distress, asphyxia, and emergency pulmonary conditions requiring urgent clinical intervention.",
    details: [
      "Acute respiratory assessment",
      "Emergency airway management",
      "Oxygen therapy protocols",
      "Intensive monitoring",
      "Rapid stabilisation strategies",
    ],
    color: "teal",
  },
];

export const testimonials = [
  {
    name: "Ramesh Panda",
    location: "Cuttack",
    condition: "Tuberculosis Patient",
    text: "Dr. Rout diagnosed my TB accurately when other doctors had missed it. His thorough examination, clear explanations, and careful follow-up made a very difficult journey manageable. We are forever grateful.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Sunita Mohapatra",
    location: "Bhubaneswar",
    condition: "Asthma (Child Patient's Parent)",
    text: "My daughter has struggled with severe asthma since she was six. After starting treatment with Dr. Rout, her attacks reduced dramatically. He developed a plan that finally works. His patience and expertise are remarkable.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Biswanath Nayak",
    location: "Kendrapara",
    condition: "COPD Patient",
    text: "I came with severe COPD and was struggling to breathe even at rest. Dr. Rout's thorough assessment and tailored treatment completely transformed my quality of life. I can now do things I thought were behind me.",
    rating: 5,
    initials: "BN",
  },
  {
    name: "Pratima Sahoo",
    location: "Cuttack",
    condition: "Pneumonia Recovery",
    text: "When I developed serious pneumonia, Dr. Rout managed my case with remarkable precision and care. His prompt diagnosis and treatment got me back on my feet quickly. I highly recommend him to everyone.",
    rating: 5,
    initials: "PS",
  },
];

export const blogs = [
  {
    slug: "understanding-tuberculosis",
    title: "Understanding Tuberculosis: Symptoms, Diagnosis & Modern Treatment",
    excerpt: "Tuberculosis remains one of the most challenging infectious diseases worldwide. Here's what every patient and family should know about recognising, diagnosing, and treating T.B.",
    date: "March 15, 2025",
    category: "Tuberculosis",
    readTime: "5 min read",
  },
  {
    slug: "asthma-management-guide",
    title: "Living Well with Asthma: A Complete Management Guide",
    excerpt: "Asthma need not limit your life. With the right management plan — including trigger avoidance, correct inhaler technique, and regular monitoring — most patients achieve excellent control.",
    date: "February 28, 2025",
    category: "Asthma",
    readTime: "7 min read",
  },
  {
    slug: "copd-lifestyle-changes",
    title: "COPD & Lifestyle: How the Right Habits Can Slow Disease Progression",
    excerpt: "Chronic Obstructive Pulmonary Disease is progressive but manageable. Learn how dietary changes, pulmonary rehabilitation, and smoking cessation can make a significant difference.",
    date: "February 10, 2025",
    category: "COPD",
    readTime: "6 min read",
  },
  {
    slug: "pneumonia-prevention",
    title: "Preventing Pneumonia: Vaccinations, Hygiene & Risk Reduction",
    excerpt: "Pneumonia is a leading cause of hospitalisation in India. Discover evidence-based strategies to protect yourself and your family, especially during the monsoon and winter seasons.",
    date: "January 20, 2025",
    category: "Pneumonia",
    readTime: "4 min read",
  },
];

export const faqs = [
  {
    q: "What conditions does Dr. Asutosh Rout treat?",
    a: "Dr. Rout specialises in all chest and respiratory conditions including Tuberculosis, Asthma, COPD, Pneumonia, Bronchiectasis, and Asphyxia.",
  },
  {
    q: "Do I need a referral to see Dr. Rout?",
    a: "No referral is required. You can directly book an appointment or walk in during clinic hours.",
  },
  {
    q: "What are the clinic hours?",
    a: "Sai shree polyclinic is open Monday to Saturday, 9:00 AM to 7:00 PM. Sunday consultations are available by prior appointment.",
  },
  {
    q: "What investigations are available at the clinic?",
    a: "The clinic supports spirometry, chest X-ray interpretation, and sputum testing. For advanced imaging such as HRCT or CT chest, Dr. Rout provides referrals to trusted diagnostic centres.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 7008512773 directly or fill in the appointment request form on this website. We will confirm your slot promptly.",
  },
  {
    q: "When should I see a pulmonologist?",
    a: "You should consult a pulmonologist if you experience chronic cough, shortness of breath, recurring chest infections, wheezing, or unexplained chest pain.",
  },
  {
    q: "What is the best treatment for asthma in Bhubaneswar and Cuttack?",
    a: "Dr. Asutosh Rout provides comprehensive, evidence-based asthma management in Cuttack, accessible to patients from Bhubaneswar as well. Treatment includes personalized inhaler therapy, trigger identification, and pulmonary function testing.",
  },
  {
    q: "How long does TB treatment take?",
    a: "Standard tuberculosis treatment generally takes 6 months, but it may take longer depending on the type and severity of the infection. Strict adherence to the medication schedule is critical.",
  },
  {
    q: "Is Dr. Asutosh Rout available for consultation in Bhubaneswar?",
    a: "Dr. Asutosh Rout operates primarily out of Sai shree polyclinic in Cuttack. Many patients travel from Bhubaneswar for his expert pulmonary care given the short distance.",
  },
  {
    q: "What are the early symptoms of COPD?",
    a: "Early symptoms of Chronic Obstructive Pulmonary Disease (COPD) include a persistent cough (often with mucus), shortness of breath especially during physical activity, wheezing, and chest tightness.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/patient-corner", label: "Patient Corner" },
  { href: "/contact", label: "Contact" },
];
