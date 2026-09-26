import { journey, certifications, achievement } from '../data/portfolio'

export default function Timeline() {
  return (
    <section id="journey" className="py-28 md:py-36 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          Journey
        </h2>
        <p className="mt-4 text-ink-muted max-w-md">
          Education and experience, in order.
        </p>

        <div className="mt-14 relative pl-8 border-l border-base-line max-w-2xl">
          {journey.map((item, i) => (
            <div key={i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-brass ring-4 ring-base" />
              <div className="text-xs font-mono text-ink-dim">{item.year}</div>
              <h3 className="mt-1 font-display text-lg text-ink font-medium">
                {item.title}
              </h3>
              <p className="mt-1.5 text-ink-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-10 max-w-2xl">
          <div>
            <h3 className="text-sm font-mono text-ink-dim mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm">
                  <span className="text-ink">{c.name}</span>
                  <span className="text-ink-dim"> — {c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-mono text-ink-dim mb-4">Achievement</h3>
            <div className="text-sm">
              <span className="text-ink">{achievement.title}</span>
              <span className="text-ink-dim"> — {achievement.detail}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
