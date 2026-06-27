// src/components/ui/ExperienceCard.jsx
export default function ExperienceCard({ company, role, dates, description, link }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-4 flex-1">
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="text-base font-bold text-gray-900 tracking-wide"
            style={{ fontVariant: 'small-caps' }}
          >
            {company}
          </h3>
          <p
            className="text-xs font-semibold tracking-widest text-blue-600 mt-1 uppercase"
            style={{ fontVariant: 'small-caps' }}
          >
            {role}
          </p>
        </div>
        <span className="text-xs text-gray-400 font-medium whitespace-nowrap mt-1">{dates}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed font-light">{description}</p>

      {/* Optional link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-600 hover:underline tracking-wide self-start"
          style={{ fontVariant: 'small-caps' }}
        >
          Visit Company →
        </a>
      )}
    </div>
  )
}