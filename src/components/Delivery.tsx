import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { DELIVERY_FEATURES } from "@/constants/data";

export const Delivery = () => {
  return (
    <section id="delivery" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Доставка
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DELIVERY_FEATURES.map((feature, index) => (
            <Card key={index} className="text-center p-6 border-pink-100">
              <Icon
                name={feature.icon as any}
                size={48}
                className={`${feature.color} mx-auto mb-4`}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
