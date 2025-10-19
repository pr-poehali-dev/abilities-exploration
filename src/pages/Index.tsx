import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", position: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={32} className="text-primary" />
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ПВЗ Карьера
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('vacancies')} className="text-sm font-medium hover:text-primary transition-colors">Вакансии</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
            </div>
            <Button onClick={() => scrollToSection('form')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Откликнуться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Достойная работа с <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">гарантированным карьерным ростом</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Работай в крупнейшей сети пунктов выдачи Ozon, Wildberries и Яндекс Маркет. Гибкий график, достойная зарплата и карьерный рост.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('form')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  <Icon name="Briefcase" size={20} className="mr-2" />
                  Посмотреть вакансии
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/9f3120c6-7a2e-4895-9539-0d988dd3b9d9/files/00f6b1df-6032-4056-babb-708188224f99.jpg" 
                  alt="Wildberries ПВЗ" 
                  className="w-full max-w-lg drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">О нашей компании</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы — федеральная сеть пунктов выдачи с более чем 500 точками по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "MapPin", value: "500+", label: "Пунктов выдачи по России" },
              { icon: "Users", value: "2000+", label: "Сотрудников в команде" },
              { icon: "TrendingUp", value: "5 лет", label: "Успешной работы на рынке" }
            ].map((stat, i) => (
              <Card key={i} className="text-center hover:scale-105 transition-transform animate-scale-in border-purple-100">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-base">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаём лучшие условия для работы и развития каждого сотрудника
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Clock", title: "Гибкий график", desc: "Выбирайте удобное время работы: полный день, сменный график или подработка" },
              { icon: "Wallet", title: "Достойная оплата", desc: "Конкурентная зарплата + бонусы за выполнение планов и переработки" },
              { icon: "TrendingUp", title: "Карьерный рост", desc: "Прозрачная система повышения от оператора до управляющего сетью" },
              { icon: "GraduationCap", title: "Обучение", desc: "Бесплатное обучение с первого дня работы и регулярные тренинги" },
              { icon: "Heart", title: "Соцпакет", desc: "Официальное трудоустройство, ДМС, корпоративные скидки" },
              { icon: "Users", title: "Дружный коллектив", desc: "Поддержка команды, корпоративные мероприятия и комфортная атмосфера" }
            ].map((benefit, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-purple-100">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name={benefit.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Открытые вакансии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Найдите позицию, которая подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Оператор ПВЗ", 
                salary: "от 40 000 ₽", 
                schedule: "Полный день / Сменный график",
                requirements: ["Ответственность", "Коммуникабельность", "Готовность к обучению"]
              },
              { 
                title: "Старший оператор", 
                salary: "от 55 000 ₽", 
                schedule: "Полный день",
                requirements: ["Опыт работы от 6 месяцев", "Организаторские способности", "Знание CRM-систем"]
              },
              { 
                title: "Курьер-комплектовщик", 
                salary: "от 45 000 ₽", 
                schedule: "Сменный график",
                requirements: ["Физическая выносливость", "Внимательность", "Водительские права категории B"]
              },
              { 
                title: "Администратор ПВЗ", 
                salary: "от 65 000 ₽", 
                schedule: "Полный день",
                requirements: ["Опыт управления от 1 года", "Знание 1С", "Лидерские качества"]
              }
            ].map((job, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-purple-100">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-heading text-2xl">{job.title}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{job.salary}</span>
                  </div>
                  <CardDescription className="text-base flex items-center gap-2 mb-4">
                    <Icon name="Clock" size={16} />
                    {job.schedule}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">Требования:</p>
                  <ul className="space-y-1 mb-4">
                    {job.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => scrollToSection('form')} className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Откликнуться на вакансию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Отзывы сотрудников</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о работе в нашей команде
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Анна Петрова", 
                position: "Оператор ПВЗ", 
                text: "Работаю здесь уже 2 года. Отличная команда, удобный график и стабильная зарплата. За это время выросла до старшего оператора!",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"
              },
              { 
                name: "Дмитрий Смирнов", 
                position: "Курьер-комплектовщик", 
                text: "Пришёл на подработку, а остался на полный день. Хорошие условия труда, всегда выплачивают вовремя. Рекомендую!",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry"
              },
              { 
                name: "Елена Волкова", 
                position: "Администратор ПВЗ", 
                text: "Начинала простым оператором 3 года назад. Компания даёт реальные возможности для роста. Сейчас управляю целым пунктом!",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
              }
            ].map((review, i) => (
              <Card key={i} className="hover:shadow-xl transition-all animate-fade-in border-purple-100">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full" />
                    <div>
                      <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на вопросы о работе в нашей компании
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: "Нужен ли опыт работы?", 
                a: "Нет, опыт не обязателен. Мы проводим полное обучение для всех новых сотрудников. Главное — желание работать и учиться." 
              },
              { 
                q: "Какой график работы?", 
                a: "Мы предлагаем несколько вариантов: полный день (5/2), сменный график (2/2) и подработку. График обсуждается индивидуально." 
              },
              { 
                q: "Когда выплачивается зарплата?", 
                a: "Зарплата выплачивается два раза в месяц: аванс 20 числа и основная часть 5 числа следующего месяца. Всегда вовремя!" 
              },
              { 
                q: "Есть ли возможность карьерного роста?", 
                a: "Да! У нас прозрачная система карьерного роста: оператор → старший оператор → администратор → управляющий. Многие руководители начинали с базовых позиций." 
              },
              { 
                q: "Какие документы нужны для трудоустройства?", 
                a: "Паспорт, СНИЛС, ИНН и трудовая книжка (если есть). Оформление официальное по ТК РФ со всеми гарантиями." 
              },
              { 
                q: "Предоставляете ли вы жильё иногородним?", 
                a: "Да, для иногородних сотрудников мы помогаем с поиском жилья и частично компенсируем аренду в первые месяцы работы." 
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border-purple-100 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="form" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Откликнуться на вакансию</h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <Card className="animate-scale-in border-purple-100 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов" 
                    required 
                    className="border-purple-200 focus:border-primary"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (900) 123-45-67" 
                      required 
                      className="border-purple-200 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ivan@example.com" 
                      className="border-purple-200 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Интересующая вакансия *</Label>
                  <Input 
                    id="position" 
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    placeholder="Например: Оператор ПВЗ" 
                    required 
                    className="border-purple-200 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сопроводительное письмо</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о себе и своём опыте..." 
                    rows={5}
                    className="border-purple-200 focus:border-primary"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-4">Контакты для связи</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Отдел кадров</p>
                    <a href="tel:+78001234567" className="text-white/90 hover:text-white">+7 (800) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:hr@pvz-career.ru" className="text-white/90 hover:text-white">hr@pvz-career.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Главный офис</p>
                    <p className="text-white/90">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Linkedin'].map((social, i) => (
                  <button 
                    key={i}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name={social as any} size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/80">© 2024 ПВЗ Карьера. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;