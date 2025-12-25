import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  nameKz?: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  category: string;
  ageRange: string;
  brand: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  descriptionKz?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  language: 'ru' | 'kz';
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  setLanguage: (lang: 'ru' | 'kz') => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      language: 'ru',
      
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.product.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { product, quantity }] };
        });
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      toggleWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        }));
      },
      
      isInWishlist: (productId) => get().wishlist.includes(productId),
      
      setLanguage: (language) => set({ language }),
      
      getCartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'kids-store',
    }
  )
);

// Translations
export const translations = {
  ru: {
    // Header
    search: 'Поиск товаров...',
    catalog: 'Каталог',
    cart: 'Корзина',
    wishlist: 'Избранное',
    account: 'Аккаунт',
    
    // Categories
    categories: 'Категории',
    newborns: 'Для новорождённых',
    clothing: 'Одежда и обувь',
    toys: 'Игрушки',
    strollers: 'Коляски и автокресла',
    furniture: 'Мебель для детской',
    school: 'Товары для школы',
    hygiene: 'Гигиена и уход',
    feeding: 'Питание и кормление',
    development: 'Развитие и обучение',
    sale: 'Акции и скидки',
    
    // Hero
    heroTitle: 'Лучшие товары для ваших малышей',
    heroSubtitle: 'Качественные и безопасные товары для детей от 0 до 14 лет с доставкой по всему Казахстану',
    shopNow: 'Начать покупки',
    viewCatalog: 'Смотреть каталог',
    
    // Products
    products: 'Товары',
    newProducts: 'Новинки',
    popularProducts: 'Популярные товары',
    saleProducts: 'Распродажа',
    addToCart: 'В корзину',
    inCart: 'В корзине',
    outOfStock: 'Нет в наличии',
    reviews: 'отзывов',
    
    // Cart
    yourCart: 'Ваша корзина',
    emptyCart: 'Корзина пуста',
    continueShopping: 'Продолжить покупки',
    checkout: 'Оформить заказ',
    total: 'Итого',
    remove: 'Удалить',
    
    // Footer
    aboutUs: 'О компании',
    delivery: 'Доставка и оплата',
    returns: 'Возврат и гарантия',
    contacts: 'Контакты',
    blog: 'Блог',
    privacy: 'Политика конфиденциальности',
    offer: 'Публичная оферта',
    allRights: 'Все права защищены',
    
    // Misc
    currency: '₸',
    age: 'Возраст',
    brand: 'Бренд',
    price: 'Цена',
    rating: 'Рейтинг',
    filters: 'Фильтры',
    sortBy: 'Сортировка',
    new: 'Новинка',
    hot: 'Хит',
  },
  kz: {
    // Header
    search: 'Тауарларды іздеу...',
    catalog: 'Каталог',
    cart: 'Себет',
    wishlist: 'Таңдаулылар',
    account: 'Аккаунт',
    
    // Categories
    categories: 'Санаттар',
    newborns: 'Жаңа туған нәрестелерге',
    clothing: 'Киім және аяқ киім',
    toys: 'Ойыншықтар',
    strollers: 'Арбалар мен автокресла',
    furniture: 'Бала бөлмесіне жиһаз',
    school: 'Мектеп тауарлары',
    hygiene: 'Гигиена және күтім',
    feeding: 'Тамақтандыру',
    development: 'Даму және оқыту',
    sale: 'Акциялар',
    
    // Hero
    heroTitle: 'Сіздің балаларыңызға ең жақсы тауарлар',
    heroSubtitle: 'Қазақстан бойынша жеткізумен 0-ден 14 жасқа дейінгі балаларға арналған сапалы және қауіпсіз тауарлар',
    shopNow: 'Сатып алуды бастау',
    viewCatalog: 'Каталогты қарау',
    
    // Products
    products: 'Тауарлар',
    newProducts: 'Жаңа тауарлар',
    popularProducts: 'Танымал тауарлар',
    saleProducts: 'Жеңілдіктер',
    addToCart: 'Себетке',
    inCart: 'Себетте',
    outOfStock: 'Қоймада жоқ',
    reviews: 'пікір',
    
    // Cart
    yourCart: 'Сіздің себетіңіз',
    emptyCart: 'Себет бос',
    continueShopping: 'Сатып алуды жалғастыру',
    checkout: 'Тапсырыс беру',
    total: 'Барлығы',
    remove: 'Жою',
    
    // Footer
    aboutUs: 'Компания туралы',
    delivery: 'Жеткізу және төлем',
    returns: 'Қайтару және кепілдік',
    contacts: 'Байланыс',
    blog: 'Блог',
    privacy: 'Құпиялылық саясаты',
    offer: 'Жария оферта',
    allRights: 'Барлық құқықтар қорғалған',
    
    // Misc
    currency: '₸',
    age: 'Жасы',
    brand: 'Бренд',
    price: 'Бағасы',
    rating: 'Рейтинг',
    filters: 'Сүзгілер',
    sortBy: 'Сұрыптау',
    new: 'Жаңа',
    hot: 'Хит',
  },
};

export const useTranslation = () => {
  const language = useStore((state) => state.language);
  return translations[language];
};
