import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, Code2, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolio'

const LINES = [
  { cmd: 'whoami', out: 'Sahika Kandukuri' },
  { cmd: 'cat role.txt', out: 'B.Tech CSE student, KITS Warangal — Sem VI' },
  { cmd: 'cat focus.txt', out: 'Full-stack apps, DSA, and systems that hold up' },
]

function useTypedLines(lines) {
  const [rendered, setRendered] = useState([])
  const reduceMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reduceMotion.current) {
      setRendered(lines.map((l) => ({ cmd: l.cmd, out: l.out, done: true })))
      return
    }

    let cancelled = false
    let lineIndex = 0

    async function typeLine(text, onUpdate) {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return
        onUpdate(text.slice(0, i))
        await new Promise((r) => setTimeout(r, 22))
      }
    }

    async function run() {
      for (const line of lines) {
        if (cancelled) return
        setRendered((prev) => [...prev, { cmd: '', out: '', done: false }])
        await typeLine(line.cmd, (partial) =>
          setRendered((prev) => {
            const copy = [...prev]
            copy[lineIndex] = { ...copy[lineIndex], cmd: partial }
            return copy
          }),
        )
        await new Promise((r) => setTimeout(r, 150))
        await typeLine(line.out, (partial) =>
          setRendered((prev) => {
            const copy = [...prev]
            copy[lineIndex] = { ...copy[lineIndex], out: partial }
            return copy
          }),
        )
        setRendered((prev) => {
          const copy = [...prev]
          copy[lineIndex] = { ...copy[lineIndex], done: true }
          return copy
        })
        lineIndex++
        await new Promise((r) => setTimeout(r, 350))
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return rendered
}

export default function Hero() {
  const typed = useTypedLines(LINES)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grain"
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #E3B341 0%, transparent 70%)' }}
      />

      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <p
            className="text-brass font-mono text-sm mb-6 opacity-0"
            style={{ animation: 'rise-in 0.6s var(--ease-out) 0.1s forwards' }}
          >
            {profile.location}
          </p>

          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] text-ink">
            <span
              className="block opacity-0"
              style={{ animation: 'rise-in 0.7s var(--ease-out) 0.2s forwards' }}
            >
              Hi, I'm Sahika.
            </span>
            <span
              className="block opacity-0"
              style={{ animation: 'rise-in 0.7s var(--ease-out) 0.35s forwards' }}
            >
              I build things that
            </span>
            <span
              className="block opacity-0 text-brass"
              style={{ animation: 'rise-in 0.7s var(--ease-out) 0.5s forwards' }}
            >
              solve problems.
            </span>
          </h1>

          <p
            className="mt-7 text-ink-muted text-lg leading-relaxed max-w-md opacity-0"
            style={{ animation: 'rise-in 0.7s var(--ease-out) 0.65s forwards' }}
          >
            Computer Science Engineering student focused on full-stack
            development, problem solving, and building software people
            actually use.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 opacity-0"
            style={{ animation: 'rise-in 0.7s var(--ease-out) 0.8s forwards' }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 rounded-md bg-brass text-base font-medium text-sm hover:bg-brass-soft transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-base-line text-ink text-sm font-medium hover:border-ink-dim transition-colors duration-200"
            >
              View Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 text-ink-muted text-sm font-medium hover:text-ink transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>

          <div
            className="mt-10 flex items-center gap-5 opacity-0"
            style={{ animation: 'rise-in 0.7s var(--ease-out) 0.95s forwards' }}
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-ink transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-ink transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-ink-muted hover:text-ink transition-colors">
              <Code2 size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-ink transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div
          className="rounded-lg border border-base-line bg-base-surface/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40 opacity-0"
          style={{ animation: 'rise-in 0.8s var(--ease-out) 0.5s forwards' }}
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-base-line bg-base-raised">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4a4f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4a4f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4a4f57]" />
            <span className="ml-3 text-xs text-ink-dim font-mono">sahika@dev — zsh</span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-7 min-h-[220px]">
            {typed.map((line, i) => (
              <div key={i} className="mb-2">
                <div className="text-ink-muted">
                  <span className="text-brass">➜</span> ~ {line.cmd}
                  {!line.done && <span className="animate-pulse">▌</span>}
                </div>
                {line.done && <div className="text-ink pl-4">{line.out}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim hover:text-ink-muted transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
