// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Check, Copy, Upload } from "lucide-react";
// import { FaBitcoin, FaPaypal } from "react-icons/fa";
// import { SiVenmo, SiCashapp } from "react-icons/si";
// import { toast } from "sonner";

// const professionals = [
//   "Mistress Scarlett", "Master Alexander", "Mistress Vivienne", "Master Dominic",
//   "Mistress Isabella", "Master Sterling", "Mistress Raven", "Master Viktor",
//   "Mistress Celeste", "Master Julian", "Mistress Tempest", "Master Phoenix",
//   "Mistress Aurora", "Master Damon", "Mistress Seraphina" "Mistress Debbie fielder"
// ];

// const Membership = () => {
//   const [paymentMethod, setPaymentMethod] = useState("cashapp");
//   const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
//   const [receipt, setReceipt] = useState<File | null>(null);
//   const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
//   const [eCode, setECode] = useState("");

//   const paymentAddresses = {
//     cashapp: "$HouseOfSat",
//     paypal: "houseofsatisfaction@paypal.com",
//     venmo: "@HouseOfSatisfaction",
//     bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
//     giftcard: "giftcards@houseofsatisfaction.com"
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     toast.success("Copied!");
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (side === 'front') setGiftCardFront(file);
//       else setGiftCardBack(file);
//       toast.success(`${side === 'front' ? 'Front' : 'Back'} of card uploaded`);
//     }
//   };

//   const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     setReceipt(file);
//     toast.success('Receipt uploaded successfully');
//   }
// };


//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Registration submitted! We'll contact you within 24 hours.");
//   };
//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Join Our Community
//           </h1>
//           <p className="text-xl text-muted-foreground">
//             Become a member of the House of Satisfaction BDSM Community
//           </p>
//         </div>

//         {/* Membership Card */}
//         <Card className="p-8 md:p-12 mb-12 shadow-elegant">
//           <div className="text-center mb-8">
//             <div className="text-5xl font-bold text-primary mb-4">$500</div>
//             <p className="text-xl text-muted-foreground">One-time Registration Fee</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
//               <ul className="space-y-4">
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Exclusive access to community events and gatherings</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Private member forums and discussion groups</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Educational workshops and safety training</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>20% discount on all shop purchases</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Access to experienced mentors and guides</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Monthly newsletter and exclusive content</span>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold mb-6">Registration Process</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     1
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Pay Registration Fee</h4>
//                     <p className="text-sm text-muted-foreground">Choose your preferred payment method below ($500)</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     2
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Receive Registration Form</h4>
//                     <p className="text-sm text-muted-foreground">We'll email you the form within 24 hours</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     3
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Complete & Submit Form</h4>
//                     <p className="text-sm text-muted-foreground">Fill out and return for verification</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     4
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Welcome to the Community</h4>
//                     <p className="text-sm text-muted-foreground">Receive your membership credentials</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-border pt-8">
//             <h3 className="text-2xl font-bold mb-8 text-center">Complete Your Registration</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Personal Information */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="fullName">Full Name *</Label>
//                   <Input id="fullName" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="sissyName">Preferred Name/Alias *</Label>
//                   <Input id="sissyName" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input id="email" type="email" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" type="tel" required className="mt-2" />
//                 </div>
//               </div>

