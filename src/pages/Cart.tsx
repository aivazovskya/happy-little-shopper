import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, Tag, ArrowRight, Truck, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore, useTranslation } from '@/lib/store';
import { toast } from 'sonner';

const Cart = () => {
  const t = useTranslation();
  const { cart, updateQuantity, removeFromCart, getCartTotal, language } = useStore();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = getCartTotal();
  const deliveryFee = subtotal >= 30000 ? 0 : 2500;
  const total = subtotal - discount + deliveryFee;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'kids10') {
      const discountAmount = Math.round(subtotal * 0.1);
      setDiscount(discountAmount);
      setPromoApplied(true);
      toast.success('Промокод применён! Скидка 10%');
    } else if (promoCode.toLowerCase() === 'first') {
      const discountAmount = Math.round(subtotal * 0.15);
      setDiscount(discountAmount);
      setPromoApplied(true);
      toast.success('Промокод применён! Скидка 15%');
    } else {
      toast.error('Неверный промокод');
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} удалён из корзины`);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-8xl mb-6"
            >
              🛒
            </motion.div>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t.emptyCart}
            </h1>
            <p className="text-muted-foreground mb-8">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Link to="/catalog">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="w-5 h-5" />
                {t.continueShopping}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{t.cart}</span>
        </nav>

        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          {t.yourCart}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => {
                const displayName = language === 'kz' && item.product.nameKz 
                  ? item.product.nameKz 
                  : item.product.name;
                
                return (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="bg-card rounded-2xl p-4 md:p-6 shadow-card"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={displayName}
                          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl"
                        />
                      </Link>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/product/${item.product.id}`}
                          className="font-heading font-semibold text-foreground hover:text-primary transition-colors line-clamp-2"
                        >
                          {displayName}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.product.brand} • {t.age}: {item.product.ageRange}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-3">
                          {/* Quantity */}
                          <div className="flex items-center bg-muted rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9"
                              onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-10 text-center font-semibold">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Price & Remove */}
                          <div className="flex items-center justify-between sm:gap-6">
                            <div className="text-right">
                              <p className="font-bold text-lg text-primary">
                                {(item.product.price * item.quantity).toLocaleString()} {t.currency}
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-sm text-muted-foreground">
                                  {item.product.price.toLocaleString()} {t.currency} / шт
                                </p>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                              onClick={() => handleRemoveItem(item.product.id, displayName)}
                            >
                              <Trash2 className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Continue Shopping */}
            <Link to="/catalog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowRight className="w-4 h-4 rotate-180" />
              {t.continueShopping}
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                Итого заказа
              </h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Промокод
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Введите код"
                      className="pl-9"
                      disabled={promoApplied}
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                  >
                    {promoApplied ? 'Применён' : 'Применить'}
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-sm text-mint mt-2">✓ Скидка применена</p>
                )}
              </div>

              {/* Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-foreground/80">
                  <span>Товары ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
                  <span>{subtotal.toLocaleString()} {t.currency}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-mint">
                    <span>Скидка</span>
                    <span>-{discount.toLocaleString()} {t.currency}</span>
                  </div>
                )}
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
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-heading font-bold text-lg text-foreground">{t.total}</span>
                  <span className="font-heading font-bold text-xl text-primary">
                    {total.toLocaleString()} {t.currency}
                  </span>
                </div>
              </div>

              {/* Free Delivery Notice */}
              {subtotal < 30000 && (
                <div className="bg-sunny/10 rounded-xl p-3 mb-6">
                  <p className="text-sm text-foreground">
                    🚚 До бесплатной доставки осталось{' '}
                    <span className="font-semibold">{(30000 - subtotal).toLocaleString()} {t.currency}</span>
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <Link to="/checkout">
                <Button size="lg" className="w-full gap-2">
                  {t.checkout}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              {/* Benefits */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-mint" />
                  <span>Бесплатная доставка от 30 000 {t.currency}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-sky" />
                  <span>Гарантия качества и возврата</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
