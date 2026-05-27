import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Background from "../components/Background";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme */}
      <ThemeToggleButton />
      {/* navbar */}
      <Navbar />
      <Background />
      <HeroSection />

      {/* M A I N */}

      {/* F O O T E R */}
    </div>
  );
};

export default Home;
