import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, X, Lock, ShieldCheck, AlertCircle } from "lucide-react";
import chastity from "../assets/chastity.jpeg";
import satin from "../assets/satin.jpeg";
import flogger from "../assets/ca.jpeg";
import paddle from "../assets/paddle.jpeg";
import silk from "../assets/silk.jpeg";
import leather from "../assets/leather.jpg";
import hemp from "../assets/hemp.jpg";
import maid from "../assets/maid.avif";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/* ============================================================
   MEMBERS ONLY — Community ID Gate
   ============================================================ */
const COMMUNITY_ID = "sub26081pb";
const STORAGE_KEY = "wgo_shop_verified";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Chastity Cage", price: 520, image: chastity, category: "Accessories", description: "Lightweight silicone chastity cage for comfortable long-term wear" },
  { id: 2, name: "Elderly Roleplay Sub Kit", price: 4,050, image: flogger, category: "Dress Kit", description: "A complete elderly inspired roleplay kit featuring dresses, lingerie, stockings, slippers, wigs, glasses, scarves, handbags, and classic accessories. Includes optional nightgowns and house robes to help you create your preferred character look" },
  { id: 3, name: "Silk Restraints Set", price: 595, image: silk, category: "Restraints", description: "Soft silk restraints for comfortable bondage" },
  { id: 4, name: "Satin Blindfold", price: 450, image: satin, category: "Accessories", description: "Luxurious satin blindfold for sensory play" },
  { id: 5, name: "Hemp Rope Set", price: 475, image: hemp, category: "Bondage", description: "Professional-grade hemp rope for shibari" },
  { id: 6, name: "Leather Ankle Cuffs", price: 510, image: leather, category: "Restraints", description: "Durable leather ankle cuffs with D-rings" },
  { id: 7, name: "Maid Dress", price: 880, image: maid, category: "Harnesses", description: "Fashionable body harness" },
  { id: 8, name: "Paddle Set", price: 485, image: paddle, category: "Impact Play", description: "Three-piece paddle set for all levels" },
];

/* ============================================================
   Shop Gate — Members Only Screen
   ============================================================ */
