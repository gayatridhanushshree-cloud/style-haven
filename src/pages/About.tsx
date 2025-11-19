import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-display font-bold mb-6">About StyleHub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to help everyone discover their unique style and express themselves through fashion.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, StyleHub began with a simple idea: fashion should be accessible, 
                  sustainable, and expressive for everyone. We started as a small boutique with a 
                  curated selection of timeless pieces, and have grown into a beloved online destination 
                  for fashion enthusiasts worldwide.
                </p>
                <p>
                  Our team travels the world to discover emerging designers and established brands that 
                  share our values of quality, sustainability, and ethical production. Every piece in our 
                  collection is carefully selected to ensure it meets our high standards.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers who trust us to help them look and 
                  feel their best, while supporting a more sustainable future for fashion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion for Fashion</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every carefully curated piece we offer.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  Every item is selected for its exceptional quality and lasting style.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                <p className="text-muted-foreground">
                  We believe in building a community of style enthusiasts who support each other.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Sarah Johnson", role: "Founder & CEO" },
                { name: "Michael Chen", role: "Creative Director" },
                { name: "Emily Rodriguez", role: "Head of Buying" },
                { name: "David Kim", role: "Operations Manager" },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
