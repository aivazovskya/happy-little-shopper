import { motion } from 'framer-motion';
import { useStore, useTranslation } from '@/lib/store';
import { categories } from '@/lib/products';

export const Categories = () => {
  const t = useTranslation();
  const { language } = useStore();

  const colorClasses: Record<string, string> = {
    coral: 'bg-coral-light hover:bg-coral/20 border-coral/20',
    mint: 'bg-mint-light hover:bg-mint/30 border-mint/30',
    sunny: 'bg-sunny-light hover:bg-sunny/30 border-sunny/30',
    lavender: 'bg-lavender-light hover:bg-lavender/30 border-lavender/30',
    sky: 'bg-sky-light hover:bg-sky/30 border-sky/30',
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.categories}
          </h2>
          <p className="text-muted-foreground">
            {language === 'ru' 
              ? 'Выберите категорию и найдите идеальный подарок' 
              : 'Санатты таңдаңыз және тамаша сыйлық табыңыз'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`#${category.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 shadow-soft hover:shadow-card ${colorClasses[category.color]}`}
            >
              <span className="text-4xl">{category.icon}</span>
              <span className="font-heading font-semibold text-sm text-center text-foreground">
                {(t as any)[category.id]}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
