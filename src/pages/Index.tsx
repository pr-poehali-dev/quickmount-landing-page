import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Монтаж вентиляции в 2 раза быстрее. Без ошибок. Без инструментов.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Система быстрого монтажа бытовых вентиляторов для застройщиков, монтажных бригад и проектировщиков
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить расчет сметы
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
            На объекте всё идёт по плану… <br />пока не начинается монтаж
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Users',
                title: 'Каждый делает по-своему',
                description: 'Монтажники используют разные методы, качество непредсказуемо',
              },
              {
                icon: 'Clock',
                title: 'Монтаж занимает вечность',
                description: 'Сверление, крепление, подгонка — всё вручную съедает часы',
              },
              {
                icon: 'DollarSign',
                title: 'Переделки убивают бюджет',
                description: 'Ошибки в монтаже обходятся дороже, чем сами материалы',
              },
            ].map((problem, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={problem.icon} size={32} className="text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              QuickMount — система, которая превращает монтаж вентиляции в простое действие
            </h2>
            <p className="text-xl text-muted-foreground">
              Как это работает: рамка, подключение, щелчок — готово.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Установите рамку', description: 'Монтируется за секунды без инструментов' },
              { step: '2', title: 'Подключите провода', description: 'Простые клеммы, понятная схема' },
              { step: '3', title: 'Защелкните вентилятор', description: 'Один щелчок — монтаж завершен' },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {step.step !== '3' && (
                  <Icon 
                    name="ArrowRight" 
                    size={32} 
                    className="hidden md:block absolute top-8 -right-6 text-primary"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
            Преимущества QuickMount
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Zap',
                title: 'Монтаж в 2 раза быстрее',
                description: '30-40 точек в день вместо 15-20',
              },
              {
                icon: 'Package',
                title: 'Установка без инструмента',
                description: 'Не нужны дрели, шуруповёрты и крепёж',
              },
              {
                icon: 'Target',
                title: 'Идеально ровный монтаж',
                description: 'Каждый раз — как по линейке',
              },
              {
                icon: 'Shield',
                title: 'Меньше рекламаций',
                description: 'Проверенная надёжность, нет отвалившихся блоков',
              },
              {
                icon: 'FileText',
                title: 'Готовая проектная документация',
                description: 'BIM-файлы и чертежи в комплекте',
              },
              {
                icon: 'TrendingUp',
                title: 'Экономия бюджета',
                description: 'Снижение трудозатрат до 50%',
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
            Доказательства
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Numbers */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-primary/5 rounded-xl">
                <div className="text-5xl font-display font-bold text-primary mb-2">40-50%</div>
                <p className="text-lg text-muted-foreground">экономии времени монтажа</p>
              </div>
              <div className="p-8 bg-primary/5 rounded-xl">
                <div className="text-5xl font-display font-bold text-primary mb-2">0</div>
                <p className="text-lg text-muted-foreground">рекламаций в пилотном проекте</p>
              </div>
              <div className="p-8 bg-primary/5 rounded-xl">
                <div className="text-5xl font-display font-bold text-primary mb-2">2x</div>
                <p className="text-lg text-muted-foreground">больше точек за смену</p>
              </div>
            </div>

            {/* Testimonial */}
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-start gap-4">
                  <Icon name="Quote" size={48} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-lg mb-4 italic">
                      "Монтажники закрывали 30–40 точек в день вместо 15–20. Система окупилась уже на первом объекте за счёт экономии времени бригад."
                    </p>
                    <p className="font-semibold">Руководитель монтажного отдела</p>
                    <p className="text-sm text-muted-foreground">Крупный застройщик, г. Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Icon name="Award" size={48} className="text-primary mb-3" />
                <p className="font-semibold">Сертификаты качества</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Box" size={48} className="text-primary mb-3" />
                <p className="font-semibold">BIM-файлы в комплекте</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="CheckCircle" size={48} className="text-primary mb-3" />
                <p className="font-semibold">Тесты вибрации и нагрузки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Не отвалится ли вентилятор?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  QuickMount прошла тесты на вибрацию и нагрузку. Крепление надёжнее традиционного монтажа на саморезы. Система выдерживает нагрузки, превышающие вес вентилятора в 10 раз.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Почему QuickMount дороже обычного монтажа?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  QuickMount экономит трудозатраты в 2 раза. Да, система стоит дороже саморезов, но экономия на времени монтажа окупает разницу уже на первом объекте. Плюс — ноль рекламаций и переделок.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Нужно ли обучать монтажников?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Система настолько проста, что достаточно 2-минутного видео. Монтажники осваивают QuickMount буквально с первой точки. Никаких сложных инструкций или специальных навыков не требуется.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Подходит ли для всех типов вентиляторов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  QuickMount разработана для стандартных бытовых вентиляторов диаметром 100-150 мм. Поддерживаются все популярные модели на российском рынке. Для специфических моделей возможна адаптация.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Как получить проектную документацию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Все BIM-файлы, чертежи и спецификации входят в комплект поставки. Документация соответствует российским стандартам и готова к использованию в проектах.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ваш следующий объект можно смонтировать гораздо быстрее
              </h2>
              <p className="text-xl text-muted-foreground">
                Получите расчёт сметы и каталог с BIM-узлами
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Ваше имя <span className="text-destructive">*</span>
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Компания <span className="text-destructive">*</span>
                      </label>
                      <Input
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ООО «Стройкомплект»"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ivan@company.ru"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон <span className="text-destructive">*</span>
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Комментарий
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем объекте: площадь, количество точек вентиляции, сроки..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-12">
                    Получить расчет сметы
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Отправляя форму, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-display font-bold mb-4">QuickMount</div>
          <p className="text-white/80 mb-6">
            Система быстрого монтажа вентиляции
          </p>
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <span>© 2024 QuickMount</span>
            <span>•</span>
            <span>Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
