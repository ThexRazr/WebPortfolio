// src/components/sections/About.jsx
export default function About() {
  return (
    <section id="about" className="py-28 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Label */}
        <h2
          className="text-3xl font-bold text-gray-900 tracking-wide md:w-48 flex-shrink-0"
          style={{ fontVariant: 'small-caps' }}
        >
          About
        </h2>

        {/* Prose */}
        <div className="flex flex-col gap-5 max-w-xl">
          <p className="text-sm text-gray-500 font-light leading-loose">
            I'm a Computer Engineering student at the University of Florida, graduating in 2026.
            I work across the stack — from writing VHDL for custom processors to building full-stack
            web apps — and I'm most energized by projects that sit at the intersection of hardware
            and software.
          </p>
          <p className="text-sm text-gray-500 font-light leading-loose">
            Outside of class, I TA for [placeholder course], compete in IEEE events, and spend time
            on side projects that let me explore things the curriculum doesn't cover. I'm actively
            targeting roles in NYC in software engineering, embedded systems, and power — wherever
            the work is technically challenging and actually ships.
          </p>
          <p className="text-sm text-gray-500 font-light leading-loose">
            [Add one personal sentence here — a hobby, something you're currently learning,
            or what you're excited about next. Makes it feel human.]
          </p>
        </div>

      </div>
    </section>
  )
}