import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Shield" size={32} className="text-purple-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            StandoffCheats
          </span>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Функции
          </Button>
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Цены
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Скачать</Button>
        </div>
      </nav>
    </header>
  );
}
