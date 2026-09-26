import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.email.trim()) {
      next.email = 'Enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // EDIT: this form has no backend yet. Wire it up to an email
    // service (e.g. Formspree, EmailJS, or your own API route) here.
    // Example with Formspree:
    //   await fetch('https://formspree.io/f/your-form-id', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })

    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = (field) =>
    `w-full bg-base-surface border rounded-md px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none transition-colors ${
      errors[field] ? 'border-red-500/60' : 'border-base-line focus:border-brass/60'
    }`

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-base-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
              Let's build something useful.
            </h2>
            <p className="mt-4 text-ink-muted max-w-sm leading-relaxed">
              Open to internships and software engineering roles. The
              fastest way to reach me is email.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-ink-muted hover:text-ink transition-colors"
              >
                <Mail size={18} /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-muted hover:text-ink transition-colors"
              >
                <Linkedin size={18} /> linkedin.com/in/sahika-kandukuri
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-muted hover:text-ink transition-colors"
              >
                <Github size={18} /> github.com/SahikaKandukuri
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-ink-muted mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass('name')}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-ink-muted mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass('email')}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-ink-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass('message') + ' resize-none'}
                placeholder="What would you like to talk about?"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-brass text-base font-medium text-sm hover:bg-brass-soft transition-colors duration-200"
            >
              <Send size={16} />
              Send Message
            </button>

            {status === 'sent' && (
              <p className="text-sm text-teal">
                Message ready — connect a form backend (see comment in
                Contact.jsx) to actually deliver it.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
