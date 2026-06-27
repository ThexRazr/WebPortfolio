// src/components/ui/ProjectModal.jsx
import { AnimatePresence, motion } from 'framer-motion'
import { IconX } from '../ui/Icons'
import Badge from './Badge'

const Section = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <h4
      className="text-xs font-bold tracking-widest text-blue-600 uppercase"
      style={{ fontVariant: 'small-caps' }}
    >
      {label}
    </h4>
    <p className="text-sm text-gray-600 leading-relaxed font-light">{children}</p>
  </div>
)

export default function ProjectModal({ project, isOpen, onClose }) {
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
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto bg-white rounded-t-3xl shadow-2xl"
          >
            <div className="max-w-2xl mx-auto px-8 py-10 flex flex-col gap-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h2
                    className="text-2xl font-bold text-gray-900 leading-tight"
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
                <button
                  onClick={onClose}
                  className="mt-1 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <IconX size={18} />
                </button>
              </div>

              {/* Detail sections */}
              <Section label="Problem">{project.detail.problem}</Section>
              <Section label="Solution">{project.detail.solution}</Section>
              <Section label="Architecture">{project.detail.architecture}</Section>
              <Section label="Challenges">{project.detail.challenges}</Section>
              <Section label="What I'd Improve">{project.detail.improvements}</Section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}