import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Background from "../components/Background";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme */}
      <ThemeToggleButton />

      {/* navbar */}
      <Navbar />
      <Background />

      {/* M A I N */}
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />

      {/* F O O T E R */}
    </div>
  );
};

export default Home;
