import {
  Dessert,
  Review,
  NavigationItem,
  StatItem,
  DeliveryFeature,
} from "@/types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#delivery", label: "Доставка" },
  { href: "#reviews", label: "Отзывы" },
];

export const DESSERTS: Dessert[] = [
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

export const REVIEWS: Review[] = [
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

export const STATS: StatItem[] = [
  {
    icon: "Users",
    value: "5000+",
    label: "Довольных клиентов",
    color: "text-pink-500",
  },
  {
    icon: "Award",
    value: "50+",
    label: "Видов десертов",
    color: "text-cyan-500",
  },
  {
    icon: "Clock",
    value: "30 мин",
    label: "Быстрая доставка",
    color: "text-pink-500",
  },
  {
    icon: "Star",
    value: "4.9",
    label: "Рейтинг качества",
    color: "text-yellow-500",
  },
];

export const DELIVERY_FEATURES: DeliveryFeature[] = [
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставим ваш заказ в течение 30-60 минут",
    color: "text-pink-500",
  },
  {
    icon: "MapPin",
    title: "Вся Москва",
    description: "Доставляем по всей Москве и области",
    color: "text-cyan-500",
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description: "Наличные, карта, онлайн-оплата",
    color: "text-pink-500",
  },
];

export const ABOUT_FEATURES = [
  "Натуральные ингредиенты",
  "Авторские рецепты",
  "Свежая выпечка каждый день",
];

export const FOOTER_LINKS = {
  menu: [
    { href: "#", label: "Печенье" },
    { href: "#", label: "Капкейки" },
    { href: "#", label: "Торты" },
    { href: "#", label: "Новинки" },
  ],
  contact: {
    phone: "+7 (495) 123-45-67",
    email: "info@sweetdreams.ru",
    address: "Москва, ул. Сладкая, 10",
  },
};