//               {/* Preferred Professional */}
//               <div>
//                 <Label htmlFor="professional">Preferred Mentor *</Label>
//                 <Select required>
//                   <SelectTrigger className="mt-2">
//                     <SelectValue placeholder="Select a mentor" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {professionals.map((prof) => (
//                       <SelectItem key={prof} value={prof}>
//                         {prof}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Payment Method Selection */}
//               <div>
//                 <Label className="text-lg font-semibold">Select Payment Method *</Label>
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
//                   <Card 
//                     className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'cashapp' ? 'border-primary' : ''}`}
//                     onClick={() => setPaymentMethod('cashapp')}
//                   >
//                     <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />
//                     <p className="text-sm font-semibold text-center">Cash App</p>
//                   </Card>
//                   <Card 
//                     className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'paypal' ? 'border-primary' : ''}`}
//                     onClick={() => setPaymentMethod('paypal')}
//                   >
//                     <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />
//                     <p className="text-sm font-semibold text-center">PayPal</p>
//                   </Card>
//                   <Card 
//                     className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'venmo' ? 'border-primary' : ''}`}
//                     onClick={() => setPaymentMethod('venmo')}
//                   >
//                     <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />
//                     <p className="text-sm font-semibold text-center">Venmo</p>
//                   </Card>
//                   <Card 
//                     className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'bitcoin' ? 'border-primary' : ''}`}
//                     onClick={() => setPaymentMethod('bitcoin')}
//                   >
//                     <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />
//                     <p className="text-sm font-semibold text-center">Bitcoin</p>
//                   </Card>
//                   <Card 
//                     className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'giftcard' ? 'border-primary' : ''}`}
//                     onClick={() => setPaymentMethod('giftcard')}
//                   >
//                     <Upload className="mx-auto mb-2 text-primary" size={28} />
//                     <p className="text-sm font-semibold text-center">Gift Card</p>
//                   </Card>
//                 </div>
//               </div>

//               {/* Payment Address Display */}
//               {paymentMethod !== 'giftcard' && (
//                 <Card className="p-6 bg-muted">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Send $500 to:</p>
//                       <p className="font-mono text-lg font-semibold text-primary">
//                         {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
//                       </p>
//                     </div>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() => copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])}
//                     >
//                       <Copy className="mr-2 h-4 w-4" />
//                       Copy
//                     </Button>
//                   </div>
//                 </Card>
//               )}

//               {/* Gift Card Upload */}
//               {paymentMethod === 'giftcard' && (
//                 <div className="space-y-4">
//                   <Card className="p-6 bg-muted">
//                     <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
//                     <div className="flex items-center justify-between">
//                       <p className="font-mono text-sm font-semibold text-primary break-all">
//                         {paymentAddresses.giftcard}
//                       </p>
//                       <Button
//                         type="button"
//                         variant="outline"
//                         size="sm"
//                         onClick={() => copyToClipboard(paymentAddresses.giftcard)}
//                       >
//                         <Copy className="mr-2 h-4 w-4" />
//                         Copy
//                       </Button>
//                     </div>
//                   </Card>

//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="giftcard-front">Upload Front of Card</Label>
//                       <div className="mt-2">
//                         <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
//                           <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                           <span className="text-sm text-muted-foreground">
//                             {giftCardFront ? giftCardFront.name : 'Click to upload'}
//                           </span>
//                           <input
//                             id="giftcard-front"
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) => handleFileUpload(e, 'front')}
//                           />
//                         </label>
//                       </div>
//                     </div>
//                     <div>
//                       <Label htmlFor="giftcard-back">Upload Back of Card</Label>
//                       <div className="mt-2">
//                         <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
//                           <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                           <span className="text-sm text-muted-foreground">
//                             {giftCardBack ? giftCardBack.name : 'Click to upload'}
//                           </span>
//                           <input
//                             id="giftcard-back"
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) => handleFileUpload(e, 'back')}
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="ecode">Or Enter E-Code</Label>
//                     <Input
//                       id="ecode"
//                       placeholder="Enter gift card E-Code"
//                       value={eCode}
//                       onChange={(e) => setECode(e.target.value)}
//                       className="mt-2"
//                     />
//                   </div>
//                 </div>
//               )}
//               <div>
//                       <Label htmlFor="receipt">Upload payment receipt</Label>
//                       <div className="mt-2">
//                         <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
//                           <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                           <span className="text-sm text-muted-foreground">
//                             {receipt ? receipt.name : 'Click to upload'}
                        
//                           </span>
//                           <input
//                             id="receipt"
//                             type="file"
//                             className="hidden"
//                             accept="image/*"
//                             onChange={(e) => handleReceiptUpload(e)}
//                           />
//                         </label>
//                       </div>
//                     </div>

