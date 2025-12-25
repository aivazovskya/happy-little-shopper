import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const Auth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      toast.error('Заполните все поля');
      return;
    }

    setIsLoading(true);
    
    // Simulate login - will be replaced with real auth
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Вы успешно вошли в систему');
      navigate('/account');
    }, 1000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    if (registerPassword !== registerConfirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    }

    if (registerPassword.length < 6) {
      toast.error('Пароль должен содержать минимум 6 символов');
      return;
    }

    if (!acceptTerms) {
      toast.error('Примите условия использования');
      return;
    }

    setIsLoading(true);
    
    // Simulate registration - will be replaced with real auth
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Регистрация успешна! Проверьте email для подтверждения');
      navigate('/account');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          На главную
        </Link>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">👋</div>
              <h1 className="font-heading text-2xl font-bold text-foreground">
                Добро пожаловать!
              </h1>
              <p className="text-muted-foreground mt-2">
                Войдите или создайте аккаунт
              </p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="login" className="flex-1">Вход</TabsTrigger>
                <TabsTrigger value="register" className="flex-1">Регистрация</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Пароль
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Введите пароль"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm text-foreground/80">Запомнить меня</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Забыли пароль?
                    </Link>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Вход...' : 'Войти'}
                  </Button>
                </form>
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Имя *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Телефон
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={registerPhone}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Пароль *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Минимум 6 символов"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Подтвердите пароль *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Повторите пароль"
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <Checkbox
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-foreground/80">
                      Я согласен с{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </Link>{' '}
                      и{' '}
                      <Link to="/offer" className="text-primary hover:underline">
                        публичной офертой
                      </Link>
                    </span>
                  </label>

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
