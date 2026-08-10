import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Search } from "lucide-react";
import a from "../assets/a.jpeg";
import b from "../assets/b.jpeg";
import c from "../assets/c.jpeg";
import d from "../assets/d.jpeg";
import e from "../assets/e.jpeg";
import f from "../assets/f.jpeg";
import g from "../assets/g.jpeg";
import lov from "../assets/lov.jpeg";
import me from "../assets/me.jpeg";
import df from "../assets/df.jpeg";

/* ============================================================
   🎨 CUSTOMIZE HERE: Replace placeholder URLs with real ones
   Every profile MUST have all 3 social links.
   ============================================================ */
const profiles = [
  {
    id: 1,
    name: "Mistress Amelia",
    title: "Professional Dominatrix",
    image: d,
    bio: "Experienced dominatrix specializing in psychological domination and discipline.",
    specialties: ["Discipline", "Role Play", "Sensory Play"],
    social: {
      instagram: "https://instagram.com/mistressamelia",
      facebook: "https://facebook.com/mistressamelia",
      twitter: "https://twitter.com/mistressamelia",
    },
  },
  {
    id: 2,
    name: "Master Alexander",
    title: "Rope Artist & Educator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "20 years of experience in traditional dominance and rope artistry.",
    specialties: ["Rope Bondage", "Traditional Dom", "Training"],
    social: {
      instagram: "https://instagram.com/masteralexander",
      facebook: "https://facebook.com/masteralexander",
      twitter: "https://twitter.com/masteralexander",
    },
  },
  {
    id: 3,
    name: "Mistress Rejoice",
    title: "Sensory Explorer",
    image: a,
    bio: "Expert in sensory exploration and power exchange dynamics.",
    specialties: ["Sensory Deprivation", "Power Exchange", "Fetish"],
    social: {
      instagram: "https://instagram.com/mistressrejoice",
      facebook: "https://facebook.com/mistressrejoice",
      twitter: "https://twitter.com/mistressrejoice",
    },
  },
  {
    id: 4,
    name: "Master Dominic",
    title: "Impact Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "Specialized in impact play and advanced BDSM techniques.",
    specialties: ["Impact Play", "Advanced Techniques", "Mentorship"],
    social: {
      instagram: "https://instagram.com/masterdominic",
      facebook: "https://facebook.com/masterdominic",
      twitter: "https://twitter.com/masterdominic",
    },
  },
  {
    id: 5,
    name: "Mistress Ladymelia Luca",
    title: "Sensual Domme",
    image: me,
    bio: "Expert in sensual domination and tease techniques.",
    specialties: ["Pegging", "Tease", "Seduction"],
    social: {
      instagram: "https://instagram.com/ladymelialuca",
      facebook: "https://facebook.com/ladymelialuca",
      twitter: "https://twitter.com/ladymelialuca",
    },
  },
  {
    id: 6,
    name: "Master Sterling",
    title: "Consent Educator",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    bio: "Expert in safe exploration and consent-focused practices.",
    specialties: ["Safety Education", "Consent", "Beginners"],
    social: {
      instagram: "https://instagram.com/mastersterling",
      facebook: "https://facebook.com/mastersterling",
      twitter: "https://twitter.com/mastersterling",
    },
  },
  {
    id: 7,
    name: "Mistress Raven",
    title: "Edge Play Expert",
    image: c,
    bio: "Specializes in intense sessions and edge play.",
    specialties: ["Edge Play", "Intensity", "Experience"],
    social: {
      instagram: "https://instagram.com/mistressraven",
      facebook: "https://facebook.com/mistressraven",
      twitter: "https://twitter.com/mistressraven",
    },
  },
  {
    id: 8,
    name: "Master Viktor",
    title: "Protocol Master",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    bio: "Traditional master with focus on discipline and structure.",
    specialties: ["Discipline", "Structure", "Protocol"],
    social: {
      instagram: "https://instagram.com/masterviktor",
      facebook: "https://facebook.com/masterviktor",
      twitter: "https://twitter.com/masterviktor",
    },
  },
  {
    id: 9,
    name: "Mistress Debbie",
    title: "Elegant Domme",
    image: lov,
    bio: "Expert in elegance, poise, and sophisticated domination.",
    specialties: ["Elegant Dom", "Sophistication", "Refinement"],
    social: {
      instagram: "https://instagram.com/mistressdebbie",
      facebook: "https://facebook.com/mistressdebbie",
      twitter: "https://twitter.com/mistressdebbie",
    },
  },
  {
    id: 10,
    name: "Master Julian",
    title: "Relationship Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Specializes in trust building and relationship dynamics.",
    specialties: ["Trust Building", "Relationships", "Dynamics"],
    social: {
      instagram: "https://instagram.com/masterjulian",
      facebook: "https://facebook.com/masterjulian",
      twitter: "https://twitter.com/masterjulian",
    },
  },
  {
    id: 11,
    name: "Mistress Tempest",
    title: "Creative Scene Artist",
    image: f,
    bio: "Known for creative scenes and artistic expression.",
    specialties: ["Creative Scenes", "Artistry", "Innovation"],
    social: {
      instagram: "https://instagram.com/mistresstempest",
      facebook: "https://facebook.com/mistresstempest",
      twitter: "https://twitter.com/mistresstempest",
    },
  },
  {
    id: 12,
    name: "Master Phoenix",
    title: "Transformation Guide",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop",
    bio: "Expert in transformation and personal growth through BDSM.",
    specialties: ["Transformation", "Growth", "Development"],
    social: {
      instagram: "https://instagram.com/masterphoenix",
      facebook: "https://facebook.com/masterphoenix",
      twitter: "https://twitter.com/masterphoenix",
    },
  },
  {
    id: 13,
    name: "Mistress Debbie Fielder",
    title: "Lifestyle Domme",
    image: df,
    bio: "Focuses on psychological domination and lifestyle dynamics.",
    specialties: ["Lifestyle Dom", "Psychology", "Protocols"],
    social: {
      instagram: "https://instagram.com/mistressdebbief",
      facebook: "https://facebook.com/mistressdebbief",
      twitter: "https://twitter.com/mistressdebbief",
    },
  },
  {
    id: 14,
    name: "Master Damon",
    title: "Psychological Play",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop",
    bio: "Specializes in intense psychological play and mindfuck.",
    specialties: ["Mind Games", "Psychology", "Intensity"],
    social: {
      instagram: "https://instagram.com/masterdamon",
      facebook: "https://facebook.com/masterdamon",
      twitter: "https://twitter.com/masterdamon",
    },
  },
  {
    id: 15,
    name: "Mistress Seraphina",
    title: "Sensual Tease",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    bio: "Expert in sensual domination and tease techniques.",
    specialties: ["Sensual Dom", "Tease", "Seduction"],
    social: {
      instagram: "https://instagram.com/mistressseraphina",
      facebook: "https://facebook.com/mistressseraphina",
      twitter: "https://twitter.com/mistressseraphina",
    },
  },
  {
    id: 16,
    name: "Mistress Aurora",
    title: "Nurturing Domme",
    image: g,
    bio: "Focuses on nurturing dominance and positive reinforcement.",
    specialties: ["Nurturing Dom", "Positive", "Support"],
    social: {
      instagram: "https://instagram.com/mistressaurora",
      facebook: "https://facebook.com/mistressaurora",
      twitter: "https://twitter.com/mistressaurora",
    },
  },
  {
    id: 17,
    name: "Mistress Isabella",
    title: "Lifestyle Educator",
    image: b,
    bio: "Focuses on psychological domination and lifestyle dynamics.",
    specialties: ["Lifestyle Dom", "Psychology", "Protocols"],
    social: {
      instagram: "https://instagram.com/mistressisabella",
      facebook: "https://facebook.com/mistressisabella",
      twitter: "https://twitter.com/mistressisabella",
    },
  },
];

