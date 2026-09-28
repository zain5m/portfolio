import { Award, BookOpen, BriefcaseBusiness, Download, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import {
  communityWork,
  cvDocuments,
  experience,
  professionalDevelopment,
  skillGroups,
} from "../data/profile";

function SectionHeader({ id, eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-shell">
      <SectionHeader
        id="experience-heading"
        eyebrow="Experience"
        title="Engineering from architecture to release."
        description="Professional and freelance work across production mobile applications, backend integration, and applied AI."
      />
      <div className="space-y-5">
        {experience.map((job) => (
          <article key={job.company} className="grid min-w-0 gap-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50 sm:p-7 lg:grid-cols-[240px_1fr] lg:gap-10">
            <div className="min-w-0">
              <p className="mb-3 text-sm font-medium text-blue-700 dark:text-blue-400">{job.period}</p>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{job.company}</h3>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-200">{job.role}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <p className="flex items-center gap-2"><MapPin aria-hidden="true" size={15} className="shrink-0" />{job.location}</p>
                <p className="flex items-center gap-2"><BriefcaseBusiness aria-hidden="true" size={15} className="shrink-0" />{job.arrangement}</p>
              </div>
            </div>
            <ul className="ml-4 list-disc space-y-3 leading-relaxed text-slate-600 marker:text-blue-500 dark:text-slate-300">
              {job.points.map((point) => <li key={point} className="pl-1">{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-shell">
      <SectionHeader id="about-heading" eyebrow="Background" title="Mobile engineering. Applied intelligence." />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          <p>
            I’m Zain Mhesn, a mobile engineer with 3+ years of Flutter experience building production and enterprise applications. I own mobile architecture and end-to-end features, including REST API integration, local caching, security, and backend workflows with Oracle SQL, PL/SQL, and ORDS.
          </p>
          <p>
            My academic specialization in Artificial Intelligence connects with practical work in NLP, RAG, LLM applications, and intelligent search and retrieval. Across professional and freelance projects, I take work from requirements through implementation and release.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Arabic · Native <span aria-hidden="true" className="mx-2">/</span> English · Intermediate</p>
        </div>
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50 sm:p-7">
          <GraduationCap aria-hidden="true" size={26} className="mb-5 text-blue-600 dark:text-blue-400" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Damascus University</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">2019 – 2025</span>
          </div>
          <p className="mt-3 font-medium text-slate-800 dark:text-slate-200">B.Sc. in Information Technology</p>
          <p className="mt-1 text-slate-600 dark:text-slate-400">Specialization: Artificial Intelligence</p>
          <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Graduation project</p>
            <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">Intelligent HR Resume Ranking System — RAG-based HR CV analysis.</p>
          </div>
        </article>
      </div>

      <div className="mt-12">
        <h3 className="mb-5 text-xl font-bold text-slate-950 dark:text-white">Open source & volunteering</h3>
        <div className="grid gap-5 md:grid-cols-2">
          {communityWork.map((community) => (
            <article key={community.name} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="mb-4 flex items-center gap-4">
                {community.image && (
                  <img
                    src={community.image}
                    alt={`${community.name} logo`}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 shrink-0 rounded-xl object-contain sm:h-20 sm:w-20"
                  />
                )}
                <h4 className="min-w-0 text-lg font-semibold text-slate-950 dark:text-white">{community.name}</h4>
              </div>
              <p className="mt-2 text-sm font-medium text-blue-700 dark:text-blue-400">{community.role}</p>
              <p className="mb-4 mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{community.description}</p>
              {community.href && (
                <a
                  href={community.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${community.name}: ${community.linkLabel} (opens in a new tab)`}
                  className="mt-auto inline-flex min-h-[2.75rem] items-center gap-2 self-start rounded-md text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
                >
                  {community.linkLabel}
                  <ExternalLink size={15} aria-hidden="true" className="shrink-0" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      <details className="group mt-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <summary className="cursor-pointer rounded-2xl p-5 font-semibold text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-slate-100 sm:p-6">
          <Award aria-hidden="true" size={19} className="mx-2 inline-block align-middle text-blue-600 dark:text-blue-400" />
          <span>Professional development & training</span>
        </summary>
        <ul className="grid gap-5 border-t border-slate-200 p-5 dark:border-slate-800 sm:grid-cols-2 sm:p-6">
          {professionalDevelopment.map((course) => (
            <li key={course.title} className="min-w-0">
              <p className="font-medium leading-relaxed text-slate-800 dark:text-slate-200">{course.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{course.provider} · {course.period}</p>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-shell">
      <SectionHeader
        id="skills-heading"
        eyebrow="Technical skills"
        title="The tools behind the work."
        description="A connected toolkit for mobile delivery, secure integrations, intelligent systems, and automation."
      />
      <div className="grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="h-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
            <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="max-w-full rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium leading-normal text-slate-600 dark:bg-slate-800 dark:text-slate-300">{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="section-shell">
      <SectionHeader id="resume-heading" eyebrow="Curriculum vitae" title="Two tracks. One engineering profile." description="Download the CV that matches the role you’re exploring." />
      <div className="grid gap-5 md:grid-cols-2">
        {cvDocuments.map((document) => (
          <article key={document.title} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3 text-blue-600 dark:text-blue-400">
              <BookOpen aria-hidden="true" size={24} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">PDF document</span>
            </div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">{document.title}</h3>
            <p className="mb-6 mt-3 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{document.description}</p>
            <a
              href={document.href}
              download={document.download}
              aria-label={`Download ${document.title} as a PDF`}
              className="inline-flex min-h-[2.75rem] items-center justify-center gap-2 self-start rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <Download aria-hidden="true" size={17} className="shrink-0" /> Download CV
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
