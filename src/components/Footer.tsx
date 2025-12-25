import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useStore, useTranslation } from '@/lib/store';

export const Footer = () => {
  const t = useTranslation();
  const { language } = useStore();

  const footerLinks = {
    company: [
      { label: t.aboutUs, href: '/about' },
      { label: t.blog, href: '/blog' },
      { label: t.contacts, href: '/contacts' },
    ],
    help: [
      { label: t.delivery, href: '/delivery' },
      { label: t.returns, href: '/returns' },
      { label: 'FAQ', href: '/faq' },
    ],
    legal: [
      { label: t.privacy, href: '/privacy' },
      { label: t.offer, href: '/offer' },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-coral rounded-xl flex items-center justify-center">
                <span className="text-xl">🧸</span>
              </div>
              <span className="font-heading font-bold text-xl">KidsShop</span>
            </a>
            <p className="text-background/70 text-sm mb-6">
              {language === 'ru' 
                ? 'Лучший магазин детских товаров в Казахстане. Качество и безопасность для ваших малышей.' 
                : 'Қазақстандағы ең жақсы балалар тауарларының дүкені. Сіздің балаларыңыз үшін сапа мен қауіпсіздік.'}
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">
              {language === 'ru' ? 'Компания' : 'Компания'}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">
              {language === 'ru' ? 'Помощь' : 'Көмек'}
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">
              {t.contacts}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">
                  {language === 'ru' 
                    ? 'г. Алматы, ул. Абая 150, БЦ "Алатау"' 
                    : 'Алматы қ., Абай к-сі 150, БО "Алатау"'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+77001234567" className="text-background/70 hover:text-background transition-colors">
                  +7 (700) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@kidsshop.kz" className="text-background/70 hover:text-background transition-colors">
                  info@kidsshop.kz
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © 2024 KidsShop. {t.allRights}
            </p>
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" alt="Visa" className="h-6 object-contain opacity-60" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="MasterCard" className="h-6 object-contain opacity-60" />
              <div className="bg-background/20 px-3 py-1 rounded text-sm font-medium">Kaspi</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
