import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { dsaTopics, profile, leetcodeStats } from '../data/portfolio'

const notes = {
  Arrays: 'Base structure for most problems — foundation before anything else clicks.',
  Hashing: 'Trading space for speed on lookups, counting, and duplicate checks.',
  'Two Pointers': 'Shrinking a search space in place without extra memory.',
  'Sliding Window': 'Tracking a moving subrange instead of recomputing it each time.',
  'Binary Search': 'Cutting the problem in half — on arrays and on answer spaces.',
  'Linked Lists': 'Pointer manipulation without the safety net of indexing.',
  'Stacks & Queues': 'Ordering that matches how a problem actually unfolds — LIFO or FIFO.',
  Trees: 'Hierarchical data, and the recursion that comes with it.',
  Graphs: 'Modeling relationships, then traversing or searching them.',
  Recursion: 'Trusting the smaller version of the same problem.',
  Backtracking: 'Recursion with the option to undo a choice that didn\'t work.',
  Tries: 'Prefix-based lookups for strings, one character at a time.',
  'Dynamic Programming': 'Turning overlapping subproblems into a table instead of a mess of recursion.',
}

export default function DSAJourney() {
  const [active, setActive] = useState(dsaTopics[0])

  return (
    <section className="py-28 md:py-36 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
              Problem solving
            </h2>
            <p className="mt-4 text-ink-muted max-w-sm leading-relaxed">
              The concepts I practice most, worked through consistently on
              LeetCode. Select one to see how I think about it.
            </p>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-brass hover:text-brass-soft transition-colors"
            >
              View my problem-solving journey
              <ArrowUpRight size={15} />
            </a>

            <div className="mt-8 space-y-3 max-w-xs">
              {[
                { label: 'Easy', ...leetcodeStats.easy, color: 'bg-teal' },
                { label: 'Medium', ...leetcodeStats.medium, color: 'bg-brass' },
                { label: 'Hard', ...leetcodeStats.hard, color: 'bg-ink-dim' },
              ].map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-xs text-ink-muted mb-1.5">
                    <span>{d.label}</span>
                    <span className="font-mono">{d.solved}/{d.total}</span>
                  </div>
                  <div className="h-1 rounded-full bg-base-line overflow-hidden">
                    <div
                      className={`h-full rounded-full ${d.color}`}
                      style={{ width: `${(d.solved / d.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-ink-dim pt-1">
                {leetcodeStats.solved} solved on LeetCode · {leetcodeStats.maxStreak}-day max streak
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5">
              {dsaTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActive(topic)}
                  className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors duration-150 ${
                    active === topic
                      ? 'bg-brass text-base border-brass'
                      : 'border-base-line text-ink-muted hover:text-ink hover:border-ink-dim'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="mt-8 border border-base-line rounded-md p-6 bg-base-surface/60 min-h-[104px]">
              <div className="font-mono text-xs text-ink-dim mb-2">{active}</div>
              <p className="text-ink-muted leading-relaxed">{notes[active]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
