import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme */}
      <ThemeToggleButton />
      {/* navbar */}
      <Navbar />

      {/* M A I N */}

      {/* F O O T E R */}
    </div>
  );
};

export default Home;
