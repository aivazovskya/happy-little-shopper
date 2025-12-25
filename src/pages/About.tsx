import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Shield, Truck, Award, Users, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Все товары проходят строгий контроль качества и имеют необходимые сертификаты',
      color: 'bg-sky/10 text-sky',
    },
    {
      icon: Heart,
      title: 'Забота',
      description: 'Мы понимаем потребности родителей и заботимся о развитии каждого ребёнка',
      color: 'bg-coral/10 text-coral',
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Работаем только с проверенными брендами и поставщиками',
      color: 'bg-sunny/10 text-sunny-foreground',
    },
    {
      icon: Truck,
      title: 'Доступность',
      description: 'Быстрая доставка по всему Казахстану с гарантией сохранности товара',
      color: 'bg-mint/10 text-mint',
    },
  ];

  const stats = [
    { value: '50 000+', label: 'Довольных клиентов' },
    { value: '10 000+', label: 'Товаров в каталоге' },
    { value: '5 лет', label: 'На рынке' },
    { value: '15+', label: 'Городов доставки' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">О компании</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Лучшие товары для{' '}
                <span className="text-gradient">ваших детей</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                KidsStore — ваш надёжный партнёр в выборе качественных и безопасных товаров для детей. 
                Мы верим, что каждый ребёнок заслуживает лучшего, поэтому тщательно отбираем каждый товар в нашем каталоге.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Наша миссия
                  </h2>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Мы стремимся сделать детство каждого ребёнка ярким и безопасным. 
                  Наша команда ежедневно работает над тем, чтобы родители могли легко находить 
                  качественные товары по доступным ценам, не тратя время на поиски.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Мы сотрудничаем с ведущими мировыми и казахстанскими производителями детских товаров, 
                  чтобы предложить вам только лучшее.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop"
                  alt="Happy kids playing"
                  className="rounded-3xl shadow-card w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <p className="font-heading font-bold text-foreground">50 000+</p>
                  <p className="text-sm text-muted-foreground">Счастливых семей</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Наши ценности
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы руководствуемся простыми, но важными принципами в своей работе
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Начните покупки прямо сейчас
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Тысячи товаров для детей всех возрастов с доставкой по всему Казахстану
              </p>
              <Link to="/catalog">
                <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-glow transition-all">
                  Перейти в каталог
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
