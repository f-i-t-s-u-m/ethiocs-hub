export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CS</span>
              </div>
              <span className="font-semibold text-lg">CS Hub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where deep work meets human creativity. Your premium workspace for productivity and growth.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Day Passes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Weekly Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Monthly Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Recording Studio
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Amenities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Work Tables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Meeting Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Reading Corner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Coffee Bar
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2025 CS Hub Work Station. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
