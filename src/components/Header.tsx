import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { NAVIGATION_ITEMS } from "@/constants/data";

interface HeaderProps {
  loyaltyPoints: number;
}

export const Header = ({ loyaltyPoints }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Cookie" size={32} className="text-crumbl-pink" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-crumbl-pink to-crumbl-blue bg-clip-text text-transparent">
              Crumbl Cookies
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-crumbl-pink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Badge
              variant="secondary"
              className="bg-crumbl-cream text-crumbl-brown"
            >
              <Icon name="Star" size={16} className="mr-1" />
              {loyaltyPoints} баллов
            </Badge>
            <Button className="bg-gradient-to-r from-crumbl-pink to-crumbl-blue hover:from-pink-600 hover:to-cyan-600">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
