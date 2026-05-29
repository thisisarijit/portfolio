import { Mail, MapPin, Phone, SendIcon } from "lucide-react";
import React from "react";
import githubLogo from "../../public/github_logo.png";
import linkedin_logo from "../../public/linkedin_logo.png";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = () => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      Toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact">
      <div>
        {/* heading */}
        <div>
          <h3 className="text-foreground text-5xl font-bold">
            {"<"}
            <span className="text-primary">contact </span> me{">"}
          </h3>
          <p>send me a message, and I'll get back to you soon</p>
        </div>

        <div className="bg-foreground/20 grid grid-cols-1 md:grid-cols-2 justify-between max-w-5xl gap-4 container py-4">
          {/* contact form */}
          <div className="bg-border rounded-lg shadow-2xl p-5">
            <h3 className="text-3xl font-bold">get in touch</h3>
            <p>have something to discuss? lets talk.</p>
            <form
              action=""
              className="rounded-lg p-4 m-2 space-y-8 flex flex-col justify-center items-center"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-foreground focus:outline-hidden focus:ring-2 focus:ring-primary text-center"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-foreground focus:outline-hidden focus:ring-2 focus:ring-primary text-center"
              />
              <input
                type="text"
                placeholder="Type your message..."
                required
                className="w-full px-4 py-3 rounded-md border border-foreground focus:outline-hidden focus:ring-2 focus:ring-primary text-center"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full rounded-lg flex gap-2 justify-center"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <SendIcon />
              </button>
            </form>
          </div>

          {/* information */}
          <div className="min-h-full space-y-2 flex flex-col justify-center">
            <span className="flex  justify-center gap-2">
              <Phone /> +91 9876543210
            </span>
            <span className="flex  justify-center gap-2">
              <MapPin /> West Bengal, INDIA
            </span>
            <span className="flex  justify-center gap-2">
              <Mail /> abcsdeportfolio@gmail.com
            </span>
            <div className="flex justify-center gap-4">
              <img src={githubLogo} alt="" className="h-10 w-10" />
              <img src={linkedin_logo} alt="" className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
