import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, Gift, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/store';

export const Hero = () => {
  const t = useTranslation();

  const features = [
    { icon: Truck, text: 'Бесплатная доставка от 15 000₸', textKz: 'Тегін жеткізу 15 000₸-ден' },
    { icon: Shield, text: 'Гарантия качества', textKz: 'Сапа кепілдігі' },
    { icon: Gift, text: 'Подарок к заказу', textKz: 'Тапсырысқа сыйлық' },
    { icon: Clock, text: 'Доставка за 24 часа', textKz: '24 сағатта жеткізу' },
  ];

  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🎈
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 w-20 h-20 text-5xl"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🧩
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-1/3 w-20 h-20 text-5xl"
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          🎁
        </motion.div>
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-card/80 backdrop-blur-sm text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6 shadow-soft">
              🎄 Новогодняя коллекция 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              {t.shopNow}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              {t.viewCatalog}
            </Button>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-soft flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