const ShopGate = ({ onVerify }: { onVerify: () => void }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shakeOffset, setShakeOffset] = useState(0);

  const triggerShake = () => {
    const offsets = [0, -8, 8, -6, 6, -3, 3, 0];
    offsets.forEach((off, i) => {
      setTimeout(() => setShakeOffset(off), i * 50);
    });
  };

  const handleVerify = () => {
    if (input.trim() === COMMUNITY_ID) {
      localStorage.setItem(STORAGE_KEY, "true");
      onVerify();
      toast.success("Welcome back, member. Shop access granted.");
    } else {
      setError(true);
      triggerShake();
      toast.error("Invalid Community ID. Access denied.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleVerify();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card
        className="w-full max-w-md p-8 bg-card/60 backdrop-blur-md border-border/50 text-center"
        style={{ transform: `translateX(${shakeOffset}px)`, transition: "transform 50ms ease" }}
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
          <Lock size={28} className="text-primary" />
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-2">
          Members Only
        </h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          The Wicked Grounds Shop is exclusive to registered community members.
          Please enter your Community ID to proceed.
        </p>

        <div className="space-y-3">
          <div className="relative">
            <ShieldCheck
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Enter Community ID"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              onKeyDown={handleKeyDown}
              className={`pl-10 bg-background/60 border text-foreground placeholder:text-muted-foreground/50 text-sm ${
                error
                  ? "border-destructive/60 focus:border-destructive"
                  : "border-border/50 focus:border-primary/50"
              }`}
            />
          </div>

          {error && (
            <div className="flex items-center justify-center gap-1.5 text-destructive text-xs">
              <AlertCircle size={13} />
              <span>Invalid ID. Please check your Community ID and try again.</span>
            </div>
          )}

          <Button
            onClick={handleVerify}
            className="w-full gradient-primary shadow-glow transition-smooth hover:scale-[1.02]"
          >
            Verify & Unlock Shop
          </Button>
        </div>

        <div className="mt-6 pt-5 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Don&apos;t have a Community ID?{" "}
            <Link to="/membership" className="text-primary hover:underline font-medium">
              Become a member
            </Link>{" "}
            to get access.
          </p>
        </div>
      </Card>
    </div>
  );
};

/* ============================================================
   Main Shop Component
   ============================================================ */
const Shop = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  /* Check localStorage on mount */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setIsVerified(true);
  }, []);

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId));
    toast.info("Item removed from cart");
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(
      cart.map((item) => {
        if (item.product.id === productId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  /* If not verified, show the gate */
  if (!isVerified) {
    return <ShopGate onVerify={() => setIsVerified(true)} />;
  }

  /* Verified — show full shop (your original working layout) */
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium Shop
            </h1>
            <p className="text-muted-foreground text-lg">
              Curated collection of high-quality lifestyle products
            </p>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="lg" className="relative">
                <ShoppingCart className="mr-2" />
                Cart
                {cart.length > 0 && (
                  <Badge className="ml-2 gradient-primary">{cart.length}</Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  {cart.length === 0 ? "Your cart is empty" : `${cart.length} item(s) in cart`}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 space-y-4">
                {cart.map((item) => (
                  <Card key={item.product.id} className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.product.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.product.id, -1)}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.product.id, 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X size={20} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${totalPrice}</span>
                  </div>
                  <Button className="w-full gradient-primary shadow-glow" size="lg" asChild>
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-elegant transition-smooth group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <Badge className="absolute top-4 right-4 gradient-primary">
                  {product.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button
                    onClick={() => addToCart(product)}
                    className="gradient-primary"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

















// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { ShoppingCart, X, Lock, ShieldCheck, AlertCircle } from "lucide-react";
// import charity from "../assets/charity.jpeg";
// import satin from "../assets/satin.jpeg";
// import flogger from "../assets/flogger.webp";
// import paddle from "../assets/paddle.jpeg";
// import silk from "../assets/silk.jpeg";
// import leather from "../assets/leather.jpg";
// import hemp from "../assets/hemp.jpeg";
// import maid from "../assets/maid.avif";
// import { Link } from "react-router-dom";
// import { toast } from "sonner";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// /* ============================================================
//    MEMBERS ONLY — Community ID Gate
//    Change this to your desired Community ID
//    ============================================================ */
// const COMMUNITY_ID = "sub26081pb";
// const STORAGE_KEY = "wgo_shop_verified";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
//   description: string;
// }

// const products: Product[] = [
//   { id: 1, name: "Chastity Cage", price: 520, image: charity, category: "Accessories", description: "Lightweight silicone chastity cage for comfortable long-term wear" },
//   { id: 2, name: "Luxury Flogger", price: 450, image: flogger, category: "Impact Play", description: "Premium quality flogger for experienced users" },
//   { id: 3, name: "Silk Restraints Set", price: 595, image: silk, category: "Restraints", description: "Soft silk restraints for comfortable bondage" },
//   { id: 4, name: "Satin Blindfold", price: 450, image: satin, category: "Accessories", description: "Luxurious satin blindfold for sensory play" },
//   { id: 5, name: "Hemp Rope Set", price: 475, image: hemp, category: "Bondage", description: "Professional-grade hemp rope for shibari" },
//   { id: 6, name: "Leather Ankle Cuffs", price: 510, image: leather, category: "Restraints", description: "Durable leather ankle cuffs with D-rings" },
//   { id: 7, name: "Maid Dress", price: 880, image: maid, category: "Harnesses", description: "Fashionable body harness" },
//   { id: 8, name: "Paddle Set", price: 485, image: paddle, category: "Impact Play", description: "Three-piece paddle set for all levels" },
// ];

// /* ============================================================
//    Shop Gate — Members Only Screen
//    ============================================================ */
// const ShopGate = ({ onVerify }: { onVerify: () => void }) => {
//   const [input, setInput] = useState("");
//   const [error, setError] = useState(false);
//   const [shakeOffset, setShakeOffset] = useState(0);

//   const triggerShake = () => {
//     const offsets = [0, -8, 8, -6, 6, -3, 3, 0];
//     offsets.forEach((off, i) => {
//       setTimeout(() => setShakeOffset(off), i * 50);
//     });
//   };

//   const handleVerify = () => {
//     if (input.trim() === COMMUNITY_ID) {
//       localStorage.setItem(STORAGE_KEY, "true");
//       onVerify();
//       toast.success("Welcome back, member. Shop access granted.");
//     } else {
//       setError(true);
//       triggerShake();
//       toast.error("Invalid Community ID. Access denied.");
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") handleVerify();
//   };

//   return (
//     <div className="min-h-[80vh] flex items-center justify-center px-4">
//       <Card
//         className="w-full max-w-md p-8 bg-card/60 backdrop-blur-md border-border/50 text-center"
//         style={{ transform: `translateX(${shakeOffset}px)`, transition: "transform 50ms ease" }}
//       >
//         {/* Lock icon */}
//         <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
//           <Lock size={28} className="text-primary" />
//         </div>

//         <h2 className="text-2xl font-bold text-foreground mb-2">
//           Members Only
//         </h2>
//         <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
//           The Wicked Grounds Shop is exclusive to registered community members.
//           Please enter your Community ID to proceed.
//         </p>

//         {/* ID Input */}
//         <div className="space-y-3">
//           <div className="relative">
//             <ShieldCheck
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
//             />
//             <Input
//               type="text"
//               placeholder="Enter Community ID (e.g. sub26081pb)"
//               value={input}
//               onChange={(e) => {
//                 setInput(e.target.value);
//                 setError(false);
//               }}
//               onKeyDown={handleKeyDown}
//               className={`pl-10 bg-background/60 border text-foreground placeholder:text-muted-foreground/50 text-sm ${
//                 error
//                   ? "border-destructive/60 focus:border-destructive"
//                   : "border-border/50 focus:border-primary/50"
//               }`}
//             />
//           </div>

//           {error && (
//             <div className="flex items-center justify-center gap-1.5 text-destructive text-xs">
//               <AlertCircle size={13} />
//               <span>Invalid ID. Please check your Community ID and try again.</span>
//             </div>
//           )}

//           <Button
//             onClick={handleVerify}
//             className="w-full gradient-primary shadow-glow transition-smooth hover:scale-[1.02]"
//           >
//             Verify & Unlock Shop
//           </Button>
//         </div>

//         {/* Footer hint */}
//         <div className="mt-6 pt-5 border-t border-border/30">
//           <p className="text-xs text-muted-foreground">
//             Don&apos;t have a Community ID?{" "}
//             <Link
//               to="/membership"
//               className="text-primary hover:underline font-medium"
//             >
//               Become a member
//             </Link>{" "}
//             to get access.
//           </p>
//         </div>
//       </Card>
//     </div>
//   );
// };

// /* ============================================================
//    Main Shop Component
//    ============================================================ */
// const Shop = () => {
//   const [isVerified, setIsVerified] = useState(false);
//   const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   /* Check localStorage on mount */
//   useEffect(() => {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     if (stored === "true") setIsVerified(true);
//   }, []);

//   const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   const addToCart = (product: Product) => {
//     const existingItem = cart.find((item) => item.product.id === product.id);
//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.product.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { product, quantity: 1 }]);
//     }
//     toast.success(`${product.name} added to cart`);
//   };

//   const removeFromCart = (productId: number) => {
//     setCart(cart.filter((item) => item.product.id !== productId));
//     toast.info("Item removed from cart");
//   };

//   const updateQuantity = (productId: number, change: number) => {
//     setCart(
//       cart.map((item) => {
//         if (item.product.id === productId) {
//           const newQuantity = Math.max(1, item.quantity + change);
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       })
//     );
//   };

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );

//   /* If not verified, show the gate */
//   if (!isVerified) {
//     return <ShopGate onVerify={() => setIsVerified(true)} />;
//   }

//   /* Verified — show full shop */
//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
//           <div>
//             <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-2">
//               Members Only
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Wicked Grounds Shop
//             </h1>
//             <p className="text-muted-foreground mt-2">
//               Curated collection of high-quality lifestyle products
//             </p>
//           </div>

//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="lg" className="relative border-primary/40 text-primary hover:bg-primary/10">
//                 <ShoppingCart className="mr-2" size={18} />
//                 Cart
//                 {cart.length > 0 && (
//                   <Badge className="ml-2 gradient-primary border-0">
//                     {cart.length}
//                   </Badge>
//                 )}
//               </Button>
//             </SheetTrigger>
//             <SheetContent className="w-full sm:max-w-lg bg-card/95 backdrop-blur-md border-border/50">
//               <SheetHeader>
//                 <SheetTitle className="text-foreground">Shopping Cart</SheetTitle>
//                 <SheetDescription className="text-muted-foreground">
//                   {cart.length === 0
//                     ? "Your cart is empty"
//                     : `${cart.length} item(s) in cart`}
//                 </SheetDescription>
//               </SheetHeader>

//               <div className="mt-8 space-y-4">
//                 {cart.map((item) => (
//                   <Card key={item.product.id} className="p-4 bg-background/40 border-border/30">
//                     <div className="flex gap-4">
//                       <img
//                         src={item.product.image}
//                         alt={item.product.name}
//                         className="w-16 h-16 object-cover rounded-md"
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-sm text-foreground">
//                           {item.product.name}
//                         </h4>
//                         <p className="text-xs text-muted-foreground">
//                           ${item.product.price}
//                         </p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             onClick={() => updateQuantity(item.product.id, -1)}
//                             className="h-7 w-7 p-0 border-border/50"
//                           >
//                             -
//                           </Button>
//                           <span className="text-sm w-4 text-center">
//                             {item.quantity}
//                           </span>
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             onClick={() => updateQuantity(item.product.id, 1)}
//                             className="h-7 w-7 p-0 border-border/50"
//                           >
//                             +
//                           </Button>
//                         </div>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => removeFromCart(item.product.id)}
//                         className="text-muted-foreground hover:text-destructive"
//                       >
//                         <X size={16} />
//                       </Button>
//                     </div>
//                   </Card>
//                 ))}
//               </div>

//               {cart.length > 0 && (
//                 <div className="mt-8 space-y-4">
//                   <div className="flex justify-between text-lg font-bold text-foreground">
//                     <span>Total:</span>
//                     <span className="text-primary">${totalPrice}</span>
//                   </div>
//                   <Button
//                     className="w-full gradient-primary shadow-glow"
//                     size="lg"
//                     asChild
//                   >
//                     <Link to="/checkout">Proceed to Checkout</Link>
//                   </Button>
//                 </div>
//               )}
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* Category Filter */}
//         <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category)}
//               className={
//                 selectedCategory === category
//                   ? "gradient-primary shadow-glow shrink-0"
//                   : "border-border/40 text-muted-foreground hover:text-foreground shrink-0"
//               }
//             >
//               {category}
//             </Button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <Card
//               key={product.id}
//               className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/25 transition-all duration-500 hover:shadow-elegant group"
//             >
//               <div className="relative overflow-hidden aspect-square">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <Badge className="absolute top-3 right-3 gradient-primary border-0 shadow-glow text-[10px]">
//                   {product.category}
//                 </Badge>
//               </div>
//               <div className="p-5">
//                 <h3 className="text-lg font-bold text-foreground mb-1">
//                   {product.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
//                   {product.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xl font-bold text-primary">
//                     ${product.price}
//                   </span>
//                   <Button
//                     onClick={() => addToCart(product)}
//                     className="gradient-primary shadow-glow hover:scale-105 transition-smooth"
//                   >
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;











// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ShoppingCart, X } from "lucide-react";
// import chastity from '../assets/chastity.jpeg'
// import satin from '../assets/satin.jpeg'
// import flogger from '../assets/flogger.webp'
// import paddle from '../assets/paddle.jpeg'
// import silk from '../assets/silk.jpeg'
// import leather from '../assets/leather.jpg'
// import hemp from '../assets/hemp.jpg'
// import maid from '../assets/maid.avif'
// import { Link } from "react-router-dom";
// import { toast } from "sonner";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
//   description: string;
// }

// const products: Product[] = [
//   { id: 1, name: "Chastity Cage", price: 520, image: chastity, category: "Accessories", description: "Lightweight silicone chastity cage for comfortable long-term wear" },
//   { id: 2, name: "Luxury Flogger", price: 450, image: flogger, category: "Impact Play", description: "Premium quality flogger for experienced users" },
//   { id: 3, name: "Silk Restraints Set", price: 595, image: silk, category: "Restraints", description: "Soft silk restraints for comfortable bondage" },
//   { id: 4, name: "Satin Blindfold", price: 450, image:satin , category: "Accessories", description: "Luxurious satin blindfold for sensory play" },
//   { id: 5, name: "Hemp Rope Set", price: 475, image: hemp, category: "Bondage", description: "Professional-grade hemp rope for shibari" },
//   { id: 6, name: "Leather Ankle Cuffs", price: 510, image: leather, category: "Restraints", description: "Durable leather ankle cuffs with D-rings" },
//   { id: 7, name: "Maid Dress", price: 880, image: maid, category: "Harnesses", description: "Fashionable body harness" },
//   { id: 8, name: "Paddle Set", price: 485, image: paddle, category: "Impact Play", description: "Three-piece paddle set for all levels" },
// ];

// const Shop = () => {
//   const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

//   const filteredProducts = selectedCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === selectedCategory);

//   const addToCart = (product: Product) => {
//     const existingItem = cart.find(item => item.product.id === product.id);
//     if (existingItem) {
//       setCart(cart.map(item => 
//         item.product.id === product.id 
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ));
//     } else {
//       setCart([...cart, { product, quantity: 1 }]);
//     }
//     toast.success(`${product.name} added to cart`);
//   };

//   const removeFromCart = (productId: number) => {
//     setCart(cart.filter(item => item.product.id !== productId));
//     toast.info("Item removed from cart");
//   };

//   const updateQuantity = (productId: number, change: number) => {
//     setCart(cart.map(item => {
//       if (item.product.id === productId) {
//         const newQuantity = Math.max(1, item.quantity + change);
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     }));
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-12">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Premium Shop
//             </h1>
//             <p className="text-muted-foreground text-lg">
//               Curated collection of high-quality lifestyle products
//             </p>
//           </div>

