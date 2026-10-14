import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaPatreon,
  FaHeart,
  FaUsers,
} from "react-icons/fa6";
import { Mail, ExternalLink, Download } from "lucide-react";

/* ============================================================
   🎨 CUSTOMIZE HERE: Newsletter URL & Social URLs
   ============================================================ */
const NEWSLETTER_URL = "https://wicked-grounds.ck.page/805c8b7c89";
const CONTACT_EMAIL = "info@wickedgroundsonline.com";

const SOCIAL_LINKS = [
  { name: "X", url: "https://x.com/wickedgrounds", icon: FaXTwitter },
  { name: "Instagram", url: "https://www.instagram.com/wickedgrounds", icon: FaInstagram },
  { name: "Facebook", url: "https://facebook.com/wickedgroundscafe", icon: FaFacebook },
  { name: "FetLife", url: "https://fetlife.com/users/8474971", icon: FaHeart },
  { name: "Patreon", url: "https://www.patreon.com/Wickedgrounds", icon: FaPatreon },
  { name: "Bloom", url: "https://bl.ooo/m/org/wicked-grounds", icon: FaUsers },
  { name: "Events", url: "https://forbiddentickets.com/events/wicked-grounds", icon: FaUsers },
];

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background — matches logo red tones */}
        <div className="absolute inset-0 wg-animated-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

        {/* Subtle grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(350 86% 44% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(350 86% 44% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Wicked Grounds Online
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">
            Kink Community, Everywhere
          </h2>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Explore underground culture",
                3000,
                "Join our exclusive community",
                3000,
                "Shop curated lifestyle goods",
                3000,
                "Discover events & experiences",
                3000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="gradient-primary shadow-glow transition-smooth hover:scale-105"
            >
              <Link to="/shop">Explore Shop</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/membership-app">
                <Download className="mr-2" />
                Windows App
              </Link>
            </Button>
          </div>

          {/* Contact icons */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Phone"
            >
              <FaPhoneAlt size={24} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT SECTION
          ============================================================ */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">
            About Wicked Grounds Online
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Built by the community, for the community. A space to learn, connect,
            and grow without judgment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <p className="text-muted-foreground">
                Learn about practices, safety, and consent through comprehensive
                resources and experienced community members.
              </p>
            </Card>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-primary">Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals in a safe, respectful, and
                judgment-free environment dedicated to exploration.
              </p>
            </Card>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-primary">Premium Shop</h3>
              <p className="text-muted-foreground">
                Access high-quality equipment and lifestyle products carefully
                curated for our community members.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================================
          SOCIAL CONNECT SECTION
          ============================================================ */}
      <section className="py-20 px-6 bg-card/40 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Find Us Everywhere
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Follow Wicked Grounds Online across all platforms. Events, updates,
            and behind-the-scenes content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/40 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-smooth"
                >
                  <Icon size={20} />
                  <span className="font-medium">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          NEWSLETTER SECTION
          ============================================================ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md p-10 overflow-hidden">
            {/* Decorative glows — logo red tones */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Mail size={40} className="mx-auto mb-4 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Join the Inner Circle
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Be the first to know about new events, exclusive drops, and
                community updates. No spam — just the good stuff.
              </p>
              <Button
                asChild
                size="lg"
                className="wg-newsletter-btn px-10 py-6 text-lg rounded-xl"
              >
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    Sign Up for the Wicked Grounds Newsletter!
                    <ExternalLink size={18} className="opacity-70" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MEMBERSHIP CTA SECTION
          ============================================================ */}
      <section className="py-20 px-6 bg-card/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Become a Member
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock exclusive content, community access, event discounts, and
            special shop pricing.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-primary shadow-glow transition-smooth hover:scale-105"
          >
            <Link to="/membership">Learn About Membership</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
