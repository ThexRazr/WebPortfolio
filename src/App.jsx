// src/App.jsx
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import ProjectModal from './components/ui/ProjectModal'
import { useModal } from './components/hooks/useModal'

export default function App() {
  const { selectedProject, isOpen, openModal, closeModal } = useModal()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects onCardClick={openModal} />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}