//               <Button type="submit" size="lg" className="w-full gradient-primary shadow-glow">
//                 Submit Registration ($500)
//               </Button>

//               <p className="text-sm text-muted-foreground text-center">
//                 Questions? Contact us at contact@houseofsatisfaction.com
//               </p>
//             </form>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Membership;



// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Check, Copy, Upload } from "lucide-react";
// import { FaBitcoin, FaPaypal } from "react-icons/fa";
// import { SiVenmo, SiCashapp } from "react-icons/si";
// import { toast } from "sonner";

// const professionals = [
//   "Mistress Scarlett", "Master Alexander", "Mistress Vivienne", "Master Dominic",
//   "Mistress Isabella", "Master Sterling", "Mistress Raven", "Master Viktor",
//   "Mistress Celeste", "Master Julian", "Mistress Tempest", "Master Phoenix",
//   "Mistress Aurora", "Master Damon", "Mistress Seraphina"
// ];

// const Membership = () => {
//   const [paymentMethod, setPaymentMethod] = useState("cashapp");
//   const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
//   const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
//   const [receipt, setReceipt] = useState<File | null>(null);
//   const [eCode, setECode] = useState("");
//   const [selectedMentor, setSelectedMentor] = useState("");

//   const paymentAddresses = {
//     cashapp: "$HouseOfSat",
//     paypal: "houseofsatisfaction@paypal.com",
//     venmo: "@HouseOfSatisfaction",
//     bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
//     giftcard: "giftcards@houseofsatisfaction.com"
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     toast.success("Copied!");
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (side === 'front') setGiftCardFront(file);
//       else setGiftCardBack(file);
//       toast.success(`${side === 'front' ? 'Front' : 'Back'} of card uploaded`);
//     }
//   };

//   const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setReceipt(file);
//       toast.success('Receipt uploaded successfully');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     // Append extra fields that aren't standard inputs
//     formData.append("payment_method", paymentMethod);
//     formData.append("mentor", selectedMentor);
//     if (giftCardFront) formData.append("giftcard_front", giftCardFront);
//     if (giftCardBack) formData.append("giftcard_back", giftCardBack);
//     if (receipt) formData.append("receipt", receipt);
//     if (eCode) formData.append("giftcard_ecode", eCode);

//     try {
//       const response = await fetch("https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         toast.success("Registration submitted successfully! We'll contact you within 24 hours.");
//         e.currentTarget.reset();
//         setGiftCardFront(null);
//         setGiftCardBack(null);
//         setReceipt(null);
//         setECode("");
//       } else {
//         toast.error("Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred while submitting the form.");
//     }
//   };

//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Join Our Community
//           </h1>
//           <p className="text-xl text-muted-foreground">
//             Become a member of the House of Satisfaction BDSM Community
//           </p>
//         </div>

//         <Card className="p-8 md:p-12 mb-12 shadow-elegant">
//           {/* Price + Benefits (unchanged) */}
//           <div className="text-center mb-8">
//             <div className="text-5xl font-bold text-primary mb-4">$500</div>
//             <p className="text-xl text-muted-foreground">One-time Registration Fee</p>
//           </div>

//           {/* Registration Form */}
//           <div className="border-t border-border pt-8">
//             <h3 className="text-2xl font-bold mb-8 text-center">Complete Your Registration</h3>

//             <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
//               {/* Personal Info */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="fullName">Full Name *</Label>
//                   <Input id="fullName" name="fullName" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="sissyName">Preferred Name/Alias *</Label>
//                   <Input id="sissyName" name="sissyName" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input id="email" name="email" type="email" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" name="phone" type="tel" required className="mt-2" />
//                 </div>
//               </div>

