import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaPatreon,
  FaHeart,
  FaUsers,
  
} from "react-icons/fa6";

const logoUrl = "/assets/lg.jpeg";

/* ============================================================
   🎨 CUSTOMIZE HERE: Replace these with your real URLs
   ============================================================ */
const SOCIAL_LINKS = [
  {
    name: "X (Twitter)",
    url: "https://x.com/wickedgrounds",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/wickedgrounds",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/wickedgroundscafe",
    icon: FaFacebook,
  },
  {
    name: "FetLife",
    url: "https://fetlife.com/users/8474971",
    icon: FaHeart,
  },
  {
    name: "Patreon",
    url: "https://www.patreon.com/Wickedgrounds",
    icon: FaPatreon,
  },
  {
    name: "Bloom",
    url: "https://bl.ooo/m/org/wicked-grounds",
    icon: FaUsers,
  },
  {
    name: "Events & Tickets",
    url: "https://forbiddentickets.com/events/wicked-grounds",
    icon: FaUsers,
  },
];

const NEWSLETTER_URL = "https://wicked-grounds.ck.page/805c8b7c89";
const CONTACT_EMAIL = "info@wickedgroundsonline.com";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/membership", label: "Membership" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-md">
      {/* Newsletter CTA Banner */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay in the Loop
              </h3>
              <p className="text-muted-foreground max-w-md">
                Get the latest events, shop drops, and community news delivered
                to your inbox.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="wg-newsletter-btn px-8 py-6 text-base rounded-xl"
            >
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <Mail size={20} />
                  Sign Up for the Wicked Grounds Newsletter!
                  <ExternalLink size={16} className="opacity-70" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Wicked Grounds Online Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Wicked Grounds Online
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A community space for connection, education, and exploration.
              Welcome to the underground.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="wg-social-icon"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Follow us everywhere. DMs open.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Wicked Grounds Online. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">
              Privacy
            </Link>
            <Link to="/" className="hover:text-primary transition-smooth">
              Terms
            </Link>
            <Link to="/" className="hover:text-primary transition-smooth">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;