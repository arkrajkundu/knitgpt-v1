import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full mt-10 px-4">
      <Card className="bg-background/80 dark:bg-black/70 border-none shadow-none">
        <CardContent className="flex flex-col items-center gap-4 py-8">
          <div className="flex justify-center gap-6 mb-2">
            <a href="#" className="text-muted-foreground hover:underline">Terms of Service</a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-muted-foreground hover:underline">Privacy Policy</a>
          </div>
          <div className="flex justify-center gap-4 mb-2">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
          <div className="w-full border-t border-border my-2" />
          <p className="text-xs text-muted-foreground">©2024 KnitAI. All rights reserved.</p>
        </CardContent>
      </Card>
    </footer>
  );
}