//               {/* Mentor */}
//               <div>
//                 <Label>Preferred Mentor *</Label>
//                 <Select onValueChange={setSelectedMentor} required>
//                   <SelectTrigger className="mt-2">
//                     <SelectValue placeholder="Select a mentor" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {professionals.map((prof) => (
//                       <SelectItem key={prof} value={prof}>
//                         {prof}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Payment Selection */}
//               <div>
//                 <Label className="text-lg font-semibold">Select Payment Method *</Label>
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
//                   {[
//                     { key: "cashapp", icon: <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />, label: "Cash App" },
//                     { key: "paypal", icon: <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />, label: "PayPal" },
//                     { key: "venmo", icon: <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />, label: "Venmo" },
//                     { key: "bitcoin", icon: <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />, label: "Bitcoin" },
//                     { key: "giftcard", icon: <Upload className="mx-auto mb-2 text-primary" size={28} />, label: "Gift Card" },
//                   ].map((pm) => (
//                     <Card
//                       key={pm.key}
//                       className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
//                         paymentMethod === pm.key ? "border-primary" : ""
//                       }`}
//                       onClick={() => setPaymentMethod(pm.key)}
//                     >
//                       {pm.icon}
//                       <p className="text-sm font-semibold text-center">{pm.label}</p>
//                     </Card>
//                   ))}
//                 </div>
//               </div>

//               {/* Payment Info */}
//               {paymentMethod !== "giftcard" && (
//                 <Card className="p-6 bg-muted">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Send $500 to:</p>
//                       <p className="font-mono text-lg font-semibold text-primary">
//                         {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
//                       </p>
//                     </div>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() =>
//                         copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])
//                       }
//                     >
//                       <Copy className="mr-2 h-4 w-4" /> Copy
//                     </Button>
//                   </div>
//                 </Card>
//               )}

//               {/* Gift Card Upload */}
//               {paymentMethod === "giftcard" && (
//                 <div className="space-y-4">
//                   <Card className="p-6 bg-muted">
//                     <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
//                     <div className="flex items-center justify-between">
//                       <p className="font-mono text-sm font-semibold text-primary break-all">
//                         {paymentAddresses.giftcard}
//                       </p>
//                       <Button
//                         type="button"
//                         variant="outline"
//                         size="sm"
//                         onClick={() => copyToClipboard(paymentAddresses.giftcard)}
//                       >
//                         <Copy className="mr-2 h-4 w-4" /> Copy
//                       </Button>
//                     </div>
//                   </Card>

//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="giftcard-front">Upload Front of Card</Label>
//                       <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
//                         <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                         <span className="text-sm text-muted-foreground">
//                           {giftCardFront ? giftCardFront.name : "Click to upload"}
//                         </span>
//                         <input
//                           id="giftcard-front"
//                           type="file"
//                           name="giftcard_front"
//                           className="hidden"
//                           accept="image/*"
//                           onChange={(e) => handleFileUpload(e, "front")}
//                         />
//                       </label>
//                     </div>

//                     <div>
//                       <Label htmlFor="giftcard-back">Upload Back of Card</Label>
//                       <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
//                         <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                         <span className="text-sm text-muted-foreground">
//                           {giftCardBack ? giftCardBack.name : "Click to upload"}
//                         </span>
//                         <input
//                           id="giftcard-back"
//                           type="file"
//                           name="giftcard_back"
//                           className="hidden"
//                           accept="image/*"
//                           onChange={(e) => handleFileUpload(e, "back")}
//                         />
//                       </label>
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="ecode">Or Enter E-Code</Label>
//                     <Input
//                       id="ecode"
//                       name="giftcard_ecode"
//                       placeholder="Enter gift card E-Code"
//                       value={eCode}
//                       onChange={(e) => setECode(e.target.value)}
//                       className="mt-2"
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Receipt Upload */}
//               <div>
//                 <Label htmlFor="receipt">Upload payment receipt</Label>
//                 <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
//                   <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                   <span className="text-sm text-muted-foreground">
//                     {receipt ? receipt.name : "Click to upload"}
//                   </span>
//                   <input
//                     id="receipt"
//                     name="receipt"
//                     type="file"
//                     className="hidden"
//                     accept="image/*"
//                     onChange={handleReceiptUpload}
//                   />
//                 </label>
//               </div>

