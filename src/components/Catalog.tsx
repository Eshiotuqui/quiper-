import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, type Category } from '../data/products';
import ProductCard from './ProductCard';
import { useInView } from '../hooks/useInView';

const ITEMS_PER_PAGE = 12;

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const { ref, isInView } = useInView(0.05);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'Todos') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      if (a.available !== b.available) return a.available ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [activeCategory, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const categoryCount = (cat: Category) =>
    cat === 'Todos' ? products.length : products.filter((p) => p.category === cat).length;

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <section id="catalogo" className="relative py-24 md:py-32 bg-slate-50/50" ref={ref}>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-[100px] translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.span className="inline-block px-4 py-1 rounded-full bg-sky-50 border border-sky-200 text-accent-dark text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }}>
            Nossos Produtos
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
            Explore nosso{' '}
            <span className="bg-gradient-to-r from-accent-dark via-accent to-accent-light bg-clip-text text-transparent">
              catálogo
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Mais de 300 produtos para todos os estilos e níveis de músicos.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div className="max-w-lg mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
          <div className="relative group">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-accent transition-colors"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-sky-100/50 transition-all duration-300"
            />
            {search && (
              <button onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-accent text-white shadow-md shadow-sky-200/50'
                    : 'bg-white text-slate-500 hover:text-accent-dark hover:bg-sky-50 border border-slate-200 hover:border-sky-200'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs ${isActive ? 'text-white/70' : 'text-slate-300'}`}>
                  {categoryCount(cat)}
                </span>
                {isActive && (
                  <motion.div layoutId="activeCategory"
                    className="absolute inset-0 rounded-xl bg-accent -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div className="text-center mb-6" layout>
          <span className="text-sm text-slate-400">
            {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
            {search && ` para "${search}"`}
          </span>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
            <svg className="w-16 h-16 mx-auto mb-4 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-bold text-slate-400 mb-2">Nenhum produto encontrado</h3>
            <p className="text-slate-300">Tente buscar com outros termos.</p>
          </motion.div>
        )}

        {hasMore && (
          <motion.div className="flex justify-center mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <motion.button
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-2xl bg-white border border-sky-200 hover:border-accent text-accent-dark font-bold transition-all duration-300 hover:shadow-lg hover:shadow-sky-100/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-sky-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Carregar mais
                <span className="text-slate-400 text-sm">
                  ({Math.min(ITEMS_PER_PAGE, filtered.length - visibleCount)} de {filtered.length - visibleCount} restantes)
                </span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
