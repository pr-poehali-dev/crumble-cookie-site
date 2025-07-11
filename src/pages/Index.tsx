import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(150);

  const desserts = [
    {
      id: 1,
      name: "Шоколадное печенье",
      description: "Насыщенный шоколадный вкус с кусочками темного шоколада",
      price: 120,
      oldPrice: 150,
      image: "img/63023d85-be36-43a8-8544-ab024f98239b.jpg",
      rating: 4.9,
      isNew: true,
    },
    {
      id: 2,
      name: "Мятный капкейк",
      description: "Освежающий мятный крем с хрустящими кусочками мяты",
      price: 180,
      oldPrice: 220,
      image: "img/e397e561-e386-471c-9c53-c52d55d5e52a.jpg",
      rating: 4.8,
      isNew: false,
    },
    {
      id: 3,
      name: "Классическое печенье",
      description: "Домашнее печенье по традиционному рецепту",
      price: 90,
      oldPrice: 120,
      image: "img/e2985c53-c83a-49c6-9257-fb9b03c6e1cc.jpg",
      rating: 4.7,
      isNew: false,
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      text: "Лучшие десерты в городе! Свежие и очень вкусные",
      date: "2 дня назад",
    },
    {
      id: 2,
      name: "Михаил Р.",
      rating: 5,
      text: "Быстрая доставка, отличное качество. Рекомендую!",
      date: "неделю назад",
    },
    {
      id: 3,
      name: "Елена В.",
      rating: 4,
      text: "Очень вкусно! Особенно понравился мятный капкейк",
      date: "2 недели назад",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cookie" size={32} className="text-pink-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Sweet Dreams
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                О нас
              </a>
              <a
                href="#menu"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Меню
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Доставка
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Отзывы
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                <Icon name="Star" size={16} className="mr-1" />
                {loyaltyPoints} баллов
              </Badge>
              <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
            Сладкие мечты
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Авторские десерты, приготовленные с любовью. Свежие ингредиенты,
            уникальные рецепты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-lg px-8 py-4"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Заказать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Программа лояльности</h2>
          <p className="text-lg mb-6 opacity-90">
            Копите баллы с каждой покупкой и получайте скидки до 20%!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
              <Icon name="Gift" size={24} />
              <span className="text-lg font-semibold">
                У вас {loyaltyPoints} баллов
              </span>
            </div>
            <Button
              variant="secondary"
              className="bg-white text-pink-600 hover:bg-gray-100"
            >
              <Icon name="Star" size={16} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Наше меню
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desserts.map((dessert) => (
              <Card
                key={dessert.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-pink-100"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {dessert.isNew && (
                    <Badge className="absolute top-2 right-2 bg-pink-500 hover:bg-pink-600">
                      Новинка
                    </Badge>
                  )}
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Icon
                      name="Star"
                      size={14}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-sm font-semibold">
                      {dessert.rating}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    {dessert.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {dessert.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-600">
                        {dessert.price}₽
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {dessert.oldPrice}₽
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700"
                      >
                        -
                        {Math.round(
                          ((dessert.oldPrice - dessert.price) /
                            dessert.oldPrice) *
                            100,
                        )}
                        %
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600">
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-pink-50 to-cyan-50"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">О нас</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sweet Dreams — это семейная кондитерская, которая создает
                уникальные десерты с 2018 года. Мы используем только натуральные
                ингредиенты и авторские рецепты.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="text-gray-700">Натуральные ингредиенты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="text-gray-700">Авторские рецепты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="text-gray-700">
                    Свежая выпечка каждый день
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <Icon
                  name="Users"
                  size={32}
                  className="text-pink-500 mx-auto mb-2"
                />
                <h3 className="text-2xl font-bold text-gray-800">5000+</h3>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <Icon
                  name="Award"
                  size={32}
                  className="text-cyan-500 mx-auto mb-2"
                />
                <h3 className="text-2xl font-bold text-gray-800">50+</h3>
                <p className="text-gray-600">Видов десертов</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-pink-500 mx-auto mb-2"
                />
                <h3 className="text-2xl font-bold text-gray-800">30 мин</h3>
                <p className="text-gray-600">Быстрая доставка</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <Icon
                  name="Star"
                  size={32}
                  className="text-yellow-500 mx-auto mb-2"
                />
                <h3 className="text-2xl font-bold text-gray-800">4.9</h3>
                <p className="text-gray-600">Рейтинг качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Доставка
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-pink-100">
              <Icon
                name="Truck"
                size={48}
                className="text-pink-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Быстрая доставка
              </h3>
              <p className="text-gray-600">
                Доставим ваш заказ в течение 30-60 минут
              </p>
            </Card>
            <Card className="text-center p-6 border-cyan-100">
              <Icon
                name="MapPin"
                size={48}
                className="text-cyan-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Вся Москва
              </h3>
              <p className="text-gray-600">
                Доставляем по всей Москве и области
              </p>
            </Card>
            <Card className="text-center p-6 border-pink-100">
              <Icon
                name="CreditCard"
                size={48}
                className="text-pink-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Удобная оплата
              </h3>
              <p className="text-gray-600">Наличные, карта, онлайн-оплата</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-20 px-4 bg-gradient-to-br from-pink-50 to-cyan-50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 border-pink-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < review.rating ? "fill-current" : ""}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-800">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cookie" size={24} className="text-pink-500" />
                <h3 className="text-xl font-bold">Sweet Dreams</h3>
              </div>
              <p className="text-gray-400">Авторские десерты с любовью</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@sweetdreams.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Сладкая, 10</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Меню</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#"
                  className="block hover:text-pink-400 transition-colors"
                >
                  Печенье
                </a>
                <a
                  href="#"
                  className="block hover:text-pink-400 transition-colors"
                >
                  Капкейки
                </a>
                <a
                  href="#"
                  className="block hover:text-pink-400 transition-colors"
                >
                  Торты
                </a>
                <a
                  href="#"
                  className="block hover:text-pink-400 transition-colors"
                >
                  Новинки
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pink-400"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pink-400"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pink-400"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sweet Dreams. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
