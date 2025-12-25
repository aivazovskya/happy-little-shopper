import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useStore, useTranslation } from '@/lib/store';
import { products } from '@/lib/products';

const Wishlist = () => {
  const t = useTranslation();
  const { wishlist } = useStore();

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{t.wishlist}</span>
        </nav>

        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          {t.wishlist}
        </h1>

        {wishlistProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {wishlistProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-8xl mb-6"
            >
              <Heart className="w-24 h-24 mx-auto text-muted-foreground/30" />
            </motion.div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Список желаний пуст
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Добавляйте понравившиеся товары в избранное, нажимая на сердечко на карточке товара
            </p>
            <Link to="/catalog">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="w-5 h-5" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
