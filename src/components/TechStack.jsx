import { techStack } from '../data/portfolio'

export default function TechStack() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          Tech stack
        </h2>
        <p className="mt-4 text-ink-muted max-w-md">
          Grouped by where each tool fits in a project. Hover a card for how
          I actually use it.
        </p>

        <div className="mt-14 space-y-12">
          {Object.entries(techStack).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm text-ink-dim font-mono mb-4">{group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <div
                    key={group + item.name}
                    tabIndex={0}
                    className="group relative border border-base-line rounded-md p-4 bg-base-surface/50 hover:border-brass/50 hover:bg-base-raised transition-colors duration-200 min-h-[92px] flex flex-col justify-between"
                  >
                    <span className="font-medium text-ink text-sm">
                      {item.name}
                    </span>
                    <span className="text-xs text-ink-dim leading-snug mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-200">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
