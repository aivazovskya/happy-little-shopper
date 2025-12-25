import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Айгуль М.',
    avatar: '👩',
    rating: 5,
    text: 'Отличный магазин! Заказывала коляску для дочки - качество превосходное, доставка быстрая. Очень довольна!',
    textKz: 'Тамаша дүкен! Қызыма арба сатып алдым - сапасы керемет, жеткізу жылдам. Өте ризамын!',
  },
  {
    id: 2,
    name: 'Алексей К.',
    avatar: '👨',
    rating: 5,
    text: 'Покупаем здесь игрушки для сына уже год. Всегда качественные товары и адекватные цены. Рекомендую!',
    textKz: 'Бір жылдан бері ұлыма ойыншықтарды осы жерден аламыз. Әрқашан сапалы тауарлар мен қолжетімді бағалар. Ұсынамын!',
  },
  {
    id: 3,
    name: 'Динара С.',
    avatar: '👩',
    rating: 5,
    text: 'Нашла здесь всё для детской комнаты. Мебель красивая и безопасная. Спасибо за отличный сервис!',
    textKz: 'Бала бөлмесіне барлығын осы жерден таптым. Жиһаз әдемі және қауіпсіз. Тамаша қызмет үшін рахмет!',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            💬 Отзывы наших клиентов
          </h2>
          <p className="text-muted-foreground">
            Нам доверяют тысячи родителей по всему Казахстану
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-6 shadow-card"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sunny text-sunny" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <span className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
