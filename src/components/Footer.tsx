import { motion } from 'framer-motion';

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/quipermusical',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5512900000000',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.313 0-4.46-.756-6.197-2.034l-.435-.338-3.187 1.069 1.069-3.187-.338-.435A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative pt-24 pb-8 bg-slate-50 border-t border-slate-100">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <path d="M20 4 C20 4 12 8 12 20 C12 28 15 34 20 36 C25 34 28 28 28 20 C28 8 20 4 20 4Z"
                  fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
                <line x1="20" y1="10" x2="20" y2="36" stroke="#0ea5e9" strokeWidth="1.5" />
              </svg>
              <span className="text-xl font-bold">
                <span className="text-accent-dark">Quiper</span>{' '}
                <span className="text-slate-400 font-light">Music</span>
              </span>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Tudo para quem faz música. Instrumentos, acessórios, luthieria e atendimento especializado.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 hover:text-accent-dark hover:bg-sky-50 border border-slate-200 hover:border-sky-200 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} title={social.name}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-700 font-bold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#catalogo', label: 'Catálogo' },
                { href: '#localizacao', label: 'Nossas Lojas' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-slate-400 hover:text-accent-dark text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-700 font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-accent/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>CenterVale Shopping - Q21</p>
                  <p>Vale Sul Shopping - LJ 211</p>
                  <p className="text-slate-300 mt-1">São José dos Campos - SP</p>
                </div>
              </li>
              <li>
                <a href="https://www.instagram.com/quipermusical" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-accent-dark text-sm transition-colors">
                  <svg className="w-4 h-4 text-accent/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                  @quipermusical
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-xs">
            &copy; {new Date().getFullYear()} Quiper Music. Todos os direitos reservados.
          </p>
          <p className="text-slate-300 text-xs">
            Feito com ♪ para quem faz música
          </p>
        </div>
      </div>
    </footer>
  );
}
