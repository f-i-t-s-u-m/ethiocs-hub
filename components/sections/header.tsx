import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.webp" alt="logo" width={200} height={100} />
          {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-effect shadow-lg">
            <span className="text-background font-bold text-lg font-mono">
              E
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl font-mono tracking-wider text-foreground">
              ETHIOCS
            </span>
            <span className="text-xs text-muted-foreground font-mono tracking-widest">
              HUB
            </span>
          </div> */}
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 font-medium rounded-full px-6"
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 font-medium rounded-full px-6"
          >
            Gallery
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 font-medium rounded-full px-6"
          >
            Services
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 font-medium rounded-full px-6"
          >
            Contact
          </Button>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="hidden sm:flex bg-transparent border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 rounded-full px-6 font-medium"
          >
            View our story →
          </Button>
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground rounded-full px-6 font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300">
            📞 Book a call
          </Button>
        </div>
      </div>
    </header>
  );
}
