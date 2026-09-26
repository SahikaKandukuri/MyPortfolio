import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-base-line py-8">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-dim">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-xs text-ink-dim font-mono">Built with React &amp; Tailwind</p>
      </div>
    </footer>
  )
}
