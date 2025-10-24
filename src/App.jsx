import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  Download,
  Briefcase,
} from "lucide-react";
import { IoRocketSharp } from "react-icons/io5";

//
import { SiWhatsapp } from "react-icons/si";
import { SiGoogleplay } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

// import {
//   SiFlutter,
//   SiDart,
//   SiFirebase,
//   SiPython,
//   SiTensorflow,
//   SiGit,
//   SiGooglemaps,
//   SiHive,
// } from "react-icons/si";

// --------- بياناتك الشخصية -----------

const NAME = "Zain Mhesn";
const TITLE = "Flutter Developer | AI Specialist | Information Engineer";
const EMAIL = "zayanmhesn22@gmail.com";
const PHONE = "+963959527648";
const LOCATION = "Damascus, Syria";
const LINKEDIN = "https://www.linkedin.com/in/zain-mhesn-48624920b";
const GITHUB = "https://github.com/zain5m";

const CV_URL = "/projects/ZAIN_MHESN.pdf";

const PROFILE_IMG_ROUND = "/projects/profile-pic_round.png";
const PROFILE_IMG_SQUARE = "/projects/profile-pic_square.png";
// NAME FOR IMAGE
// `https://placehold.co/500x500/cbd5e1/334155?text=${encodeURIComponent(
//   NAME[0]
// )}`;

// --------- مشاريعك الحقيقية -----------
// const projectsData = [
//   {
//     title: "SKY متجر (E-commerce App)",
//     description:
//       "Flutter app that transforms a WordPress store into a modern mobile experience. Features product search, authentication, order history, real-time sync.",
//     imageUrl: "/projects/sky-store.png",
//     tags: ["Flutter", "Firebase", "REST API", "Hive"],
//     githubUrl: "",
//     liveUrl:
//       "https://play.google.com/store/apps/details?id=com.skytrendstore.skystore",
//   },
//   {
//     title: "Easy Dutch – Language Learning App",
//     description:
//       "App for Dutch language learning with daily goals, AI chat, gamification, and real-time pronunciation feedback.",
//     imageUrl: "/projects/easy-dutch.png",
//     tags: ["Flutter", "Hive", "TTS", "Google Translate", "AI"],
//     githubUrl: "",
//     liveUrl:
//       "https://play.google.com/store/apps/details?id=com.learn_language.protico",
//   },
//   {
//     title: "Tekrum – Delivery Application",
//     description:
//       "Comprehensive delivery platform for users, drivers, and vendors: live tracking, QR scan, real-time orders, and chat.",
//     imageUrl: "/projects/tekrum.png",
//     tags: ["Flutter", "Firebase", "Google Maps", "QR Scanner"],
//     githubUrl: "",
//     liveUrl:
//       "https://play.google.com/store/apps/details?id=com.tekrum_dev.tekrum",
//   },
//   {
//     title: "Tekrum Partner – Driver & Vendor App",
//     description:
//       "Manages deliveries & products for vendors and drivers: order tracking, QR confirmation, business profiles.",
//     imageUrl: "/projects/tekrum.png",
//     tags: ["Flutter", "Firebase", "Google Maps"],
//     githubUrl: "",
//     liveUrl:
//       "https://play.google.com/store/apps/details?id=com.tekrumpartner.tekrum_partner",
//   },
//   {
//     title: "Tafadal – Tourist Taxi Booking App",
//     description:
//       "Ride booking and management for tourists in KSA: destinations, online payment, real-time chat, map tracking.",
//     imageUrl: "/projects/tafadal.png",
//     tags: ["Flutter", "Firebase", "Google Maps", "Notifications"],
//     githubUrl: "",
//     liveUrl: "",
//   },
//   {
//     title: "Todo App (Personal Project)",
//     description:
//       "Task management app using clean architecture and Hive local storage.",
//     tags: ["Flutter", "Hive", "Clean Architecture"],
//     githubUrl: "https://github.com/zain5m/todo_app.git",
//     liveUrl: "",
//   },
// ];
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
// const skills = [
//   "Flutter",
//   "Dart",
//   "Firebase",
//   "Python",
//   "Machine Learning",
//   "Git",
//   "Google Maps",
//   "Hive",
// ];
// const skillIconMap = {
//   Flutter: SiFlutter,
//   Dart: SiDart,
//   Firebase: SiFirebase,
//   Python: SiPython,
//   "Machine Learning": SiTensorflow,
//   Git: SiGit,
//   "Google Maps": SiGooglemaps,
//   Hive: SiHive,
// };
// --------- مهاراتك -----------
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiGit,
  SiGooglemaps,
  SiHive,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiLangchain,
  SiOpenai,
  // SiQdrant,
  SiOracle,
  SiApollographql,
  SiMysql,
  SiGitlab,
  SiGoogleadmob,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { FaDatabase, FaLanguage } from "react-icons/fa6";
