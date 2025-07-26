"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Sparkles } from "lucide-react";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleGenerate = async () => {
    if (!image || !prompt.trim()) {
      alert("Please provide both an image and a prompt");
      return;
    }

    setIsLoading(true);
    
    try {
      // Create FormData to send image and text
      const formData = new FormData();
      formData.append("image", image);
      formData.append("prompt", prompt);

      // Dummy API call - replace with actual endpoint
      console.log("Sending to API:", {
        image: image.name,
        prompt: prompt,
        imageSize: image.size,
        imageType: image.type
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("API response received (dummy)");
      
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-xl shadow-lg border p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">KnitGPT</h1>
          <p className="text-muted-foreground text-lg">
            Upload an image of a knitted item and ask how to make it
          </p>
        </div>

        <div className="space-y-4">
          {/* Image Input */}
          <div className="space-y-2">
            <Label htmlFor="image" className="text-sm font-medium">
              Upload Image *
            </Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
              <label htmlFor="image" className="cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  {image ? image.name : "Click to upload an image of knitted item"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supports: JPG, PNG, GIF
                </p>
              </label>
            </div>
          </div>

          {/* Text Input */}
          <div className="space-y-2">
            <Label htmlFor="prompt" className="text-sm font-medium">
              Your Question *
            </Label>
            <Input
              id="prompt"
              placeholder="e.g., How do I knit this pattern?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={!image || !prompt.trim() || isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Pattern
              </>
            )}
          </Button>
        </div>

        {image && (
          <div className="text-xs text-muted-foreground text-center">
            Image selected: {image.name}
          </div>
        )}
      </div>
    </div>
  );
}
