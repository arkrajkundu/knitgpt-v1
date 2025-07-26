import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Wand2, Rss, Palette } from "lucide-react";

const features = [
  {
    icon: <Wand2 className="h-6 w-6 mb-2" />,
    title: "AI-Powered Pattern Generation",
    description: "Our advanced AI algorithms ensure accurate and efficient pattern creation.",
  },
  {
    icon: <Rss className="h-6 w-6 mb-2" />,
    title: "Instant Pattern Delivery",
    description: "Receive your custom pattern instantly, ready to start knitting.",
  },
  {
    icon: <Palette className="h-6 w-6 mb-2" />,
    title: "Personalized Designs",
    description: "Tailored patterns based on your unique style and preferences.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center px-4 py-12 md:py-20 bg-background">
      <div className="max-w-3xl w-full mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Our AI-powered tool analyzes your image and description to create a detailed knitting pattern, including stitch counts, yarn recommendations, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {features.map((feature, i) => (
          <Card key={i} className="border-muted-foreground/20 dark:border-muted-foreground/30 bg-background">
            <CardHeader>
              {feature.icon}
              <CardTitle className="text-xl md:text-2xl font-bold mb-1">{feature.title}</CardTitle>
              <CardDescription className="text-base md:text-lg text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
} 