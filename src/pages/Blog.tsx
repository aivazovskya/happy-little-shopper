import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: '1',
    title: 'Как выбрать первую коляску для малыша',
    excerpt: 'Подробный гид по выбору коляски: на что обратить внимание, какие типы бывают и какая подойдёт именно вам.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&h=400&fit=crop',
    category: 'Советы',
    date: '15 декабря 2024',
    readTime: '5 мин',
  },
  {
    id: '2',
    title: 'Развивающие игрушки для детей 1-3 года',
    excerpt: 'Какие игрушки действительно развивают малыша и почему не стоит покупать всё подряд.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop',
    category: 'Развитие',
    date: '10 декабря 2024',
    readTime: '7 мин',
  },
  {
    id: '3',
    title: 'Готовим ребёнка к детскому саду',
    excerpt: 'Советы психолога: как подготовить малыша к новому этапу жизни и сделать адаптацию комфортной.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
    category: 'Психология',
    date: '5 декабря 2024',
    readTime: '6 мин',
  },
  {
    id: '4',
    title: 'Безопасность в детской комнате',
    excerpt: 'Чек-лист для родителей: как сделать детскую комнату максимально безопасной для малыша.',
    image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=600&h=400&fit=crop',
    category: 'Безопасность',
    date: '1 декабря 2024',
    readTime: '4 мин',
  },
  {
    id: '5',
    title: 'Что подарить ребёнку на Новый год',
    excerpt: 'Идеи подарков для детей разного возраста: от пинеток до гаджетов.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
    category: 'Праздники',
    date: '25 ноября 2024',
    readTime: '8 мин',
  },
  {
    id: '6',
    title: 'Как выбрать школьный рюкзак',
    excerpt: 'Ортопедическая спинка, вес, материал — разбираемся во всех тонкостях выбора.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
    category: 'Школа',
    date: '20 ноября 2024',
    readTime: '5 мин',
  },
];

const categories = ['Все', 'Советы', 'Развитие', 'Психология', 'Безопасность', 'Праздники', 'Школа'];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Блог</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Блог для родителей
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Полезные статьи, советы экспертов и рекомендации по выбору товаров для детей
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-3xl overflow-hidden shadow-card mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-foreground/80 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime} чтения
                </span>
                <Button className="gap-2">
                  Читать статью
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-card rounded-2xl overflow-hidden shadow-card group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-muted text-muted-foreground text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    Читать
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Загрузить ещё статьи
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
