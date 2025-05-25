import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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

export default function FeaturesSection() {
  return (
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
  );
}
