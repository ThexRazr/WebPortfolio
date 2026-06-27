// src/components/ui/Badge.jsx
export default function Badge({ label }) {
  return (
    <span
      className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full"
      style={{ fontVariant: 'small-caps' }}
    >
      {label}
    </span>
  )
}