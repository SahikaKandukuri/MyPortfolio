import { Download } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function ResumeCTA() {
  return (
    <section className="py-24 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="border border-base-line rounded-lg bg-base-surface/60 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink font-semibold">
              Want the full story?
            </h2>
            <p className="mt-3 text-ink-muted max-w-md leading-relaxed">
              Download my resume for the complete picture — technical
              experience, projects, and education.
            </p>
          </div>
          <a
            href={profile.resumePath}
            download
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-brass text-base font-medium text-sm hover:bg-brass-soft transition-colors duration-200"
          >
            <Download size={17} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
