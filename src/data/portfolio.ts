export type Skill = { name: string; level: number; learning?: boolean };
export type SkillCategory = {
  title: string;
  subtitle: string;
  icon: string;
  learning?: boolean;
  skills: Skill[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  category: "Frontend" | "Machine Learning" | "AI" | "Personal" | "University" | "Startup";
  image?: string;
  gradient: string;
  emoji: string;
  realImage?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  status?: "Live" | "In Progress" | "Learning";
  descriptionAr?: string;
  problemAr?: string;
  solutionAr?: string;
  titleAr?: string;
};

export type Certificate = {
  title: string;
  platform: string;
  instructor: string;
  date: string;
  category: string;
  link?: string;
  emoji: string;
  gradient: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  side?: "L" | "R";
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  type: "Freelance" | "Personal" | "University" | "Open Source" | "Hackathon";
};

export type Achievement = {
  title: string;
  description: string;
  icon: string;
  year: string;
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "My core expertise — production-ready UI",
    icon: "Code2",
    skills: [
      { name: "React.js (Vite)", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap 5", level: 82 },
      { name: "HTML5 / CSS3", level: 96 },
      { name: "Framer Motion", level: 78 },
      { name: "REST APIs", level: 84 },
      { name: "Responsive Design", level: 94 },
    ],
  },
  {
    title: "Machine Learning & AI",
    subtitle: "Currently learning — active growth zone",
    icon: "Brain",
    learning: true,
    skills: [
      { name: "Python", level: 72 },
      { name: "Machine Learning Algorithms", level: 60, learning: true },
      { name: "Data Annotation", level: 75 },
      { name: "Conversational AI", level: 55, learning: true },
      { name: "Chatbots Architecture", level: 50, learning: true },
      { name: "TensorFlow", level: 35, learning: true },
      { name: "PyTorch", level: 30, learning: true },
      { name: "Computer Vision", level: 40, learning: true },
      { name: "Deep Learning", level: 28, learning: true },
      { name: "LLMs & Prompt Eng.", level: 55, learning: true },
    ],
  },
  {
    title: "Tools & Methodologies",
    subtitle: "Pixel-perfect, accessible experiences",
    icon: "Palette",
    skills: [
      { name: "GitHub", level: 85 },
      { name: "Figma", level: 78 },
      { name: "Postman", level: 75 },
      { name: "WebStorm", level: 82 },
      { name: "Google Colab", level: 70 },
      { name: "Vite", level: 88 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "mini-erp-ai",
    title: "OMRAN — Digital ERP for Construction",
    description:
      "OMRAN is an intelligent digital manager for construction and renovation companies. It centralizes everything in one place: customers, projects, proposals, tasks, materials, photos, invoices, and construction progress tracking.",
    problem:
      "Construction companies scatter their information across Excel files, WhatsApp messages, papers, and notes — making coordination, progress tracking, and decision-making chaotic and error-prone.",
    solution:
      "OMRAN organizes all company operations within a single clear and easy system. It leverages AI to understand customer requests, draft proposals, retrieve project info, track progress, and alert about delays — while keeping final decisions always in the user's hands.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "AI Chatbot",
      "Automation",
    ],
    category: "AI",
    gradient: "from-fuchsia-500 via-violet-600 to-indigo-600",
    emoji: "🏗️",
    realImage: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/aliendevit/mini_erp_ai",
    featured: true,
    status: "Live",
    titleAr: "Mini ERP بالذكاء الاصطناعي",
    descriptionAr: "حل تخطيط موارد المؤسسات معزز بالذكاء الاصطناعي، بُني لمنافسة الشركات الناشئة — يتميز بواجهة Chatbot، وسير عمل ذكي، وأتمتة المهام.",
    problemAr: "المؤسسات تعاني من عمليات متشعبة ومهام متكررة وبطء اتخاذ القرارات، خاصة عندما تتقاطع سير العمل بين الفرق واللغات.",
    solutionAr: "تم تصميم وتطوير Mini ERP معزز بميزات AI وواجهة chatbot لتبسيط العمليات التجارية، مع دمج الأتمتة الذكية ودعم متعدد اللغات.",
  },
  {
    id: "startup-weekend-syria",
    title: "Startup Weekend Syria — BaaS MVP",
    description:
      "A 54-hour intense startup competition where our team ideated and built a 'Backend as a Service' MVP, focusing on frontend development and rapid prototyping.",
    problem:
      "Teams need to validate ideas, build MVPs, and ship working products under extreme time pressure — often with zero prior coordination.",
    solution:
      "Collaborated with a multidisciplinary team to ideate, design, and ship a BaaS MVP in 54 hours. Led frontend development, rapid prototyping, and UX decisions under deadline pressure.",
    tech: ["React", "TypeScript", "Rapid Prototyping", "Teamwork", "UX"],
    category: "Startup",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    emoji: "⚡",
    realImage: "https://images.pexels.com/photos/16323454/pexels-photo-16323454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22",
    featured: true,
    status: "Live",
    titleAr: "Startup Weekend Syria — نموذج BaaS",
    descriptionAr: "منافسة شديدة لمدة 54 ساعة حيث بنى فريقنا نموذج 'Backend as a Service'، مع التركيز على تطوير الواجهات والنمذجة السريعة.",
    problemAr: "الفريق تحتاج لتقييم الأفكار وبناء نماذج أولية تحت ضغط وقت شديد، غالباً بدون تنسيق مسبق.",
    solutionAr: "تعاونت مع فريق متعدد التخصصات لتصميم وبناء نموذج BaaS في 54 ساعة، مع قيادة تطوير الواجهات واتخاذ قرارات UX.",
  },
  {
    id: "scopesnap",
    title: "ScopeSnap — Smart Scope Management",
    description:
      "A SaaS platform that protects developers and companies from scope creep by documenting every agreement, change request, and project detail transparently.",
    problem:
      "Freelancers and dev teams constantly lose money and trust due to hidden scope creep and verbal agreements with clients.",
    solution:
      "Designed a scope-splitting UI (Included / Excluded / Under Review), a full project-lifecycle dashboard, change-request tracking with timestamps, and a sharable client-approval link.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind", "SaaS"],
    category: "Startup",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    emoji: "📋",
    realImage: "https://images.pexels.com/photos/9064799/pexels-photo-9064799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/ScopeSnap",
    live: "https://reman-22.github.io/ScopeSnap/",
    featured: true,
    status: "Live",
    titleAr: "ScopeSnap — إدارة نطاق ذكية",
    descriptionAr: "منصة SaaS تحمي المطورين والشركات من توسع النطاق عن طريق توثيق كل اتفاق وطلب تغيير بشفافية.",
    problemAr: "المطورون المستقلون يخسرون المال والثقة بسبب توسع النطاق الخفي والاتفاقيات الشفوية مع العملاء.",
    solutionAr: "تم تصميم واجهة تقسيم النطاق (مشمول/مستبعد/قيد المراجعة)، ولوحة تتبع كاملة، ورابط موافقة للعميل.",
  },
  {
    id: "fashion-store",
    title: "Fashion Store — ZARA-inspired E-commerce",
    description:
      "A minimalist e-commerce platform for modern fashion, inspired by ZARA's clean aesthetic — focused on product browsing, smart filters, and a frictionless checkout flow.",
    problem:
      "Most fashion stores overwhelm shoppers with cluttered UIs, making it hard to discover items and move quickly from browsing to purchase.",
    solution:
      "Crafted a minimal, product-forward interface with smart category filters, size/color quick-picks, rich product detail pages, and a fully responsive layout across all devices.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    category: "Frontend",
    gradient: "from-neutral-700 via-stone-800 to-neutral-900",
    emoji: "👗",
    realImage: "https://images.pexels.com/photos/5531709/pexels-photo-5531709.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/Zara",
    live: "https://reman-22.github.io/Zara/",
    featured: true,
    status: "Live",
    titleAr: "متجر أزياء — مستوحى من ZARA",
    descriptionAr: "منصة تجارة إلكترونية minimalist للموضة العصرية، مستوحاة من أناقة ZARA — تركز على تصفح المنتجات والفلترة الذكية وتجربة شراء سلسة.",
    problemAr: "معظم متاجر الأزياء تطغى على المتسوقين بواجهات مزدحمة، مما يجعل اكتشاف المنتجات وشراءها أمراً صعباً.",
    solutionAr: "تم تصميم واجهة minimalist مع فلترة ذكية، تفاصيل منتجات غنية، وتصميم متجاوب لجميع الأجهزة.",
  },
  {
    id: "luxury-boutique",
    title: "Luxury Boutique — Gucci-inspired Store",
    description:
      "A premium boutique website designed to convey the feeling of luxury, exclusivity, and craftsmanship — inspired by Gucci's visual identity.",
    problem:
      "Ordinary e-commerce designs strip high-value products of their premium feel, weakening trust and perceived value.",
    solution:
      "Built an immersive, collection-led experience with calm tones, rich product detail, cinematic visuals, and a premium UX that mirrors walking into a real luxury boutique.",
    tech: ["HTML", "CSS", "JavaScript", "Premium UX", "Collections"],
    category: "Frontend",
    gradient: "from-amber-600 via-yellow-700 to-amber-900",
    emoji: "💎",
    realImage: "https://images.pexels.com/photos/20591024/pexels-photo-20591024.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/New_Gucci",
    live: "https://reman-22.github.io/New_Gucci/",
    featured: true,
    status: "Live",
    titleAr: "متجر فاخر — مستوحى من Gucci",
    descriptionAr: "متجر إلكتروني فاخر مصمم لنقل إحساس الفخامة والأناقة، مستوحى من الهوية البصرية لـ Gucci.",
    problemAr: "تصاميم التجارة الإلكترونية العادية تحرم المنتجات الثمينة من قيمتها وبصمتها الفاخرة.",
    solutionAr: "تجربة immersive مع نغمات هادئة، تفاصيل غنية، وتصميم UX يعكس زيارة بوتيك حقيقي.",
  },
  {
    id: "trippy",
    title: "Trippy — Travel Website",
    description:
      "A complete travel platform that showcases top destinations, hotels, and activities with a modern, responsive design focused on user experience.",
    problem:
      "Travelers need a unified, visually-appealing platform to explore destinations and plan trips without juggling multiple apps.",
    solution:
      "Built a responsive React app with smooth navigation, rich destination content, and a clean UX that helps users plan their ideal vacations.",
    tech: ["React", "Vite", "React Router", "React Icons", "HTML", "CSS", "JavaScript"],
    category: "Frontend",
    gradient: "from-sky-400 via-cyan-500 to-teal-500",
    emoji: "✈️",
    realImage: "https://images.pexels.com/photos/4540501/pexels-photo-4540501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/trippy",
    live: "https://reman-22.github.io/trippy/",
    featured: true,
    status: "Live",
    titleAr: "Trippy — موقع سياحي",
    descriptionAr: "منصة سياحية متكاملة تعرض أفضل الوجهات والفنادق والأنشطة بتصميم عصري متجاوب يركز على تجربة المستخدم.",
    problemAr: "المسافرون يحتاجون منصة موحدة وجذابة لاستكشاف الوجهات وتخطيط الرحلات بدون استخدام تطبيقات متعددة.",
    solutionAr: "تم بناء تطبيق React متجاوب مع تصفح سلس ومحتوى غني عن الوجهات وتجربة مستخدم نظيفة.",
  },
  {
    id: "blogs",
    title: "Blogs — Modern Blogging Platform",
    description:
      "A modern blogging platform that lets users explore and read articles in a clean, visually-appealing environment with smart categorization.",
    problem:
      "Readers want fast access to well-organized articles; bloggers want a clean canvas to showcase their writing.",
    solution:
      "Designed a fast, categorized blog with emphasis on readability, speed, and a responsive UI that works across all devices.",
    tech: ["React", "Vite", "React Router", "React Icons", "HTML", "CSS", "JavaScript"],
    category: "Frontend",
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
    emoji: "📝",
    realImage: "https://images.pexels.com/photos/6356/hands-woman-laptop-working.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/blogs",
    live: "https://reman-22.github.io/blogs/",
    featured: true,
    status: "Live",
    titleAr: "Blogs — منصة تدوين حديثة",
    descriptionAr: "منصة تدوين حديثة تتيح للمستخدمين استكشاف المقالات وقراءتها في بيئة مريحة وبصرية جذابة.",
    problemAr: "القراء يريدون وصولاً سريعاً للمقالات المنظمة، والمدونون يريدون لوحة نظيفة لعرض كتاباتهم.",
    solutionAr: "تم تصميم مدونة سريعة ومنظمة مع التركيز على قابلية القراءة والسرعة والتجاوب مع جميع الأجهزة.",
  },
  {
    id: "restaurant",
    title: "Restaurant Website",
    description:
      "A modern restaurant website offering an appetizing visual experience — an organized menu, dish details, pricing, and contact/location info.",
    problem:
      "Restaurants need a strong digital presence that presents their menu beautifully and makes reservation or contact effortless.",
    solution:
      "Crafted a clean, interactive menu interface with detailed dish pages, pricing, ingredients, and embedded contact/location sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    emoji: "🍽️",
    realImage: "https://images.pexels.com/photos/4921028/pexels-photo-4921028.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/Restaurant",
    live: "https://reman-22.github.io/Restaurant/",
    status: "Live",
    titleAr: "موقع مطعم",
    descriptionAr: "موقع إلكتروني عصري للمطاعم يقدم تجربة بصرية شهية — قائمة طعام منظمة، تفاصيل الأطباق، والأسعار.",
    problemAr: "المطاعم تحتاج وجود رقمي قوي يعرض قائمة الطعام بشكل جميل ويجعل الحجز سلساً.",
    solutionAr: "تم تصميم واجهة قائمة تفاعلية مع صفحات أطباق مفصلة والأسعار والمكونات.",
  },
  {
    id: "medication",
    title: "Medication — Medical Platform",
    description:
      "A digital medical platform offering calm, trustworthy access to specialties, medical staff, and treatment services — strengthening clinic-to-patient communication.",
    problem:
      "Patients need a calm, reliable interface to explore medical specialties and find the right care quickly.",
    solution:
      "Built a clean UI with browsable specialties, medical team profiles, and accurate service information in a soothing visual style.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    emoji: "🏥",
    realImage: "https://images.pexels.com/photos/13176452/pexels-photo-13176452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/Medication",
    live: "https://reman-22.github.io/Medication/",
    status: "Live",
    titleAr: "Medication — منصة طبية",
    descriptionAr: "منصة طبية رقمية تتيح الوصول المريح للخدمات الصحية والمعلومات الطبية الموثوقة.",
    problemAr: "المرضى يحتاجون واجهة مريحة وموثوقة لاستعراض التخصصات الطبية والعثور على الرعاية المناسبة.",
    solutionAr: "تم بناء واجهة نظيفة مع تخصصات قابلة للاستعراض وملفات الفريق الطبي.",
  },
  {
    id: "iphone",
    title: "iPhone — Showcase Website",
    description:
      "An immersive, interactive product showcase for iPhone — highlighting design, camera, and performance with smooth visual transitions inspired by Apple's official sites.",
    problem:
      "Premium tech products deserve a premium browsing experience that mirrors the product's own elegance.",
    solution:
      "Built a minimalist, animation-driven site with smooth transitions, detailed feature sections, and an immersive product tour.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    gradient: "from-slate-500 via-zinc-600 to-gray-800",
    emoji: "📱",
    realImage: "https://images.pexels.com/photos/5099869/pexels-photo-5099869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    github: "https://github.com/Reman-22/Project_iPhone",
    live: "https://reman-22.github.io/Project_iPhone/",
    featured: true,
    status: "Live",
    titleAr: "iPhone — موقع استعراضي",
    descriptionAr: "موقع استعراضي تفاعلي لأجهزة iPhone، يركز على إبراز جمالية التصميم والمواصفات التقنية.",
    problemAr: "المنتجات التقنية الفاخرة تستحق تجربة تصفح فاخرة تعكس أناقة المنتج.",
    solutionAr: "موقع minimal مدعوم بالأنيميشن مع انتقالات سلسة وأقسام تفصيلية.",
  },
  {
    id: "ai-learning-lab",
    title: "AI Learning Lab",
    description:
      "A personal learning sandbox where I experiment with Python, ML fundamentals, and small AI projects alongside my frontend work.",
    problem:
      "As a final-year AI specialization student, I needed a space to document experiments and solidify ML concepts with hands-on code.",
    solution:
      "Built small modular notebooks and mini-projects in Python — from data preprocessing to simple classifiers — while continuing my frontend work.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
    category: "Machine Learning",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    emoji: "🧠",
    github: "https://github.com/Reman-22",
    status: "Learning",
    titleAr: "مختبر تعلم الذكاء الاصطناعي",
    descriptionAr: "معمل تعلم شخصي لتجربة Python وأسس ML ومشاريع AI صغيرة.",
    problemAr: "بصفتي طالبة سنة أخيرة في تخصص AI، احتجت لمكان لتوثيق التجارب وتثبيت مفاهيم ML.",
    solutionAr: "تم بناء كراسات ومشاريع صغيرة في Python من معالجة البيانات إلى تصنيفات بسيطة.",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Frontend Web Development — React.js & Vite",
    platform: "VICA Web Solutions",
    instructor: "Professional Certification",
    date: "2025",
    category: "Frontend",
    emoji: "⚛️",
    gradient: "from-indigo-500 to-purple-500",
    link: "https://example.com",
  },
  {
    title: "Machine Learning",
    platform: "Advisors Team",
    instructor: "Specialized Training",
    date: "2026",
    category: "Machine Learning",
    emoji: "🤖",
    gradient: "from-emerald-500 to-teal-500",
    link: "https://example.com",
  },
  {
    title: "AI & Chatbot Engineering",
    platform: "Mosaic AI × Syrian AI Association",
    instructor: "Intensive Program",
    date: "2025",
    category: "Artificial Intelligence",
    emoji: "💬",
    gradient: "from-fuchsia-500 to-purple-500",
    link: "https://example.com",
  },
  {
    title: "Informatics Engineering — ML Track",
    platform: "Syrian Virtual University",
    instructor: "Bachelor's Degree",
    date: "2021–Present",
    category: "Programming",
    emoji: "🎓",
    gradient: "from-amber-500 to-orange-500",
    link: "https://example.com",
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    year: "2021 — Present",
    title: "BSc Informatics Engineering — Machine Learning",
    subtitle: "Syrian Virtual University · Damascus, Syria",
    description:
      "Final-year student specializing in Machine Learning. Focused on combining AI algorithms with modern web development.",
    side: "L",
  },
  {
    year: "2021 — 2025",
    title: "BSc Economics",
    subtitle: "Damascus University · Damascus, Syria",
    description:
      "Parallel degree in Economics, building a multidisciplinary foundation that informs my approach to product thinking and business-aware engineering.",
    side: "R",
  },
];

export const LEARNING_ROADMAP: { label: string; progress: number; done: boolean }[] = [
  { label: "HTML & CSS", progress: 100, done: true },
  { label: "JavaScript", progress: 100, done: true },
  { label: "React", progress: 95, done: true },
  { label: "TypeScript", progress: 90, done: true },
  { label: "Next.js", progress: 80, done: true },
  { label: "Python", progress: 70, done: false },
  { label: "Data Science (NumPy/Pandas)", progress: 55, done: false },
  { label: "Machine Learning", progress: 40, done: false },
  { label: "Deep Learning", progress: 25, done: false },
  { label: "Computer Vision", progress: 20, done: false },
  { label: "Generative AI & LLMs", progress: 45, done: false },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Startup Weekend Syria",
    org: "Participant / Team Member",
    period: "04/2026",
    description:
      "Collaborated with a multidisciplinary team to ideate and build a Backend as a Service MVP within a 54-hour intense startup competition, focusing on frontend development and rapid prototyping.",
    tags: ["React", "TypeScript", "Rapid Prototyping", "Teamwork", "BaaS"],
    type: "Hackathon",
  },
  {
    role: "AI & Chatbot Engineering Trainee",
    org: "Mosaic AI × Syrian AI Association",
    period: "4 Months",
    description:
      "Intensive training on AI chatbots, conversational AI architectures, and intelligent agent systems. Built a Mini ERP with AI for a startup competition.",
    tags: ["AI", "Chatbots", "Python", "Conversational AI"],
    type: "Freelance",
  },
  {
    role: "Frontend Developer (Volunteer)",
    org: "The inspires Association",
    period: "02/2025 – 08/2025 · Damascus",
    description:
      "Transforming Figma design systems into responsive React components in collaboration with a technical team to enhance user experience and ship polished UIs.",
    tags: ["React", "Figma", "Tailwind", "UI/UX", "Volunteering"],
    type: "Freelance",
  },
  {
    role: "Data Annotation Specialist (Freelance)",
    org: "SOD — Russian Technology Company",
    period: "05/2024 – 10/2024 · Remote",
    description:
      "Analyzed and processed medical images to prepare training datasets for AI models. Used Slicer tool to accurately identify pathological patterns, ensuring the efficiency of diagnostic algorithms.",
    tags: ["Medical AI", "Data Annotation", "Slicer", "Python", "CV"],
    type: "Freelance",
  },
  {
    role: "Frontend Web Development",
    org: "VICA Web Solutions",
    period: "2025",
    description:
      "Delivered production-grade frontend work with React.js & Vite, earning a professional certification. Built responsive, accessible web interfaces for real clients.",
    tags: ["React", "Vite", "Frontend", "Production"],
    type: "Freelance",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Intern @ VICA",
    description: "Selected for a frontend internship at VICA — contributing to real production work.",
    icon: "Trophy",
    year: "2025",
  },
  {
    title: "AI Specialization Track",
    description: "Chose the Artificial Intelligence specialization in my final year of Informatics Engineering.",
    icon: "Award",
    year: "2024",
  },
  {
    title: "Multiple Delivered Projects",
    description: "Shipped several React-based web projects and AI prototypes throughout university.",
    icon: "Star",
    year: "2022–25",
  },
  {
    title: "Consistent GitHub Activity",
    description: "Regular commits on personal and academic projects across frontend and AI.",
    icon: "GitBranch",
    year: "2022–25",
  },
  {
    title: "Certifications in Frontend & AI",
    description: "Completed courses covering React, TypeScript, Python, and Machine Learning fundamentals.",
    icon: "BadgeCheck",
    year: "2023–25",
  },
  {
    title: "First AI Experiments Shipped",
    description: "Built initial ML projects to solidify understanding of models, data, and pipelines.",
    icon: "Sparkles",
    year: "2025",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Engineer",
    quote:
      "Alex ships polished, accessible UIs with a rare attention to motion and detail. A true product-minded developer.",
    avatar: "SC",
  },
  {
    name: "Marco Rossi",
    role: "Product Designer",
    quote:
      "Working with Alex felt effortless — clean code, beautiful visuals, and constant curiosity about the user.",
    avatar: "MR",
  },
  {
    name: "Priya Patel",
    role: "Engineering Manager",
    quote:
      "One of the most driven students I've mentored. Their growth from frontend into ML has been inspiring to watch.",
    avatar: "PP",
  },
];

export const FAQS = [
  {
    q: "Are you currently available for freelance work?",
    a: "Yes! I take on select frontend projects — especially modern React dashboards and marketing sites.",
  },
  {
    q: "What's your current focus?",
    a: "I'm shipping polished React work while deepening my Machine Learning skills through hands-on projects.",
  },
  {
    q: "Do you work with AI tools?",
    a: "Absolutely — I use AI as a productivity multiplier and actively build small projects to understand it deeper.",
  },
  {
    q: "How can we collaborate?",
    a: "The fastest way is email or LinkedIn — I usually respond within a day.",
  },
];
