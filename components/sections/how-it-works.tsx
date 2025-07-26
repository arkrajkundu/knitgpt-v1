import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sparkles, Clock, Heart } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-28 max-w-7xl mx-auto bg-white/90 dark:bg-black/70 rounded-2xl shadow-lg mt-[-3rem] md:mt-[-6rem] relative z-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white text-center">
        How It Works
      </h2>
      <p className="text-muted-foreground mb-6 md:mb-10 text-base md:text-xl max-w-2xl text-center">
        Our AI-powered tool analyzes your image and description to create a detailed knitting pattern,
        including stitch counts, yarn recommendations, and more.
      </p>
      <Button className="mb-12 md:mb-16 text-base md:text-lg px-8 py-3">
        Get Started
      </Button>

      {/* Dynamic Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 w-full max-w-5xl">
        <Card className="aspect-square bg-white dark:bg-muted border border-border shadow-sm hover:shadow-xl transition-shadow cursor-pointer rounded-2xl p-6 flex flex-col justify-between">
          <CardHeader className="p-0 space-y-4 flex-1 flex flex-col justify-between">
            <div className="p-3 w-fit rounded-xl bg-muted text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl">AI-Powered Generation</CardTitle>
              <CardDescription>
                Advanced AI ensures accurate and efficient pattern creation.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="aspect-square bg-white dark:bg-muted border border-border shadow-sm hover:shadow-xl transition-shadow cursor-pointer rounded-2xl p-6 flex flex-col justify-between">
          <CardHeader className="p-0 space-y-4 flex-1 flex flex-col justify-between">
            <div className="p-3 w-fit rounded-xl bg-muted text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Instant Delivery</CardTitle>
              <CardDescription>
                Your custom pattern is delivered instantly and ready to knit.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="aspect-square bg-white dark:bg-muted shadow-sm hover:shadow-xl transition-shadow cursor-pointer rounded-2xl p-6 flex flex-col justify-between" style={{ borderColor: "red" }}>
          <CardHeader className="p-0 space-y-4 flex-1 flex flex-col justify-between">
            <div className="p-3 w-fit rounded-xl bg-muted text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Personalized Designs</CardTitle>
              <CardDescription>
                Tailored patterns that reflect your unique style and preferences.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
