import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Carousel } from "@/components/sections/carousel";
import { Explore } from "@/components/sections/explore";
import { Gallery } from "@/components/sections/gallary";
// import { Technologies } from "@/components/sections/technologies"
// import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Carousel />
      <Explore />
      <Gallery />
      {/* <Technologies />
      <Services /> */}
      <Contact />
      <Footer />
    </main>
  );
}
