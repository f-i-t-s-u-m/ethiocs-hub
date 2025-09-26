import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Premium Work Tables",
    description:
      "Spacious desks with ergonomic chairs designed for long productive sessions.",
    icon: "⚡",
    tech: "ERGONOMIC",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    title: "Digital Library",
    description:
      "Curated collection of books and quiet spaces for learning and inspiration.",
    icon: "📡",
    tech: "KNOWLEDGE",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/10",
  },
  {
    title: "Recording Studio",
    description:
      "Professional 4K setup for content creation, podcasts, and social media.",
    icon: "🎯",
    tech: "4K STUDIO",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500/10",
  },
  {
    title: "Meeting Pods",
    description:
      "Private spaces for client calls, team meetings, and focused discussions.",
    icon: "🔗",
    tech: "PRIVATE",
    gradient: "from-orange-500/20 to-red-500/20",
    iconBg: "bg-orange-500/10",
  },
  {
    title: "Fuel Station",
    description: "Premium coffee and refreshments to fuel your productivity.",
    icon: "⚙️",
    tech: "ENERGY",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconBg: "bg-yellow-500/10",
  },
  {
    title: "Sky View",
    description:
      "Inspiring top-floor views to spark creativity and clear thinking.",
    icon: "🌐",
    tech: "PANORAMIC",
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconBg: "bg-indigo-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="neon-border bg-primary/10 text-primary border-primary/30"
            >
              🏗️ Architecture • Innovation
            </Badge>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-balance font-mono leading-tight">
            <span className="block text-foreground">UNLEASHING</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DESIGN
            </span>
            <span className="block text-foreground">IGNITING</span>
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              INNOVATION
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Step into a realm where{" "}
            <span className="text-primary font-semibold">
              art embraces utility
            </span>
            , where every structure tells a story of digital mastery.
          </p>

          <Button
            size="lg"
            className="mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore Features
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${feature.gradient} to-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2`}
            >
              <div className="p-8 space-y-6">
                {/* Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-mono text-primary bg-primary/10 border-primary/30"
                  >
                    {feature.tech}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-3xl p-8 neon-border max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-mono">
              SAFEGUARDING BEAUTY WITH EVERY ARCHITECTURAL MASTERPIECE
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tailored workspace architecture for inspired living and maximum
              productivity.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-mono">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Architectural Ingenuity
                </div>
              </div>
              <Button
                variant="outline"
                className="neon-border bg-transparent hover:bg-primary/10 text-foreground rounded-full px-6"
              >
                Learn More ↗
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
