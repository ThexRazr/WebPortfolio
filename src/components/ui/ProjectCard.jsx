// src/components/ui/ProjectCard.jsx
import { motion } from 'framer-motion'
import Badge from './Badge'
import { useTheme } from '../hooks/ThemeContext'

export default function ProjectCard({ project, onClick }) {
  const { dark } = useTheme()

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => onClick(project)}
      className={`rounded-2xl overflow-hidden shadow-sm border cursor-pointer group ${
        dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
      }`}
    >
      {/* Project image */}
      <div className={`w-full h-48 overflow-hidden ${
        dark ? 'bg-slate-700' : 'bg-blue-50'
      }`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className={`text-xs tracking-widest uppercase ${
              dark ? 'text-slate-500' : 'text-blue-200'
            }`} style={{ fontVariant: 'small-caps' }}>
              No Image Yet
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-3">
        <h3
          className={`text-base font-bold tracking-wide leading-snug ${
            dark ? 'text-slate-100' : 'text-gray-900'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed font-light ${
          dark ? 'text-slate-400' : 'text-gray-500'
        }`}>
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}