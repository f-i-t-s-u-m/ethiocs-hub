"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  Zap,
  Brain,
  Satellite,
} from "lucide-react";

const contactMethods = [
  {
    icon: MapPin,
    label: "Neural Network Hub",
    value: "Quantum District, Tech City 2024",
    tech: "LOCATION",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Quantum Comm",
    value: "+1 (555) NEURAL-1",
    tech: "VOICE",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500/10",
  },
  {
    icon: Mail,
    label: "Data Stream",
    value: "connect@ethiocs-hub.quantum",
    tech: "EMAIL",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    label: "Active Hours",
    value: "24/7 Neural Interface",
    tech: "ONLINE",
    gradient: "from-orange-500/20 to-red-500/20",
    iconBg: "bg-orange-500/10",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-effect shadow-lg">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
              NEURAL CONNECT
            </Badge>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Initiate Connection
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ready to sync with the future? Let's establish a quantum link to
            your perfect workspace experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center space-x-3">
                <Satellite className="w-6 h-6 text-primary" />
                <span>Neural Network Access</span>
              </h3>

              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className={`p-6 border-0 bg-gradient-to-br ${method.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl ${method.iconBg} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {method.tech}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {method.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 border-0 bg-gradient-to-br from-primary/10 to-accent/10 neon-border">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto glow-effect">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold">Schedule Neural Sync</h4>
                <p className="text-muted-foreground">
                  Book a quantum-enhanced tour of our facilities
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  <Zap className="w-4 h-4 mr-2" />
                  Initiate Tour Protocol
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm neon-border">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold flex items-center space-x-3">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Transmit Data</span>
                </h3>
                <p className="text-muted-foreground">
                  Send your requirements through our secure quantum channel
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder="Enter your last name"
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    placeholder="your.email@quantum.domain"
                    type="email"
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Quantum Comm ID
                  </label>
                  <Input
                    placeholder="+1 (555) QUANTUM-X"
                    type="tel"
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Workspace Requirements
                  </label>
                  <Textarea
                    placeholder="Describe your ideal workspace setup, tech requirements, and collaboration needs..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 btn-modern"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Transmit Message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
