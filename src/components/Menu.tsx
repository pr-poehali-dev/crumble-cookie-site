import { DessertCard } from "@/components/DessertCard";
import { DESSERTS } from "@/constants/data";
import { Dessert } from "@/types";

interface MenuProps {
  onAddToCart?: (dessert: Dessert) => void;
}

export const Menu = ({ onAddToCart }: MenuProps) => {
  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Наше меню
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESSERTS.map((dessert) => (
            <DessertCard
              key={dessert.id}
              dessert={dessert}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
