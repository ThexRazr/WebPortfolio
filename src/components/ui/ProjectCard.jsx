// src/components/ui/ProjectCard.jsx
import { motion } from 'framer-motion'
import Badge from './Badge'

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => onClick(project)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group"
    >
      {/* Project image */}
      <div className="w-full h-48 bg-blue-50 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-blue-200">
            <span className="text-xs tracking-widest uppercase" style={{ fontVariant: 'small-caps' }}>
              No Image Yet
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-3">
        <h3
          className="text-base font-bold text-gray-900 tracking-wide leading-snug"
          style={{ fontVariant: 'small-caps' }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-light">
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