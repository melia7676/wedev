import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Membership from "./pages/Membership";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
       <div className="min-h-screen bg-background wg-animated-bg flex flex-col">
          <Navbar />
          <div className="pt-16 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
















// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Checkout from "./pages/Checkout";
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";
// import Membership from "./pages/Membership";
// import Gallery from "./pages/Gallery";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <HashRouter>
//         <div className="min-h-screen bg-background">
//           <Navbar />
//           <div className="pt-16">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/shop" element={<Shop />} />
//               <Route path="/checkout" element={<Checkout />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/blog/:id" element={<BlogPost />} />
//               <Route path="/membership" element={<Membership />} />
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </div>
//       </HashRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
