"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const workspaceAreas = [
  {
    id: "neural-desk",
    name: "NEURAL DESK",
    description:
      "AI-enhanced workstation with holographic displays and neural interface compatibility",
    tech: [
      "Holographic Display",
      "Neural Interface",
      "Quantum Processing",
      "Biometric Security",
    ],
    status: "ACTIVE",
    capacity: "12/15",
    image: "/futuristic-desk-with-holographic-displays.jpg",
    type: "HOUSE",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "quantum-studio",
    name: "QUANTUM STUDIO",
    description:
      "4K recording facility with quantum-enhanced audio processing and real-time AI editing",
    tech: [
      "8K Recording",
      "Quantum Audio",
      "AI Director",
      "Hologram Projection",
    ],
    status: "AVAILABLE",
    capacity: "0/4",
    image: "/futuristic-recording-studio-with-quantum-technolog.jpg",
    type: "FARM",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "cyber-lounge",
    name: "CYBER LOUNGE",
    description:
      "Relaxation zone with neural-sync meditation pods and digital library access",
    tech: ["Neural Sync", "Digital Library", "Mood Lighting", "Ambient AI"],
    status: "MAINTENANCE",
    capacity: "0/8",
    image: "/futuristic-lounge-with-meditation-pods.jpg",
    type: "FACTORY",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "matrix-meeting",
    name: "MATRIX MEETING",
    description:
      "Virtual reality conference room with global holographic telepresence",
    tech: [
      "VR Conference",
      "Holographic Telepresence",
      "Spatial Audio",
      "Mind Mapping",
    ],
    status: "ACTIVE",
    capacity: "6/10",
    image: "/futuristic-vr-meeting-room-with-holograms.jpg",
    type: "FLAT",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export function Explore() {
  const [selectedArea, setSelectedArea] = useState(workspaceAreas[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedType, setSelectedType] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  const propertyTypes = [
    "ALL",
    "STUDIO",
    "PRIVATE",
    "CO-WORKING",
    "EDITING SPACE",
  ];

  const filteredAreas =
    selectedType === "ALL"
      ? workspaceAreas
      : workspaceAreas.filter((area) => area.type === selectedType);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredAreas.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + filteredAreas.length) % filteredAreas.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredAreas.length]);

  return (
    <section
      id="explore"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="neon-border bg-primary/10 text-primary border-primary/30"
            >
              📸 Visual Showcase • Premium Workspaces
            </Badge>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-balance font-mono leading-tight">
            <span className="block text-foreground">OUR BEST</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WORKSPACE SHOTS
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our stunning collection of futuristic
            workspaces. Each space tells a story of innovation, technology, and
            limitless possibilities.
          </p>

          {/* Property Type Selector */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {propertyTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-transparent border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Animated Curved Slider */}
        <div className="relative">
          {/* Main Slider Container */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            {/* Curved Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-3xl"></div>

            {/* Slider Track */}
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredAreas.map((area, index) => (
                <div
                  key={area.id}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <div className="h-full flex items-center justify-center p-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
                      {/* Image Section */}
                      <div className="relative">
                        <div className="relative group">
                          {/* Curved Image Container */}
                          <div className="relative overflow-hidden rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform -rotate-6 scale-105"></div>
                            <img
                              src={area.image || "/placeholder.svg"}
                              alt={area.name}
                              className="relative w-full h-[400px] object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl"></div>

                            {/* Floating Badges */}
                            <div className="absolute top-6 right-6">
                              <Badge
                                variant="outline"
                                className={`text-xs font-mono ${
                                  area.status === "ACTIVE"
                                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                                    : area.status === "AVAILABLE"
                                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                }`}
                              >
                                {area.status}
                              </Badge>
                            </div>

                            <div className="absolute top-6 left-6">
                              <Badge
                                variant="outline"
                                className="text-xs font-mono bg-primary/10 text-primary border-primary/30"
                              >
                                {area.type}
                              </Badge>
                            </div>
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-300"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4">
                            {area.name}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            {area.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-xl font-mono font-semibold mb-4 text-accent">
                            FEATURED TECHNOLOGY
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {area.tech.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="text-sm bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Capacity & Actions */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="text-sm font-mono text-muted-foreground">
                            CAPACITY:{" "}
                            <span className="text-primary">
                              {area.capacity}
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <Button
                              onClick={handleScan}
                              size="sm"
                              className="tech-glow bg-primary hover:bg-primary/80 font-mono"
                              disabled={isScanning}
                            >
                              {isScanning ? "SCANNING..." : "SCAN"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="neon-border bg-transparent hover:bg-accent/10 text-foreground font-mono"
                            >
                              RESERVE
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors neon-border group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <svg
                className="w-6 h-6 text-primary group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors neon-border group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <svg
                className="w-6 h-6 text-primary group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors neon-border"
            >
              {isAutoPlaying ? (
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {filteredAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
