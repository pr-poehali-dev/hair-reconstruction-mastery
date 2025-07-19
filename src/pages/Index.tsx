import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  const services = [
    {
      title: "Восстановление волос",
      description: "Глубокое восстановление поврежденных и ослабленных волос",
      price: "от 3 000 ₽",
      icon: "Heart"
    },
    {
      title: "Увлажнение и питание",
      description: "Интенсивное увлажнение сухих и ломких волос",
      price: "от 2 500 ₽",
      icon: "Droplets"
    },
    {
      title: "Укрепление волос",
      description: "Возвращение объема и плотности тонким волосам",
      price: "от 2 800 ₽",
      icon: "Shield"
    },
    {
      title: "Лечение кожи головы",
      description: "Решение проблем перхоти, зуда и раздражения",
      price: "от 3 200 ₽",
      icon: "Star"
    }
  ]

  const problems = [
    {
      title: "Сухость и ломкость волос",
      description: "Восстановлю и увлажню волосы после окрашивания, завивки или частого использования термоприборов с помощью профессиональных процедур.",
      icon: "AlertTriangle"
    },
    {
      title: "Потеря объема и упругости",
      description: "Укреплю тонкие и ослабленные волосы, верну им плотность и облегчу укладку.",
      icon: "TrendingDown"
    },
    {
      title: "Непослушные и пушистые волосы",
      description: "Сделаю ваши волосы гладкими, послушными и легкими в уходе.",
      icon: "Wind"
    },
    {
      title: "Проблемы кожи головы",
      description: "Помогу при перхоти, зуде, раздражении или жирности, подберу лечение и правильный уход.",
      icon: "Brain"
    }
  ]

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Шира - настоящий мастер! Мои волосы стали живыми и блестящими уже после первой процедуры.",
      rating: 5
    },
    {
      name: "Мария Сидорова",
      text: "Долго искала специалиста по восстановлению волос. Результат превзошел все ожидания!",
      rating: 5
    },
    {
      name: "Елена Козлова",
      text: "Профессиональный подход и индивидуальная программа восстановления. Рекомендую!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#E91E63]">
            Болотова Ширин
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#E91E63] transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#E91E63] transition-colors">Портфолио</a>
            <a href="#prices" className="text-gray-700 hover:text-[#E91E63] transition-colors">Цены</a>
            <a href="#reviews" className="text-gray-700 hover:text-[#E91E63] transition-colors">Отзывы</a>
            <a href="#booking" className="text-gray-700 hover:text-[#E91E63] transition-colors">Запись</a>
          </div>
          <Button className="bg-[#E91E63] hover:bg-[#C2185B] text-white">
            Записаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Мастер по <span className="text-[#E91E63]">реконструкции волос</span> Болотова Ширин
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для своих волос мир нежной заботы и красоты через мои высококачественные процедуры и экспертные консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#E91E63] hover:bg-[#C2185B] text-white px-8 py-4 text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на процедуру
              </Button>
              <Button size="lg" variant="outline" className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Какие проблемы я помогу решить
            </h2>
            <p className="text-xl text-gray-600">
              Индивидуальный подход к каждой проблеме волос
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center">
                      <Icon name={problem.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <Badge className="bg-green-100 text-green-800 mb-2">✅</Badge>
                      <CardTitle className="text-xl text-gray-900">{problem.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">
              Профессиональные процедуры для здоровья ваших волос
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-gray-100">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#E91E63] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#E91E63] mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">
              Результаты до и после моих процедур
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200">
                <img 
                  src="/img/107e63a8-322e-4552-a9d3-fd06a366548d.jpg" 
                  alt="Результат процедуры восстановления волос"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Комплексное восстановление</h3>
                <p className="text-sm text-gray-600">Результат после глубокого восстановления поврежденных волос</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200">
                <img 
                  src="/img/aac63150-032b-49b5-a7d6-f74dc302d0fa.jpg" 
                  alt="До и после восстановления волос"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">До и после</h3>
                <p className="text-sm text-gray-600">Трансформация поврежденных волос в здоровые и блестящие</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200">
                <img 
                  src="/img/e0702b9f-bd28-46a7-919a-bd41b5b53271.jpg" 
                  alt="Процедура восстановления волос"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Процесс работы</h3>
                <p className="text-sm text-gray-600">Профессиональная процедура восстановления в салоне</p>
              </CardContent>
            </Card>
            {[4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Восстановление волос #{item}</h3>
                  <p className="text-sm text-gray-600">Результат после комплексной процедуры восстановления</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят о моей работе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Онлайн запись</h2>
              <p className="text-xl text-gray-600">
                Запишитесь на процедуру прямо сейчас
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E91E63]">
                      <option>Выберите услугу</option>
                      <option>Восстановление волос</option>
                      <option>Увлажнение и питание</option>
                      <option>Укрепление волос</option>
                      <option>Лечение кожи головы</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о проблемах с волосами или задайте вопрос" rows={4} />
                  </div>
                  <Button className="w-full bg-[#E91E63] hover:bg-[#C2185B] text-white py-3 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#E91E63] mb-4">Болотова Ширин</h3>
              <p className="text-gray-300 mb-4">
                Мастер по реконструкции волос с многолетним опытом работы
              </p>
              <div className="flex space-x-4">
                <a href="tel:+79884864979" className="text-[#E91E63] hover:text-[#C2185B] transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
                <a href="https://instagram.com/shirinbolottt" target="_blank" rel="noopener noreferrer" className="text-[#E91E63] hover:text-[#C2185B] transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="https://wa.me/79884864979" target="_blank" rel="noopener noreferrer" className="text-[#E91E63] hover:text-[#C2185B] transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Восстановление волос</li>
                <li>Увлажнение и питание</li>
                <li>Укрепление волос</li>
                <li>Лечение кожи головы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Москва</p>
                <p>📞 +7 (988) 486-49-79</p>
                <p>📱 @shirinbolottt</p>
                <p>⏰ Пн-Сб: 9:00-20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Болотова Ширин. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index