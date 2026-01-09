import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-gradient-gold mb-4">
              Aaraasta Tales
            </h3>
            <p className="text-muted-foreground font-elegant text-lg leading-relaxed mb-6">
              Adorning Your Moments, Framing Your Stories
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Portfolio", "Booking", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-muted-foreground font-body text-sm">
              <li>Wedding Photography</li>
              <li>Cinematic Films</li>
              <li>Pre-Wedding Shoots</li>
              <li>Portrait Sessions</li>
              <li>Premium Albums</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="font-body text-sm">
                  Dal Gate, Srinagar, Kashmir - 190001
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-body text-sm hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@aaraastastales.com"
                  className="font-body text-sm hover:text-primary transition-colors"
                >
                  hello@aaraastastales.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Aaraasta Tales. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-xs">
            Crafted with passion in the heart of Kashmir
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
