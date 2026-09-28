import { useState } from "react";
import { BrainCircuit, ChevronDown, ExternalLink, Smartphone, Workflow } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectsData, projectFilters } from "../data/projects";

const categoryIcons = { Mobile: Smartphone, "AI / ML": BrainCircuit, Automation: Workflow };

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = categoryIcons[project.category] || Smartphone;

  return (
    <article className={`project-card ${project.featured ? "project-card-featured" : ""}`} aria-labelledby={`project-${project.id}`}>
      <div className="project-visual" aria-hidden="true">
        {project.image && !imageFailed ? (
          <img src={project.image} alt="" loading="lazy" width="320" height="144" onError={() => setImageFailed(true)} />
        ) : (
          <div className="flex items-center gap-4 px-6">
            <span className="rounded-2xl border border-slate-200 bg-white p-4 text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400"><Icon size={30} strokeWidth={1.5} /></span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{project.category}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.technologies.slice(0, 3).join(" · ")}</p>
            </div>
          </div>
        )}
        {project.featured && <span className="featured-label">Featured</span>}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>{project.category}</span>
          {project.contexts.map((context) => <span className="text-slate-500 dark:text-slate-400" key={context}>{context}</span>)}
        </div>
        <h3 id={`project-${project.id}`} className="text-xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{project.role}{project.date && <> · {project.date}</>}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
        {project.metrics?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => <span key={metric} className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">{metric}</span>)}
          </div>
        )}
        <ul className="mb-5 mt-5 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li className="tech-tag" key={technology}>{technology}</li>)}
        </ul>
        <div className="mt-auto">
          {project.details?.length > 0 && (
            <details className="project-details border-t border-slate-200 dark:border-slate-800">
              <summary className="flex cursor-pointer items-center justify-between gap-2 py-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                <span>Engineering details<span className="sr-only"> for {project.title}</span></span><ChevronDown size={16} aria-hidden="true" />
              </summary>
              <ul className="mb-4 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </details>
          )}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4 pt-3 text-sm font-semibold text-blue-700 dark:text-blue-300">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline" aria-label={`${project.title} source on GitHub`}><SiGithub size={16} aria-hidden="true" />Source code</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline" aria-label={`${project.title}: ${project.liveLabel || "Google Play"}`}>{project.liveLabel || "Google Play"}<ExternalLink size={14} aria-hidden="true" /></a>}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const matches = (project, value) => value === "All" || project.category === value || project.contexts.includes(value);
  const visibleProjects = projectsData.filter((project) => matches(project, filter));
  const featured = visibleProjects.filter((project) => project.featured);
  const more = visibleProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <div className="mb-8 max-w-2xl">
        <p className="section-eyebrow">Selected work & project archive</p>
        <h2 id="projects-heading" className="section-title">Mobile products. Intelligent systems.</h2>
        <p className="section-description">Production apps, applied AI, and the engineering behind them. Explore by track or project context.</p>
      </div>
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((value) => (
          <button key={value} type="button" aria-pressed={filter === value} aria-controls="project-results" onClick={() => setFilter(value)} className={`filter-button ${filter === value ? "filter-button-active" : ""}`}>
            {value}<span className="ml-2 text-xs opacity-75">{projectsData.filter((project) => matches(project, value)).length}</span>
          </button>
        ))}
      </div>
      <p className="mb-8 text-sm text-slate-500 dark:text-slate-400" role="status" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}{filter !== "All" && ` · ${filter}`}</p>
      <div id="project-results">
        {featured.length > 0 && (
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Featured projects</h3>
            <div className="grid items-start gap-6 md:grid-cols-2">{featured.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          </div>
        )}
        {more.length > 0 && (
          <div className={featured.length > 0 ? "mt-12" : ""}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{featured.length > 0 ? "More work" : "Project archive"}</h3>
            <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">{more.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          </div>
        )}
      </div>
    </section>
  );
}
