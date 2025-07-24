import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ArtistDashboard } from "@/components/artist/ArtistDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Star, Users, Camera, Music, Palette } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<"platform" | "dashboard">("platform");

  if (currentView === "dashboard") {
    return <ArtistDashboard onBackToMain={() => setCurrentView("platform")} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onArtistDashboard={() => setCurrentView("dashboard")} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Connect with Amazing 
            <span className="text-primary"> Artists</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover talented artists for your events, book sessions, and create unforgettable memories. 
            From photographers to musicians, find the perfect artist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8">
              Find Artists
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Join as Artist
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Camera, name: "Photography", count: "245+" },
              { icon: Music, name: "Musicians", count: "180+" },
              { icon: Palette, name: "Visual Arts", count: "156+" },
              { icon: Users, name: "Performers", count: "98+" },
              { icon: Star, name: "Event Planning", count: "67+" },
              { icon: Search, name: "Other", count: "45+" }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <category.icon className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} artists</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                specialty: "Wedding Photography",
                rating: 4.9,
                reviews: 67,
                image: "/api/placeholder/300/200",
                location: "New York, NY"
              },
              {
                name: "Marcus Chen",
                specialty: "Jazz Musician",
                rating: 4.8,
                reviews: 54,
                image: "/api/placeholder/300/200",
                location: "Los Angeles, CA"
              },
              {
                name: "Elena Rodriguez",
                specialty: "Portrait Artist",
                rating: 5.0,
                reviews: 43,
                image: "/api/placeholder/300/200",
                location: "Chicago, IL"
              }
            ].map((artist, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{artist.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{artist.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{artist.specialty}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {artist.location}
                    </span>
                    <span className="text-muted-foreground">{artist.reviews} reviews</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Artists</Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Search",
                description: "Explore our diverse collection of talented artists by category, location, or specialty."
              },
              {
                step: "2",
                title: "Connect & Book",
                description: "Contact artists directly, discuss your vision, and book the perfect artist for your event."
              },
              {
                step: "3",
                title: "Create Magic",
                description: "Work with your chosen artist to bring your vision to life and create something amazing together."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">K</span>
            </div>
            <span className="text-xl font-semibold">Kala Connect</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Kala Connect. Connecting artists with opportunities worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
