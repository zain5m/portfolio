
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoRocketSharp } from "react-icons/io5";

//
import { GrLinkedin } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { TbLock, TbSql } from "react-icons/tb";

import {
  SiApollographql,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGoogleadmob,
  SiGooglemaps,
  SiGoogleplay,
  SiHive,
  SiLangchain,
  SiLinkedin,
  SiNumpy,
  SiOpenai,
  // SiQdrant,
  SiOracle,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiWhatsapp,
  SiMedium,
  SiKaggle,
} from "react-icons/si";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { FaDatabase, FaLanguage } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiVectorThreeBold } from "react-icons/pi";

//////////////////////////////////////////////////////NEW -------------------------------------------

// function NeuralNetworkBG() {
//   const prefersReducedMotion = useReducedMotion();

//   const layers = [
//     { x: 70, n: 4 },
//     { x: 210, n: 6 },
//     { x: 370, n: 5 },
//     { x: 530, n: 3 },
//   ];
//   const height = 620;

//   const connections = [];
//   for (let i = 0; i < layers.length - 1; i++) {
//     for (let a = 0; a < layers[i].n; a++) {
//       for (let b = 0; b < layers[i + 1].n; b++) {
//         connections.push({
//           x1: layers[i].x,
//           y1: ((a + 1) * height) / (layers[i].n + 1),
//           x2: layers[i + 1].x,
//           y2: ((b + 1) * height) / (layers[i + 1].n + 1),
//           key: `c-${i}-${a}-${b}`,
//         });
//       }
//     }
//   }

//   const nodes = layers.flatMap((layer, li) =>
//     Array.from({ length: layer.n }).map((_, ni) => ({
//       cx: layer.x,
//       cy: ((ni + 1) * height) / (layer.n + 1),
//       key: `n-${li}-${ni}`,
//     }))
//   );

//   const lineColor = "#22d3ee"; // cyan-400
//   const nodeColor = "#60a5fa"; // blue-400

//   return (
//     <motion.svg
//       // ✅ تموضع Responsive: أنزلها شوي وزِحها يمين، وتكبر تدريجيًا مع الشاشات
//       className="
//         fixed pointer-events-none select-none opacity-70
//         z-0
//         right-[-48px] top-36 w-[280px] h-[340px]
//         sm:right-[-56px] sm:top-44 sm:w-[320px] sm:h-[380px]
//         md:right-[-24px] md:top-28 md:w-[500px] md:h-[560px]
//         lg:right-0 lg:top-24 lg:w-[600px] lg:h-[600px]
//         xl:right-0 xl:top-20 xl:w-[650px] xl:h-[620px]
//       "
//       viewBox={`0 0 650 ${height}`}
//       fill="none"
//       aria-hidden
//       animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
//       transition={
//         prefersReducedMotion
//           ? undefined
//           : { duration: 8, repeat: Infinity, ease: "easeInOut" }
//       }
//     >
//       <defs>
//         <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="6" result="coloredBlur" />
//           <feMerge>
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//         <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor={lineColor} stopOpacity="0.35" />
//           <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
//         </linearGradient>
//       </defs>

//       {connections.map((c, i) => (
//         <motion.line
//           key={c.key}
//           x1={c.x1}
//           y1={c.y1}
//           x2={c.x2}
//           y2={c.y2}
//           stroke="url(#lg)"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeDasharray={prefersReducedMotion ? "none" : "8 14"}
//           initial={prefersReducedMotion ? undefined : { strokeDashoffset: 0 }}
//           animate={
//             prefersReducedMotion ? undefined : { strokeDashoffset: [-22, 0] }
//           }
//           transition={
//             prefersReducedMotion
//               ? undefined
//               : {
//                   duration: 2.2 + (i % 7) * 0.12,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }
//           }
//           opacity={0.45}
//         />
//       ))}

//       {nodes.map((n, i) => (
//         <motion.circle
//           key={n.key}
//           cx={n.cx}
//           cy={n.cy}
//           r="11"
//           fill={nodeColor}
//           opacity="0.4"
//           filter="url(#glow)"
//           animate={
//             prefersReducedMotion
//               ? undefined
//               : { r: [11, 13, 11], opacity: [0.35, 0.55, 0.4] }
//           }
//           transition={
//             prefersReducedMotion
//               ? undefined
//               : {
//                   duration: 2.6 + (i % 5) * 0.18,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }
//           }
//         />
//       ))}
//     </motion.svg>
//   );
// }

