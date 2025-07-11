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
    price: 150,
    oldPrice: 180,
    image: "img/83e8fc31-751b-4a3a-9c26-083f7988e7eb.jpg",
    rating: 4.9,
    isNew: true,
  },
  {
    id: 2,
    name: "Розовое печенье",
    description: "Сладкое клубничное печенье с нежной розовой глазурью",
    price: 180,
    oldPrice: 220,
    image: "img/217db6cc-e879-4526-b023-518f44557b94.jpg",
    rating: 4.8,
    isNew: false,
  },
  {
    id: 3,
    name: "Коричное печенье",
    description: "Теплое печенье с корицей и кремовой глазурью",
    price: 170,
    oldPrice: 200,
    image: "img/05cb5328-8be1-4cdd-9d6c-8719d61d49fb.jpg",
    rating: 4.7,
    isNew: false,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Анна К.",
    rating: 5,
    text: "Лучшие печенья в городе! Как в детстве у бабушки, только лучше!",
    date: "2 дня назад",
  },
  {
    id: 2,
    name: "Михаил Р.",
    rating: 5,
    text: "Невероятно вкусные! Заказываю каждую неделю для всей семьи",
    date: "неделю назад",
  },
  {
    id: 3,
    name: "Елена В.",
    rating: 4,
    text: "Особенно понравилось розовое печенье - нежное и ароматное!",
    date: "2 недели назад",
  },
];

export const STATS: StatItem[] = [
  {
    icon: "Users",
    value: "10000+",
    label: "Довольных клиентов",
    color: "text-pink-500",
  },
  {
    icon: "Award",
    value: "25+",
    label: "Видов печенья",
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
  "Натуральные ингредиенты премиум-класса",
  "Авторские рецепты от шеф-кондитера",
  "Свежая выпечка каждый день",
];

export const FOOTER_LINKS = {
  menu: [
    { href: "#", label: "Шоколадные" },
    { href: "#", label: "Фруктовые" },
    { href: "#", label: "Классические" },
    { href: "#", label: "Новинки недели" },
  ],
  contact: {
    phone: "+7 (495) 123-45-67",
    email: "info@crumblcookies.ru",
    address: "Москва, ул. Печенная, 15",
  },
};
