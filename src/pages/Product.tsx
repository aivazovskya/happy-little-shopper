import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Minus, Plus, Star, Check, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/lib/products';
import { useStore, useTranslation } from '@/lib/store';
import { toast } from 'sonner';

const Product = () => {
  const { id } = useParams();
  const t = useTranslation();
  const { addToCart, toggleWishlist, isInWishlist, language } = useStore();
  
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
            Товар не найден
          </h1>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const productImages = product.images || [product.image, product.image, product.image];
  const inWishlist = isInWishlist(product.id);
  const displayName = language === 'kz' && product.nameKz ? product.nameKz : product.name;
  const displayDescription = language === 'kz' && product.descriptionKz ? product.descriptionKz : product.description;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success('Товар добавлен в корзину');
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
    toast.success(inWishlist ? 'Удалено из избранного' : 'Добавлено в избранное');
  };

  const reviews = [
    { id: 1, author: 'Айгуль К.', rating: 5, date: '15.12.2024', text: 'Отличный товар! Ребёнок в восторге. Качество на высоте, быстрая доставка.' },
    { id: 2, author: 'Марат Т.', rating: 4, date: '10.12.2024', text: 'Хороший товар за свои деньги. Рекомендую к покупке.' },
    { id: 3, author: 'Елена С.', rating: 5, date: '05.12.2024', text: 'Заказывала в подарок, очень довольна. Упаковка красивая!' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <Link to="/catalog" className="hover:text-primary transition-colors">{t.catalog}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{displayName}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square bg-card rounded-3xl overflow-hidden shadow-card"
            >
              <img
                src={productImages[selectedImage]}
                alt={displayName}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-mint text-secondary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  {t.new}
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-4 right-4 bg-coral text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  -{Math.round((1 - product.price / (product.oldPrice || product.price)) * 100)}%
                </span>
              )}
              
              {/* Image Navigation */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(i => (i - 1 + productImages.length) % productImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-card transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(i => (i + 1) % productImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-card transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                {displayName}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-sunny text-sunny' : 'text-muted'}`}
                    />
                  ))}
                  <span className="ml-2 font-semibold text-foreground">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  {product.reviewsCount} {t.reviews}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  {product.price.toLocaleString()} {t.currency}
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.oldPrice.toLocaleString()} {t.currency}
                  </span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <Check className="w-5 h-5 text-mint" />
                  <span className="text-mint font-medium">В наличии</span>
                </>
              ) : (
                <span className="text-destructive font-medium">{t.outOfStock}</span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-muted rounded-xl">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button
                size="lg"
                className="flex-1 h-12 gap-2"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                {t.addToCart}
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`h-12 w-12 ${inWishlist ? 'text-coral border-coral' : ''}`}
                onClick={handleToggleWishlist}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-coral' : ''}`} />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                <Truck className="w-8 h-8 text-mint" />
                <div>
                  <p className="font-medium text-sm text-foreground">Доставка</p>
                  <p className="text-xs text-muted-foreground">по всему КЗ</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                <Shield className="w-8 h-8 text-sky" />
                <div>
                  <p className="font-medium text-sm text-foreground">Гарантия</p>
                  <p className="text-xs text-muted-foreground">12 месяцев</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                <RotateCcw className="w-8 h-8 text-lavender" />
                <div>
                  <p className="font-medium text-sm text-foreground">Возврат</p>
                  <p className="text-xs text-muted-foreground">14 дней</p>
                </div>
              </div>
            </div>

            {/* Age & Category */}
            <div className="flex gap-2 flex-wrap">
              <span className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
                {t.age}: {product.ageRange} лет
              </span>
              <span className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
                {t[product.category as keyof typeof t] || product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <p className="text-foreground/80 leading-relaxed">
                {displayDescription || 
                  `${displayName} — отличный выбор для вашего ребёнка! Изготовлен из качественных и безопасных материалов. 
                  Соответствует всем стандартам качества и безопасности. Идеально подходит для детей возраста ${product.ageRange} лет.
                  Бренд ${product.brand} гарантирует высокое качество и долговечность продукции.`
                }
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="specs" className="mt-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <dt className="text-muted-foreground">Бренд</dt>
                  <dd className="font-medium text-foreground">{product.brand}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <dt className="text-muted-foreground">Возрастная группа</dt>
                  <dd className="font-medium text-foreground">{product.ageRange} лет</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <dt className="text-muted-foreground">Категория</dt>
                  <dd className="font-medium text-foreground">{t[product.category as keyof typeof t] || product.category}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <dt className="text-muted-foreground">Артикул</dt>
                  <dd className="font-medium text-foreground">KD-{product.id.padStart(6, '0')}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <dt className="text-muted-foreground">Страна производства</dt>
                  <dd className="font-medium text-foreground">Казахстан / Импорт</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <dt className="text-muted-foreground">Сертификаты</dt>
                  <dd className="font-medium text-foreground">ЕАС, РК</dd>
                </div>
              </dl>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary">{review.author[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'fill-sunny text-sunny' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80">{review.text}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Похожие товары
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Product;