function NeuralNetworkBG() {
  const prefersReducedMotion = useReducedMotion();

  // قللنا عدد النودز شوي
  const layers = [
    { x: 80, n: 3 },
    { x: 230, n: 4 },
    { x: 390, n: 3 },
    { x: 540, n: 2 },
  ];
  const height = 520;

  const connections = [];
  for (let i = 0; i < layers.length - 1; i++) {
    for (let a = 0; a < layers[i].n; a++) {
      for (let b = 0; b < layers[i + 1].n; b++) {
        connections.push({
          x1: layers[i].x,
          y1: ((a + 1) * height) / (layers[i].n + 1),
          x2: layers[i + 1].x,
          y2: ((b + 1) * height) / (layers[i + 1].n + 1),
          key: `c-${i}-${a}-${b}`,
        });
      }
    }
  }

  const nodes = layers.flatMap((layer, li) =>
    Array.from({ length: layer.n }).map((_, ni) => ({
      cx: layer.x,
      cy: ((ni + 1) * height) / (layer.n + 1),
      key: `n-${li}-${ni}`,
    }))
  );

  const lineColor = "#22d3ee"; // cyan-400
  const nodeColor = "#60a5fa"; // blue-400

  return (
    <motion.svg
      className="
        fixed pointer-events-none select-none opacity-40
        z-0
        right-[-32px] top-40 w-[260px] h-[320px]
        sm:right-[-40px] sm:top-40 sm:w-[320px] sm:h-[360px]
        md:right-0 md:top-32 md:w-[460px] md:h-[480px]
        lg:right-4 lg:top-24 lg:w-[560px] lg:h-[520px]
      "
      viewBox={`0 0 620 ${height}`}
      fill="none"
      aria-hidden
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <defs>
        <linearGradient id="nn-lines" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.25" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
        </linearGradient>
        <filter id="nn-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* خطوط ثابتة بدون motion لكل واحد */}
      {connections.map((c) => (
        <line
          key={c.key}
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          stroke="url(#nn-lines)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.4}
        />
      ))}

      {/* نودز ثابتة مع glow خفيف */}
      {nodes.map((n) => (
        <circle
          key={n.key}
          cx={n.cx}
          cy={n.cy}
          r="9"
          fill={nodeColor}
          opacity="0.5"
          filter="url(#nn-glow)"
        />
      ))}
    </motion.svg>
  );
}

//////////////////////////////////////////////////////NEW -------------------------------------------
// -------------------------------------------

const NAME = "Zain Mhesn";
const TITLE = "Flutter Developer | AI Specialist | Information Engineer";
const EMAIL = "zayanmhesn22@gmail.com";
const PHONE = "+963959527648";
const LOCATION = "Damascus, Syria";
const LINKEDIN = "https://linkedin.com/in/zainmhesn/";
const GITHUB = "https://github.com/zain5m";
const MEDIUM = "https://zainmhesn.medium.com/";
const KAGGLE = "https://www.kaggle.com/zainmhes";
// const WEBSITE = "https://zain-mhesn.vercel.app/";


const FLUTTER_CV_URL = "/cv/Zain Mhesn CV.pdf";
const AI_CV_URL = "/cv/Zain Mhesn Ai.pdf";

