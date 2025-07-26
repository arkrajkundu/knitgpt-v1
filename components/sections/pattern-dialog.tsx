"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PatternDialog({ pattern }: { pattern: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-3 py-1 bg-primary text-white text-sm rounded-md hover:bg-primary/90 transition">
          View
        </button>
      </DialogTrigger>
      <DialogContent
        className="backdrop-blur-sm bg-background/95 max-w-[95vw] sm:max-w-2xl lg:max-w-4xl h-[90vh] sm:h-[80vh] overflow-y-auto rounded-2xl p-6 sm:p-8"
        showCloseButton={true}
      >
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center">{pattern.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-sm sm:text-base text-foreground">
          {/* Tools */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pattern.tools.map((tool: any, i: number) => (
                <div key={i} className="flex items-center gap-3 p-2 bg-background/80 rounded-md">
                  <tool.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{tool.label}: <span className="text-muted-foreground">{tool.value}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Gauge and Stitch in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <pattern.gauge.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{pattern.gauge.label}: <span className="text-muted-foreground">{pattern.gauge.value}</span></span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <pattern.stitch.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{pattern.stitch.label}: <span className="text-muted-foreground">{pattern.stitch.value}</span></span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Instructions
            </h3>
            <p className="leading-relaxed text-muted-foreground">{pattern.instructions}</p>
          </div>

          {/* Finishing */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Finishing
            </h3>
            <p className="leading-relaxed text-muted-foreground">{pattern.finishing}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
