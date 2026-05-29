import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 p-2">
      <div >
        <a href="#" className="text-sm text-center">Scroll to top</a>
        <p className="text-sm text-muted-foreground my-5">
          &copy; {new Date().getFullYear()} Arijit.co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
