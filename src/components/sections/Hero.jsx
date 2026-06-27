// src/components/sections/Hero.jsx
import { useTheme } from '../hooks/ThemeContext'
import { IconGitHub, IconLinkedIn, IconResume, IconMail } from '../ui/Icons'

const iconLinks = [
  { icon: IconGitHub, href: 'https://github.com/RazrGator', label: 'GitHub' },
  { icon: IconLinkedIn, href: 'http://linkedin.com/in/rodrigo-bazan-aranda', label: 'LinkedIn' },
  { icon: IconResume, href: '/resume.pdf', label: 'Resume' },
  { icon: IconMail, href: 'mailto:rodrigofbazan@gmail.com', label: 'Email' },
]

export default function Hero() {
  const { dark } = useTheme()

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-8 pt-24 pb-16"
    >
      {/* Top: photo + text side by side */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-stretch gap-12">

        {/* Left — tall rectangular headshot */}
        <div className="flex-shrink-0 w-full md:w-80">
          <div className={`w-full h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-md ${
            dark ? 'bg-slate-700' : 'bg-blue-50'
          }`}>
            <img
              src="/images/gown_portrait.JPEG"
              alt="Rodrigo Bazan"
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>

        {/* Right — name, tagline, intro, icons */}
        <div className="flex flex-col justify-center gap-6 flex-1">

          {/* Name */}
          <h1
            className={`text-6xl md:text-7xl font-extrabold leading-tight tracking-wide ${
              dark ? 'text-slate-100' : 'text-gray-950'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            Rodrigo Bazan
          </h1>

          {/* Tagline */}
          <p className={`text-base font-medium tracking-wide ${
            dark ? 'text-blue-400' : 'text-blue-500'
          }`}>
            Computer Engineer · UF '26 · Software, Embedded Systems &amp; Power
          </p>

          {/* Divider */}
          <div className={`w-37 h-px ${dark ? 'bg-blue-700' : 'bg-blue-300'}`} />

          {/* Intro blurb */}
          <p className={`text-sm font-medium leading-loose max-w-md ${
            dark ? 'text-slate-300' : 'text-gray-600'
          }`}>
            Hi there! I'm a Computer Engineering student at UF who loves building things
            that sit at the intersection of hardware and software — from embedded systems
            to full-stack apps. I'm currently seeking roles in NYC for Summer 2026.
          </p>

          {/* Icon links */}
          <div className="flex items-center gap-6 pt-2">
            {iconLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-colors hover:text-blue-600 ${
                  dark ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                <Icon size={26} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom — View Work centered below everything */}
      <div className="mt-16 flex flex-col items-center gap-2">
        <a
          href="#projects"
          className={`text-s font-semibold tracking-widest transition-colors hover:text-blue-600 flex flex-col items-center gap-2 ${
            dark ? 'text-slate-500' : 'text-gray-500'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          View My Work
          <span className={`block w-px h-8 ${dark ? 'bg-slate-600' : 'bg-gray-400'}`} />
        </a>
      </div>

    </section>
  )
}