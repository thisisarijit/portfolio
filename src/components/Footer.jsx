import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 p-2">
      <div>
        <div className="h-px w-full bg-primary/30 mb-5" />
        <a href="#" className="text-sm text-center">
          Scroll to top
        </a>
        <p className="text-sm text-muted-foreground my-2">
          &copy; {new Date().getFullYear()} Arijit | All rights reserved.
        </p>
        <p className="text-primary/50">
          Designed and Developed by <span className="text-primary">{"<"}a</span>
          <span className="text-foreground">k{"/>"}</span> <span className="text-primary font-bold">Arijit</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