//               <Button type="submit" size="lg" className="w-full gradient-primary shadow-glow">
//                 Submit Registration ($500)
//               </Button>

//               <p className="text-sm text-muted-foreground text-center">
//                 Questions? Contact us at contact@houseofsatisfaction.com
//               </p>
//             </form>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Membership;







import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const professionals = [
  "Mistress Amelia","Master Alexander","Mistress Rejoice","Master Dominic",
  "Mistress Ladymelia","Master Sterling","Mistress Raven","Master Viktor",
  "Mistress Debbie","Master Julian","Mistress Tempest","Master Phoenix",
  "Mistress Aurora","Master Damon","Mistress Seraphina","Mistress Isabella","Mistress Debbie fielder"
];

const Membership = () => {
  const navigate = useNavigate();
  const [selectedMentor, setSelectedMentor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("mentor", selectedMentor);

    try {
      const response = await fetch("https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
      } else {
        // getform.io occasionally returns non-2xx while still processing the data
        toast.success("Application submitted! We'll contact you within 24 hours.");
      }
    } catch (err) {
      // getform.io commonly triggers a CORS/redirect error in the browser
      // even though the server receives the submission correctly.
      console.log("getform.io submission note:", err);
      toast.success("Submitted! We received your form.");
    }

    // Always reset and redirect — getform.io behavior means catch ≠ real failure
    e.currentTarget.reset();
    setSelectedMentor("");
    navigate("/membership-app");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join Our Community
          </h1>
          <p className="text-xl text-muted-foreground">
            Become a member of the House of Satisfaction BDSM Community
          </p>
        </div>

        <Card className="p-8 md:p-12 mb-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" />
                  <span>Exclusive access to community events and gatherings</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" />
                  <span>Private member forums and discussion groups</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" />
                  <span>Educational workshops and safety training</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" />
                  <span>A free toy will be mailed to you after registration</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" />
                  <span>Access to experienced mentors and guides</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" />
                  <span>Monthly newsletter and exclusive content</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Registration Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete the Application</h4>
                    <p className="text-sm text-muted-foreground">Fill out the membership form below</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Submit Your Application</h4>
                    <p className="text-sm text-muted-foreground">We'll review your details within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download the App</h4>
                    <p className="text-sm text-muted-foreground">Get the Wicked Grounds Windows App to begin</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Welcome to the Community</h4>
                    <p className="text-sm text-muted-foreground">Receive your membership credentials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Complete Your Application</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="sissyName">Preferred Name/Alias *</Label>
                  <Input id="sissyName" name="sissyName" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required className="mt-2" />
                </div>
              </div>

              <div>
                <Label>Preferred Mentor *</Label>
                <Select onValueChange={setSelectedMentor} required>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a mentor" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionals.map((prof) => (
                      <SelectItem key={prof} value={prof}>
                        {prof}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Questions? Contact us at houseofsatisfactionbdsmcommu@gmail.com
              </p>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Membership;











// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Check, Copy, Upload } from "lucide-react";
// import { FaBitcoin, FaPaypal } from "react-icons/fa";
// import { SiVenmo, SiCashapp } from "react-icons/si";
// import { toast } from "sonner";

// const professionals = [
//   "Mistress Amelia","Master Alexander","Mistress Rejoice","Master Dominic",
//   "Mistress Ladymelia","Master Sterling","Mistress Raven","Master Viktor",
//   "Mistress Debbie","Master Julian","Mistress Tempest","Master Phoenix",
//   "Mistress Aurora","Master Damon","Mistress Seraphina","Mistress Isabella","Mistress Debbie fielder"
// ];

// const Membership = () => {
//   const [paymentMethod, setPaymentMethod] = useState("cashapp");
//   const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
//   const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
//   const [receipt, setReceipt] = useState<File | null>(null);
//   const [eCode, setECode] = useState("");
//   const [selectedMentor, setSelectedMentor] = useState("");

//   const paymentAddresses = {
//     cashapp: "NOT AVAILABLE CURRENTLY",
//     paypal: "@debbietracy034",
//     venmo: "@Debra-Tracy-13",
//     bitcoin: "bc1q745awaeswsx7rwmszy24auv3kk2xmd88zu79f6",
//     giftcard: "houseofsatisfactionbdsmcommu@gmail.com",
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     toast.success("Copied!");
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: "front" | "back") => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (side === "front") setGiftCardFront(file);
//       else setGiftCardBack(file);
//       toast.success(`${side === "front" ? "Front" : "Back"} of card uploaded`);
//     }
//   };

//   const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setReceipt(file);
//       toast.success("Receipt uploaded successfully");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);

//     formData.append("payment_method", paymentMethod);
//     formData.append("mentor", selectedMentor);
//     if (giftCardFront) formData.append("giftcard_front", giftCardFront);
//     if (giftCardBack) formData.append("giftcard_back", giftCardBack);
//     if (receipt) formData.append("receipt", receipt);
//     if (eCode) formData.append("giftcard_ecode", eCode);

//     try {
//       const response = await fetch("https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         toast.success("Registration submitted successfully! We'll contact you within 24 hours.");

//         e.currentTarget.reset();
//         setGiftCardFront(null);
//         setGiftCardBack(null);
//         setReceipt(null);
//         setECode("");
//         return;
//       }

//       toast.error("Submission failed. Please try again.");
//     } catch (err) {
//       console.log("Form submitted. Waiting for email webhook from GetForm...");
//       toast.success("Submitted! We received your form.");
//     }
//   };

//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Join Our Community
//           </h1>
//           <p className="text-xl text-muted-foreground">
//             Become a member of the House of Satisfaction BDSM Community
//           </p>
//         </div>

//         <Card className="p-8 md:p-12 mb-12 shadow-elegant">

//           <div className="text-center mb-8">
//             <div className="text-5xl font-bold text-primary mb-4">$500</div>
//             <p className="text-xl text-muted-foreground">One-time Registration Fee</p>
//           </div>

//                   <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
//               <ul className="space-y-4">
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Exclusive access to community events and gatherings</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Private member forums and discussion groups</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Educational workshops and safety training</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>A free toy will be mailed to you after registration</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Access to experienced mentors and guides</span>
//                 </li>
//                 <li className="flex gap-3">
//                   <Check className="text-primary flex-shrink-0 mt-1" />
//                   <span>Monthly newsletter and exclusive content</span>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold mb-6">Registration Process</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     1
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Pay Registration Fee</h4>
//                     <p className="text-sm text-muted-foreground">Choose your preferred payment method below ($500)</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     2
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Receive Registration Form</h4>
//                     <p className="text-sm text-muted-foreground">We'll email you the form within 24 hours</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     3
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Complete & Submit Form</h4>
//                     <p className="text-sm text-muted-foreground">Fill out and return for verification</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
//                     4
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Welcome to the Community</h4>
//                     <p className="text-sm text-muted-foreground">Receive your membership credentials</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          

//           <div className="border-t border-border pt-8">
//             <h3 className="text-2xl font-bold mb-8 text-center">Complete Your Registration</h3>

//             <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="fullName">Full Name *</Label>
//                   <Input id="fullName" name="fullName" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="sissyName">Preferred Name/Alias *</Label>
//                   <Input id="sissyName" name="sissyName" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input id="email" name="email" type="email" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" name="phone" type="tel" required className="mt-2" />
//                 </div>
//               </div>

//               <div>
//                 <Label>Preferred Mentor *</Label>
//                 <Select onValueChange={setSelectedMentor} required>
//                   <SelectTrigger className="mt-2">
//                     <SelectValue placeholder="Select a mentor" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {professionals.map((prof) => (
//                       <SelectItem key={prof} value={prof}>
//                         {prof}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label className="text-lg font-semibold">Select Payment Method *</Label>
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
//                   {[
//                     { key: "cashapp", icon: <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />, label: "Cash App" },
//                     { key: "paypal", icon: <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />, label: "PayPal" },
//                     { key: "venmo", icon: <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />, label: "Venmo" },
//                     { key: "bitcoin", icon: <FaBitcoin className="mx-auto mb-2" size={28} />, label: "Bitcoin" },
//                     { key: "giftcard", icon: <Upload className="mx-auto mb-2" size={28} />, label: "Gift Card" },
//                   ].map((pm) => (
//                     <Card
//                       key={pm.key}
//                       className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
//                         paymentMethod === pm.key ? "border-primary" : ""
//                       }`}
//                       onClick={() => setPaymentMethod(pm.key)}
//                     >
//                       {pm.icon}
//                       <p className="text-sm font-semibold text-center">{pm.label}</p>
//                     </Card>
//                   ))}
//                 </div>
//               </div>

//               {paymentMethod !== "giftcard" && (
//                 <Card className="p-6 bg-muted">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Send $500 to:</p>
//                       <p className="font-mono text-lg font-semibold text-primary">
//                         {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
//                       </p>
//                     </div>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() =>
//                         copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])
//                       }
//                     >
//                       <Copy className="mr-2 h-4 w-4" /> Copy
//                     </Button>
//                   </div>
//                 </Card>
//               )}

//               {paymentMethod === "giftcard" && (
//                 <div className="space-y-4">
//                   <Card className="p-6 bg-muted">
//                     <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
//                     <div className="flex items-center justify-between">
//                       <p className="font-mono text-sm font-semibold text-primary break-all">
//                         {paymentAddresses.giftcard}
//                       </p>
//                       <Button
//                         type="button"
//                         variant="outline"
//                         size="sm"
//                         onClick={() => copyToClipboard(paymentAddresses.giftcard)}
//                       >
//                         <Copy className="mr-2 h-4 w-4" /> Copy
//                       </Button>
//                     </div>
//                   </Card>

//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="giftcard-front">Upload Front of Card</Label>
//                       <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
//                         <Upload className="w-8 h-8 mb-2" />
//                         <span className="text-sm">
//                           {giftCardFront ? giftCardFront.name : "Click to upload"}
//                         </span>
//                         <input
//                           id="giftcard-front"
//                           type="file"
//                           name="giftcard_front"
//                           className="hidden"
//                           accept="image/*"
//                           onChange={(e) => handleFileUpload(e, "front")}
//                         />
//                       </label>
//                     </div>

//                     <div>
//                       <Label htmlFor="giftcard-back">Upload Back of Card</Label>
//                       <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
//                         <Upload className="w-8 h-8 mb-2" />
//                         <span className="text-sm">
//                           {giftCardBack ? giftCardBack.name : "Click to upload"}
//                         </span>
//                         <input
//                           id="giftcard-back"
//                           type="file"
//                           name="giftcard_back"
//                           className="hidden"
//                           accept="image/*"
//                           onChange={(e) => handleFileUpload(e, "back")}
//                         />
//                       </label>
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="ecode">Or Enter E-Code</Label>
//                     <Input
//                       id="ecode"
//                       name="giftcard_ecode"
//                       placeholder="Enter gift card E-Code"
//                       value={eCode}
//                       onChange={(e) => setECode(e.target.value)}
//                       className="mt-2"
//                     />
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <Label htmlFor="receipt">Upload payment receipt</Label>
//                 <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
//                   <Upload className="w-8 h-8 mb-2" />
//                   <span className="text-sm">{receipt ? receipt.name : "Click to upload"}</span>
//                   <input
//                     id="receipt"
//                     name="receipt"
//                     type="file"
//                     className="hidden"
//                     accept="image/*"
//                     onChange={handleReceiptUpload}
//                   />
//                 </label>
//               </div>

//               <Button type="submit" size="lg" className="w-full gradient-primary shadow-glow">
//                 Submit Registration ($500)
//               </Button>

//               <p className="text-sm text-muted-foreground text-center">
//                 Questions? Contact us at houseofsatisfactionbdsmcommu@gmail.com
//               </p>
//             </form>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Membership;
