import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Heart, User, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore, useTranslation, translations } from '@/lib/store';
import { categories } from '@/lib/products';
import { cn } from '@/lib/utils';

export const Header = () => {
  const t = useTranslation();
  const { cart, wishlist, language, setLanguage, getCartCount } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between text-sm">
          <span className="hidden sm:block">
            {language === 'ru' 
              ? '🎄 Новогодняя распродажа! Скидки до 50%' 
              : '🎄 Жаңа жылдық сату! 50% дейін жеңілдіктер'}
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={() => setLanguage(language === 'ru' ? 'kz' : 'ru')}
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'ru' ? 'Қаз' : 'Рус'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-coral rounded-xl flex items-center justify-center">
              <span className="text-xl">🧸</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
              KidsShop
            </span>
          </a>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.search}
                className="w-full h-12 pl-12 pr-4 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:bg-card outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="icon"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="icon" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>

            {/* Cart */}
            <Button variant="icon" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Account */}
            <Button variant="icon" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="icon"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={t.search}
                    className="w-full h-12 pl-12 pr-4 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:bg-card outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Categories Navigation - Desktop */}
      <nav className="hidden md:block border-t border-border bg-card">
        <div className="container">
          <ul className="flex items-center gap-1 py-2 overflow-x-auto">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all whitespace-nowrap"
                >
                  <span>{category.icon}</span>
                  <span>{(t as any)[category.id]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="container py-4">
              <ul className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{(t as any)[category.id]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
