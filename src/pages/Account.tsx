import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight, Clock, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useStore, useTranslation } from '@/lib/store';
import { products } from '@/lib/products';
import { toast } from 'sonner';

// Mock user data - will be replaced with real data
const mockUser = {
  name: 'Айгуль Касымова',
  email: 'aigul@example.com',
  phone: '+7 (777) 123-45-67',
  avatar: null,
};

const mockOrders = [
  {
    id: 'KD-2024-001',
    date: '20.12.2024',
    status: 'delivered',
    statusText: 'Доставлен',
    total: 45900,
    items: [
      { name: 'Конструктор развивающий', quantity: 2, price: 12500 },
      { name: 'Мягкая игрушка "Зайка"', quantity: 1, price: 7900 },
    ],
  },
  {
    id: 'KD-2024-002',
    date: '15.12.2024',
    status: 'shipped',
    statusText: 'В пути',
    total: 89900,
    items: [
      { name: 'Коляска прогулочная', quantity: 1, price: 89900 },
    ],
  },
  {
    id: 'KD-2024-003',
    date: '10.12.2024',
    status: 'processing',
    statusText: 'Обработка',
    total: 34500,
    items: [
      { name: 'Детский столик со стульями', quantity: 1, price: 34500 },
    ],
  },
];

const mockAddresses = [
  {
    id: '1',
    title: 'Дом',
    address: 'г. Алматы, ул. Абая 123, кв. 45',
    isDefault: true,
  },
  {
    id: '2',
    title: 'Работа',
    address: 'г. Алматы, пр. Достык 50, офис 301',
    isDefault: false,
  },
];

const Account = () => {
  const t = useTranslation();
  const navigate = useNavigate();
  const { wishlist } = useStore();
  const [activeTab, setActiveTab] = useState('orders');

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  const handleLogout = () => {
    toast.success('Вы вышли из системы');
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-mint/20 text-mint';
      case 'shipped':
        return 'bg-sky/20 text-sky';
      case 'processing':
        return 'bg-sunny/20 text-sunny-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Личный кабинет</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-foreground">{mockUser.name}</h2>
                <p className="text-sm text-muted-foreground">{mockUser.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'orders' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span>Мои заказы</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'wishlist' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span>{t.wishlist}</span>
                  {wishlist.length > 0 && (
                    <span className="ml-auto bg-coral text-coral-foreground text-xs px-2 py-0.5 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'addresses' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Адреса доставки</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'settings' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Настройки</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
              </nav>

              {/* Logout */}
              <Button
                variant="ghost"
                className="w-full mt-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Выйти
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders */}
            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Мои заказы
                </h1>
                
                {mockOrders.length > 0 ? (
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-card rounded-2xl p-6 shadow-card"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-heading font-semibold text-foreground">
                              Заказ {order.id}
                            </h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {order.date}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.statusText}
                          </span>
                        </div>

                        <div className="space-y-2 mb-4">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-foreground/80">
                                {item.name} × {item.quantity}
                              </span>
                              <span className="text-foreground">
                                {item.price.toLocaleString()} {t.currency}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="font-semibold text-foreground">
                            {t.total}: {order.total.toLocaleString()} {t.currency}
                          </span>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-card rounded-2xl shadow-card">
                    <div className="text-6xl mb-4">📦</div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      У вас пока нет заказов
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Самое время сделать первый заказ!
                    </p>
                    <Link to="/catalog">
                      <Button>Перейти в каталог</Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

            {/* Wishlist */}
            {activeTab === 'wishlist' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-heading text-2xl font-bold text-foreground mb-6">
                  {t.wishlist}
                </h1>
                
                {wishlistProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-card rounded-2xl shadow-card">
                    <div className="text-6xl mb-4">❤️</div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Список желаний пуст
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Добавляйте товары, нажимая на сердечко
                    </p>
                    <Link to="/catalog">
                      <Button>Перейти в каталог</Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

            {/* Addresses */}
            {activeTab === 'addresses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl font-bold text-foreground">
                    Адреса доставки
                  </h1>
                  <Button>Добавить адрес</Button>
                </div>
                
                <div className="space-y-4">
                  {mockAddresses.map((address) => (
                    <div
                      key={address.id}
                      className={`bg-card rounded-2xl p-6 shadow-card border-2 ${
                        address.isDefault ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-heading font-semibold text-foreground">
                              {address.title}
                            </h3>
                            {address.isDefault && (
                              <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                                По умолчанию
                              </span>
                            )}
                          </div>
                          <p className="text-foreground/80">{address.address}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Изменить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Настройки профиля
                </h1>
                
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Имя
                      </label>
                      <input
                        type="text"
                        defaultValue={mockUser.name}
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={mockUser.email}
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        defaultValue={mockUser.phone}
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button>Сохранить изменения</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
