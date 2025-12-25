import { motion } from 'framer-motion';
import { useStore, useTranslation } from '@/lib/store';
import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';

export const FeaturedProducts = () => {
  const t = useTranslation();
  const { language } = useStore();

  const newProducts = products.filter(p => p.isNew).slice(0, 4);
  const saleProducts = products.filter(p => p.isSale).slice(0, 4);
  const popularProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        {/* New Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                ✨ {t.newProducts}
              </h2>
              <p className="text-muted-foreground text-sm">
                {language === 'ru' ? 'Только что поступили в продажу' : 'Жаңадан сатуға түсті'}
              </p>
            </div>
            <a 
              href="#new"
              className="text-primary font-semibold hover:underline hidden sm:block"
            >
              {language === 'ru' ? 'Смотреть все →' : 'Барлығын көру →'}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Sale Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                🔥 {t.saleProducts}
              </h2>
              <p className="text-muted-foreground text-sm">
                {language === 'ru' ? 'Успейте купить по выгодной цене' : 'Тиімді бағамен алуға үлгеріңіз'}
              </p>
            </div>
            <a 
              href="#sale"
              className="text-primary font-semibold hover:underline hidden sm:block"
            >
              {language === 'ru' ? 'Смотреть все →' : 'Барлығын көру →'}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Popular Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                ⭐ {t.popularProducts}
              </h2>
              <p className="text-muted-foreground text-sm">
                {language === 'ru' ? 'Самые популярные товары' : 'Ең танымал тауарлар'}
              </p>
            </div>
            <a 
              href="#popular"
              className="text-primary font-semibold hover:underline hidden sm:block"
            >
              {language === 'ru' ? 'Смотреть все →' : 'Барлығын көру →'}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
