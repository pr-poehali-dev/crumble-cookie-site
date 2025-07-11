import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { FOOTER_LINKS } from "@/constants/data";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Cookie" size={24} className="text-pink-500" />
              <h3 className="text-xl font-bold">Sweet Dreams</h3>
            </div>
            <p className="text-gray-400">Авторские десерты с любовью</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>{FOOTER_LINKS.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>{FOOTER_LINKS.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>{FOOTER_LINKS.contact.address}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Меню</h4>
            <div className="space-y-2 text-gray-400">
              {FOOTER_LINKS.menu.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block hover:text-pink-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-pink-400"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-pink-400"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-pink-400"
              >
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sweet Dreams. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
