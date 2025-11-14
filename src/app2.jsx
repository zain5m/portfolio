import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

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
import { GrLinkedin } from "react-icons/gr";
import { BsSpeedometer2, BsBarChartFill } from "react-icons/bs";
import { VscBeaker } from "react-icons/vsc";
import { MdAccessibilityNew, MdDeveloperMode } from "react-icons/md";
import { TbLock, TbSql } from "react-icons/tb";

import {
  SiGoogleplay,
  SiWhatsapp,
  SiLinkedin,
  SiGithub,
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
  SiSentry,
  SiGithubactions,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { FaDatabase, FaLanguage } from "react-icons/fa6";
import { PiVectorThreeBold } from "react-icons/pi";
import {} from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionValue,
} from "framer-motion";

//////////////////////////////////////////////////////NEW -------------------------------------------

// خلفية شبكة عصبونية متحركة (SVG)
function NeuralNetworkBG1() {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-[650px] max-w-full opacity-60 pointer-events-none select-none"
      viewBox="0 0 650 900"
      fill="none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {/* خطوط مترابطة */}
      <motion.line
        x1="120"
        y1="180"
        x2="340"
        y2="70"
        stroke="#38bdf8"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          delay: 0.2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="340"
        y1="70"
        x2="500"
        y2="160"
        stroke="#34d399"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.4,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="120"
        y1="180"
        x2="120"
        y2="420"
        stroke="#818cf8"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.3,
          delay: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="120"
        y1="420"
        x2="340"
        y2="530"
        stroke="#38bdf8"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.6,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="340"
        y1="530"
        x2="500"
        y2="440"
        stroke="#34d399"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* دوائر (Nodes) - مع حركة صغيرة */}
      <motion.circle
        cx="120"
        cy="180"
        r="14"
        fill="#38bdf8"
        opacity="0.30"
        animate={{ r: [14, 19, 14] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="340"
        cy="70"
        r="10"
        fill="#38bdf8"
        opacity="0.22"
        animate={{ r: [10, 13, 10] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="500"
        cy="160"
        r="16"
        fill="#34d399"
        opacity="0.21"
        animate={{ r: [16, 22, 16] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="120"
        cy="420"
        r="13"
        fill="#818cf8"
        opacity="0.25"
        animate={{ r: [13, 18, 13] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="340"
        cy="530"
        r="12"
        fill="#38bdf8"
        opacity="0.20"
        animate={{ r: [12, 16, 12] }}
        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="500"
        cy="440"
        r="18"
        fill="#34d399"
        opacity="0.18"
        animate={{ r: [18, 25, 18] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
function NeuralNetworkBG2() {
  // حدد الطبقات وعدد النودات
  const layers = [
    { x: 70, n: 4 }, // الطبقة الأولى (يسار)
    { x: 200, n: 6 }, // الطبقة الثانية
    { x: 350, n: 5 }, // الطبقة الثالثة
    { x: 500, n: 3 }, // الطبقة الرابعة (يمين)
  ];
  const height = 600;
  const layerGap = height / (Math.max(...layers.map((l) => l.n)) + 1);

  // ترسم الخطوط بين كل نود في الطبقة الحالية وكل نود في الطبقة التالية
  const connections = [];
  for (let i = 0; i < layers.length - 1; i++) {
    for (let a = 0; a < layers[i].n; a++) {
      for (let b = 0; b < layers[i + 1].n; b++) {
        connections.push({
          x1: layers[i].x,
          y1: ((a + 1) * height) / (layers[i].n + 1),
          x2: layers[i + 1].x,
          y2: ((b + 1) * height) / (layers[i + 1].n + 1),
        });
      }
    }
  }

  // رسم النودات (دوائر)
  const nodes = layers.flatMap((layer, li) =>
    Array.from({ length: layer.n }).map((_, ni) => ({
      cx: layer.x,
      cy: ((ni + 1) * height) / (layer.n + 1),
      key: `l${li}n${ni}`,
    }))
  );

  return (
    <svg
      className="absolute right-0 top-0 h-full w-[650px] max-w-full opacity-70 pointer-events-none select-none"
      viewBox="0 0 650 600"
      fill="none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {/* خطوط الإتصال */}
      {connections.map((conn, i) => (
        <line
          key={i}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="#22d3ee"
          strokeWidth="1.6"
          opacity="0.35"
        />
      ))}
      {/* الدوائر (العقد العصبية) */}
      {nodes.map((n, i) => (
        <circle
          key={n.key}
          cx={n.cx}
          cy={n.cy}
          r="13"
          fill="#2563eb"
          opacity="0.29"
        />
      ))}
    </svg>
  );
}

function NeuralNetworkBG3() {
  const prefersReducedMotion = useReducedMotion();

  // تعريف طبقات الشبكة (x = موضع العمود، n = عدد العقد في العمود)
  const layers = [
    { x: 70, n: 4 },
    { x: 210, n: 6 },
    { x: 370, n: 5 },
    { x: 530, n: 3 },
  ];

  const height = 620;

  // كل الاتصالات بين كل عقدة في العمود i والعقد في العمود i+1
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

  // العقد (الدوائر)
  const nodes = layers.flatMap((layer, li) =>
    Array.from({ length: layer.n }).map((_, ni) => ({
      cx: layer.x,
      cy: ((ni + 1) * height) / (layer.n + 1),
      key: `n-${li}-${ni}`,
    }))
  );

  // ألوان هادئة
  const lineColor = "#22d3ee"; // cyan-400
  const nodeColor = "#60a5fa"; // blue-400

  return (
    <motion.svg
      className="absolute right-0 top-0 h-full w-[650px] max-w-full opacity-70 pointer-events-none select-none"
      viewBox={`0 0 650 ${height}`}
      fill="none"
      style={{ zIndex: 0 }}
      aria-hidden
      // حومان خفيف لكل الشبكة
      animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {/* توهّج بسيط للعقد عبر فلتر */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* تدرّج للخطوط يعطي لمسة أنيقة */}
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* الخطوط (اتصالات) مع حركة تدفق */}
      {connections.map((c, i) => (
        <motion.line
          key={c.key}
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          stroke="url(#lg)"
          strokeWidth="1.6"
          strokeLinecap="round"
          // شَرطَة متحركة توحي بالتدفق العصبي
          strokeDasharray={prefersReducedMotion ? "none" : "8 14"}
          strokeDashoffset={0}
          initial={prefersReducedMotion ? undefined : { strokeDashoffset: 0 }}
          animate={
            prefersReducedMotion ? undefined : { strokeDashoffset: [-22, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 2.2 + (i % 7) * 0.12, // تباين خفيف بالسرعات
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          opacity={0.45}
        />
      ))}

      {/* العقد (دوائر) بنبض وتوهّج */}
      {nodes.map((n, i) => (
        <motion.circle
          key={n.key}
          cx={n.cx}
          cy={n.cy}
          r="11"
          fill={nodeColor}
          opacity="0.4"
          filter="url(#glow)"
          // نبض لطيف + تغير طفيف في اللمعان
          animate={
            prefersReducedMotion
              ? undefined
              : { r: [11, 13, 11], opacity: [0.35, 0.55, 0.4] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 2.6 + (i % 5) * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </motion.svg>
  );
}
function NeuralNetworkBG() {
  const prefersReducedMotion = useReducedMotion();

  const layers = [
    { x: 70, n: 4 },
    { x: 210, n: 6 },
    { x: 370, n: 5 },
    { x: 530, n: 3 },
  ];
  const height = 620;

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
      // ✅ تموضع Responsive: أنزلها شوي وزِحها يمين، وتكبر تدريجيًا مع الشاشات
      className="
        fixed pointer-events-none select-none opacity-70
        z-0
        right-[-48px] top-36 w-[280px] h-[340px]
        sm:right-[-56px] sm:top-44 sm:w-[320px] sm:h-[380px]
        md:right-[-24px] md:top-28 md:w-[500px] md:h-[560px]
        lg:right-0 lg:top-24 lg:w-[600px] lg:h-[600px]
        xl:right-0 xl:top-20 xl:w-[650px] xl:h-[620px]
      "
      viewBox={`0 0 650 ${height}`}
      fill="none"
      aria-hidden
      animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {connections.map((c, i) => (
        <motion.line
          key={c.key}
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          stroke="url(#lg)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray={prefersReducedMotion ? "none" : "8 14"}
          initial={prefersReducedMotion ? undefined : { strokeDashoffset: 0 }}
          animate={
            prefersReducedMotion ? undefined : { strokeDashoffset: [-22, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 2.2 + (i % 7) * 0.12,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          opacity={0.45}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.circle
          key={n.key}
          cx={n.cx}
          cy={n.cy}
          r="11"
          fill={nodeColor}
          opacity="0.4"
          filter="url(#glow)"
          animate={
            prefersReducedMotion
              ? undefined
              : { r: [11, 13, 11], opacity: [0.35, 0.55, 0.4] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 2.6 + (i % 5) * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
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
const LINKEDIN = "https://www.linkedin.com/in/zain-mhesn-48624920b";
const GITHUB = "https://github.com/zain5m";

const CV_URL = "/projects/ZAIN_MHESN.pdf";

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

// 👈 ADDED: نقلنا هذا المتغير هنا ليصبح عام
const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

////////

// --------- Main App -----------
// export default function App() {
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     return saved ? saved : "dark"; // 👈 يبدأ داكن
//   });

//   // 👈 CHANGED: استبدلنا "page" بـ "activeSection" لتتبع السكرول
//   const [activeSection, setActiveSection] = useState("home");
//   // const [page, setPage] = useState("home"); // 👈 REMOVED

//   useEffect(() => {
//     document.documentElement.lang = "en";
//     document.documentElement.dir = "ltr";
//     // ضيف/شيل كلاس dark
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     document.documentElement.style.colorScheme = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // 👈 ADDED: هذا الـ useEffect هو المسؤول عن تتبع السكرول
//   useEffect(() => {
//     // جلب جميع الأقسام
//     const sections = navItems.map((item) => document.getElementById(item.id));

//     // إعدادات الـ Observer
//     // rootMargin: -80px (ارتفاع الـ Navbar) من الأعلى
//     // -60% من الأسفل، لتحديد القسم الفعال في الجزء العلوي من الشاشة
//     const observerOptions = {
//       root: null, // التتبع نسبة للـ viewport
//       rootMargin: "-80px 0px -60% 0px",
//       threshold: 0, // يشتغل بمجرد دخول بكسل واحد
//     };

//     // الـ Callback الذي سيعمل عند التمرير
//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // إذا كان القسم ظاهراً، حدّث الحالة
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     // إنشاء الـ Observer
//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     // بدء مراقبة جميع الأقسام
//     sections.forEach((section) => {
//       if (section) {
//         observer.observe(section);
//       }
//     });

//     // دالة التنظيف: إيقاف المراقبة عند إغلاق المكون
//     return () => {
//       sections.forEach((section) => {
//         if (section) {
//           observer.unobserve(section);
//         }
//       });
//     };
//   }, []); // 👈 [] يعني أنه سيعمل مرة واحدة فقط عند تحميل الصفحة

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

//   // 👈 REMOVED: لم نعد بحاجة لهذه الدوال
//   // const navigateTo = (pageName) => setPage(pageName);
//   // const renderPage = () => { ... };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <style>
//         {`
//             // 👈 ADDED: لجعل التمرير ناعماً عند الضغط على الروابط
//             html {
//               scroll-behavior: smooth;
//             }
//             // 👈 ADDED: لإضافة هامش علوي للأقسام يساوي ارتفاع الـ Navbar
//             // 80px = 5rem (h-20 in tailwind)
//             section[id] {
//               scroll-margin-top: 80px;
//             }

//             @keyframes fadeIn {
//               from { opacity: 0; transform: translateY(10px); }
//               to { opacity: 1; transform: translateY(0); }
//             }
//             .page-content {
//               animation: fadeIn 0.5s ease-in-out;
//             }

//             @keyframes fadeInUp {
//               from { opacity: 0; transform: translateY(20px); }
//               to { opacity: 1; transform: translateY(0); }
//             }
//             .animate-fade-in-up {
//               animation: fadeInUp 0.8s ease-out forwards;
//             }
//             .animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
//             .animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
//             .animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
//             .animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
//           `}
//       </style>
//       <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
//         {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-slate-950 dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]"></div> */}
//         <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
//           {/* الشبكة النقطية */}
//           <div className="h-full w-full bg-[radial-gradient(#94a3b833_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:18px_18px]" />

//           {/* غيوم متوهجة ناعمة */}
//           {!window.matchMedia("(prefers-reduced-motion: reduce)").matches && (
//             <>
//               <div className="pointer-events-none absolute -top-24 -left-10 h-80 w-80 rounded-full blur-3xl opacity-40 bg-blue-400/40 dark:bg-blue-500/30 animate-[pulse_5s_ease-in-out_infinite]" />
//               <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full blur-3xl opacity-35 bg-emerald-400/40 dark:bg-emerald-500/30 animate-[pulse_6s_ease-in-out_infinite]" />
//               <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-25 bg-cyan-400/40 dark:bg-cyan-500/30 animate-[pulse_7s_ease-in-out_infinite]" />
//             </>
//           )}
//         </div>
//         {/* 👈 CHANGED: مررنا الحالة الجديدة (activeSection) بدلاً من (page) */}
//         <Navbar currentPage={activeSection} />

//         {/* 👈 CHANGED: عرضنا جميع المكونات مباشرة بدلاً من دالة renderPage */}
//         <main className="pt-20 page-content relative z-10">
//           <Home />
//           <Projects />
//           <About />
//           <Contact />
//         </main>

//         {/* 👈 CHANGED: أزلنا prop الـ navigateTo */}
//         <Footer />

//         {import.meta.env.PROD && <Analytics />}
//         {import.meta.env.PROD && <SpeedInsights />}
//       </div>
//     </ThemeContext.Provider>
//   );
// }

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

  // return (
  //   <ThemeContext.Provider value={{ theme, toggleTheme }}>
  //     <style>
  //       {`
  //         html { scroll-behavior: smooth; }
  //         section[id] { scroll-margin-top: 80px; }
  //         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to {opacity:1; transform:translateY(0);} }
  //         .page-content { animation: fadeIn 0.5s ease-in-out; }
  //       `}
  //     </style>

  //     <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
  //       {/* 🔵 الخلفية الكاملة */}
  //       <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
  //         {/* شبكة نقطية خفيفة */}
  //         <div className="h-full w-full bg-[radial-gradient(#94a3b833_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:18px_18px]" />

  //         {/* 👇 الشبكة العصبونية المتحركة */}
  //         <NeuralNetworkBG />

  //         {/* غيوم ناعمة */}
  //         {!window.matchMedia("(prefers-reduced-motion: reduce)").matches && (
  //           <>
  //             <div className="pointer-events-none absolute -top-24 -left-10 h-80 w-80 rounded-full blur-3xl opacity-40 bg-blue-400/40 dark:bg-blue-500/30 animate-[pulse_5s_ease-in-out_infinite]" />
  //             <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full blur-3xl opacity-35 bg-emerald-400/40 dark:bg-emerald-500/30 animate-[pulse_6s_ease-in-out_infinite]" />
  //             <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-25 bg-cyan-400/40 dark:bg-cyan-500/30 animate-[pulse_7s_ease-in-out_infinite]" />
  //           </>
  //         )}
  //       </div>

  //       {/* Navbar */}
  //       <Navbar currentPage={activeSection} />
  //       <NeuralNetworkBG />

  //       {/* المحتوى */}
  //       <main className="pt-20 page-content relative z-10">
  //         <Home />
  //         <Projects />
  //         <About />
  //         <Contact />
  //       </main>

  //       {/* Footer */}
  //       <Footer />

  //       {import.meta.env.PROD && <Analytics />}
  //       {import.meta.env.PROD && <SpeedInsights />}
  //     </div>
  //   </ThemeContext.Provider>
  // );
  // ... في داخل الريتيرن لـ App:
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <style>
        {`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 80px; }
      `}
      </style>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
        {/* 🔵 الخلفية العصبية فقط */}

        <Navbar currentPage={activeSection} />
        <NeuralNetworkBG />

        <main className="pt-20 page-content relative z-10">
          <Home />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// --------- Navbar -----------

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
                    ${
                      active
                        ? "text-blue-600 dark:text-blue-300"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                >
                  {item.name}
                  {/* underline متحرك */}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full transition-all duration-300
                    ${
                      active
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
                  ${
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
        </motion.div>
      )}
    </header>
  );
}

// --------- Home -----------
// 👈 CHANGED: أزلنا prop الـ navigateTo
// function Home() {
//   return (
//     <section
//       id="home"
//       className="container mx-auto max-w-6xl px-4 py-20 md:py-32"
//     >
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* (جديد) الصورة الشخصية */}
//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-start animate-fade-in-up animate-delay-1">
//           <div className="relative">
//             <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-50 dark:opacity-70 animate-pulse"></div>
//             <img
//               src={PROFILE_IMG_ROUND}
//               loading="lazy"
//               alt={NAME}
//               className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white dark:border-slate-900"
//               onError={(e) =>
//                 (e.target.src =
//                   "https://placehold.co/500x500/ef4444/ffffff?text=Image+Error")
//               }
//             />
//           </div>
//         </div>

//         {/* (جديد) النص على اليمين */}
//         <div className="w-full lg:w-2/3 text-center lg:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-white animate-fade-in-up animate-delay-2">
//             Hi, I'm{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300">
//               {NAME}
//             </span>
//           </h1>
//           <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up animate-delay-3">
//             {TITLE}
//           </h2>
//           <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-8 mx-auto lg:mx-0 animate-fade-in-up animate-delay-4">
//             Information Engineering graduate specialized in Artificial
//             Intelligence, with 3+ years in Flutter. Built and shipped 5+
//             cross-platform apps using Clean Architecture, Firebase, and
//             Bloc/Provider. Comfortable integrating AI (RAG, LangChain, vector
//             DBs) to deliver scalable, user-focused mobile products.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-4">
//             {/* 👈 CHANGED: حولنا الـ button إلى <a> للانتقال إلى قسم المشاريع */}
//             <a
//               href="#projects" // 👈 ADDED
//               // onClick={() => navigateTo("projects")} // 👈 REMOVED
//               className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
//             >
//               View My Projects <IoRocketSharp size={20} />
//             </a>
//             <a
//               href={CV_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
//             >
//               Download CV <Download size={20} />
//             </a>
//           </div>

//           <div className="mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300 animate-fade-in-up animate-delay-4">
//             <a
//               href={`mailto:${EMAIL}`}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//             >
//               <Mail size={18} className="text-blue-600 dark:text-blue-400" />
//               <span className="text-sm font-medium">{EMAIL}</span>
//             </a>
//             <a
//               href={`tel:${PHONE}`}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//             >
//               <Phone size={18} className="text-blue-600 dark:text-blue-400" />
//               <span className="text-sm font-medium">{PHONE}</span>
//             </a>
//             <a
//               href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-sm"
//             >
//               <SiWhatsapp
//                 size={18}
//                 className="text-green-600 dark:text-green-400"
//               />
//               <span className="text-sm font-medium">WhatsApp</span>
//             </a>
//             <a
//               href={LINKEDIN}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//             >
//               <GrLinkedin
//                 size={18}
//                 className="text-blue-600 dark:text-blue-400"
//               />
//               <span className="text-sm font-medium">LinkedIn</span>
//             </a>
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                 LOCATION
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//             >
//               <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
//               <span className="text-sm font-medium">{LOCATION}</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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

            <motion.a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Download CV <Download size={20} />
            </motion.a>
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
      <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-2xl shadow-md">
          Projects I've Built
        </span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
        Here are some of the projects I'm proud of.
      </p>

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

// --------- About -----------
// --------- About (Clean Premium Timeline) -----------
function About() {
  const prefersReducedMotion = useReducedMotion();

  const education = [
    {
      icon: <GraduationCap size={20} />,
      title:
        "B.Sc. in Information Engineering – Artificial Intelligence, Damascus University (2019–2025)",
      desc: "Graduation Project: RAG-based conversational system for HR résumé evaluation using LLMs & vector databases (Qdrant), with semantic/hybrid retrieval via LangChain; achieved >90% ranking alignment with human experts.",
    },
    {
      icon: <Award size={20} />,
      title:
        "Oracle SQL & APEX Training – EastMed Company (Aug–Sep 2024, 80 hours).",
      desc: "Hands-on Oracle DB + APEX web solutions.",
    },
    {
      icon: <Award size={20} />,
      title:
        "AI & Machine Learning Training Program – SHAI for AI Club (2024).",
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
      <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-2xl shadow-md">
          About Me
        </span>
      </h2>

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

      {/* Education & Certifications — نسخة بريميوم هادئة */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto relative"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        {/* إطار زجاجي متدرّج */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-emerald-400/50">
          <div className="rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 md:p-8 border border-white/20 dark:border-white/10">
            <div className="relative mb-6">
              <h3 className="text-2xl font-semibold text-center">
                Education & Certifications
              </h3>
              {/* لمعة تمرّ على العنوان */}
              {!prefersReducedMotion && (
                <span className="pointer-events-none absolute inset-x-1/4 -bottom-1 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" />
              )}
            </div>

            {/* خط رفيع يسار داخل الصندوق */}
            <div className="relative">
              <span
                aria-hidden
                className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400/80 rounded-full"
              />
              <div className="space-y-4">
                {education.map((e, i) => (
                  <motion.div
                    key={i}
                    variants={appear}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    whileHover={prefersReducedMotion ? {} : { translateY: -1 }}
                    className="relative pl-8"
                  >
                    {/* نقطة على الخط */}
                    <span className="absolute left-[9px] top-5 h-3.5 w-3.5 rounded-full bg-white dark:bg-slate-900 ring-2 ring-blue-400/80 shadow" />
                    {/* البطاقة */}
                    <div className="group rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="mb-1 flex items-center gap-2 text-blue-600 dark:text-blue-300">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 ring-1 ring-blue-300/60 dark:ring-blue-700/60">
                          {e.icon}
                        </span>
                        <span className="text-sm font-medium">
                          Certification
                        </span>
                      </div>

                      <h4 className="font-semibold text-gray-900 dark:text-white leading-snug">
                        {e.title}
                      </h4>
                      {e.desc && (
                        <p className="mt-2 text-gray-600 dark:text-gray-300/90 text-[15px] leading-relaxed">
                          <i>{e.desc}</i>
                        </p>
                      )}

                      {/* حد علوي متدرّج يظهر بخفّة عند الهوفر */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-0 right-0 -top-[1px] h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* زر الـ CV */}
              <div className="mt-8 text-center">
                <motion.a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg"
                >
                  Download CV <Download size={18} />
                  {!prefersReducedMotion && (
                    <motion.span
                      className="absolute inset-0 rounded-xl ring-2 ring-emerald-400/40"
                      animate={{ opacity: [0.25, 0.55, 0.25] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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
function SkillPill({ name, Icon, core, prefersReducedMotion }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [8, -8]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);
  const shineX = useTransform(x, [-40, 40], ["-20%", "120%"]);

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      role="listitem"
      onMouseMove={prefersReducedMotion ? undefined : onMouseMove}
      onMouseLeave={prefersReducedMotion ? undefined : onMouseLeave}
      style={
        prefersReducedMotion
          ? {}
          : { rotateX, rotateY, transformPerspective: 700 }
      }
      whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      className="group relative"
    >
      {/* إطار متدرّج */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-slate-200 via-blue-300/60 to-slate-200 dark:from-slate-700 dark:via-blue-500/40 dark:to-slate-700">
        <div
          className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-2xl
                        bg-white/80 dark:bg-slate-900/60 backdrop-blur-md
                        border border-gray-200/60 dark:border-gray-700/60
                        shadow-sm hover:shadow-md transition-all select-none"
        >
          {/* لمعة تتحرك على الهوفر */}
          {!prefersReducedMotion && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute top-0 -left-10 h-full w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 group-hover:opacity-100"
              style={{ translateX: shineX }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            />
          )}

          {/* أيقونة */}
          {Icon ? (
            <span
              className={`shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full
                              ${
                                core
                                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 ring-1 ring-blue-300/60 dark:ring-blue-700/60"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/70 dark:ring-slate-700/70"
                              }`}
            >
              <Icon size={16} aria-hidden />
            </span>
          ) : (
            <span className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />
          )}

          {/* الاسم */}
          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {name}
          </span>

          {/* هالة خفيفة للمهارات الأساسية */}
          {core && !prefersReducedMotion && (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0)",
                  "0 0 24px rgba(59,130,246,0.25)",
                  "0 0 0px rgba(59,130,246,0)",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
// --------- Toolkit Section (Ultra Animated) -----------
function ToolkitSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="toolkit"
      className="relative container mx-auto max-w-6xl px-4 py-20"
    >
      {/* خلفية متحركة خفيفة */}
      <div className="absolute inset-0 -z-10">
        {/* شبك نقطي خفيف */}
        <div className="h-full w-full bg-[radial-gradient(#94a3b833_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:18px_18px]" />
        {/* غيوم مضيئة */}
        {!prefersReducedMotion && (
          <>
            <div className="pointer-events-none absolute -top-20 left-10 h-64 w-64 rounded-full blur-3xl opacity-40 bg-blue-400/40 dark:bg-blue-500/30 animate-pulse" />
            <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full blur-3xl opacity-35 bg-emerald-400/40 dark:bg-emerald-500/30 animate-[pulse_3s_ease-in-out_infinite]" />
          </>
        )}
      </div>

      {/* عنوان + إطار متدرّج */}
      <div className="mx-auto max-w-5xl mb-10">
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-emerald-400/50">
          <div className="rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-5 py-4 border border-white/20 dark:border-white/10 flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 ring-1 ring-blue-300/60 dark:ring-blue-700/60">
              <Briefcase size={18} />
            </span>
            <h3 className="text-2xl font-semibold">My Toolkit</h3>

            {!prefersReducedMotion && (
              <span className="ml-auto h-[2px] w-28 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse rounded-full" />
            )}
          </div>
        </div>
      </div>

      {/* الشبكة */}
      <SkillsGrid items={skills} />
    </section>
  );
}

// --------- Contact ----------

// 🔧 فعّل/عطّل الديبَغ من هنا أو عبر ?debug=1 في الرابط
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       setError("Please fill out all fields.");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           access_key: import.meta.env.VITE_WEB3FORMS_KEY,
//           subject: `New message from ${formData.name}`,
//           from_name: "Portfolio Contact",
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setIsSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setIsSubmitted(false), 3000);
//       } else {
//         setError(data.message || "Failed to send. Try again later.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="container mx-auto max-w-3xl px-4 py-20">
//       <h2 className="relative text-3xl md:text-4xl font-bold text-center mb-12">
//         <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white rounded-2xl shadow-md">
//           Get In Touch
//         </span>
//       </h2>
//       <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
//         Interested in working together or have a question? Reach out!
//       </p>

//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         <a
//           href={`mailto:${EMAIL}`}
//           className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//         >
//           <Mail size={18} className="text-blue-600 dark:text-blue-400" />
//           <span className="text-sm font-medium">{EMAIL}</span>
//         </a>

//         <a
//           href={LINKEDIN}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//         >
//           <GrLinkedin size={18} className="text-blue-600 dark:text-blue-400" />
//           <span className="text-sm font-medium">LinkedIn</span>
//         </a>

//         <a
//           href={`tel:${PHONE}`}
//           className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm"
//         >
//           <Phone size={18} className="text-blue-600 dark:text-blue-400" />
//           <span className="text-sm font-medium">{PHONE}</span>
//         </a>

//         <a
//           href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-sm"
//         >
//           <SiWhatsapp
//             size={18}
//             className="text-green-600 dark:text-green-400"
//           />
//           <span className="text-sm font-medium">WhatsApp</span>
//         </a>
//       </div>

//       <div className="bg-white dark:bg-slate-800/50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
//         {isSubmitted ? (
//           <div className="text-center p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg">
//             Thank you! Your message has been sent.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* honeypot للحماية من السبام */}
//             <input
//               type="text"
//               name="company"
//               className="hidden"
//               tabIndex="-1"
//               autoComplete="off"
//               onChange={() => setError("Spam detected.")}
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
//                 placeholder="Your message..."
//               />
//             </div>

//             {error && (
//               <div className="text-center p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg">
//                 {error}
//               </div>
//             )}

//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto disabled:opacity-60"
//               >
//                 {loading ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     Send Message <Send size={18} />
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }
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

  // 🎬 أنيميشن "لفة وعودة" للطائرة
  const iconVariants = prefersReducedMotion
    ? {}
    : {
        hover: {
          // مسار يشبه لفة فوق النص ويرجع
          x: [0, 10, 26, 12, -8, -4, 0],
          y: [0, -8, -22, -30, -18, -6, 0],
          rotate: [0, -60, -220, -340, -460, -520, -540],
          scale: [1, 1.1, 1.08, 1.05, 1.02, 1, 1],
          transition: {
            duration: 1.2,
            ease: "easeInOut",
            times: [0, 0.18, 0.4, 0.6, 0.8, 0.92, 1],
          },
        },
        tap: { scale: 0.96 },
      };

  // هالة دائرية حوالين الأيقونة وقت الطيران
  const ringVariants = prefersReducedMotion
    ? {}
    : {
        hover: {
          opacity: [0, 0.5, 0],
          scale: [0.7, 1.2, 1.4],
          transition: {
            duration: 0.9,
            ease: "easeOut",
          },
        },
      };

  // أثر بسيط خلف الأيقونة
  const trailVariants = prefersReducedMotion
    ? {}
    : {
        hover: {
          opacity: [0, 0.4, 0],
          x: [0, -12, -22],
          y: [0, 4, 10],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
          },
        },
      };

  return (
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
              <motion.button
                type="submit"
                disabled={loading}
                className="relative w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 mx-auto disabled:opacity-60 flex items-center justify-center gap-3 overflow-hidden"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>

                    {/* هالة دائرية حوالين الأيقونة وقت الطيران */}
                    {!prefersReducedMotion && (
                      <motion.span
                        variants={ringVariants}
                        className="absolute right-8 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-white/40"
                      />
                    )}

                    {/* أثر خفيف خلف مسار الطائرة */}
                    {!prefersReducedMotion && (
                      <motion.span
                        variants={trailVariants}
                        className="absolute right-8 top-1/2 -translate-y-1/2 h-[2px] w-6 rounded-full bg-white/70"
                      />
                    )}

                    {/* الأيقونة نفسها: تطير، تلف حول نفسها، وترجع */}
                    <motion.span
                      variants={iconVariants}
                      className="inline-flex"
                      style={{ transformOrigin: "50% 50%" }}
                    >
                      <Send size={18} />
                    </motion.span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/// --------- Footer -----------
function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950/50 border-t border-gray-200 dark:border-gray-800/50">
      <div className="container mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer mb-2"
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
