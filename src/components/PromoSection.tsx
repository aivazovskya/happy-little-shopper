import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PromoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral-light to-sunny-light p-8 md:p-10 min-h-[280px]"
          >
            <div className="relative z-10 max-w-xs">
              <span className="inline-block bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">
                Скидка 30%
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Зимняя коллекция одежды
              </h3>
              <p className="text-muted-foreground mb-6">
                Тёплая и стильная одежда для ваших малышей
              </p>
              <Button variant="coral" size="default">
                Смотреть
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="absolute -right-8 -bottom-8 text-[120px] opacity-50 rotate-12">
              🧥
            </div>
          </motion.div>

          {/* Promo 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-mint-light to-sky-light p-8 md:p-10 min-h-[280px]"
          >
            <div className="relative z-10 max-w-xs">
              <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">
                Новинки
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Развивающие игрушки
              </h3>
              <p className="text-muted-foreground mb-6">
                Обучение через игру — лучший способ развития
              </p>
              <Button variant="mint" size="default">
                Открыть
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="absolute -right-8 -bottom-8 text-[120px] opacity-50 -rotate-12">
              🧩
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
