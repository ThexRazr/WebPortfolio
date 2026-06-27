// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { IconResume } from '../ui/Icons'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Name / Logo */}
        <a
          href="#hero"
          className="text-sm font-bold tracking-widest uppercase text-gray-900 hover:text-blue-600 transition-colors"
          style={{ fontVariant: 'small-caps' }}
        >
          Rodrigo Bazan
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-gray-600 hover:text-blue-600 transition-colors"
                style={{ fontVariant: 'small-caps' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all"
          style={{ fontVariant: 'small-caps' }}
        >
          <IconResume size={13} />
          Resume
        </a>
      </nav>
    </header>
  )
}