// src/components/sections/Contact.jsx
import { IconMail, IconLinkedIn, IconGitHub } from '../ui/Icons'

const contactLinks = [
  {
    icon: IconMail,
    label: 'Email',
    href: 'mailto:rodrigofbazan@gmail.com',
    display: 'rodrigofbazan@gmail.com',
  },
  {
    icon: IconLinkedIn,
    label: 'LinkedIn',
    href: 'http://linkedin.com/in/rodrigo-bazan-aranda',
    display: 'linkedin.com/in/rodrigo-bazan-aranda',
  },
  {
    icon: IconGitHub,
    label: 'GitHub',
    href: 'https://github.com/RazrGator',
    display: 'github.com/RazrGator',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-3xl font-bold text-gray-900 tracking-wide"
            style={{ fontVariant: 'small-caps' }}
          >
            Contact
          </h2>
          <p className="text-sm text-gray-500 font-medium tracking-wide">
            Thanks for checking out my page. Feel free to reach out!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5">
          {contactLinks.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <span className="text-blue-400 group-hover:text-blue-600 transition-colors">
                <Icon size={26} strokeWidth={1.5} />
              </span>
              <span
                className="text-medium font-medium text-gray-600 group-hover:text-blue-600 transition-colors tracking-wide"
                style={{ fontVariant: 'small-caps' }}
              >
                {display}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}