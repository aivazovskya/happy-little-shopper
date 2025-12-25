import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, CreditCard, Wallet, QrCode, Package, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Delivery = () => {
  const deliveryMethods = [
    {
      icon: Truck,
      title: 'Курьерская доставка',
      description: 'Доставка до двери в удобное время',
      details: ['Алматы: 1-2 дня', 'Другие города: 3-7 дней'],
      price: 'от 1 500 ₸',
      color: 'bg-mint/10 text-mint',
    },
    {
      icon: MapPin,
      title: 'Самовывоз',
      description: 'Заберите заказ в пункте выдачи',
      details: ['Более 100 пунктов по Казахстану', 'Хранение 7 дней'],
      price: 'Бесплатно',
      color: 'bg-sky/10 text-sky',
    },
    {
      icon: Package,
      title: 'Почта Казахстана',
      description: 'Доставка в любой населённый пункт',
      details: ['Срок: 5-14 дней', 'Отслеживание посылки'],
      price: 'от 1 000 ₸',
      color: 'bg-lavender/10 text-lavender',
    },
  ];

  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Банковские карты',
      description: 'Visa, MasterCard, American Express',
    },
    {
      icon: Wallet,
      title: 'Kaspi Pay',
      description: 'Оплата через приложение Kaspi',
    },
    {
      icon: QrCode,
      title: 'Kaspi QR',
      description: 'Сканируйте QR-код для оплаты',
    },
    {
      icon: Package,
      title: 'Наложенный платёж',
      description: 'Оплата при получении',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Доставка и оплата</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Доставка и оплата
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Мы предлагаем несколько способов доставки и оплаты, чтобы вы могли выбрать наиболее удобный для вас вариант.
          </p>
        </motion.div>

        {/* Free Delivery Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-mint/20 to-sky/20 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 bg-mint/20 rounded-2xl flex items-center justify-center">
            <Truck className="w-8 h-8 text-mint" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Бесплатная доставка от 30 000 ₸
            </h2>
            <p className="text-muted-foreground">
              При заказе на сумму от 30 000 ₸ курьерская доставка по Алматы — бесплатно!
            </p>
          </div>
        </motion.div>

        {/* Delivery Methods */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Способы доставки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center mb-4`}>
                  <method.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <ul className="space-y-2 mb-4">
                  {method.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-mint" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <span className="font-heading font-bold text-primary">{method.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Delivery Time */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Сроки доставки
          </h2>
          <div className="bg-card rounded-2xl p-6 shadow-card overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Город/Регион</th>
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Курьер</th>
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Самовывоз</th>
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Почта</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 text-foreground/80">Алматы</td>
                  <td className="py-3 text-foreground/80">1-2 дня</td>
                  <td className="py-3 text-foreground/80">Сегодня</td>
                  <td className="py-3 text-foreground/80">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 text-foreground/80">Астана, Шымкент</td>
                  <td className="py-3 text-foreground/80">2-3 дня</td>
                  <td className="py-3 text-foreground/80">2-3 дня</td>
                  <td className="py-3 text-foreground/80">5-7 дней</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 text-foreground/80">Областные центры</td>
                  <td className="py-3 text-foreground/80">3-5 дней</td>
                  <td className="py-3 text-foreground/80">3-5 дней</td>
                  <td className="py-3 text-foreground/80">7-10 дней</td>
                </tr>
                <tr>
                  <td className="py-3 text-foreground/80">Другие населённые пункты</td>
                  <td className="py-3 text-foreground/80">5-7 дней</td>
                  <td className="py-3 text-foreground/80">5-7 дней</td>
                  <td className="py-3 text-foreground/80">10-14 дней</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Способы оплаты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card rounded-2xl p-5 shadow-card flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-muted/30 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-xl font-bold text-foreground">
              Остались вопросы?
            </h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Наши специалисты готовы помочь вам с выбором способа доставки и оплаты.
          </p>
          <p className="text-foreground font-semibold">
            Телефон: +7 (727) 123-45-67
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Ежедневно с 9:00 до 21:00
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;
