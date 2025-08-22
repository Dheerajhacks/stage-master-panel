import { useState } from "react";
import { Navigation } from "../components/Navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState<"platform">("platform");

  return (
    <div className="min-h-screen bg-white">
      <Navigation onArtistDashboard={() => setCurrentView("platform")} />
    </div>
  );
};

export default Index;
