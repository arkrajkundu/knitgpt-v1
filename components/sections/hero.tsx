'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export function Hero() {
  const [imageName, setImageName] = useState("");

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-6 py-16 md:py-24 bg-background">
      <div className="w-full max-w-[700px] mx-auto text-center space-y-10 h-[40vh] border">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Generate Your Custom Knitting Pattern
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Describe your idea and upload an image. We'll generate a knitting pattern just for you.
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-6 border flex flex-col justify-center">
          {/* Text + Button Row */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 h-[100px]">
            <Input
              placeholder="e.g. cozy striped sweater..."
              className="h-16 text-base px-5 flex-1"
            />
            <Button className="h-16 px-6 text-base w-full md:w-auto bg-white text-black">
              Generate
            </Button>
          </div>

          {/* Image Upload */}
          <div className="flex items-center gap-2 text-left text-sm text-muted-foreground">
            <Label
              htmlFor="image-upload"
              className="flex items-center gap-2 cursor-pointer hover:text-primary"
            >
              <Upload className="w-5 h-5" />
              {imageName ? `Selected: ${imageName}` : "Upload inspiration image"}
            </Label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImageName(file.name);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
