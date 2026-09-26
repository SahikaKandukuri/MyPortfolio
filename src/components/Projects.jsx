import { useState } from 'react'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-base-line rounded-lg bg-base-surface/60 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl md:text-2xl text-ink font-semibold">
              {project.name}
            </h3>
            <p className="mt-2 text-brass text-sm font-mono">{project.problem}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors border border-base-line rounded-md px-3 py-1.5"
            >
              <Github size={15} /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-base bg-brass hover:bg-brass-soft transition-colors rounded-md px-3 py-1.5"
              >
                <ExternalLink size={15} /> Live
              </a>
            )}
          </div>
        </div>

        <p className="mt-5 text-ink-muted leading-relaxed max-w-2xl">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-ink-muted border border-base-line rounded px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
          aria-expanded={open}
        >
          {open ? 'Hide case study' : 'View case study'}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-base-line bg-base-raised/60 p-6 md:p-8 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-mono text-ink-dim mb-2">Approach</h4>
              <p className="text-sm text-ink-muted leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono text-ink-dim mb-2">Features</h4>
              <ul className="text-sm text-ink-muted leading-relaxed space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-brass mt-1.5">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono text-ink-dim mb-2">Result</h4>
              <p className="text-sm text-ink-muted leading-relaxed">
                {project.caseStudy.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          Projects
        </h2>
        <p className="mt-4 text-ink-muted max-w-md">
          Three systems, each solving a specific, real problem end to end.
        </p>

        <div className="mt-14 space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
