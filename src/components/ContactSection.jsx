import { Mail, MapPin, Phone, SendIcon } from "lucide-react";
import React from "react";
import githubLogo from "../../public/github_logo.png";
import linkedin_logo from "../../public/linkedin_logo1.png";
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
    <section id="contact" className="px-6 py-20">
      <div className="container max-w-5xl mx-auto space-y-8">
        {/* heading */}
        <div>
          <h3 className="text-foreground text-5xl font-bold">
            {"<"}
            <span className="text-primary">contact </span> me{" />"}
          </h3>
          <p>send me a message, and I'll get back to you soon</p>
        </div>

        <div className="bg-foreground/30 grid grid-cols-1 md:grid-cols-2 justify-between max-w-5xl gap-4 container py-4">
          {/* contact form */}
          <div className="bg-border rounded-lg shadow-2xl p-5">
            <h3 className="text-3xl font-bold">
              get in <span className="text-primary">touch</span>
            </h3>
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
          <div className="bg-border rounded-lg shadow-2xl min-h-full space-y-3 p-4 flex flex-col items-start">
            <h3 className="text-3xl font-bold">
              let's <span className="text-primary">connect</span>
            </h3>
            <div className="space-y-2 flex flex-col items-start py-5">
              <span className="flex  justify-center items-center gap-5">
                <Phone className="text-primary" />
                <span className="font-medium text-left">
                  <h4 className="text-foreground/30">Phone</h4>
                  +91 9876543210
                </span>
              </span>
              <span className="flex  justify-center items-center gap-5">
                <MapPin className="text-primary" />
                <span className="font-medium text-left">
                  <h4 className="text-foreground/30">Location</h4>
                  West Bengal, INDIA
                </span>
              </span>
              <span className="flex justify-center items-center gap-5">
                <Mail className="text-primary" />
                <span className="font-medium text-left">
                  <h4 className="text-foreground/30">Email</h4>
                  abcsdeportfolio@gmail.com
                </span>
              </span>
            </div>
            <div className="space-y-2 w-full text-left">
              <div className="h-px w-full bg-foreground/30 mb-5" />
              <h4 className="text-foreground/30">Follow me</h4>
              <span className="flex">
                <img src={githubLogo} alt="" className="h-10 w-10 " />
                <img src={linkedin_logo} alt="" className="h-10 w-10" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
