import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Truck, CreditCard, CheckCircle, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useStore, useTranslation } from '@/lib/store';
import { toast } from 'sonner';

const Checkout = () => {
  const t = useTranslation();
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart, language } = useStore();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    comment: '',
  });
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getCartTotal();
  const deliveryFee = deliveryMethod === 'pickup' ? 0 : subtotal >= 30000 ? 0 : 2500;
  const total = subtotal + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('Заполните обязательные поля');
      return;
    }

    if (deliveryMethod !== 'pickup' && !formData.address) {
      toast.error('Укажите адрес доставки');
      return;
    }

    setIsSubmitting(true);

    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    const orderNumber = `KD-${Date.now().toString().slice(-8)}`;
    
    clearCart();
    setIsSubmitting(false);
    
    toast.success(`Заказ ${orderNumber} успешно оформлен!`);
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
            Корзина пуста
          </h1>
          <Link to="/catalog">
            <Button>Перейти в каталог</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Вернуться в корзину
        </Link>

        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          Оформление заказа
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h2 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Контактные данные
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Имя *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              {/* Delivery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h2 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Способ доставки
                </h2>
                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-3">
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    deliveryMethod === 'courier' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="courier" />
                    <Truck className="w-6 h-6 text-mint" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Курьерская доставка</p>
                      <p className="text-sm text-muted-foreground">1-3 рабочих дня</p>
                    </div>
                    <span className="font-medium text-foreground">
                      {subtotal >= 30000 ? 'Бесплатно' : `2 500 ${t.currency}`}
                    </span>
                  </label>
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    deliveryMethod === 'pickup' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="pickup" />
                    <MapPin className="w-6 h-6 text-sky" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Самовывоз</p>
                      <p className="text-sm text-muted-foreground">г. Алматы, пр. Абая 123</p>
                    </div>
                    <span className="font-medium text-mint">Бесплатно</span>
                  </label>
                </RadioGroup>

                {deliveryMethod !== 'pickup' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Город *
                      </label>
                      <Input
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Алматы"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Адрес доставки *
                      </label>
                      <Input
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Улица, дом, квартира"
                        required
                      />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Payment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h2 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Способ оплаты
                </h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="card" />
                    <CreditCard className="w-6 h-6 text-lavender" />
                    <div>
                      <p className="font-medium text-foreground">Банковская карта</p>
                      <p className="text-sm text-muted-foreground">Visa, MasterCard</p>
                    </div>
                  </label>
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'kaspi' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="kaspi" />
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">K</div>
                    <div>
                      <p className="font-medium text-foreground">Kaspi Pay</p>
                      <p className="text-sm text-muted-foreground">Оплата через приложение</p>
                    </div>
                  </label>
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'cash' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="cash" />
                    <div className="w-6 h-6 bg-mint rounded flex items-center justify-center text-white text-xs font-bold">₸</div>
                    <div>
                      <p className="font-medium text-foreground">Наличные при получении</p>
                      <p className="text-sm text-muted-foreground">Оплата курьеру</p>
                    </div>
                  </label>
                </RadioGroup>
              </motion.div>

              {/* Comment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h2 className="font-heading text-lg font-bold text-foreground mb-4">
                  Комментарий к заказу
                </h2>
                <Textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Напишите пожелания по доставке или заказу..."
                  rows={3}
                />
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl p-6 shadow-card sticky top-24"
              >
                <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                  Ваш заказ
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((item) => {
                    const displayName = language === 'kz' && item.product.nameKz 
                      ? item.product.nameKz 
                      : item.product.name;
                    
                    return (
                      <div key={item.product.id} className="flex gap-3">
                        <img
                          src={item.product.image}
                          alt={displayName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground line-clamp-2">
                            {displayName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity} шт × {item.product.price.toLocaleString()} {t.currency}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Summary */}
                <div className="space-y-3 mb-6 pt-4 border-t border-border">
                  <div className="flex justify-between text-foreground/80">
                    <span>Товары</span>
                    <span>{subtotal.toLocaleString()} {t.currency}</span>
                  </div>
                  <div className="flex justify-between text-foreground/80">
                    <span>Доставка</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-mint">Бесплатно</span>
                      ) : (
                        `${deliveryFee.toLocaleString()} ${t.currency}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-heading font-bold text-lg text-foreground">{t.total}</span>
                    <span className="font-heading font-bold text-xl text-primary">
                      {total.toLocaleString()} {t.currency}
                    </span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Оформление...'
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Подтвердить заказ
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <Link to="/offer" className="text-primary hover:underline">
                    условиями оферты
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
