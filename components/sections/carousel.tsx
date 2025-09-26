"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Neural Interface Lab",
    description:
      "Experience the future of human-computer interaction with our cutting-edge neural interface technology.",
    image: "/neural-lab.jpg",
    category: "INNOVATION",
    gradient: "from-blue-500/20 to-cyan-500/20",
    stats: { users: "2.5K", efficiency: "98%", satisfaction: "4.9/5" },
    features: [
      "Brain-Computer Interface",
      "Real-time Processing",
      "Neural Feedback",
    ],
  },
  {
    id: 2,
    title: "Quantum Computing Center",
    description:
      "Harness the power of quantum mechanics for unprecedented computational capabilities and research breakthroughs.",
    image: "/quantum-center.jpg",
    category: "QUANTUM",
    gradient: "from-purple-500/20 to-pink-500/20",
    stats: { qubits: "1024", speed: "10x", accuracy: "99.9%" },
    features: [
      "Quantum Algorithms",
      "Superposition States",
      "Entanglement Networks",
    ],
  },
  {
    id: 3,
    title: "Holographic Workspace",
    description:
      "Step into a three-dimensional digital environment where ideas come to life through advanced holographic displays.",
    image: "/holographic-workspace.jpg",
    category: "HOLOGRAPHIC",
    gradient: "from-green-500/20 to-emerald-500/20",
    stats: { resolution: "8K", depth: "360°", immersion: "100%" },
    features: ["3D Projection", "Gesture Control", "Spatial Computing"],
  },
  {
    id: 4,
    title: "AI Research Facility",
    description:
      "Explore the frontiers of artificial intelligence with our state-of-the-art machine learning laboratories.",
    image: "/ai-facility.jpg",
    category: "ARTIFICIAL",
    gradient: "from-orange-500/20 to-red-500/20",
    stats: { models: "500+", accuracy: "99.7%", training: "24/7" },
    features: ["Deep Learning", "Neural Networks", "Predictive Analytics"],
  },
  {
    id: 5,
    title: "Virtual Reality Studio",
    description:
      "Immerse yourself in photorealistic virtual environments designed for training, entertainment, and collaboration.",
    image: "/vr-studio.jpg",
    category: "VIRTUAL",
    gradient: "from-indigo-500/20 to-purple-500/20",
    stats: { fps: "120", latency: "5ms", tracking: "6DOF" },
    features: [
      "Photorealistic Graphics",
      "Haptic Feedback",
      "Multi-user Support",
    ],
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="neon-border bg-primary/10 text-primary border-primary/30"
            >
              🎠 Showcase • Innovation
            </Badge>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-balance font-mono leading-tight">
            <span className="block text-foreground">EXPLORE OUR</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FUTURE LABS
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge facilities that power the next generation
            of digital innovation and creativity.
          </p>
        </div>

        {/* Main Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm neon-border">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 bg-gradient-to-br ${item.gradient} to-card/50`}
                  >
                    {/* Left Side - Content */}
                    <div className="p-12 lg:p-16 flex flex-col justify-center space-y-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className="text-xs font-mono bg-primary/10 text-primary border-primary/30"
                          >
                            {item.category}
                          </Badge>
                          <div className="w-2 h-2 bg-primary rounded-full glow-effect"></div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold font-mono text-foreground leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                          {item.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-mono font-semibold text-accent">
                          KEY FEATURES
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {item.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full glow-effect"></div>
                              <span className="text-sm font-mono">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(item.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-4 rounded-xl bg-card/30 neon-border"
                          >
                            <div className="text-2xl font-bold text-primary font-mono mb-1">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground font-medium uppercase">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                        >
                          Explore Lab →
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-transparent neon-border hover:bg-primary/10 text-foreground font-semibold rounded-full px-8 py-6"
                        >
                          Book Tour
                        </Button>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                      <div className="aspect-[4/5] bg-gradient-to-br from-card/50 to-card/30">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

                        {/* Floating Elements */}
                        <div className="absolute top-6 right-6 w-12 h-12 bg-primary rounded-full glow-effect flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">
                            ⚡
                          </span>
                        </div>
                        <div className="absolute bottom-6 left-6 w-10 h-10 bg-accent rounded-full glow-effect flex items-center justify-center">
                          <span className="text-accent-foreground font-bold">
                            🔬
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                className="neon-border bg-transparent hover:bg-primary/10 text-foreground rounded-full w-12 h-12"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={togglePlayPause}
                className="neon-border bg-transparent hover:bg-primary/10 text-foreground rounded-full w-12 h-12"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                className="neon-border bg-transparent hover:bg-primary/10 text-foreground rounded-full w-12 h-12"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary glow-effect scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            {/* Right Info */}
            <div className="text-right">
              <div className="text-sm font-mono text-muted-foreground">
                {currentIndex + 1} / {carouselItems.length}
              </div>
              <div className="text-xs text-muted-foreground">
                {isPlaying ? "Auto-playing" : "Paused"}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-3xl p-8 neon-border max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-mono">
              READY TO EXPERIENCE THE FUTURE?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already shaping tomorrow with
              our advanced facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="neon-border bg-transparent hover:bg-primary/10 text-foreground font-semibold rounded-full px-8 py-6"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