import { PiVectorThreeBold } from "react-icons/pi"; // لمتجهات Vector DBs
import { TbSql } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";

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
  Bloc: SiFlutter, // ما في أيقونة مخصصة، استعمل Flutter كرمز تطوير
  Provider: SiFlutter,
  "REST APIs": SiApollographql, // تمثّل API layer
  "Firebase (Auth, Firestore, FCM)": SiFirebase,
  "Local Storage (Hive, Sqflite, Shared Prefs, Secure Storage)": SiHive,
  "Google Maps API": SiGooglemaps,
  AdMob: SiGoogleadmob,

  // AI & Data
  Python: SiPython,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit-learn": SiScikitlearn,
  RAG: GiArtificialIntelligence,
  LangChain: SiLangchain,
  "Vector DBs (Qdrant, ChromaDB)": PiVectorThreeBold,
  "LLM Integration": GiArtificialIntelligence,
  "Mistral AI": SiTensorflow, // لا يوجد أيقونة رسمية
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

// 👈 ADDED: نقلنا هذا المتغير هنا ليصبح عام
const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

// --------- Main App -----------
export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "dark"; // 👈 يبدأ داكن
  });

  // 👈 CHANGED: استبدلنا "page" بـ "activeSection" لتتبع السكرول
  const [activeSection, setActiveSection] = useState("home");
  // const [page, setPage] = useState("home"); // 👈 REMOVED

  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    // ضيف/شيل كلاس dark
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 👈 ADDED: هذا الـ useEffect هو المسؤول عن تتبع السكرول
  useEffect(() => {
    // جلب جميع الأقسام
    const sections = navItems.map((item) => document.getElementById(item.id));

    // إعدادات الـ Observer
    // rootMargin: -80px (ارتفاع الـ Navbar) من الأعلى
    // -60% من الأسفل، لتحديد القسم الفعال في الجزء العلوي من الشاشة
    const observerOptions = {
      root: null, // التتبع نسبة للـ viewport
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0, // يشتغل بمجرد دخول بكسل واحد
    };

    // الـ Callback الذي سيعمل عند التمرير
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // إذا كان القسم ظاهراً، حدّث الحالة
          setActiveSection(entry.target.id);
        }
      });
    };

    // إنشاء الـ Observer
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // بدء مراقبة جميع الأقسام
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // دالة التنظيف: إيقاف المراقبة عند إغلاق المكون
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // 👈 [] يعني أنه سيعمل مرة واحدة فقط عند تحميل الصفحة

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // 👈 REMOVED: لم نعد بحاجة لهذه الدوال
  // const navigateTo = (pageName) => setPage(pageName);
  // const renderPage = () => { ... };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <style>
        {`
            // 👈 ADDED: لجعل التمرير ناعماً عند الضغط على الروابط
            html {
              scroll-behavior: smooth;
            }
            // 👈 ADDED: لإضافة هامش علوي للأقسام يساوي ارتفاع الـ Navbar
            // 80px = 5rem (h-20 in tailwind)
            section[id] {
              scroll-margin-top: 80px;
            }
         
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .page-content {
              animation: fadeIn 0.5s ease-in-out;
            }
            
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.8s ease-out forwards;
            }
            .animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
            .animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
            .animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
            .animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
          `}
      </style>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-slate-950 dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]"></div>

        {/* 👈 CHANGED: مررنا الحالة الجديدة (activeSection) بدلاً من (page) */}
        <Navbar currentPage={activeSection} />

        {/* 👈 CHANGED: عرضنا جميع المكونات مباشرة بدلاً من دالة renderPage */}
        <main className="pt-20 page-content relative z-10">
          <Home />
          <Projects />
          <About />
          <Contact />
        </main>

        {/* 👈 CHANGED: أزلنا prop الـ navigateTo */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// --------- Navbar -----------
// 👈 CHANGED: أزلنا prop الـ navigateTo
function Navbar({ currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  // 👈 MOVED: نقلنا هذا المتغير خارج المكون

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto max-w-6xl px-4 h-20 flex justify-between items-center">
        {/* 👈 CHANGED: حولنا الـ div إلى رابط <a> لينتقل إلى قسم #home */}
        <a
          href="#home"
          className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 cursor-pointer"
          // onClick={() => navigateTo("home")} // 👈 REMOVED
        >
          {NAME}
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          {/* 👈 CHANGED: حولنا الـ button إلى رابط <a> لينتقل إلى القسم الموافق */}
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`} // 👈 ADDED: الرابط
              // onClick={() => navigateTo(item.id)} // 👈 REMOVED
              className={`text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                currentPage === item.id // 👈 سيعمل هذا الآن بناءً على السكرول
                  ? "bg-blue-100/50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
            >
              {item.name}
            </a>
          ))}
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
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4 border-b border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col items-center space-y-4">
            {/* 👈 CHANGED: حولنا الـ button إلى <a> */}
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`} // 👈 ADDED: الرابط
                onClick={() => {
                  // 👈 CHANGED: أزلنا navigateTo، وأبقينا إغلاق القائمة
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium transition-colors ${
                  currentPage === item.id
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// --------- Home -----------
// 👈 CHANGED: أزلنا prop الـ navigateTo
function Home() {
  return (
    // 👈 NOTICE: هذا القسم يجب أن يكون له id="home" ليعمل السكرول
    <section
      id="home"
      className="container mx-auto max-w-6xl px-4 py-20 md:py-32"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* (جديد) الصورة الشخصية */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start animate-fade-in-up animate-delay-1">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-50 dark:opacity-70 animate-pulse"></div>
            <img
              src={PROFILE_IMG_ROUND}
              loading="lazy"
              alt={NAME}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white dark:border-slate-900"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/500x500/ef4444/ffffff?text=Image+Error")
              }
            />
          </div>
        </div>

        {/* (جديد) النص على اليمين */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-white animate-fade-in-up animate-delay-2">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              {NAME}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up animate-delay-3">
            {TITLE}
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-8 mx-auto lg:mx-0 animate-fade-in-up animate-delay-4">
            Information Engineering graduate specialized in Artificial
            Intelligence, with 3+ years in Flutter. Built and shipped 5+
            cross-platform apps using Clean Architecture, Firebase, and
            Bloc/Provider. Comfortable integrating AI (RAG, LangChain, vector
            DBs) to deliver scalable, user-focused mobile products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-4">
            {/* 👈 CHANGED: حولنا الـ button إلى <a> للانتقال إلى قسم المشاريع */}
            <a
              href="#projects" // 👈 ADDED
              // onClick={() => navigateTo("projects")} // 👈 REMOVED
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Projects <IoRocketSharp size={20} />
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Download CV <Download size={20} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300 animate-fade-in-up animate-delay-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <Mail size={18} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">{EMAIL}</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <Phone size={18} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">{PHONE}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <SiWhatsapp
                size={18}
                className="text-green-600 dark:text-green-400"
              />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <GrLinkedin
                size={18}
                className="text-blue-600 dark:text-blue-400"
              />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                LOCATION
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">{LOCATION}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------- Projects -----------
function Projects() {
  return (
    // 👈 NOTICE: هذا القسم يجب أن يكون له id="projects"
    <section id="projects" className="container mx-auto max-w-6xl px-4 py-20">
      <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl shadow-md">
          Projects I've Built
        </span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
        Here are some of the projects I'm proud of.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

// ... ProjectCard (لا تغييرات هنا)
function ProjectCard({ project }) {
  const hasLinks = Boolean(project.githubUrl) || Boolean(project.liveUrl);

  return (
    <div className="group relative rounded-2xl">
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     bg-gradient-to-r from-blue-400 to-green-400 blur-xl"
        aria-hidden
      />
      <div
        className="relative z-10 bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden
                       shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300
                       transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
      >
        {project.imageUrl ? (
          <div className="flex items-center justify-center h-48 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-slate-900">
            <img
              src={project.imageUrl}
              loading="lazy"
              alt={project.title}
              className="object-contain h-full w-full p-4"
              onError={(e) => (e.target.src = "/projects/placeholder.png")}
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={`https://placehold.co/600x400/d1fae5/222?text=${encodeURIComponent(
                project.title
              )}`}
              loading="lazy"
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400/ef4444/ffffff?text=Image+Error")
              }
            />
          </div>
        )}
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
                <span
                  key={`${project.title}-tag-${i}`}
                  className="px-3 py-1 bg-blue-100/50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {hasLinks && (
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white
                                 dark:bg-gray-200 dark:text-gray-900 rounded-lg font-medium
                                 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors text-sm"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  <SiGithub size={18} />
                  Code
                  <ExternalLink size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                                 font-medium hover:bg-blue-700 transition-colors text-sm"
                  aria-label={`View ${project.title} on Google Play`}
                >
                  <SiGoogleplay size={18} />
                  Google Play
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --------- About -----------
// function About() {
//   return (
//     // 👈 NOTICE: هذا القسم يجب أن يكون له id="about"
//     <section id="about" className="container mx-auto max-w-6xl px-4 py-20">
//       <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
//         <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-2xl shadow-md">
//           About Me
//         </span>
//       </h2>
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//         <div className="w-full md:w-2/3">
//           <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//             Information Engineering graduate specialized in Artificial
//             Intelligence. 3+ years building Flutter apps end-to-end with Clean
//             Architecture and robust state management. I like turning ambiguous
//             product ideas into reliable, shippable mobile software.
//           </p>
//           <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
//             On the mobile side: Flutter, Dart, Bloc/Provider, REST, Firebase,
//             local storage, Google Maps, and AdMob. On the AI side: Python data
//             stack (Pandas/NumPy/Scikit-learn) and Gen-AI workflows (RAG,
//             LangChain, vector DBs like Qdrant/ChromaDB, and LLM integration with
//             Mistral/OpenAI). I care about scalable code, evidence-based
//             features, and shipping.
//           </p>
//           <div className="mt-4 text-gray-700 dark:text-gray-300 mb-8">
//             <b>Languages:</b> Arabic (Native), English (Intermediate)
//           </div>
//           {/* <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//             Hello! I'm <b>{NAME}</b>, an Information Engineering graduate
//             specialized in Artificial Intelligence. I have over 3 years of
//             hands-on experience in Flutter mobile development, delivering
//             intelligent, user-focused apps.
//           </p>
//           <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
//             My expertise covers Flutter, Dart, Firebase, Machine Learning, and
//             Clean Architecture. I thrive on solving complex problems and
//             building innovative solutions that blend mobile engineering with AI.
//             Always eager to collaborate, learn, and create.
//           </p>
//           <div className="mt-4 text-gray-700 dark:text-gray-300 mb-8">
//             <b>Languages:</b> Arabic (Native), English (Intermediate)
//           </div> */}

//           <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
//             <Briefcase size={22} className="text-blue-500" /> My Toolkit
//           </h3>
//           <div className="mb-4">
//             <SkillsGrid items={skills} />
//           </div>
//         </div>
//         <div className="w-full md:w-1/3 flex justify-center">
//           <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 shadow-xl">
//             <img
//               src={PROFILE_IMG_SQUARE}
//               loading="lazy"
//               alt={NAME}
//               className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
//               onError={(e) =>
//                 (e.target.src =
//                   "https://placehold.co/500x500/ef4444/ffffff?text=Image+Error")
//               }
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mt-16 max-w-3xl mx-auto bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
//         <h3 className="text-2xl font-semibold mb-6 text-center">
//           Education & Certifications
//         </h3>
//         {/* <ul className="text-gray-700 dark:text-gray-300 space-y-4">
//           <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
//             <GraduationCap
//               size={24}
//               className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
//             />
//             <span className="text-lg">
//               B.Sc. in Information Engineering – Artificial Intelligence,
//               Damascus University (2020–2025)
//             </span>
//           </li>
//           <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
//             <Award
//               size={24}
//               className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
//             />
//             <span className="text-lg">
//               Oracle SQL & APEX Training – EastMed Company (2024)
//             </span>
//           </li>
//           <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
//             <Award
//               size={24}
//               className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
//             />
//             <span className="text-lg">
//               AI & Machine Learning Training Program – SHAI for AI Club (2024)
//             </span>
//           </li>
//         </ul> */}
//         <ul className="text-gray-700 dark:text-gray-300 space-y-4">
//           <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
//             <GraduationCap
//               size={24}
//               className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
//             />
//             <span className="text-lg">
//               B.Sc. in Information Engineering – Artificial Intelligence,
//               Damascus University (2019–2025)
//               <br />
//               <i>Graduation Project:</i> RAG-based conversational system for HR
//               résumé evaluation using LLMs & vector databases (Qdrant), with
//               semantic/hybrid retrieval via LangChain; achieved &gt;90% ranking
//               alignment with human experts.
//             </span>
//           </li>
//           <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
//             <Award
//               size={24}
//               className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
//             />
//             <span className="text-lg">
//               Oracle SQL &amp; APEX Training – EastMed Company (Aug–Sep 2024, 80
//               hours). Hands-on Oracle DB + APEX web solutions.
//             </span>
//           </li>
//           <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
//             <Award
//               size={24}
//               className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
//             />
//             <span className="text-lg">
//               AI &amp; Machine Learning Training Program – SHAI for AI Club
//               (2024). Foundations + advanced topics with project-based learning.
//             </span>
//           </li>
//         </ul>
//         <div className="mt-8 text-center">
//           <a
//             href={CV_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
//           >
//             Download CV <Download size={20} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
function About() {
  return (
    <section id="about" className="container mx-auto max-w-6xl px-4 py-20">
      <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-2xl shadow-md">
          About Me
        </span>
      </h2>

      {/* الصف العلوي: النصوص + الصورة جنب بعض */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        {/* النصوص (تأخذ عمودين على الشاشات المتوسطة+) */}
        <div className="md:col-span-2">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Information Engineering graduate specialized in Artificial
            Intelligence. 3+ years building Flutter apps end-to-end with Clean
            Architecture and robust state management. I like turning ambiguous
            product ideas into reliable, shippable mobile software.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            On the mobile side: Flutter, Dart, Bloc/Provider, REST, Firebase,
            local storage, Google Maps, and AdMob. On the AI side: Python data
            stack (Pandas/NumPy/Scikit-learn) and Gen-AI workflows (RAG,
            LangChain, vector DBs like Qdrant/ChromaDB, and LLM integration with
            Mistral/OpenAI). I care about scalable code, evidence-based
            features, and shipping.
          </p>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <b>Languages:</b> Arabic (Native), English (Intermediate)
          </div>
        </div>

        {/* الصورة (عمود واحد) */}
        <div className="w-full flex justify-center">
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 shadow-xl">
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
          </div>
        </div>
      </div>

      {/* خط فاصل لطيف (اختياري) */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800/60" />

      {/* My Toolkit تحت النص + الصورة وبعرض كامل */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase size={22} className="text-blue-500" /> My Toolkit
        </h3>
        <div className="mb-4">
          <SkillsGrid items={skills} />
        </div>
      </div>

      {/* التعليم والشهادات */}
      <div className="mt-16 max-w-3xl mx-auto bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Education & Certifications
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 space-y-4">
          <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <GraduationCap
              size={24}
              className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
            />
            <span className="text-lg">
              B.Sc. in Information Engineering – Artificial Intelligence,
              Damascus University (2019–2025)
              <br />
              <i>Graduation Project:</i> RAG-based conversational system for HR
              résumé evaluation using LLMs & vector databases (Qdrant), with
              semantic/hybrid retrieval via LangChain; achieved &gt;90% ranking
              alignment with human experts.
            </span>
          </li>
          <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <Award
              size={24}
              className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
            />
            <span className="text-lg">
              Oracle SQL &amp; APEX Training – EastMed Company (Aug–Sep 2024, 80
              hours). Hands-on Oracle DB + APEX web solutions.
            </span>
          </li>
          <li className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <Award
              size={24}
              className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
            />
            <span className="text-lg">
              AI &amp; Machine Learning Training Program – SHAI for AI Club
              (2024). Foundations + advanced topics with project-based learning.
            </span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Download CV <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ... SkillsGrid (لا تغييرات هنا)
function SkillsGrid({ items }) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      role="list"
      aria-label="Skills"
    >
      {items.map((name) => {
        const Icon = skillIconMap[name];
        return (
          <div
            key={name}
            role="listitem"
            className="flex items-center justify-center gap-2 px-4 py-3
                       rounded-xl bg-gray-100 dark:bg-slate-800
                       shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5
                       text-gray-800 dark:text-gray-200"
            title={name}
          >
            {Icon ? (
              <Icon className="shrink-0" size={20} aria-hidden />
            ) : (
              <span className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />
            )}
            <span className="text-sm font-medium">{name}</span>
          </div>
        );
      })}
    </div>
  );
}

// --------- Contact -----------
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    // 👈 NOTICE: هذا القسم يجب أن يكون له id="contact"
    <section id="contact" className="container mx-auto max-w-3xl px-4 py-20">
      <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white rounded-2xl shadow-md">
          Get In Touch
        </span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
        Interested in working together or have a question? Reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <Mail size={18} className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium">{EMAIL}</span>
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <GrLinkedin size={18} className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <Phone size={18} className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium">{PHONE}</span>
        </a>
        <a
          href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <SiWhatsapp
            size={18}
            className="text-green-600 dark:text-green-400"
          />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
      </div>

      <div className="bg-white dark:bg-slate-800/50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        {isSubmitted ? (
          <div className="text-center p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                placeholder="Your message..."
              />
            </div>
            {error && (
              <div className="text-center p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg">
                {error}
              </div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

// --------- Footer -----------
// 👈 CHANGED: أزلنا prop الـ navigateTo
function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950/50 border-t border-gray-200 dark:border-gray-800/50">
      <div className="container mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          {/* 👈 CHANGED: حولنا الـ div إلى <a> للعودة للرئيسية */}
          <a
            href="#home"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer mb-2"
            // onClick={() => navigateTo("home")} // 👈 REMOVED
          >
            {NAME}
          </a>
          <div className="text-gray-600 dark:text-gray-400">
            {TITLE} <br />
            <span className="text-sm">{EMAIL}</span> |{" "}
            <span className="text-sm">{LOCATION}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <SiGithub size={24} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <SiLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
