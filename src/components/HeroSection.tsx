import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Доминируй в Standoff 2
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Лучшие читы для Standoff 2 с продвинутыми функциями aimbot, wallhack и
          ESP. Необнаруживаемые и безопасные.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
          >
            <Icon name="Download" className="mr-2" />
            Скачать сейчас
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3"
          >
            <Icon name="Play" className="mr-2" />
            Посмотреть демо
          </Button>
        </div>
      </div>
    </section>
  );
}
