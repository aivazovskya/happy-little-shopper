import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Offer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Публичная оферта</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Публичная оферта
          </h1>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Действует с 1 декабря 2024 года
            </p>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                1. Общие положения
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Настоящий документ является официальным предложением (офертой) 
                ТОО "KidsStore" (далее — Продавец) заключить договор купли-продажи 
                товаров дистанционным способом на условиях, изложенных ниже.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                2. Предмет договора
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Продавец обязуется передать в собственность Покупателю, а Покупатель обязуется 
                оплатить и принять товары, заказанные на сайте kidsstore.kz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                3. Момент заключения договора
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Договор считается заключённым с момента оформления заказа на сайте и 
                получения Покупателем подтверждения заказа на электронную почту.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                4. Цена и порядок оплаты
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                4.1. Цены на товары указаны в тенге (KZT) и включают НДС.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                4.2. Оплата производится одним из способов, указанных на сайте.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                4.3. Продавец оставляет за собой право изменять цены на товары. 
                Стоимость оформленного заказа изменению не подлежит.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                5. Доставка
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                5.1. Доставка осуществляется в сроки, указанные на сайте.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                5.2. Риск случайной гибели или повреждения товара переходит к Покупателю 
                с момента получения товара.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                6. Возврат и обмен
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                6.1. Возврат товара надлежащего качества возможен в течение 14 дней с момента 
                получения при сохранении товарного вида.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                6.2. Товар ненадлежащего качества подлежит возврату или обмену в соответствии 
                с законодательством РК.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                7. Гарантии
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Все товары имеют гарантию производителя. Срок гарантии указан в описании 
                товара и в гарантийном талоне.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                8. Ответственность сторон
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Стороны несут ответственность за неисполнение или ненадлежащее исполнение 
                обязательств по настоящему договору в соответствии с законодательством 
                Республики Казахстан.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                9. Форс-мажор
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Стороны освобождаются от ответственности за неисполнение обязательств, 
                если это вызвано обстоятельствами непреодолимой силы.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                10. Реквизиты Продавца
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                ТОО "KidsStore"<br />
                БИН: 123456789012<br />
                Юридический адрес: г. Алматы, пр. Абая 123<br />
                Телефон: +7 (727) 123-45-67<br />
                Email: info@kidsstore.kz
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offer;