//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="lg" className="relative">
//                 <ShoppingCart className="mr-2" />
//                 Cart
//                 {cart.length > 0 && (
//                   <Badge className="ml-2 gradient-primary">{cart.length}</Badge>
//                 )}
//               </Button>
//             </SheetTrigger>
//             <SheetContent className="w-full sm:max-w-lg">
//               <SheetHeader>
//                 <SheetTitle>Shopping Cart</SheetTitle>
//                 <SheetDescription>
//                   {cart.length === 0 ? "Your cart is empty" : `${cart.length} item(s) in cart`}
//                 </SheetDescription>
//               </SheetHeader>
              
//               <div className="mt-8 space-y-4">
//                 {cart.map(item => (
//                   <Card key={item.product.id} className="p-4">
//                     <div className="flex gap-4">
//                       <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded" />
//                       <div className="flex-1">
//                         <h3 className="font-semibold">{item.product.name}</h3>
//                         <p className="text-sm text-muted-foreground">${item.product.price}</p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, -1)}>-</Button>
//                           <span>{item.quantity}</span>
//                           <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, 1)}>+</Button>
//                         </div>
//                       </div>
//                       <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.product.id)}>
//                         <X size={20} />
//                       </Button>
//                     </div>
//                   </Card>
//                 ))}
//               </div>

//               {cart.length > 0 && (
//                 <div className="mt-8 space-y-4">
//                   <div className="flex justify-between text-xl font-bold">
//                     <span>Total:</span>
//                     <span className="text-primary">${totalPrice}</span>
//                   </div>
//                   <Button className="w-full gradient-primary shadow-glow" size="lg" asChild>
//                 <Link to="/checkout">Proceed to Checkout</Link>
//                   </Button>
//                 </div>
//               )}
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* Category Filter */}
//         <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
//           {categories.map(category => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category)}
//               className={selectedCategory === category ? "gradient-primary" : ""}
//             >
//               {category}
//             </Button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredProducts.map(product => (
//             <Card key={product.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
//                 />
//                 <Badge className="absolute top-4 right-4 gradient-primary">{product.category}</Badge>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//                 <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-2xl font-bold text-primary">${product.price}</span>
//                   <Button onClick={() => addToCart(product)} className="gradient-primary">
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
