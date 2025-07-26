'use client'

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Plus, Info, ChevronRight, ChevronDown, Users, Heart, Sparkles } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "How does KnitGPT work?",
    answer:
      "KnitGPT uses advanced AI algorithms to generate unique knitting patterns based on your preferences and inputs. Just describe what you want, and our AI will create a pattern for you!",
  },
  {
    question: "What types of patterns can I generate?",
    answer:
      "You can generate patterns for sweaters, hats, scarves, blankets, and more. The AI is flexible and can handle a wide range of knitting projects.",
  },
  {
    question: "How do I use the generated patterns?",
    answer:
      "Each generated pattern comes with detailed instructions, stitch counts, and recommended yarns. Simply follow the steps provided to start knitting.",
  },
  {
    question: "Can I save my generated patterns?",
    answer:
      "Yes! You can save your favorite patterns to your account for easy access anytime.",
  },
  {
    question: "Is there a cost to use KnitGPT?",
    answer:
      "KnitGPT offers both free and premium features. You can generate basic patterns for free, while advanced options may require a subscription.",
  },
];

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Generation",
    description: "Advanced algorithms create unique, personalized knitting patterns just for you."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Made with Love",
    description: "Created by knitting enthusiasts who understand the craft and community."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Driven",
    description: "Built for knitters of all skill levels, from beginners to experts."
  }
];

function Accordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <Card key={i} className="border-muted-foreground/20">
            <CardHeader className="pb-3">
              <button
                className="w-full text-left flex items-center justify-between gap-2 focus:outline-none hover:text-primary transition-colors"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
              >
                <CardTitle className="text-base font-semibold">{faq.question}</CardTitle>
                <span>{open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}</span>
              </button>
            </CardHeader>
            <CardContent className={`pt-0 transition-all duration-200 ease-in-out ${open ? "block" : "hidden"}`}>
              <CardDescription className="text-sm text-muted-foreground">
                {faq.answer}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col items-center px-4 py-12 md:py-20 bg-background">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About KnitGPT</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Revolutionizing knitting with AI-powered pattern generation. Made by knitters, for knitters.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="border-muted-foreground/20 bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-muted-foreground/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                KnitGPT is a revolutionary tool that harnesses the power of AI to generate unique knitting patterns. 
                Our mission is to inspire creativity and make knitting more accessible to everyone, from beginners to seasoned knitters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that everyone should have access to beautiful, personalized knitting patterns that match their style and skill level.
              </p>
            </CardContent>
          </Card>

          <Card className="border-muted-foreground/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Our Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                KnitGPT was created by a team of passionate developers and knitting enthusiasts. 
                We are committed to providing a user-friendly experience and continuously improving our AI model to generate the best possible patterns.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-primary">K</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+ More</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about KnitGPT</p>
          </div>
          <Accordion />
        </div>
      </div>
    </main>
  );
} 