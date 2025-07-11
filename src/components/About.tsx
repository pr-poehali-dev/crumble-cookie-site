import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { STATS, ABOUT_FEATURES } from "@/constants/data";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-crumbl-cream to-crumbl-purple"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">О нас</h2>
            <p className="text-lg text-gray-600 mb-6">
              Crumbl Cookies — это семейная пекарня, которая создает уникальные
              печенья с 2020 года. Мы используем только натуральные ингредиенты
              и авторские рецепты.
            </p>
            <div className="space-y-4">
              {ABOUT_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
              <Card key={index} className="bg-white p-6 text-center shadow-md">
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className={`${stat.color} mx-auto mb-2`}
                />
                <h3 className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
