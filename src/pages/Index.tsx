import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      title: "Aimbot",
      description:
        "Автоматическое наведение на противников с настраиваемой плавностью",
      icon: "Target",
      color: "bg-purple-500",
    },
    {
      title: "Wallhack",
      description: "Видимость врагов через стены и препятствия",
      icon: "Eye",
      color: "bg-pink-500",
    },
    {
      title: "ESP",
      description: "Отображение информации о игроках, оружии и предметах",
      icon: "Radar",
      color: "bg-blue-500",
    },
    {
      title: "Triggerbot",
      description: "Автоматическая стрельба при наведении на цель",
      icon: "Zap",
      color: "bg-orange-500",
    },
  ];

  const plans = [
    {
      name: "Базовый",
      price: "299₽",
      period: "месяц",
      features: ["Aimbot", "ESP базовый", "Поддержка 24/7"],
      popular: false,
    },
    {
      name: "Премиум",
      price: "599₽",
      period: "месяц",
      features: [
        "Все функции Базового",
        "Wallhack",
        "Triggerbot",
        "Настройки конфига",
      ],
      popular: true,
    },
    {
      name: "VIP",
      price: "999₽",
      period: "месяц",
      features: [
        "Все функции Премиум",
        "Приватные обновления",
        "Личный менеджер",
        "Безлимитные конфиги",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={32} className="text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              StandoffCheats
            </span>
          </div>
          <div className="space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-purple-400"
            >
              Функции
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-purple-400"
            >
              Цены
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Скачать
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Доминируй в Standoff 2
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Лучшие читы для Standoff 2 с продвинутыми функциями aimbot, wallhack
            и ESP. Необнаруживаемые и безопасные.
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

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Мощные функции</h2>
          <p className="text-gray-400 text-lg">Все что нужно для победы</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
          <p className="text-gray-400 text-lg">Выберите подходящий план</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-gray-800/50 border-gray-700 relative ${plan.popular ? "border-purple-500 scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">
                  {plan.name}
                </CardTitle>
                <div className="text-3xl font-bold text-purple-400">
                  {plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-400 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Готов начать побеждать?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Скачай читы прямо сейчас и стань лучшим в Standoff 2
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              <Icon name="Download" className="mr-2" />
              Скачать для Windows
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Поддержка
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 StandoffCheats. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