/* ============================================================
   Social Button Component
   ============================================================ */
const SocialButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/30 border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
  >
    <Icon size={15} />
  </a>
);

/* ============================================================
   Profile Card
   ============================================================ */
const ProfileCard = ({ profile }: { profile: (typeof profiles)[0] }) => {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/25 transition-all duration-500 hover:shadow-elegant flex flex-col">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Name & title on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {profile.name}
          </h3>
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em] mt-1">
            {profile.title}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {profile.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {profile.specialties.map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-[10px] font-medium bg-secondary/40 text-secondary-foreground border-0 hover:bg-secondary/60 transition-colors"
            >
              {specialty}
            </Badge>
          ))}
        </div>

        {/* Social row */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
            Follow
          </span>
          <div className="flex items-center gap-2">
            <SocialButton
              href={profile.social.instagram}
              icon={FaInstagram}
              label={`${profile.name} on Instagram`}
            />
            <SocialButton
              href={profile.social.facebook}
              icon={FaFacebook}
              label={`${profile.name} on Facebook`}
            />
            <SocialButton
              href={profile.social.twitter}
              icon={FaXTwitter}
              label={`${profile.name} on X`}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

/* ============================================================
   Gallery Page
   ============================================================ */
const Gallery = () => {
  const [search, setSearch] = useState("");

  const filtered = profiles.filter((p) => {
    const term = search.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.title.toLowerCase().includes(term) ||
      p.bio.toLowerCase().includes(term) ||
      p.specialties.some((s) => s.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-3">
            Our Community
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wicked Grounds Creators
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Meet the educators, artists, and professionals who make our
            community thrive.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Search creators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-card/60 border-border/40 focus:border-primary/40 text-foreground placeholder:text-muted-foreground/50 rounded-xl text-sm"
            />
          </div>
          {search && (
            <p className="text-center text-xs text-muted-foreground mt-2">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No creators found.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-3 text-primary hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;







// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import a from '../assets/a.jpeg';
// import b from '../assets/b.jpeg';
// import c from '../assets/c.jpeg';
// import d from '../assets/d.jpeg';
// import e from '../assets/e.jpeg';
// import f from '../assets/f.jpeg';
// import g from '../assets/g.jpeg';
// import lov from '../assets/lov.jpeg'
// import me from '../assets/me.jpeg'
// import df from '../assets/df.jpeg'

// const profiles = [
//   {
//     id: 1,
//     name: "Mistress Amelia",
//     image: d,
//     bio: "Experienced dominatrix specializing in psychological domination and discipline.",
//     specialties: ["Discipline", "Role Play", "Sensory Play"]
//   },
//   {
//     id: 2,
//     name: "Master Alexander",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
//     bio: "20 years of experience in traditional dominance and rope artistry.",
//     specialties: ["Rope Bondage", "Traditional Dom", "Training"]
//   },
//   {
//     id: 3,
//     name: "Mistress Rejoice",
//     image: a,
//     bio: "Expert in sensory exploration and power exchange dynamics.",
//     specialties: ["Sensory Deprivation", "Power Exchange", "Fetish"]
//   },
//   {
//     id: 4,
//     name: "Master Dominic",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
//     bio: "Specialized in impact play and advanced BDSM techniques.",
//     specialties: ["Impact Play", "Advanced Techniques", "Mentorship"]
//   },
//   {
//     id: 5,
//     name: "Mistress Ladymelia Luca",
//     image: me,
//     bio: "Expert in sensual domination and tease techniques.",
//     specialties: ["Pegging", "Tease", "Seduction, humiliation"]   
//   },
//   {
//     id: 6,
//     name: "Master Sterling",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
//     bio: "Expert in safe exploration and consent-focused practices.",
//     specialties: ["Safety Education", "Consent", "Beginners"]
//   },
//   {
//     id: 7,
//     name: "Mistress Raven",
//     image: c,
//     bio: "Specializes in intense sessions and edge play.",
//     specialties: ["Edge Play", "Intensity", "Experience"]
//   },
//   {
//     id: 8,
//     name: "Master Viktor",
//     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
//     bio: "Traditional master with focus on discipline and structure.",
//     specialties: ["Discipline", "Structure", "Protocol"]
//   },
//   {
//     id: 9,
//     name: "Mistress Debbie",
//     image: lov,
//     bio: "Expert in elegance, poise, and sophisticated domination.",
//     specialties: ["Elegant Dom", "Sophistication", "Refinement"]
//   },
//   {
//     id: 10,
//     name: "Master Julian",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
//     bio: "Specializes in trust building and relationship dynamics.",
//     specialties: ["Trust Building", "Relationships", "Dynamics"]
//   },
//   {
//     id: 11,
//     name: "Mistress Tempest",
//     image: f,
//     bio: "Known for creative scenes and artistic expression.",
//     specialties: ["Creative Scenes", "Artistry", "Innovation"]
//   },
//   {
//     id: 12,
//     name: "Master Phoenix",
//     image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop",
//     bio: "Expert in transformation and personal growth through BDSM.",
//     specialties: ["Transformation", "Growth", "Development"]
//   },
//   {
//     id: 13,
//     name: "Mistress Debbie fielder",
//     image: df,
//     bio: "Focuses on psychological domination and lifestyle dynamics.",
//     specialties: ["Lifestyle Dom", "Psychology", "Protocols"]

//   },
//   {
//     id: 14,
//     name: "Master Damon",
//     image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop",
//     bio: "Specializes in intense psychological play and mindfuck.",
//     specialties: ["Mind Games", "Psychology", "Intensity"]
//   },
//   {
//     id: 15,
//     name: "Mistress Seraphina",
//     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
//     bio: "Expert in sensual domination and tease techniques.",
//     specialties: ["Sensual Dom", "Tease", "Seduction"]
//   },
//   {
//     id: 16,
//     name: "Mistress Aurora",
//     image: g,
//     bio: "Focuses on nurturing dominance and positive reinforcement.",
//     specialties: ["Nurturing Dom", "Positive", "Support"]
//   },
//   {
//     id: 17,
//     name: "Mistress Isabella",
//     image: b,
//     bio: "Focuses on psychological domination and lifestyle dynamics.",
//     specialties: ["Lifestyle Dom", "Psychology", "Protocols"]

//   },
// ];

// const Gallery = () => {
//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Our Professional Team
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Meet our experienced and dedicated professionals who guide our community
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {profiles.map((profile) => (
//             <Card key={profile.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
//               <div className="aspect-[4/5] overflow-hidden">
//                 <img 
//                   src={profile.image} 
//                   alt={profile.name}
//                   className="w-full h-full object-cover hover:scale-105 transition-smooth"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
//                 <p className="text-muted-foreground mb-4 text-sm">{profile.bio}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {profile.specialties.map((specialty, index) => (
//                     <Badge key={index} variant="secondary">
//                       {specialty}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
