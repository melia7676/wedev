import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const logoUrl = "/assets/lg.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/membership", label: "Membership" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Wicked Grounds Online Home">
            <img
              src={logoUrl}
              alt="Wicked Grounds Online Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden sm:inline text-lg font-bold tracking-tight text-foreground">
              Wicked Grounds
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/membership-app">
                <Download className="mr-2" size={16} />
                Windows App
              </Link>
            </Button>
            <Button asChild className="gradient-primary shadow-glow">
              <Link to="/membership">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-muted-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/membership-app" onClick={() => setIsOpen(false)}>
                <Download className="mr-2" size={16} />
                Windows App
              </Link>
            </Button>
            <Button asChild className="w-full gradient-primary">
              <Link to="/membership" onClick={() => setIsOpen(false)}>
                Join Now
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
