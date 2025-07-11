import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LoyaltyProgramProps {
  loyaltyPoints: number;
}

export const LoyaltyProgram = ({ loyaltyPoints }: LoyaltyProgramProps) => {
  return (
    <section className="py-12 bg-gradient-to-r from-crumbl-pink to-crumbl-blue text-white">
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
            className="bg-white text-crumbl-pink hover:bg-gray-100"
          >
            <Icon name="Star" size={16} className="mr-2" />
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};
