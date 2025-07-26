'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Home,
  Image as GalleryIcon,
  Bookmark,
  HelpCircle,
  User2,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/gallery", label: "Gallery", icon: GalleryIcon },
  { href: "/patterns", label: "Patterns", icon: Bookmark },
  { href: "/how-it-works", label: "How it Works", icon: HelpCircle },
  { href: "/about", label: "About", icon: User2 },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b bg-background/95 backdrop-blur-md sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-tight select-none">KnitGPT</div>
      {/* <Image src="/knit-logo.png" alt="KnitGPT" width={20} height={20} /> */}
      <nav className="flex items-center gap-1 sm:gap-3 md:gap-6">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center justify-center md:justify-start gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline min-w-[32px] md:min-w-[100px] ${isActive
                ? "text-primary underline underline-offset-4"
                : "text-muted-foreground hover:text-primary hover:bg-muted"
                }`}
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
              <span className="hidden md:inline">{label}</span>
            </Link>
          );
        })}
        <ModeToggle />
      </nav>
    </header>
  );
}
