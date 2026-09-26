import { stats } from '../data/portfolio'

const blocks = [
  {
    title: 'Where I am',
    body: "In my sixth semester of a Computer Science Engineering degree, after finishing a diploma in the same field. I split my time between coursework, personal projects, and preparing for placements.",
  },
  {
    title: "What I'm building toward",
    body: 'Full-stack systems with a clean data layer underneath — I like tracing a feature from the database up through the API to the screen, not just styling the last step.',
  },
  {
    title: 'How I work through problems',
    body: 'Break the problem down before touching code, get a rough version working end-to-end, then go back and harden the parts that will actually break in production.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
              About
            </h2>
            <p className="mt-4 text-ink-muted max-w-sm">
              A short version of where I am and how I approach building
              software.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-base-line rounded-md p-4 bg-base-surface/60"
                >
                  <div className="font-display text-2xl font-semibold text-brass">
                    {s.value}
                  </div>
                  <div className="text-xs text-ink-muted mt-1 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {blocks.map((b) => (
              <div key={b.title} className="border-l-2 border-base-line pl-6">
                <h3 className="font-display text-lg text-ink font-medium">
                  {b.title}
                </h3>
                <p className="mt-2 text-ink-muted leading-relaxed max-w-lg">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
