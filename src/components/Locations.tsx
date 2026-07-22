import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const stores = [
  {
    name: 'Quiper Music CenterVale',
    address: 'CenterVale Shopping - Q21',
    city: 'São José dos Campos - SP',
    color: 'from-accent to-accent-light',
    delay: 0,
  },
  {
    name: 'Quiper Music Vale Sul',
    address: 'Vale Sul Shopping - LJ 211',
    city: 'São José dos Campos - SP',
    color: 'from-accent-dark to-accent',
    delay: 0.2,
  },
];

export default function Locations() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="localizacao" className="relative py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.span className="inline-block px-4 py-1 rounded-full bg-sky-50 border border-sky-200 text-accent-dark text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }}>
            Nossas Lojas
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
            Visite uma de nossas{' '}
            <span className="bg-gradient-to-r from-accent-dark via-accent to-accent-light bg-clip-text text-transparent">
              unidades
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Duas lojas em São José dos Campos para melhor atender você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stores.map((store) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: store.delay, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-sky-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-sky-100/50"
            >
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${store.color}`}
                initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: store.delay + 0.3, duration: 0.8 }}
                style={{ transformOrigin: 'left' }} />

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-accent-dark mb-6 group-hover:bg-sky-100 transition-colors"
                  animate={isInView ? { scale: [0.5, 1.1, 1] } : {}}
                  transition={{ delay: store.delay + 0.4 }}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-accent-dark transition-colors">
                  {store.name}
                </h3>
                <p className="text-slate-400 mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {store.address}
                </p>
                <p className="text-slate-300 text-sm">{store.city}</p>

                <motion.a href="https://wa.me/5512900000000" target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-50 hover:bg-accent text-accent-dark hover:text-white text-sm font-semibold transition-all duration-300 group/btn"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Fale com a loja
                  <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
