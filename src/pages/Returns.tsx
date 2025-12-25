import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RotateCcw, Shield, Clock, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Returns = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Свяжитесь с нами',
      description: 'Позвоните или напишите в поддержку для оформления возврата',
    },
    {
      step: 2,
      title: 'Подготовьте товар',
      description: 'Упакуйте товар в оригинальную упаковку со всеми бирками',
    },
    {
      step: 3,
      title: 'Отправьте товар',
      description: 'Передайте товар курьеру или привезите в пункт выдачи',
    },
    {
      step: 4,
      title: 'Получите возврат',
      description: 'Деньги вернутся в течение 3-10 рабочих дней',
    },
  ];

  const faq = [
    {
      question: 'Сколько дней даётся на возврат?',
      answer: 'Согласно законодательству Республики Казахстан, вы можете вернуть товар надлежащего качества в течение 14 дней с момента покупки, если он не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки.',
    },
    {
      question: 'Какие товары не подлежат возврату?',
      answer: 'Не подлежат возврату: товары для профилактики и лечения заболеваний в домашних условиях, предметы личной гигиены, парфюмерно-косметические товары, детское питание, подгузники и другие товары личного пользования.',
    },
    {
      question: 'Как быстро вернут деньги?',
      answer: 'При возврате наличными — в день обращения. При безналичной оплате — в течение 3-10 рабочих дней, в зависимости от вашего банка.',
    },
    {
      question: 'Кто оплачивает доставку при возврате?',
      answer: 'Если возврат осуществляется по причине брака или ошибки магазина — доставку оплачиваем мы. Если вы просто передумали — доставка за ваш счёт.',
    },
    {
      question: 'Можно ли вернуть товар без чека?',
      answer: 'Да, можно. Мы храним информацию обо всех покупках. Вам достаточно назвать номер телефона или email, указанный при оформлении заказа.',
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
          <span className="text-foreground">Возврат и гарантия</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Возврат и гарантия
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Мы заботимся о наших клиентах и гарантируем простую процедуру возврата товаров.
          </p>
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-16 h-16 bg-mint/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-8 h-8 text-mint" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">14 дней</h3>
            <p className="text-muted-foreground">на возврат товара надлежащего качества</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-16 h-16 bg-sky/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-sky" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">12 месяцев</h3>
            <p className="text-muted-foreground">гарантии на все товары</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-16 h-16 bg-lavender/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-lavender" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">3-10 дней</h3>
            <p className="text-muted-foreground">срок возврата денежных средств</p>
          </div>
        </motion.div>

        {/* Return Steps */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Как оформить возврат
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {returnSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card h-full">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < returnSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Conditions */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Условия возврата
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-mint" />
                <h3 className="font-heading font-semibold text-foreground">
                  Товар подлежит возврату, если:
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  Не прошло 14 дней с момента покупки
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  Товар не был в употреблении
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  Сохранены все бирки и ярлыки
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  Сохранена оригинальная упаковка
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-destructive" />
                <h3 className="font-heading font-semibold text-foreground">
                  Не подлежат возврату:
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-foreground/80">
                  <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Детское питание и смеси
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Подгузники и средства гигиены
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Соски, пустышки, бутылочки (использованные)
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Косметика и парфюмерия
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warranty */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Гарантийное обслуживание
          </h2>
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Гарантия производителя
                </h3>
                <p className="text-foreground/80">
                  Все товары в нашем магазине имеют гарантию производителя. 
                  Срок гарантии указан на карточке каждого товара и в гарантийном талоне.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Необходимые документы
                </h3>
                <p className="text-foreground/80">
                  Для гарантийного обращения сохраняйте чек, гарантийный талон и оригинальную упаковку товара.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl shadow-card border-none px-6"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
