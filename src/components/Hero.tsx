import { motion } from 'framer-motion';

const notes = ['♪', '♫', '♬', '♩'];

function FloatingNote({ char, delay, x, y }: { char: string; delay: number; x: number; y: number }) {
  return (
    <motion.span
      className="absolute text-accent/20 text-2xl md:text-4xl pointer-events-none select-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -80, -160],
        x: [0, Math.random() * 40 - 20],
        opacity: [0, 0.5, 0],
        rotate: [0, Math.random() * 30 - 15],
        scale: [0.5, 1.2, 0.8],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    >
      {char}
    </motion.span>
  );
}

function GuitarSVG() {
  return (
    <motion.svg
      viewBox="0 0 200 500"
      className="w-32 md:w-48 lg:w-56 h-auto"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
    >
      <defs>
        <linearGradient id="guitar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d="M85 20 Q80 10 90 5 Q100 0 110 5 Q120 10 115 20 L115 80 L85 80 Z"
        fill="none" stroke="url(#guitar-grad)" strokeWidth="2" filter="url(#glow)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {[25, 40, 55].map((y, i) => (
        <motion.g key={`peg-${i}`}>
          <motion.circle cx="78" cy={y} r="4" fill="none" stroke="#38bdf8" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 + i * 0.1 }} />
          <motion.circle cx="122" cy={y} r="4" fill="none" stroke="#38bdf8" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 + i * 0.1 }} />
        </motion.g>
      ))}

      <motion.rect x="90" y="80" width="20" height="180" fill="none" stroke="url(#guitar-grad)" strokeWidth="2"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1 }} style={{ transformOrigin: '100px 80px' }} />

      {[100, 125, 150, 180, 210, 235].map((y, i) => (
        <motion.line key={`fret-${i}`} x1="90" y1={y} x2="110" y2={y}
          stroke="#38bdf8" strokeWidth="1" opacity="0.3"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.3 + i * 0.08 }} />
      ))}

      <motion.path
        d="M100 260 Q60 270 40 310 Q20 350 35 390 Q50 430 75 440 Q90 445 100 460 Q110 445 125 440 Q150 430 165 390 Q180 350 160 310 Q140 270 100 260 Z"
        fill="none" stroke="url(#guitar-grad)" strokeWidth="2.5" filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 1.2 }} />

      <motion.circle cx="100" cy="360" r="25" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: 'spring', stiffness: 100 }} />
      <motion.circle cx="100" cy="360" r="20" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, type: 'spring', stiffness: 100 }} />

      <motion.rect x="85" y="410" width="30" height="6" rx="3" fill="none" stroke="#0ea5e9" strokeWidth="1.5"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.4 }} />

      {[94, 97, 100, 103, 106].map((x, i) => (
        <motion.line key={`string-${i}`} x1={x} y1="20" x2={x} y2="415"
          stroke="#94a3b8" strokeWidth="0.5" opacity="0.3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2.5 + i * 0.1 }} />
      ))}

      <motion.circle cx="100" cy="360" r="28" fill="none" stroke="#38bdf8" strokeWidth="1"
        animate={{ r: [28, 35, 28], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }} />
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-sky-50/50 to-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-sky-100"
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-sky-50"
          animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }} />

        <div className="absolute top-20 right-20 w-72 h-72 bg-sky-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-50/60 rounded-full blur-[120px]" />
      </div>

      {/* Floating notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {notes.map((note, i) => (
          <FloatingNote key={i} char={note} delay={i * 1.5} x={10 + Math.random() * 80} y={50 + Math.random() * 40} />
        ))}
        {notes.map((note, i) => (
          <FloatingNote key={`b-${i}`} char={note} delay={i * 2 + 1} x={5 + Math.random() * 90} y={60 + Math.random() * 30} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-accent-dark text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Instrumentos Musicais & Luthieria
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-slate-800">Tudo para</span><br />
              <span className="text-slate-800">quem faz </span>
              <motion.span
                className="relative inline-block"
                animate={{ color: ['#0ea5e9', '#38bdf8', '#0284c7', '#0ea5e9'] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                música
                <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10"
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}>
                  <motion.path d="M0 8 Q50 0 100 5 Q150 10 200 3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            >
              Instrumentos, acessórios e atendimento especializado.
              <br className="hidden sm:block" />
              Duas lojas em São José dos Campos.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            >
              <motion.a href="#catalogo"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-200/60"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Ver Catálogo
                  <motion.svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>

              <motion.a href="https://www.instagram.com/quipermusical" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-accent text-slate-500 hover:text-accent-dark rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-sky-50/50"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-8 mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            >
              {[
                { value: '300+', label: 'Produtos' },
                { value: '2', label: 'Lojas' },
                { value: '5', label: 'Estrelas' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-black text-accent-dark">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="flex-shrink-0 relative"
            animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <GuitarSVG />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-200/30 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-xs text-slate-300 uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
