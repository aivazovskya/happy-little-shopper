import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Политика конфиденциальности</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Политика конфиденциальности
          </h1>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Последнее обновление: 1 декабря 2024 года
            </p>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                1. Общие положения
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                ТОО "KidsStore" (далее — Компания) персональных данных пользователей сайта 
                kidsstore.kz (далее — Сайт).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                2. Сбор персональных данных
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Мы собираем следующие персональные данные:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес доставки</li>
                <li>История заказов</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                3. Цели обработки данных
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Персональные данные используются для:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Оформления и доставки заказов</li>
                <li>Связи с покупателем по вопросам заказа</li>
                <li>Улучшения качества обслуживания</li>
                <li>Рассылки информационных и рекламных материалов (с согласия пользователя)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                4. Защита данных
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Компания принимает необходимые технические и организационные меры для защиты 
                персональных данных от несанкционированного доступа, изменения, раскрытия или 
                уничтожения. Доступ к персональным данным имеют только уполномоченные сотрудники.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                5. Передача данных третьим лицам
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Мы не передаём персональные данные третьим лицам, за исключением случаев, 
                предусмотренных законодательством Республики Казахстан, а также для выполнения 
                заказа (службы доставки, платёжные системы).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                6. Cookie-файлы
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Сайт использует cookie-файлы для улучшения пользовательского опыта. 
                Вы можете отключить cookie в настройках браузера, однако это может 
                повлиять на функциональность сайта.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                7. Права пользователей
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Получить информацию о хранящихся данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления персональных данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                8. Контакты
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                По вопросам, связанным с обработкой персональных данных, обращайтесь:
              </p>
              <p className="text-foreground/80 mt-2">
                Email: privacy@kidsstore.kz<br />
                Телефон: +7 (727) 123-45-67
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
