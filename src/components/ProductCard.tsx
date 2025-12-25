import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore, useTranslation, Product } from '@/lib/store';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const t = useTranslation();
  const { addToCart, toggleWishlist, isInWishlist, cart, language } = useStore();
  
  const inWishlist = isInWishlist(product.id);
  const inCart = cart.some((item) => item.product.id === product.id);
  const displayName = language === 'kz' && product.nameKz ? product.nameKz : product.name;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ' + t.currency;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-mint text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {t.new}
          </span>
        )}
        {product.isSale && product.oldPrice && (
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className={cn(
          "absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
          inWishlist 
            ? "bg-primary text-primary-foreground" 
            : "bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-card"
        )}
      >
        <Heart className={cn("w-5 h-5", inWishlist && "fill-current")} />
      </button>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={displayName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            variant={inCart ? "accent" : "cart"}
            size="sm"
            className="w-full"
            onClick={() => !inCart && addToCart(product)}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4" />
            {!product.inStock ? t.outOfStock : inCart ? t.inCart : t.addToCart}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Age */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-muted-foreground">{product.ageRange} лет</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{product.brand}</span>
        </div>

        {/* Name */}
        <h3 className="font-heading font-semibold text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
          {displayName}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-sunny text-sunny" />
          <span className="text-sm font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewsCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary font-heading">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
