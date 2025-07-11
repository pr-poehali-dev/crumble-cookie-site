import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Hero = () => {
  return (
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
  );
};
