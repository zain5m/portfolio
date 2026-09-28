import React, { useEffect, useState } from "react";
import { ArrowDown, BrainCircuit, Download, Mail, MapPin, Menu, Moon, Phone, Send, Smartphone, Sun, X } from "lucide-react";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub, SiKaggle, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { MotionConfig, motion as Motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Projects from "./components/Projects";
import { About, Experience, Resume, Skills } from "./components/ProfileSections";
import { cvDocuments } from "./data/profile";

const NAME = "Zain Mhesn";
const TITLE = "Flutter Developer | Mobile Engineer | AI Engineer";
const EMAIL = "zayanmhesn22@gmail.com";
const PHONE = "+963959527648";
const LOCATION = "Damascus, Syria";
const LINKEDIN = "https://linkedin.com/in/zainmhesn/";
const GITHUB = "https://github.com/zain5m";
const KAGGLE = "https://www.kaggle.com/zainmhes";
const ThemeContext = React.createContext();
const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "About", id: "about" },
  { name: "CVs", id: "resume" },
  { name: "Contact", id: "contact" },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") === "light" ? "light" : "dark"; }
    catch { return "dark"; }
  });
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* Theme still works without storage. */ }
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: "-80px 0px -60% 0px", threshold: 0 });
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  const toggleTheme = () => setTheme((current) => current === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar currentPage={activeSection} />
          <main id="main-content" className="pt-20" tabIndex={-1}>
            <Home />
            <Projects />
            <Experience />
            <Skills />
            <About />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeContext.Provider>
  );
}

function Home() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="home" className="section-shell pb-16 pt-14 md:pb-24 md:pt-24" aria-labelledby="hero-heading">
      <Motion.div initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="grid items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div className="min-w-0">
          <p className="section-eyebrow flex items-center gap-2"><MapPin size={14} aria-hidden="true" />{LOCATION}</p>
          <h1 id="hero-heading" className="mt-5 text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">{NAME}<span className="text-blue-600 dark:text-blue-400">.</span></h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-blue-700 sm:text-xl dark:text-blue-300">{TITLE}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">I build production Flutter applications and intelligent systems. My work spans enterprise mobile architecture, Oracle-backed APIs, and applied AI with RAG, NLP, and hybrid retrieval.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="button-primary">View Projects <ArrowDown size={17} aria-hidden="true" /></a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="button-secondary"><SiGithub size={18} aria-hidden="true" />GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="button-secondary"><SiLinkedin size={18} aria-hidden="true" />LinkedIn</a>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {cvDocuments.map((cv) => <a key={cv.href} href={cv.href} download={cv.download} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"><Download size={16} className="shrink-0" aria-hidden="true" />{cv.title}<span className="text-[10px] text-slate-500 dark:text-slate-400">PDF</span></a>)}
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/projects/profile-pic_round.png" alt="Zain Mhesn" width="280" height="280" fetchPriority="high" className="aspect-square w-full rounded-full border border-slate-200 bg-slate-100 object-cover p-2 dark:border-slate-800 dark:bg-slate-900" />
          <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">Mobile engineering · Applied AI</p>
        </div>
      </Motion.div>
      <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
        <div className="flex gap-4">
          <Smartphone size={22} className="mt-1 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <div><h2 className="font-semibold">Mobile engineering</h2><p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">3+ years · Production apps · End-to-end ownership</p></div>
        </div>
        <div className="flex gap-4">
          <BrainCircuit size={22} className="mt-1 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <div><h2 className="font-semibold">Artificial intelligence</h2><p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">Academic specialization · RAG & LLM applications</p></div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="mb-10"><p className="section-eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{subtitle && <p className="section-description">{subtitle}</p>}</div>;
}

function Navbar({ currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        document.querySelector('[aria-controls="mobile-navigation"]')?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);
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
            className="text-xl sm:text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
          >
            {NAME}
          </a>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={currentPage === item.id ? "location" : undefined}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
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
                aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={LINKEDIN}
                aria-label="LinkedIn"
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
          <div className="lg:hidden flex items-center">
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* شريط التقدم أعلى الناف */}
        {!prefersReducedMotion && (
          <Motion.div
            className="h-[3px] bg-blue-600/80 dark:bg-blue-400/90 origin-left"
            style={{ scaleX }}
          />
        )}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <Motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4 border-b border-gray-200 dark:border-gray-800 z-[55]"
        >
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                  aria-current={currentPage === item.id ? "location" : undefined}
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
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiGithub size={22} />
              </a>
              <a
                href={LINKEDIN}
                aria-label="LinkedIn"
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
        </Motion.div>
      )}
    </header>
  );
}

