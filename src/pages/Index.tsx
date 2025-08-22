import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { ArtistDashboard } from "../components/artist/ArtistDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"platform" | "artist-dashboard">("platform");

  return (
    <div className="min-h-screen bg-white">
      <Navigation onArtistDashboard={() => setCurrentView("artist-dashboard")} />
      {currentView === "artist-dashboard" && <ArtistDashboard />}
    </div>
  );
};

export default Index;
