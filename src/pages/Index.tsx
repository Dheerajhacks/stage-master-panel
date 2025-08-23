import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { ArtistDashboard } from "../components/artist/ArtistDashboard";

const Index = () => {
  const [showArtistDashboard, setShowArtistDashboard] = useState(false);

  const handleArtistDashboard = () => {
    setShowArtistDashboard(true);
  };

  const handleBackToMain = () => {
    setShowArtistDashboard(false);
  };

  if (showArtistDashboard) {
    return <ArtistDashboard onBackToMain={handleBackToMain} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onArtistDashboard={handleArtistDashboard} />
      <main className="flex-1">
        {/* Blank main content - only nav bar as requested */}
      </main>
    </div>
  );
};

export default Index;