function Contact() {
  const contactEnabled = Boolean(import.meta.env.VITE_WEB3FORMS_KEY);
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
    if (!contactEnabled || loading || e.currentTarget.elements.company.value) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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
    <section id="contact" className="section-shell max-w-3xl">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="For mobile engineering, applied AI, and project collaboration."
        Icon={Mail}
      />

      <Motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        variants={linkContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Motion.a
          href={`mailto:${EMAIL}`}
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: 1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <Mail
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">{EMAIL}</span>
        </Motion.a>

        <Motion.a
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
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <GrLinkedin
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">LinkedIn</span>
        </Motion.a>

        <Motion.a
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
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <SiKaggle
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">Kaggle</span>
        </Motion.a>

        <Motion.a
          href={`tel:${PHONE}`}
          variants={linkItem}
          whileHover={
            prefersReducedMotion ? {} : { scale: 1.08, y: -3, rotate: 1 }
          }
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <Phone
            size={18}
            className="relative z-10 text-blue-600 dark:text-blue-400"
          />
          <span className="relative z-10 text-sm font-medium">{PHONE}</span>
        </Motion.a>

        <Motion.a
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
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <SiWhatsapp
            size={18}
            className="relative z-10 text-green-600 dark:text-green-400"
          />
          <span className="relative z-10 text-sm font-medium">WhatsApp</span>
        </Motion.a>
      </Motion.div>

      <Motion.div
        className="bg-white dark:bg-slate-800/50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        {!contactEnabled ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Let’s discuss your project.</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Send a brief overview, your requirements, and where you need engineering support.</p>
            <a className="button-primary mt-6" href={`mailto:${EMAIL}`}>Email Zain <Mail size={17} aria-hidden="true" /></a>
          </div>
        ) : isSubmitted ? (
          <Motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            role="status"
            className="text-center p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg"
          >
            Thank you! Your message has been sent.
          </Motion.div>
        ) : (
          <Motion.form
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
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Motion.div variants={formItem}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <Motion.input
                  type="text"
                  id="name"
                  required
                  autoComplete="name"
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
              </Motion.div>

              <Motion.div variants={formItem}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <Motion.input
                  type="email"
                  required
                  autoComplete="email"
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
              </Motion.div>
            </div>

            <Motion.div variants={formItem}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <Motion.textarea
                id="message"
                name="message"
                rows="5"
                required
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
            </Motion.div>

            {error && (
              <Motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="text-center p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg"
              >
                {error}
              </Motion.div>
            )}

            <Motion.div className="text-center" variants={formItem}>
              <Motion.button
                type="submit"
                disabled={loading}
                className="relative w-full sm:w-auto px-10 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 mx-auto disabled:opacity-60 flex items-center justify-center gap-3"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <Motion.span
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
                    </Motion.span>
                  </>
                )}
              </Motion.button>
            </Motion.div>
          </Motion.form>
        )}
      </Motion.div>
    </section>
  );
}

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
    <Motion.footer
      className="bg-gray-50 dark:bg-slate-950/50 border-t border-gray-200 dark:border-gray-800/50 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="container mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <Motion.div className="text-center md:text-left" variants={item}>
          <Motion.a
            href="#home"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer mb-2 inline-block"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {NAME}
          </Motion.a>
          <Motion.div
            className="max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400"
            variants={item}
          >
            {TITLE} <br />
            <span className="text-sm">{EMAIL}</span> |{" "}
            <span className="text-sm">{LOCATION}</span>
          </Motion.div>
          <Motion.p
            className="text-gray-600 dark:text-gray-400 mt-2 text-sm"
            variants={item}
          >
            © {new Date().getFullYear()} All rights reserved.
          </Motion.p>
        </Motion.div>

        <Motion.div className="flex flex-wrap gap-6" variants={item}>
          <a href="https://zainmhesn.medium.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400">Medium</a>
          <Motion.a
            href={GITHUB}
            aria-label="GitHub"
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
              <Motion.span
                className="absolute inset-0 rounded-full bg-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </Motion.a>

          <Motion.a
            href={LINKEDIN}
            aria-label="LinkedIn"
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
              <Motion.span
                className="absolute inset-0 rounded-full bg-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </Motion.a>

          <Motion.a
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
              <Motion.span
                className="absolute inset-0 rounded-full bg-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </Motion.a>
        </Motion.div>
      </div>
    </Motion.footer>
  );
}
