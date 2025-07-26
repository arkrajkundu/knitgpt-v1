import { Pencil, Palette, Weight } from "lucide-react";
import Link from "next/link";

const pattern = {
  name: "Cozy Cable Knit Sweater",
  tools: [
    { icon: Weight, label: "Needle Size", value: "3.5mm" },
    { icon: Weight, label: "Yarn Weight", value: "100g" },
  ],
  gauge: { icon: Pencil, label: "Gauge", value: "22 sts x 30 rows" },
  stitch: { icon: Palette, label: "Stitch", value: "Stockinette Stitch" },
  instructions:
    "Cast on 100 stitches. Knit 2 rows in garter stitch. Continue in stockinette stitch until the piece measures 10 inches. Knit 2 rows in garter stitch. Bind off.",
  finishing:
    "Weave in all ends. Block the piece to measurements. Add fringe or tassels if desired.",
};

export default function PatternDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-20">
        <Link href="/patterns" className="text-xl font-bold px-2 py-1 rounded hover:bg-muted transition-colors" aria-label="Back">
          ←
        </Link>
        <h1 className="flex-1 text-center text-xl font-semibold">Pattern</h1>
        <div className="w-8" />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 max-w-xl mx-auto w-full flex flex-col gap-6">
        {/* Tools */}
        <div className="bg-card rounded-xl shadow-md border border-border p-4 flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-2">Tools</h2>
          {pattern.tools.map((tool, i) => (
            <div key={i} className="flex items-center gap-3">
              <tool.icon className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium text-sm">{tool.label}</div>
                <div className="text-xs text-muted-foreground">{tool.value}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Gauge */}
        <div className="bg-card rounded-xl shadow-md border border-border p-4 flex items-center gap-3">
          <pattern.gauge.icon className="h-5 w-5 text-muted-foreground" />
          <div>
            <div className="font-medium text-sm">{pattern.gauge.label}</div>
            <div className="text-xs text-muted-foreground">{pattern.gauge.value}</div>
          </div>
        </div>
        {/* Stitch */}
        <div className="bg-card rounded-xl shadow-md border border-border p-4 flex items-center gap-3">
          <pattern.stitch.icon className="h-5 w-5 text-muted-foreground" />
          <div>
            <div className="font-medium text-sm">{pattern.stitch.label}</div>
            <div className="text-xs text-muted-foreground">{pattern.stitch.value}</div>
          </div>
        </div>
        {/* Instructions */}
        <div className="bg-card rounded-xl shadow-md border border-border p-4">
          <h2 className="text-lg font-semibold mb-2">Instructions</h2>
          <p className="text-sm leading-relaxed">{pattern.instructions}</p>
        </div>
        {/* Finishing */}
        <div className="bg-card rounded-xl shadow-md border border-border p-4">
          <h2 className="text-lg font-semibold mb-2">Finishing</h2>
          <p className="text-sm leading-relaxed">{pattern.finishing}</p>
        </div>
      </div>
    </div>
  );
} 