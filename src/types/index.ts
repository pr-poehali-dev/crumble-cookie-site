export interface Dessert {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  rating: number;
  isNew: boolean;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export interface DeliveryFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
}
