// src/components/ui/ProjectModal.jsx
import { AnimatePresence, motion } from 'framer-motion'
import { IconX } from './Icons'
import Badge from './Badge'
import { useTheme } from '../hooks/ThemeContext'

const Section = ({ label, children, dark }) => (
  <div className="flex flex-col gap-2">
    {/* Section label */}
    <h4
      className={`text-xs font-bold tracking-widest uppercase ${
        dark ? 'text-blue-400' : 'text-blue-600'
      }`}
      style={{ fontVariant: 'small-caps' }}
    >
      {label}
    </h4>
    {/* Section body */}
    <p className={`text-sm leading-relaxed font-light ${
      dark ? 'text-slate-300' : 'text-gray-600'
    }`}>
      {children}
    </p>
  </div>
)

export default function ProjectModal({ project, isOpen, onClose }) {
  const { dark } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className={`fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-3xl shadow-2xl ${
              dark ? 'bg-slate-800' : 'bg-white'
            }`}
          >
            <div className="max-w-2xl mx-auto px-8 py-10 flex flex-col gap-8">

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h2
                    className={`text-2xl font-bold leading-tight ${
                      dark ? 'text-slate-100' : 'text-gray-900'
                    }`}
                    style={{ fontVariant: 'small-caps' }}
                  >
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
                {/* Close button */}
                <button
                  onClick={onClose}
                  className={`mt-1 p-2 rounded-full transition-colors flex-shrink-0 ${
                    dark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                      : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconX size={18} />
                </button>
              </div>

              {/* Detail sections */}
              <Section label="Problem" dark={dark}>{project.detail.problem}</Section>
              <Section label="Solution" dark={dark}>{project.detail.solution}</Section>
              <Section label="Architecture" dark={dark}>{project.detail.architecture}</Section>
              <Section label="Challenges" dark={dark}>{project.detail.challenges}</Section>
              <Section label="What I'd Improve" dark={dark}>{project.detail.improvements}</Section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}