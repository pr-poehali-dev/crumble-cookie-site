import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dessert } from "@/types";

interface DessertCardProps {
  dessert: Dessert;
  onAddToCart?: (dessert: Dessert) => void;
}

export const DessertCard = ({ dessert, onAddToCart }: DessertCardProps) => {
  const discountPercentage = Math.round(
    ((dessert.oldPrice - dessert.price) / dessert.oldPrice) * 100,
  );

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-crumbl-cream">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={dessert.image}
          alt={dessert.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {dessert.isNew && (
          <Badge className="absolute top-2 right-2 bg-crumbl-pink hover:bg-pink-600">
            Новинка
          </Badge>
        )}
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Icon
            name="Star"
            size={14}
            className="text-yellow-400 fill-current"
          />
          <span className="text-sm font-semibold">{dessert.rating}</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">{dessert.name}</CardTitle>
        <CardDescription className="text-gray-600">
          {dessert.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-crumbl-pink">
              {dessert.price}₽
            </span>
            <span className="text-sm text-gray-400 line-through">
              {dessert.oldPrice}₽
            </span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              -{discountPercentage}%
            </Badge>
          </div>
        </div>
        <Button
          className="w-full bg-gradient-to-r from-crumbl-pink to-crumbl-blue hover:from-pink-600 hover:to-cyan-600"
          onClick={() => onAddToCart?.(dessert)}
        >
          <Icon name="Plus" size={16} className="mr-2" />В корзину
        </Button>
      </CardContent>
    </Card>
  );
};