const PROFILE_IMG_ROUND = "/projects/profile-pic_round.png";
const PROFILE_IMG_SQUARE = "/projects/profile-pic_square.png";
// -------------------------------------------
const projectsData = [
  {
    title: "SKY متجر (E-commerce App)",
    description:
      "Transforms a WordPress store into a modern Flutter app with auth, category filters, search, cart, order history, and real-time sync.",
    imageUrl: "/projects/sky-store.png",
    tags: [
      "Flutter",
      "Clean Architecture",
      "Bloc",
      "REST API",
      "Firebase",
      "Hive",
      "Google Sign-In",
      "FCM",
    ],
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.skytrendstore.skystore",
  },
  {
    title: "Easy Dutch – Language Learning",
    description:
      "Dutch learning app with AI chat, daily challenges, TTS pronunciation, achievements, stats, and rewards.",
    imageUrl: "/projects/easy-dutch.png",
    tags: [
      "Flutter",
      "Hive",
      "TTS",
      "Google Translate API",
      "AdMob",
      "Firebase Notifications",
      "Mistral AI",
    ],
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.learn_language.protico",
  },
  {
    title: "Tekrum – Delivery Application",
    description:
      "Browse vendors/products, place and track orders, custom 'Jable' requests, multi-address, ratings, and push notifications.",
    imageUrl: "/projects/tekrum.png",
    tags: ["Flutter", "Firebase", "Google Maps", "QR Scanner", "FCM"],
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.tekrum_dev.tekrum",
  },
  {
    title: "Tekrum Partner – Driver & Vendor",
    description:
      "Drivers manage delivery requests and QR confirmation; vendors manage products and order statuses with profiles and scheduling.",
    imageUrl: "/projects/tekrum.png",
    tags: ["Flutter", "Firebase", "Google Maps", "QR Scanner"],
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.tekrumpartner.tekrum_partner",
  },
  {
    title: "Tafadal – Tourist Taxi Booking (KSA)",
    description:
      "Tourist taxi booking with real-time driver tracking, booking management, ride history, notifications, online payment, and in-app chat.",
    imageUrl: "/projects/tafadal.png",
    tags: ["Flutter", "Firebase", "Google Maps", "FCM", "Realtime Chat"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Loujen – UI Enhancement Project",
    description:
      "UI-focused enhancement project. Redesigned user interface to improve usability, consistency, and visual clarity.",
    imageUrl: "",
    tags: ["Flutter", "UI/UX Redesign", "Optimization"],
    githubUrl: "",
    liveUrl: "",

  },
  {
    title: "Bankid.SY – Secure App↔Backend Exchange",
    description:
      "Implemented AES-256-CBC (random IV) + RSA-OAEP key wrapping, public-key handshake, secure key caching, JSON/file encryption, and FCM push notifications. Refactored legacy code and improved stability.",
    imageUrl: "/projects/Bankid.SY.png",
    tags: [
      "Flutter",
      "Security",
      "AES-256-CBC",
      "RSA-OAEP",
      "flutter_secure_storage",
      "FCM",
      "Sentry",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "SETS ORG 24 – Modernization & AdMob",
    description:
      "Upgraded packages, refactored core, stabilized performance, and integrated AdMob (banner/interstitial/rewarded). Testing + crash reduction.",
    imageUrl: "/projects/SETS_ORG_24.jpeg",
    tags: ["Flutter", "Refactor", "AdMob", "Stability", "Optimization"],
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=dev.mahmoud.stae",
  },
  {
    title: "سيتات اورج 2024 (MusicTones)",
    description:
      "Codebase refactor and upgrades, fixed major bugs, optimized audio playback & UI responsiveness, Firebase integration, QA + Google Play deployment.",
    imageUrl: "/projects/musictones.png",
    tags: ["Flutter", "Audio", "Firebase", "Optimization"],
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.musictones.apporg.musictones",
  },
  {
    title: "CarX – Automotive AI Platform",
    description:
      "Full automotive service platform featuring AI-driven maintenance suggestions (TensorFlow Lite), Google Maps integration, and secure Stripe payments.",
    imageUrl: "/projects/carx.png",
    tags: ["Flutter, TensorFlow Lite", "AI", "Google Maps", "Stripe", "Payments"],
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=com.carx.app",
  },
  {
    title: "To-do App (Personal)",
    description:
      "Productivity app using Clean Architecture and Hive for local storage with categories, priorities, and progress tracking.",
    tags: ["Flutter", "Hive", "Clean Architecture"],
    githubUrl: "https://github.com/zain5m/todo_app.git",
    liveUrl: "",
  },
  {
    title: "Social Media App (Academic)",
    description:
      "Interest-based social platform: posts with images, stories, tags, likes/comments, follows, notifications, and real-time chat.",

    tags: [
      "Flutter",
      "Firebase Firestore",
      "Auth",
      "Cloud Messaging",
      "Realtime Chat",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

// --------- مهاراتك -----------
const skills = [
  // Mobile (Core)
  "Flutter",
  "Dart",
  "Clean Architecture",
  "Bloc",
  "Provider",
  "REST APIs",
  "Firebase (Auth, Firestore, FCM)",
  "Local Storage (Hive, Sqflite, Shared Prefs, Secure Storage)",
  "Google Maps API",
  "AdMob",

  // Delivery & Release
  "Google Play Console",
  "App Signing & Release",

  // Quality & Ops
  // "Testing (Unit, Widget, Integration)",
  // "Performance Profiling",
  // "Crash Reporting (Sentry/Crashlytics)",
  // "CI/CD (GitHub Actions)",
  // "Postman/API Testing",
  // "Accessibility (a11y)",
  "Localization (i18n)",

  // Security
  "App Security (AES/RSA, Key Handshake, Secure Storage)",
  // AI & Data
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "RAG",
  "LangChain",
  "Vector DBs (Qdrant, ChromaDB)",
  "LLM Integration",
  "Mistral AI",
  "OpenAI",

  // Databases & Tools
  "Oracle SQL",
  "PL/SQL",
  "Oracle APEX",
  "SQL (general)",
  "Git",
  "GitHub",
  "GitLab",
];

// --------- أيقونات محسّنة -----------
const skillIconMap = {
  // Mobile
  Flutter: SiFlutter,
  Dart: SiDart,
  "Clean Architecture": MdDeveloperMode,
  Bloc: SiFlutter,
  Provider: SiFlutter,
  "REST APIs": SiApollographql, // تمثّل API layer
  "Firebase (Auth, Firestore, FCM)": SiFirebase,
  "Local Storage (Hive, Sqflite, Shared Prefs, Secure Storage)": SiHive,
  "Google Maps API": SiGooglemaps,
  AdMob: SiGoogleadmob,

  // Delivery & Release
  "Google Play Console": SiGoogleplay,
  "App Signing & Release": SiGoogleplay,

  // Quality & Ops
  // "Testing (Unit, Widget, Integration)": VscBeaker,
  // "Performance Profiling": BsSpeedometer2,
  // "Crash Reporting (Sentry/Crashlytics)": SiSentry,
  // "CI/CD (GitHub Actions)": SiGithubactions,
  // "Postman/API Testing": SiPostman,
  // "Accessibility (a11y)": MdAccessibilityNew,
  "Localization (i18n)": FaLanguage,

  // Security
  "App Security (AES/RSA, Key Handshake, Secure Storage)": TbLock,

  // AI & Data
  Python: SiPython,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit-learn": SiScikitlearn,
  RAG: GiArtificialIntelligence,
  LangChain: SiLangchain,
  "Vector DBs (Qdrant, ChromaDB)": PiVectorThreeBold,
  "LLM Integration": GiArtificialIntelligence,
  "Mistral AI": SiTensorflow,
  OpenAI: SiOpenai,

  // Databases & Tools
  "Oracle SQL": SiOracle,
  "PL/SQL": TbSql,
  "Oracle APEX": SiOracle,
  "SQL (general)": FaDatabase,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
};

// --------- Theme Context -----------
const ThemeContext = React.createContext();

const experienceData = [
  {
    company: "East Med",
    role: "Flutter Developer (Freelance → On-site)",
    location: "Damascus, Syria",
    period: "09/2024 – 05/2025 | 09/2025 – Present",
    description: [
      "Develop Flutter mobile applications with REST API integration.",
      "Prepare backend endpoints to support mobile workflows.",
      "Implement PL/SQL logic for production backend operations.",
      "Support enterprise-level internal mobile systems."
    ],
    type: "on site"
  },
  {
    company: "Learn For You",
    role: "Flutter Developer (Remote)",
    location: "Daraa, Syria",
    period: "08/2024 – 05/2025",
    description: [
      "Contributed to e-commerce and educational Flutter applications.",
      "Delivered apps exceeding 1,000+ downloads.",
      "Improved UI/UX and application performance.",
      "Integrated monetization strategies (AdMob)."
    ],
    type: "Remote Collaboration"
  },
  {
    company: "Freelance Flutter Developer",
    role: "Self-Employed",
    location: "Damascus, Syria",
    period: "01/2023 – Present",
    description: [
      "Delivered multiple production-ready Flutter applications end-to-end.",
      "Designed scalable architecture using Clean Architecture principles.",
      "Implemented backend integration and REST APIs.",
      "Managed full development lifecycle (design → implementation → testing → deployment).",
      "Published applications to Google Play."
    ],
    type: "Freelance"
  }
];
// 👈 ADDED: نقلنا هذا المتغير هنا ليصبح عام
const navItems = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];




export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "dark"; // 👈 يبدأ داكن
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => sections.forEach((s) => s && observer.unobserve(s));
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <style>
        {`
         @media (min-width: 1024px) {
      html { scroll-behavior: smooth; }
    }
        section[id] { scroll-margin-top: 80px; }

      `}
      </style>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
        {/* 🔵 الخلفية العصبية فقط */}

        <Navbar currentPage={activeSection} />
        <NeuralNetworkBG />

        <main className="pt-20 page-content relative z-10">
          <Home />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// --------- Navbar (Animated) -----------
function Navbar({ currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-[60]">
      <div className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto max-w-6xl px-4 h-20 flex justify-between items-center">
          <a
            href="#home"
            className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
          >
            {NAME}
          </a>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 rounded-lg text-base font-medium transition-all duration-300
                    group
                    ${active
                      ? "text-blue-600 dark:text-blue-300"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                >
                  {item.name}
                  {/* underline متحرك */}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full transition-all duration-300
                    ${active
                        ? "bg-blue-500 dark:bg-blue-400 scale-x-100"
                        : "bg-blue-500/50 dark:bg-blue-400/50 scale-x-0 group-hover:scale-x-100"
                      }`}
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              );
            })}

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <SiLinkedin size={20} />
            </a>
            <a
              href={KAGGLE}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              aria-label="Kaggle"
            >
              <SiKaggle size={20} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* شريط التقدم أعلى الناف */}
        {!prefersReducedMotion && (
          <motion.div
            className="h-[3px] bg-blue-600/80 dark:bg-blue-400/90 origin-left"
            style={{ scaleX }}
          />
        )}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4 border-b border-gray-200 dark:border-gray-800 z-[55]"
        >
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors
                  ${currentPage === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiGithub size={22} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiLinkedin size={22} />
              </a>
              <a
                href={KAGGLE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Kaggle"
              >
                <SiKaggle size={22} />
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

// --------- Home -----------

function Home() {
  const prefersReducedMotion = useReducedMotion();

  // Parallax لطيف للصورة
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, prefersReducedMotion ? 0 : -40]
  );
  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, prefersReducedMotion ? 1 : 1.08]
  );

  // Variants عامة للنصوص (stagger)
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 16 },
    },
  };

  return (
    <section
      id="home"
      className="container mx-auto max-w-6xl px-4 py-20 md:py-32"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* الصورة مع Parallax + لمعة */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          style={{ y }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 blur-lg opacity-60 dark:opacity-70"
              animate={
                prefersReducedMotion
                  ? {}
                  : { scale: [1, 1.05, 1], rotate: [0, 2, 0] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={PROFILE_IMG_ROUND}
              loading="lazy"
              alt={NAME}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white dark:border-slate-900"
              whileHover={
                prefersReducedMotion ? {} : { rotate: 1.5, scale: 1.02 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              onError={(e) =>
              (e.target.src =
                "https://placehold.co/500x500/ef4444/ffffff?text=Image+Error")
              }
            />
            {/* هالة ضوء تتنفس */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 rounded-full ring-2 ring-blue-400/30"
                style={{ scale: glowScale }}
              />
            )}
          </div>
        </motion.div>

        {/* النصوص + الأزرار مع stagger */}
        <motion.div
          className="w-full lg:w-2/3 text-center lg:text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-white"
            variants={item}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              {NAME}
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
            variants={item}
          >
            {TITLE}
          </motion.h2>

          <motion.p
            className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-8 mx-auto lg:mx-0"
            variants={item}
          >
            Information Engineering graduate specialized in Artificial
            Intelligence, with 3+ years in Flutter. Built and shipped 5+
            cross-platform apps using Clean Architecture, Firebase, and
            Bloc/Provider. Comfortable integrating AI (RAG, LangChain, vector
            DBs) to deliver scalable, user-focused mobile products.
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start"
            variants={item}
          >
            <motion.a
              href="#projects"
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Projects <IoRocketSharp size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-4 flex flex-col items-center lg:items-start gap-2.5"
            variants={item}
          >
            <div className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-gray-200 dark:text-gray-100">
              <Download size={16} className="text-blue-300 dark:text-blue-200" />
              <span className="tracking-wide">Download CVs</span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <motion.a
                href={FLUTTER_CV_URL}
                download="Zain Mhesn Flutter CV.pdf"
                aria-label="Download Flutter CV"
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="inline-flex min-w-[136px] items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-300/35 bg-slate-900/60 text-slate-100 hover:bg-emerald-500/20 hover:border-emerald-300/60 transition-all duration-300 shadow-sm hover:shadow-emerald-500/20"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <span className="text-sm font-semibold">Flutter CV</span>
              </motion.a>

              <motion.a
                href={AI_CV_URL}
                download="Zain Mhesn AI CV.pdf"
                aria-label="Download AI CV"
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="inline-flex min-w-[136px] items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-300/35 bg-slate-900/60 text-slate-100 hover:bg-cyan-500/20 hover:border-cyan-300/60 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                <span className="text-sm font-semibold">AI CV</span>
              </motion.a>
            </div>
          </motion.div>

          {/* روابط سريعة؛ كل واحدة لها micro hover */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start"
            variants={item}
          >
            {[
              {
                href: `mailto:${EMAIL}`,
                icon: (
                  <Mail
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                label: EMAIL,
                classes: "bg-gray-100 dark:bg-slate-800",
              },
              {
                href: `tel:${PHONE}`,
                icon: (
                  <Phone
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                label: PHONE,
                classes: "bg-gray-100 dark:bg-slate-800",
              },
              {
                href: `https://wa.me/${PHONE.replace(/\D/g, "")}`,
                icon: (
                  <SiWhatsapp
                    size={18}
                    className="text-green-600 dark:text-green-400"
                  />
                ),
                label: "WhatsApp",
                classes:
                  "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
              },
              {
                href: LINKEDIN,
                icon: (
                  <GrLinkedin
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                label: "LinkedIn",
                classes: "bg-gray-100 dark:bg-slate-800",
              },
              {
                href: MEDIUM,
                icon: (
                  <SiMedium
                    size={18}
                    className="text-slate-900 dark:text-slate-200"
                  />
                ),
                label: "Medium",
                classes: "bg-gray-100 dark:bg-slate-800",
              },
              {
                href: KAGGLE,
                icon: (
                  <SiKaggle
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                label: "Kaggle",
                classes: "bg-gray-100 dark:bg-slate-800",
              },
              {
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  LOCATION
                )}`,
                icon: (
                  <MapPin
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                label: LOCATION,
                classes: "bg-gray-100 dark:bg-slate-800",
              },
            ].map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  btn.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-sm ${btn.classes}`}
              >
                {btn.icon}
                <span className="text-sm font-medium">{btn.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --------- Projects (Animated Grid) -----------
function SectionHeading({ eyebrow, title, subtitle, Icon }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ type: "spring", stiffness: 130, damping: 16 }}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 dark:border-blue-400/30 bg-blue-50/70 dark:bg-blue-900/20 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
        {Icon && <Icon size={14} />}
        <span>{eyebrow}</span>
      </div>
      <motion.h2
        className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
      >
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500" />
    </motion.div>
  );
}

function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <section id="projects" className="container mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects I've Built"
        subtitle="Here are some of the projects I'm proud of."
        Icon={Sparkles}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>
    </section>
  );
}

// ... ProjectCard (Animated)
function ProjectCard({ project, prefersReducedMotion }) {
  const hasLinks = Boolean(project.githubUrl) || Boolean(project.liveUrl);

  // دخول كل بطاقة
  const card = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 18 },
    },
  };

  return (
    <motion.div
      variants={card}
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
      className="group relative rounded-2xl"
    >
      {/* هالة خارجية عند الهوفر */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400 to-green-400 blur-xl"
        aria-hidden
      />
      <div className="relative z-10 bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
        {/* صورة */}
        {project.imageUrl ? (
          <div className="flex items-center justify-center h-48 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-slate-900">
            <motion.img
              src={project.imageUrl}
              loading="lazy"
              alt={project.title}
              className="object-contain h-full w-full p-4"
              whileHover={
                prefersReducedMotion ? {} : { scale: 1.04, rotate: 0.2 }
              }
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              onError={(e) => (e.target.src = "/projects/placeholder.png")}
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-t-2xl">
            <motion.img
              src={`https://placehold.co/600x400/d1fae5/222?text=${encodeURIComponent(
                project.title
              )}`}
              loading="lazy"
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              onError={(e) =>
              (e.target.src =
                "https://placehold.co/600x400/ef4444/ffffff?text=Image+Error")
              }
            />
          </div>
        )}

        {/* النص */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-16 text-sm">
            {project.description}
          </p>

          {Array.isArray(project.tags) && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={`${project.title}-tag-${i}`}
                  className="px-3 py-1 bg-blue-100/50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-xs font-medium"
                  whileHover={prefersReducedMotion ? {} : { y: -1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}

          {hasLinks && (
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors text-sm"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  <SiGithub size={18} />
                  Code
                  <ExternalLink size={16} />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                  aria-label={`View ${project.title} on Google Play`}
                >
                  <SiGoogleplay size={18} />
                  Google Play
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --------- Experience (New Section) -----------
function Experience() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="experience" className="container mx-auto max-w-4xl px-4 py-20">
      <SectionHeading
        eyebrow="Career Path"
        title="Work Experience"
        subtitle="Roles, products, and impact across freelance and on-site work."
        Icon={Briefcase}
      />

      <motion.div
        className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8 md:pl-12"
            variants={itemVariant}
          >
            {/* Dot on Timeline */}
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 dark:border-blue-400 shadow-sm" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {exp.company}
              </h3>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 sm:mt-0 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded-md whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <div className="mb-3">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {exp.role}
              </h4>
              <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={14} /> {exp.type}
                </span>
              </div>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i} className="pl-1">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// --------- About (Clean Premium Timeline) -----------
function About() {
  const prefersReducedMotion = useReducedMotion();

  // const education = [
  //   {
  //     icon: <GraduationCap size={22} />,
  //     type: "Degree",
  //     title: "B.Sc. in Information Engineering – Artificial Intelligence",
  //     institution: "Damascus University",
  //     period: "2019–2025",
  //     desc: "Graduation Project: RAG-based conversational system for HR résumé evaluation using LLMs & vector databases (Qdrant), with semantic/hybrid retrieval via LangChain; achieved >90% ranking alignment with human experts.",
  //     gradient: "from-purple-500 via-pink-500 to-rose-500",
  //     iconBg:
  //       "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
  //     iconColor: "text-purple-600 dark:text-purple-300",
  //   },
  //   {
  //     icon: <Award size={22} />,
  //     type: "Professional Training",
  //     title: "Oracle SQL & APEX Training",
  //     institution: "EastMed Company",
  //     period: "Aug–Sep 2024 (80 hours)",
  //     desc: "Hands-on Oracle DB + APEX web solutions.",
  //     gradient: "from-blue-500 via-cyan-500 to-teal-500",
  //     iconBg:
  //       "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30",
  //     iconColor: "text-blue-600 dark:text-blue-300",
  //   },
  //   {
  //     icon: <Sparkles size={22} />,
  //     type: "AI Training Program",
  //     title: "AI & Machine Learning Training Program",
  //     institution: "SHAI for AI Club",
  //     period: "2024",
  //     desc: "Foundations + advanced topics with project-based learning.",
  //     gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  //     iconBg:
  //       "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30",
  //     iconColor: "text-emerald-600 dark:text-emerald-300",
  //   },
  // ];
  const education = [
    {
      icon: <GraduationCap size={22} />,
      type: "Degree",
      title: "B.Sc. in Information Engineering – Artificial Intelligence",
      institution: "Damascus University",
      period: "2019–2025",
      desc: "Graduation Project: RAG-based conversational system for HR résumé evaluation using LLMs & vector databases (Qdrant), with semantic/hybrid retrieval via LangChain; achieved >90% ranking alignment with human experts.",
    },
    {
      icon: <Award size={22} />,
      type: "Professional Training",
      title: "Oracle SQL & APEX Training",
      institution: "EastMed Company",
      period: "Aug–Sep 2024 (80 hours)",
      desc: "Hands-on Oracle DB + APEX web solutions.",
    },
    {
      icon: <Sparkles size={22} />,
      type: "AI Training Program",
      title: "AI & Machine Learning Training Program",
      institution: "SHAI for AI Club",
      period: "2024",
      desc: "Foundations + advanced topics with project-based learning.",
    },
  ];

  // حركات ناعمة
  const appear = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 160, damping: 18 },
    },
  };

  return (
    <section id="about" className="container mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
        subtitle="A concise snapshot of my background, engineering style, and focus areas."
        Icon={GraduationCap}
      />

      {/* الصف الأول: نبذة + صورة */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        <motion.div
          className="md:col-span-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            variants={appear}
          >
            Information Engineering graduate specialized in Artificial
            Intelligence. 3+ years building Flutter apps end-to-end with Clean
            Architecture and robust state management. I like turning ambiguous
            product ideas into reliable, shippable mobile software.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
            variants={appear}
          >
            On the mobile side: Flutter, Dart, Bloc/Provider, REST, Firebase,
            local storage, Google Maps, and AdMob. On the AI side: Python data
            stack (Pandas/NumPy/Scikit-learn) and Gen-AI workflows (RAG,
            LangChain, vector DBs like Qdrant/ChromaDB, and LLM integration with
            Mistral/OpenAI).
          </motion.p>
          <motion.div
            className="mt-4 text-gray-700 dark:text-gray-300"
            variants={appear}
          >
            <b>Languages:</b> Arabic (Native), English (Intermediate)
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 160, damping: 16 }}
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 shadow-xl">
            <img
              src={PROFILE_IMG_SQUARE}
              loading="lazy"
              alt={NAME}
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
              onError={(e) =>
              (e.target.src =
                "https://placehold.co/500x500/ef4444/ffffff?text=Image+Error")
              }
            />
            {!prefersReducedMotion && (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59,130,246,0)",
                    "0 0 28px rgba(59,130,246,0.22)",
                    "0 0 0 rgba(59,130,246,0)",
                  ],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800/60" />

      <ToolkitSection />
      {/* Education & Certifications — نسخة خفيفة بدون لاج */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center md:text-left">
          <span className="inline-flex items-center gap-2">
            <BookOpen className="text-purple-500" size={24} />
            <span>Education &amp; Certifications</span>
          </span>
        </h3>

        <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto md:mx-0" />

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          A mix of academic background and focused training in databases &amp;
          AI.
        </p>

        {/* بطاقات عمودية خفيفة */}
        <div className="mt-8 space-y-4">
          {education.map((e, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 p-4 md:p-5 rounded-xl border border-gray-200/70 dark:border-gray-700/70 bg-white/80 dark:bg-slate-900/70 shadow-sm hover:shadow-md hover:border-blue-400/60 dark:hover:border-blue-400/60 hover:-translate-y-[2px] transition-all duration-200"
            >
              {/* الأيقونة والبادج */}
              <div className="flex items-start gap-3 md:w-1/3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 shrink-0">
                  {e.icon}
                </div>
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200 mb-1">
                    {e.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <MapPin size={12} className="text-purple-500" />
                    <span>{e.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    <Calendar size={12} className="text-blue-500" />
                    <span>{e.period}</span>
                  </div>
                </div>
              </div>

              {/* النص الرئيسي */}
              <div className="md:w-2/3">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {e.title}
                </h4>
                {e.desc && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {e.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* أزرار CV بسيطة وخفيفة */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a
            href={FLUTTER_CV_URL}
            download="Zain Mhesn Flutter CV.pdf"
            aria-label="Download Flutter CV"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
          >
            <Download size={18} />
            <span>Download Flutter CV</span>
          </a>
          <a
            href={AI_CV_URL}
            download="Zain Mhesn AI CV.pdf"
            aria-label="Download AI CV"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
          >
            <Download size={18} />
            <span>Download AI CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillsGrid({ items }) {
  const prefersReducedMotion = useReducedMotion();
  const CORE = new Set(["Flutter", "Dart", "Python"]); // عدّل اللبّ حسب رغبتك

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      role="list"
      aria-label="Skills"
    >
      {items.map((name, idx) => (
        <SkillPill
          key={`${name}-${idx}`}
          name={name}
          Icon={skillIconMap[name]}
          core={CORE.has(name)}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}

// --------- عنصر واحد (Pill) بلمعات و3D Tilt -----------
// function SkillPill({ name, Icon, core, prefersReducedMotion }) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-40, 40], [8, -8]);
//   const rotateY = useTransform(x, [-40, 40], [-10, 10]);
//   const shineX = useTransform(x, [-40, 40], ["-20%", "120%"]);

//   function onMouseMove(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const px = e.clientX - rect.left;
//     const py = e.clientY - rect.top;
//     x.set(px - rect.width / 2);
//     y.set(py - rect.height / 2);
//   }

//   function onMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   return (
//     <motion.div
//       role="listitem"
//       onMouseMove={prefersReducedMotion ? undefined : onMouseMove}
//       onMouseLeave={prefersReducedMotion ? undefined : onMouseLeave}
//       style={
//         prefersReducedMotion
//           ? {}
//           : { rotateX, rotateY, transformPerspective: 700 }
//       }
//       whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
//       whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
//       className="group relative"
//     >
//       {/* إطار متدرّج */}
//       <div className="rounded-2xl p-[1px] bg-gradient-to-r from-slate-200 via-blue-300/60 to-slate-200 dark:from-slate-700 dark:via-blue-500/40 dark:to-slate-700">
//         <div
//           className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-2xl
//                         bg-white/80 dark:bg-slate-900/60 backdrop-blur-md
//                         border border-gray-200/60 dark:border-gray-700/60
//                         shadow-sm hover:shadow-md transition-all select-none"
//         >
//           {/* لمعة تتحرك على الهوفر */}
//           {!prefersReducedMotion && (
//             <motion.span
//               aria-hidden
//               className="pointer-events-none absolute top-0 -left-10 h-full w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 group-hover:opacity-100"
//               style={{ translateX: shineX }}
//               transition={{ type: "spring", stiffness: 120, damping: 18 }}
//             />
//           )}

//           {/* أيقونة */}
//           {Icon ? (
//             <span
//               className={`shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full
//                               ${
//                                 core
//                                   ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 ring-1 ring-blue-300/60 dark:ring-blue-700/60"
//                                   : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/70 dark:ring-slate-700/70"
//                               }`}
//             >
//               <Icon size={16} aria-hidden />
//             </span>
//           ) : (
//             <span className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />
//           )}

//           {/* الاسم */}
//           <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
//             {name}
//           </span>

//           {/* هالة خفيفة للمهارات الأساسية */}
//           {core && !prefersReducedMotion && (
//             <motion.span
//               aria-hidden
//               className="absolute inset-0 rounded-2xl"
//               animate={{
//                 boxShadow: [
//                   "0 0 0px rgba(59,130,246,0)",
//                   "0 0 24px rgba(59,130,246,0.25)",
//                   "0 0 0px rgba(59,130,246,0)",
//                 ],
//               }}
//               transition={{
//                 duration: 2.8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }
function SkillPill({ name, Icon, core, prefersReducedMotion }) {
  return (
    <motion.div
      role="listitem"
      whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      className="group relative"
    >
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-slate-200 via-blue-300/60 to-slate-200 dark:from-slate-700 dark:via-blue-500/40 dark:to-slate-700">
        <div
          className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-2xl
            bg-white/80 dark:bg-slate-900/60 backdrop-blur-md
            border border-gray-200/60 dark:border-gray-700/60
            shadow-sm hover:shadow-md transition-all select-none"
        >
          {Icon ? (
            <span
              className={`shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full
                ${core
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 ring-1 ring-blue-300/60 dark:ring-blue-700/60"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/70 dark:ring-slate-700/70"
                }`}
            >
              <Icon size={16} aria-hidden />
            </span>
          ) : (
            <span className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />
          )}

          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// --------- Toolkit Section (Ultra Animated) -----------
function ToolkitSection() {
  return (
    <section id="toolkit" className="container mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Stack"
        title="My Toolkit"
        subtitle="Core technologies and tools I use to deliver production-ready apps."
        Icon={Award}
      />

      {/* الشبكة */}
      <SkillsGrid items={skills} />
    </section>
  );
}

// --------- Contact ----------

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New message from ${formData.name}`,
          from_name: "Portfolio Contact",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(data.message || "Failed to send. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // أنيميشن للروابط
  const linkContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const linkItem = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  // أنيميشن للحقول
  const formContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const formItem = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 16 },
    },
  };

  return (
    <section id="contact" className="container mx-auto max-w-3xl px-4 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Interested in working together or have a question? Reach out!"
        Icon={Mail}
      />

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        variants={linkContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.a
          href={`mailto:${EMAIL}`}
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: 1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <Mail
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">{EMAIL}</span>
        </motion.a>

        <motion.a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: -1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <GrLinkedin
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">LinkedIn</span>
        </motion.a>

        <motion.a
          href={KAGGLE}
          target="_blank"
          rel="noopener noreferrer"
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: 1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <SiKaggle
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">Kaggle</span>
        </motion.a>

        <motion.a
          href={`tel:${PHONE}`}
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: 1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <Phone
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">{PHONE}</span>
        </motion.a>

        <motion.a
          href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: -1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <SiWhatsapp
            size={18}
            className="relative z-10 text-green-600 dark:text-green-400"
          />
          <span className="relative z-10 text-sm font-medium">WhatsApp</span>
        </motion.a>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-slate-800/50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg"
          >
            Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={formContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* honeypot للحماية من السبام */}
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              onChange={() => setError("Spam detected.")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={formItem}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  whileFocus={
                    prefersReducedMotion
                      ? {}
                      : { scale: 1.01, borderColor: "#3b82f6" }
                  }
                  className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div variants={formItem}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus={
                    prefersReducedMotion
                      ? {}
                      : { scale: 1.01, borderColor: "#3b82f6" }
                  }
                  className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </motion.div>
            </div>

            <motion.div variants={formItem}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                whileFocus={
                  prefersReducedMotion
                    ? {}
                    : { scale: 1.01, borderColor: "#3b82f6" }
                }
                className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <motion.div className="text-center" variants={formItem}>
              <motion.button
                type="submit"
                disabled={loading}
                className="relative w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 mx-auto disabled:opacity-60 flex items-center justify-center gap-3"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <motion.span
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : {
                            x: [0, 4, 0],
                            y: [0, -2, 0],
                            transition: {
                              duration: 0.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }
                      }
                      className="inline-flex items-center justify-center"
                    >
                      <Send size={18} className="drop-shadow-sm" />
                    </motion.span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}

/// --------- Footer -----------
function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-slate-950/50 border-t border-gray-200 dark:border-gray-800/50 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* خلفية متوهجة */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="container mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <motion.div className="text-center md:text-left" variants={item}>
          <motion.a
            href="#home"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer mb-2 inline-block"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {NAME}
          </motion.a>
          <motion.div
            className="text-gray-600 dark:text-gray-400"
            variants={item}
          >
            {TITLE} <br />
            <span className="text-sm">{EMAIL}</span> |{" "}
            <span className="text-sm">{LOCATION}</span>
          </motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mt-2 text-sm"
            variants={item}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>

        <motion.div className="flex gap-6" variants={item}>
          <motion.a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              prefersReducedMotion ? {} : { scale: 1.2, rotate: 5, y: -3 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            className="relative text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SiGithub size={24} />
            {!prefersReducedMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.a>

          <motion.a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              prefersReducedMotion ? {} : { scale: 1.2, rotate: -5, y: -3 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            className="relative text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SiLinkedin size={24} />
            {!prefersReducedMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.a>

          <motion.a
            href={KAGGLE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              prefersReducedMotion ? {} : { scale: 1.2, rotate: 5, y: -3 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            className="relative text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Kaggle"
          >
            <SiKaggle size={24} />
            {!prefersReducedMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
