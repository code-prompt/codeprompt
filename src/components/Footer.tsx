import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building scalable software solutions that help businesses grow, scale, and succeed in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-heading mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-heading mb-4">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">Web Development</span>
              <span className="text-sm text-muted-foreground">Mobile App Development</span>
              <span className="text-sm text-muted-foreground">SaaS Solutions</span>
              <span className="text-sm text-muted-foreground">Digital Marketing & SEO</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-heading mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@codeprompt.in"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@codeprompt.in
              </a>
              <a
                href="mailto:support@codeprompt.in"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@codeprompt.in
              </a>
              <a
                href="tel:+919098546675"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 90985-46675
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Code Prompt Technical Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Building Technology That Scales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
