// src/components/ui/FilterBar.jsx
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Embedded', value: 'embedded' },
  { label: 'Hardware', value: 'hardware' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {filters.map((f) => {
        const isActive = active === f.value
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={`px-4 py-1.5 text-xs font-semibold tracking-widest rounded-full border transition-all ${
              isActive
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-500 border-gray-200 hover:border-blue-400 hover:text-blue-600'
            }`}
            style={{ fontVariant: 'small-caps' }}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}