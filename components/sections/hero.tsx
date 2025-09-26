import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="neon-border bg-primary/10 text-primary border-primary/30"
              >
                🚀 Next-Gen Workspace
              </Badge>
              <div className="w-2 h-2 bg-primary rounded-full glow-effect"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-balance leading-[0.9] font-mono">
                <span className="block text-foreground">ETHIOCS</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  HUB
                </span>
                <span className="block text-4xl md:text-5xl text-muted-foreground font-normal">
                  WORK STATION
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Step into a realm where{" "}
                <span className="text-primary font-semibold">
                  technology meets creativity
                </span>
                , where every project becomes a masterpiece of digital
                innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Initialize Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent neon-border hover:bg-primary/10 text-foreground font-semibold rounded-full"
              >
                Explore Facility →
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 rounded-xl bg-card/50 neon-border">
                <div className="text-3xl font-bold text-primary font-mono mb-1">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  ACCESS
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 neon-border">
                <div className="text-3xl font-bold text-accent font-mono mb-1">
                  1GB/s
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  FIBER
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 neon-border">
                <div className="text-3xl font-bold text-primary font-mono mb-1">
                  4K
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  STUDIO
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-card neon-border float-effect shadow-2xl">
                <Image
                  src="/hero.jpg"
                  alt="ETHIOCS Hub Work Station interior"
                  className="w-full h-full object-cover"
                  width={500}
                  height={625}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 neon-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full glow-effect"></div>
                      <span className="text-sm font-semibold text-primary">
                        LIVE STATUS
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Secure your workspace with peace of mind through our
                      comprehensive tech infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full glow-effect flex items-center justify-center">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-accent rounded-full glow-effect flex items-center justify-center">
                <span className="text-accent-foreground font-bold">💻</span>
              </div>

              {/* Side Panel */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 neon-border w-48">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tech Innovation
                    </div>
                    <div className="w-full bg-primary/20 rounded-full h-2 mt-2">
                      <div className="bg-primary h-2 rounded-full w-full glow-effect"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info Card */}
            <div className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 neon-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Join the ETHIOCS Universe!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The Ultimate Workspace for Digital Creators!
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full"
                >
                  Join Now →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
