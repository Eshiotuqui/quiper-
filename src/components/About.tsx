import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
      </svg>
    ),
    title: 'Instrumentos',
    description: 'Guitarras, violões, baixos, ukuleles, percussão, sopros, teclados e muito mais.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Luthieria',
    description: 'Serviço especializado de manutenção, regulagem e reparo de instrumentos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Acessórios',
    description: 'Cordas, capas, suportes, cabos, palhetas, afinadores e tudo que você precisa.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Atendimento',
    description: 'Equipe apaixonada por música pronta para te ajudar a encontrar o instrumento ideal.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring' as const,
      stiffness: 100,
    },
  }),
};

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z" fill="rgba(56,189,248,0.03)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.span className="inline-block px-4 py-1 rounded-full bg-sky-50 border border-sky-200 text-accent-dark text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }}>
            Quem somos
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
            Sua loja de{' '}
            <span className="bg-gradient-to-r from-accent-dark via-accent to-accent-light bg-clip-text text-transparent">
              música completa
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Há anos ajudando músicos de todos os níveis a encontrar o som perfeito, com qualidade, variedade e preço justo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-sky-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-sky-100/50"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(110deg, transparent 33%, rgba(56,189,248,0.05) 50%, transparent 67%)',
                    backgroundSize: '300% 100%',
                    animation: 'shimmer 3s infinite',
                  }} />
              </div>

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-accent-dark mb-5 group-hover:bg-sky-100 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-accent-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-500 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
