import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';

export const Newsletter = () => {
  const { language } = useStore();

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {language === 'ru' 
              ? '📧 Подпишитесь на рассылку' 
              : '📧 Жаңалықтарға жазылыңыз'}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            {language === 'ru' 
              ? 'Получайте первыми информацию о скидках и новинках!' 
              : 'Жеңілдіктер мен жаңа тауарлар туралы бірінші болып біліңіз!'}
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'ru' ? 'Ваш email' : 'Сіздің email'}
              className="flex-1 h-12 px-4 bg-primary-foreground text-foreground rounded-xl outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
            />
            <Button variant="accent" size="lg" type="submit">
              <Send className="w-4 h-4" />
              {language === 'ru' ? 'Подписаться' : 'Жазылу'}
            </Button>
          </form>

          <p className="text-primary-foreground/60 text-sm mt-4">
            {language === 'ru' 
              ? 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности' 
              : 'Түймені басу арқылы сіз құпиялылық саясатымен келісесіз'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
