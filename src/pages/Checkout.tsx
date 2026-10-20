// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Separator } from "@/components/ui/separator";
// // import { toast } from "sonner";
// // import { FaBitcoin, FaPaypal } from "react-icons/fa";
// // import { SiVenmo, SiCashapp } from "react-icons/si";
// // import { Copy, Upload } from "lucide-react";

// // const Checkout = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("giftcard");
// //   const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
// //   const [receipt, setReceipt] = useState<File | null>(null);
// //   const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
// //   const [eCode, setECode] = useState("");

// //   const paymentAddresses = {
// //     cashapp: "$HouseOfSat",
// //     paypal: "houseofsatisfaction@paypal.com",
// //     venmo: "@HouseOfSatisfaction",
// //     bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
// //     giftcard: "giftcards@houseofsatisfaction.com"
// //   };

// //   const copyToClipboard = (text: string) => {
// //     navigator.clipboard.writeText(text);
// //     toast.success("Copied!");
// //   };

// //   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       if (side === 'front') setGiftCardFront(file);
// //       else setGiftCardBack(file);
// //       toast.success(`${side === 'front' ? 'Front' : 'Back'} of card uploaded`);
// //     }
// //   };

// //   const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
// //   const file = e.target.files?.[0];
// //   if (file) {
// //     setReceipt(file);
// //     toast.success('Receipt uploaded successfully');
// //   }
// // };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     toast.success("Order placed successfully! We'll contact you shortly.");
// //   };

// //   return (
// //     <div className="min-h-screen py-12 px-6">
// //       <div className="max-w-4xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
// //           Checkout
// //         </h1>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           {/* Payment Methods */}
// //           <div className="space-y-8">
// //             <Card className="p-8">
// //               <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              
// //               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
// //                 <Card 
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'cashapp' ? 'border-primary' : ''}`}
// //                   onClick={() => setPaymentMethod('cashapp')}
// //                 >
// //                   <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />
// //                   <p className="text-sm font-semibold text-center">Cash App</p>
// //                 </Card>
// //                 <Card 
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'paypal' ? 'border-primary' : ''}`}
// //                   onClick={() => setPaymentMethod('paypal')}
// //                 >
// //                   <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />
// //                   <p className="text-sm font-semibold text-center">PayPal</p>
// //                 </Card>
// //                 <Card 
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'venmo' ? 'border-primary' : ''}`}
// //                   onClick={() => setPaymentMethod('venmo')}
// //                 >
// //                   <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />
// //                   <p className="text-sm font-semibold text-center">Venmo</p>
// //                 </Card>
// //                 <Card 
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'bitcoin' ? 'border-primary' : ''}`}
// //                   onClick={() => setPaymentMethod('bitcoin')}
// //                 >
// //                   <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />
// //                   <p className="text-sm font-semibold text-center">Bitcoin</p>
// //                 </Card>
// //                 <Card 
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth col-span-2 md:col-span-1 ${paymentMethod === 'giftcard' ? 'border-primary' : ''}`}
// //                   onClick={() => setPaymentMethod('giftcard')}
// //                 >
// //                   <Upload className="mx-auto mb-2 text-primary" size={28} />
// //                   <p className="text-sm font-semibold text-center">Gift Card</p>
// //                 </Card>
// //               </div>

// //               <Separator className="my-6" />

// //               {/* Payment Details */}
// //               <div className="space-y-4">
// //                 {paymentMethod !== 'giftcard' && (
// //                   <Card className="p-6 bg-muted">
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="text-sm text-muted-foreground mb-1">Send payment to:</p>
// //                         <p className="font-mono text-sm font-semibold text-primary break-all">
// //                           {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
// //                         </p>
// //                       </div>
// //                       <Button
// //                         type="button"
// //                         variant="outline"
// //                         size="sm"
// //                         onClick={() => copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])}
// //                       >
// //                         <Copy className="mr-2 h-4 w-4" />
// //                         Copy
// //                       </Button>
// //                     </div>
// //                   </Card>
// //                 )}

// //                 {paymentMethod === 'giftcard' && (
// //                   <div className="space-y-4">
// //                     <Card className="p-6 bg-muted">
// //                       <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
// //                       <div className="flex items-center justify-between">
// //                         <p className="font-mono text-sm font-semibold text-primary break-all">
// //                           {paymentAddresses.giftcard}
// //                         </p>
// //                         <Button
// //                           type="button"
// //                           variant="outline"
// //                           size="sm"
// //                           onClick={() => copyToClipboard(paymentAddresses.giftcard)}
// //                         >
// //                           <Copy className="mr-2 h-4 w-4" />
// //                           Copy
// //                         </Button>
// //                       </div>
// //                     </Card>

// //                     <div className="grid md:grid-cols-2 gap-4">
// //                       <div>
// //                         <Label htmlFor="giftcard-front">Upload Front of Card</Label>
// //                         <div className="mt-2">
// //                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
// //                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
// //                             <span className="text-sm text-muted-foreground">
// //                               {giftCardFront ? giftCardFront.name : 'Click to upload'}
// //                             </span>
// //                             <input
// //                               id="giftcard-front"
// //                               type="file"
// //                               className="hidden"
// //                               accept="image/*"
// //                               onChange={(e) => handleFileUpload(e, 'front')}
// //                             />
// //                           </label>
// //                         </div>
// //                       </div>
// //                       <div>
// //                         <Label htmlFor="giftcard-back">Upload Back of Card</Label>
// //                         <div className="mt-2">
// //                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
// //                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
// //                             <span className="text-sm text-muted-foreground">
// //                               {giftCardBack ? giftCardBack.name : 'Click to upload'}
// //                             </span>
// //                             <input
// //                               id="giftcard-back"
// //                               type="file"
// //                               className="hidden"
// //                               accept="image/*"
// //                               onChange={(e) => handleFileUpload(e, 'back')}
// //                             />
// //                           </label>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <Label htmlFor="ecode">Or Enter E-Code</Label>
// //                       <Input
// //                         id="ecode"
// //                         placeholder="Enter gift card E-Code"
// //                         value={eCode}
// //                         onChange={(e) => setECode(e.target.value)}
// //                         className="mt-2"
// //                       />
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //                    <div>
// //                         <Label htmlFor="giftcard-back">Upload Payment Receipt</Label>
// //                         <div className="mt-2">
// //                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
// //                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
// //                             <span className="text-sm text-muted-foreground">
// //                               {receipt ? receipt.name : 'Click to upload'}
// //                             </span>
// //                             <input
// //                               id="giftcard-back"
// //                               type="file"
// //                               className="hidden"
// //                               accept="image/*"
// //                               onChange={(e) => handleReceiptUpload(e)}
// //                             />
// //                           </label>
// //                         </div>
// //                       </div>

// //             </Card>

            

// //             {/* Shipping Information */}
// //             <Card className="p-8">
// //               <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
// //               <div className="space-y-4">
// //                 <div>
// //                   <Label htmlFor="ship-name">Full Name</Label>
// //                   <Input id="ship-name" required className="mt-2" />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="address1">Address Line 1</Label>
// //                   <Input id="address1" required className="mt-2" />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="address2">Address Line 2 (Optional)</Label>
// //                   <Input id="address2" className="mt-2" />
// //                 </div>
// //                 <div className="grid md:grid-cols-2 gap-4">
// //                   <div>
// //                     <Label htmlFor="city">City</Label>
// //                     <Input id="city" required className="mt-2" />
// //                   </div>
// //                   <div>
// //                     <Label htmlFor="state">State/Province</Label>
// //                     <Input id="state" required className="mt-2" />
// //                   </div>
// //                 </div>
// //                 <div className="grid md:grid-cols-2 gap-4">
// //                   <div>
// //                     <Label htmlFor="zip">ZIP/Postal Code</Label>
// //                     <Input id="zip" required className="mt-2" />
// //                   </div>
// //                   <div>
// //                     <Label htmlFor="country">Country</Label>
// //                     <Input id="country" required className="mt-2" />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="ship-phone">Phone Number</Label>
// //                   <Input id="ship-phone" type="tel" required className="mt-2" />
// //                 </div>
// //               </div>
// //             </Card>
// //           </div>

// //           {/* Order Summary */}
// //           <Card className="p-8 h-fit">
// //             <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
// //             <div className="space-y-4">
// //               <div className="flex justify-between">
// //                 <span className="text-muted-foreground">Subtotal</span>
// //                 <span className="font-semibold">$450.00</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-muted-foreground">Shipping</span>
// //                 <span className="font-semibold">Free</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-muted-foreground">Tax</span>
// //                 <span className="font-semibold">$0.00</span>
// //               </div>
              
// //               <Separator />
              
// //               <div className="flex justify-between text-xl">
// //                 <span className="font-bold">Total</span>
// //                 <span className="font-bold text-primary">$450.00</span>
// //               </div>
// //             </div>

// //             <form onSubmit={handleSubmit} className="mt-8 space-y-4">
// //               <div>
// //                 <Label htmlFor="email">Email</Label>
// //                 <Input id="email" type="email" placeholder="your@email.com" required className="mt-2" />
// //               </div>

// //               <div>
// //                 <Label htmlFor="name">Full Name</Label>
// //                 <Input id="name" placeholder="John Doe" required className="mt-2" />
// //               </div>

// //               <Button type="submit" className="w-full gradient-primary shadow-glow" size="lg">
// //                 Complete Order
// //               </Button>
// //             </form>

// //             <p className="text-xs text-muted-foreground text-center mt-6">
// //               By completing this order, you agree to our Terms of Service and Privacy Policy.
// //             </p>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;




































// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { toast } from "sonner";
// import { FaBitcoin, FaPaypal } from "react-icons/fa";
// import { SiVenmo, SiCashapp } from "react-icons/si";
// import { Copy, Upload } from "lucide-react";

// const Checkout = () => {
//   const [paymentMethod, setPaymentMethod] = useState("giftcard");
//   const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
//   const [receipt, setReceipt] = useState<File | null>(null);
//   const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
//   const [eCode, setECode] = useState("");

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

//   const handleFileUpload = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     side: "front" | "back"
//   ) => {
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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();

//     // Payment info
//     formData.append("paymentMethod", paymentMethod);
//     if (eCode) formData.append("eCode", eCode);
//     if (giftCardFront) formData.append("giftCardFront", giftCardFront);
//     if (giftCardBack) formData.append("giftCardBack", giftCardBack);
//     if (receipt) formData.append("receipt", receipt);

//     // Shipping info
//     const fields = [
//       "ship-name",
//       "address1",
//       "address2",
//       "city",
//       "state",
//       "zip",
//       "country",
//       "ship-phone",
//       "email",
//       "name",
//     ];

//     fields.forEach((field) => {
//       const input = document.getElementById(field) as HTMLInputElement | null;
//       if (input && input.value) {
//         formData.append(field, input.value);
//       }
//     });

//     // Add hidden honeypot field for Getform
//     formData.append("_gotcha", "");

//     // Order info
//     formData.append("orderTotal", "$450.00");

//     try {
//       const res = await fetch("https://getform.io/f/axozqgdb", {
//         method: "POST",
//         body: formData,
//       });

//       if (res.ok) {
//         toast.success("Order submitted successfully! We'll contact you shortly.");

//         // Clear local state
//         setGiftCardFront(null);
//         setGiftCardBack(null);
//         setReceipt(null);
//         setECode("");
//       } else {
//         toast.error("Submission failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Network error. Please check your connection.");
//     }
//   };

//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//           Checkout
//         </h1>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Payment Methods */}
//           <div className="space-y-8">
//             <Card className="p-8">
//               <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//                 <Card
//                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
//                     paymentMethod === "cashapp" ? "border-primary" : ""
//                   }`}
//                   onClick={() => setPaymentMethod("cashapp")}
//                 >
//                   <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />
//                   <p className="text-sm font-semibold text-center">Cash App</p>
//                 </Card>

//                 <Card
//                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
//                     paymentMethod === "paypal" ? "border-primary" : ""
//                   }`}
//                   onClick={() => setPaymentMethod("paypal")}
//                 >
//                   <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />
//                   <p className="text-sm font-semibold text-center">PayPal</p>
//                 </Card>

//                 <Card
//                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
//                     paymentMethod === "venmo" ? "border-primary" : ""
//                   }`}
//                   onClick={() => setPaymentMethod("venmo")}
//                 >
//                   <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />
//                   <p className="text-sm font-semibold text-center">Venmo</p>
//                 </Card>

//                 <Card
//                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
//                     paymentMethod === "bitcoin" ? "border-primary" : ""
//                   }`}
//                   onClick={() => setPaymentMethod("bitcoin")}
//                 >
//                   <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />
//                   <p className="text-sm font-semibold text-center">Bitcoin</p>
//                 </Card>

//                 <Card
//                   className={`p-4 cursor-pointer hover:border-primary transition-smooth col-span-2 md:col-span-1 ${
//                     paymentMethod === "giftcard" ? "border-primary" : ""
//                   }`}
//                   onClick={() => setPaymentMethod("giftcard")}
//                 >
//                   <Upload className="mx-auto mb-2 text-primary" size={28} />
//                   <p className="text-sm font-semibold text-center">Gift Card</p>
//                 </Card>
//               </div>

//               <Separator className="my-6" />

//               {/* Payment Details */}
//               <div className="space-y-4">
//                 {paymentMethod !== "giftcard" && (
//                   <Card className="p-6 bg-muted">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm text-muted-foreground mb-1">
//                           Send payment to:
//                         </p>
//                         <p className="font-mono text-sm font-semibold text-primary break-all">
//                           {
//                             paymentAddresses[
//                               paymentMethod as keyof typeof paymentAddresses
//                             ]
//                           }
//                         </p>
//                       </div>
//                       <Button
//                         type="button"
//                         variant="outline"
//                         size="sm"
//                         onClick={() =>
//                           copyToClipboard(
//                             paymentAddresses[
//                               paymentMethod as keyof typeof paymentAddresses
//                             ]
//                           )
//                         }
//                       >
//                         <Copy className="mr-2 h-4 w-4" />
//                         Copy
//                       </Button>
//                     </div>
//                   </Card>
//                 )}

//                 {paymentMethod === "giftcard" && (
//                   <div className="space-y-4">
//                     <Card className="p-6 bg-muted">
//                       <p className="text-sm text-muted-foreground mb-1">
//                         Submit E-Code to:
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <p className="font-mono text-sm font-semibold text-primary break-all">
//                           {paymentAddresses.giftcard}
//                         </p>
//                         <Button
//                           type="button"
//                           variant="outline"
//                           size="sm"
//                           onClick={() =>
//                             copyToClipboard(paymentAddresses.giftcard)
//                           }
//                         >
//                           <Copy className="mr-2 h-4 w-4" />
//                           Copy
//                         </Button>
//                       </div>
//                     </Card>

//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="giftcard-front">Upload Front of Card</Label>
//                         <div className="mt-2">
//                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
//                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                             <span className="text-sm text-muted-foreground">
//                               {giftCardFront
//                                 ? giftCardFront.name
//                                 : "Click to upload"}
//                             </span>
//                             <input
//                               id="giftcard-front"
//                               type="file"
//                               className="hidden"
//                               accept="image/*"
//                               onChange={(e) => handleFileUpload(e, "front")}
//                             />
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <Label htmlFor="giftcard-back">Upload Back of Card</Label>
//                         <div className="mt-2">
//                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
//                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                             <span className="text-sm text-muted-foreground">
//                               {giftCardBack
//                                 ? giftCardBack.name
//                                 : "Click to upload"}
//                             </span>
//                             <input
//                               id="giftcard-back"
//                               type="file"
//                               className="hidden"
//                               accept="image/*"
//                               onChange={(e) => handleFileUpload(e, "back")}
//                             />
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="ecode">Or Enter E-Code</Label>
//                       <Input
//                         id="ecode"
//                         placeholder="Enter gift card E-Code"
//                         value={eCode}
//                         onChange={(e) => setECode(e.target.value)}
//                         className="mt-2"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <Label htmlFor="giftcard-back">Upload Payment Receipt</Label>
//                 <div className="mt-2">
//                   <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
//                     <Upload className="w-8 h-8 text-muted-foreground mb-2" />
//                     <span className="text-sm text-muted-foreground">
//                       {receipt ? receipt.name : "Click to upload"}
//                     </span>
//                     <input
//                       id="giftcard-back"
//                       type="file"
//                       className="hidden"
//                       accept="image/*"
//                       onChange={(e) => handleReceiptUpload(e)}
//                     />
//                   </label>
//                 </div>
//               </div>
//             </Card>

//             {/* Shipping Information */}
//             <Card className="p-8">
//               <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="ship-name">Full Name</Label>
//                   <Input id="ship-name" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="address1">Address Line 1</Label>
//                   <Input id="address1" required className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="address2">Address Line 2 (Optional)</Label>
//                   <Input id="address2" className="mt-2" />
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="city">City</Label>
//                     <Input id="city" required className="mt-2" />
//                   </div>
//                   <div>
//                     <Label htmlFor="state">State/Province</Label>
//                     <Input id="state" required className="mt-2" />
//                   </div>
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="zip">ZIP/Postal Code</Label>
//                     <Input id="zip" required className="mt-2" />
//                   </div>
//                   <div>
//                     <Label htmlFor="country">Country</Label>
//                     <Input id="country" required className="mt-2" />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="ship-phone">Phone Number</Label>
//                   <Input id="ship-phone" type="tel" required className="mt-2" />
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Order Summary */}
//           <Card className="p-8 h-fit">
//             <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span className="font-semibold">$450.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Shipping</span>
//                 <span className="font-semibold">Free</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Tax</span>
//                 <span className="font-semibold">$0.00</span>
//               </div>

//               <Separator />

//               <div className="flex justify-between text-xl">
//                 <span className="font-bold">Total</span>
//                 <span className="font-bold text-primary">$450.00</span>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="mt-8 space-y-4">
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="your@email.com"
//                   required
//                   className="mt-2"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input id="name" placeholder="John Doe" required className="mt-2" />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full gradient-primary shadow-glow"
//                 size="lg"
//               >
//                 Complete Order
//               </Button>
//             </form>

//             <p className="text-xs text-muted-foreground text-center mt-6">
//               By completing this order, you agree to our Terms of Service and
//               Privacy Policy.
//             </p>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
























// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Separator } from "@/components/ui/separator";
// // import { toast } from "sonner";
// // import { FaBitcoin, FaPaypal } from "react-icons/fa";
// // import { SiVenmo, SiCashapp } from "react-icons/si";
// // import { Copy, Upload } from "lucide-react";
// // import { supabase } from "../supabaseClient"; // Adjust path based on your structure

// // const Checkout = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("giftcard");
// //   const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
// //   const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
// //   const [receipt, setReceipt] = useState<File | null>(null);
// //   const [eCode, setECode] = useState("");
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     name: "",
// //     shipName: "",
// //     address1: "",
// //     address2: "",
// //     city: "",
// //     state: "",
// //     zip: "",
// //     country: "",
// //     phone: "",
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const paymentAddresses = {
// //     cashapp: "$HouseOfSat",
// //     paypal: "houseofsatisfaction@paypal.com",
// //     venmo: "@HouseOfSatisfaction",
// //     bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
// //     giftcard: "giftcards@houseofsatisfaction.com",
// //   };

// //   const copyToClipboard = (text: string) => {
// //     navigator.clipboard.writeText(text);
// //     toast.success("Copied!");
// //   };

// //   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: "front" | "back") => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       if (side === "front") setGiftCardFront(file);
// //       else setGiftCardBack(file);
// //       toast.success(`${side === "front" ? "Front" : "Back"} of card uploaded`);
// //     }
// //   };

// //   const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setReceipt(file);
// //       toast.success("Receipt uploaded successfully");
// //     }
// //   };

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { id, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [id]: value }));
// //   };

// //   const uploadFile = async (file: File, path: string) => {
// //     const { data, error } = await supabase.storage
// //       .from("order-files") // Replace with your bucket name
// //       .upload(path, file, { upsert: true });
// //     if (error) throw error;
// //     return supabase.storage.from("order-files").getPublicUrl(path).data.publicUrl;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       let giftCardFrontUrl = null;
// //       let giftCardBackUrl = null;
// //       let receiptUrl = null;

// //       // Upload files to Supabase Storage if they exist
// //       if (giftCardFront) {
// //         giftCardFrontUrl = await uploadFile(
// //           giftCardFront,
// //           `giftcards/front/${Date.now()}_${giftCardFront.name}`
// //         );
// //       }
// //       if (giftCardBack) {
// //         giftCardBackUrl = await uploadFile(
// //           giftCardBack,
// //           `giftcards/back/${Date.now()}_${giftCardBack.name}`
// //         );
// //       }
// //       if (receipt) {
// //         receiptUrl = await uploadFile(
// //           receipt,
// //           `receipts/${Date.now()}_${receipt.name}`
// //         );
// //       }

// //       // Prepare shipping address
// //       const shippingAddress = {
// //         name: formData.shipName,
// //         address1: formData.address1,
// //         address2: formData.address2,
// //         city: formData.city,
// //         state: formData.state,
// //         zip: formData.zip,
// //         country: formData.country,
// //         phone: formData.phone,
// //       };

// //       // Insert order data into Supabase
// //       const { error } = await supabase.from("orders").insert([
// //         {
// //           email: formData.email,
// //           name: formData.name,
// //           payment_method: paymentMethod,
// //           shipping_address: shippingAddress,
// //           gift_card_front_url: giftCardFrontUrl,
// //           gift_card_back_url: giftCardBackUrl,
// //           receipt_url: receiptUrl,
// //           ecode: eCode || null,
// //           total_amount: 450.00, // Hardcoded for now, adjust as needed
// //         },
// //       ]);

// //       if (error) throw error;

// //       toast.success("Order placed successfully! We'll contact you shortly.");
// //       // Reset form
// //       setFormData({
// //         email: "",
// //         name: "",
// //         shipName: "",
// //         address1: "",
// //         address2: "",
// //         city: "",
// //         state: "",
// //         zip: "",
// //         country: "",
// //         phone: "",
// //       });
// //       setGiftCardFront(null);
// //       setGiftCardBack(null);
// //       setReceipt(null);
// //       setECode("");
// //     } catch (error) {
// //       toast.error(`Error: ${error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen py-12 px-6">
// //       <div className="max-w-4xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
// //           Checkout
// //         </h1>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           {/* Payment Methods */}
// //           <div className="space-y-8">
// //             <Card className="p-8">
// //               <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

// //               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
// //                 <Card
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
// //                     paymentMethod === "cashapp" ? "border-primary" : ""
// //                   }`}
// //                   onClick={() => setPaymentMethod("cashapp")}
// //                 >
// //                   <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />
// //                   <p className="text-sm font-semibold text-center">Cash App</p>
// //                 </Card>
// //                 <Card
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
// //                     paymentMethod === "paypal" ? "border-primary" : ""
// //                   }`}
// //                   onClick={() => setPaymentMethod("paypal")}
// //                 >
// //                   <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />
// //                   <p className="text-sm font-semibold text-center">PayPal</p>
// //                 </Card>
// //                 <Card
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
// //                     paymentMethod === "venmo" ? "border-primary" : ""
// //                   }`}
// //                   onClick={() => setPaymentMethod("venmo")}
// //                 >
// //                   <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />
// //                   <p className="text-sm font-semibold text-center">Venmo</p>
// //                 </Card>
// //                 <Card
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
// //                     paymentMethod === "bitcoin" ? "border-primary" : ""
// //                   }`}
// //                   onClick={() => setPaymentMethod("bitcoin")}
// //                 >
// //                   <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />
// //                   <p className="text-sm font-semibold text-center">Bitcoin</p>
// //                 </Card>
// //                 <Card
// //                   className={`p-4 cursor-pointer hover:border-primary transition-smooth col-span-2 md:col-span-1 ${
// //                     paymentMethod === "giftcard" ? "border-primary" : ""
// //                   }`}
// //                   onClick={() => setPaymentMethod("giftcard")}
// //                 >
// //                   <Upload className="mx-auto mb-2 text-primary" size={28} />
// //                   <p className="text-sm font-semibold text-center">Gift Card</p>
// //                 </Card>
// //               </div>

// //               <Separator className="my-6" />

// //               {/* Payment Details */}
// //               <div className="space-y-4">
// //                 {paymentMethod !== "giftcard" && (
// //                   <Card className="p-6 bg-muted">
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="text-sm text-muted-foreground mb-1">Send payment to:</p>
// //                         <p className="font-mono text-sm font-semibold text-primary break-all">
// //                           {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
// //                         </p>
// //                       </div>
// //                       <Button
// //                         type="button"
// //                         variant="outline"
// //                         size="sm"
// //                         onClick={() =>
// //                           copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])
// //                         }
// //                       >
// //                         <Copy className="mr-2 h-4 w-4" />
// //                         Copy
// //                       </Button>
// //                     </div>
// //                   </Card>
// //                 )}

// //                 {paymentMethod === "giftcard" && (
// //                   <div className="space-y-4">
// //                     <Card className="p-6 bg-muted">
// //                       <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
// //                       <div className="flex items-center justify-between">
// //                         <p className="font-mono text-sm font-semibold text-primary break-all">
// //                           {paymentAddresses.giftcard}
// //                         </p>
// //                         <Button
// //                           type="button"
// //                           variant="outline"
// //                           size="sm"
// //                           onClick={() => copyToClipboard(paymentAddresses.giftcard)}
// //                         >
// //                           <Copy className="mr-2 h-4 w-4" />
// //                           Copy
// //                         </Button>
// //                       </div>
// //                     </Card>

// //                     <div className="grid md:grid-cols-2 gap-4">
// //                       <div>
// //                         <Label htmlFor="giftcard-front">Upload Front of Card</Label>
// //                         <div className="mt-2">
// //                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
// //                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
// //                             <span className="text-sm text-muted-foreground">
// //                               {giftCardFront ? giftCardFront.name : "Click to upload"}
// //                             </span>
// //                             <input
// //                               id="giftcard-front"
// //                               type="file"
// //                               className="hidden"
// //                               accept="image/*"
// //                               onChange={(e) => handleFileUpload(e, "front")}
// //                             />
// //                           </label>
// //                         </div>
// //                       </div>
// //                       <div>
// //                         <Label htmlFor="giftcard-back">Upload Back of Card</Label>
// //                         <div className="mt-2">
// //                           <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
// //                             <Upload className="w-8 h-8 text-muted-foreground mb-2" />
// //                             <span className="text-sm text-muted-foreground">
// //                               {giftCardBack ? giftCardBack.name : "Click to upload"}
// //                             </span>
// //                             <input
// //                               id="giftcard-back"
// //                               type="file"
// //                               className="hidden"
// //                               accept="image/*"
// //                               onChange={(e) => handleFileUpload(e, "back")}
// //                             />
// //                           </label>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <Label htmlFor="ecode">Or Enter E-Code</Label>
// //                       <Input
// //                         id="ecode"
// //                         placeholder="Enter gift card E-Code"
// //                         value={eCode}
// //                         onChange={(e) => setECode(e.target.value)}
// //                         className="mt-2"
// //                       />
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //               <div>
// //                 <Label htmlFor="receipt">Upload Payment Receipt</Label>
// //                 <div className="mt-2">
// //                   <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
// //                     <Upload className="w-8 h-8 text-muted-foreground mb-2" />
// //                     <span className="text-sm text-muted-foreground">
// //                       {receipt ? receipt.name : "Click to upload"}
// //                     </span>
// //                     <input
// //                       id="receipt"
// //                       type="file"
// //                       className="hidden"
// //                       accept="image/*"
// //                       onChange={handleReceiptUpload}
// //                     />
// //                   </label>
// //                 </div>
// //               </div>
// //             </Card>

// //             {/* Shipping Information */}
// //             <Card className="p-8">
// //               <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
// //               <div className="space-y-4">
// //                 <div>
// //                   <Label htmlFor="ship-name">Full Name</Label>
// //                   <Input
// //                     id="ship-name"
// //                     required
// //                     className="mt-2"
// //                     value={formData.shipName}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="address1">Address Line 1</Label>
// //                   <Input
// //                     id="address1"
// //                     required
// //                     className="mt-2"
// //                     value={formData.address1}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="address2">Address Line 2 (Optional)</Label>
// //                   <Input
// //                     id="address2"
// //                     className="mt-2"
// //                     value={formData.address2}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div className="grid md:grid-cols-2 gap-4">
// //                   <div>
// //                     <Label htmlFor="city">City</Label>
// //                     <Input
// //                       id="city"
// //                       required
// //                       className="mt-2"
// //                       value={formData.city}
// //                       onChange={handleInputChange}
// //                     />
// //                   </div>
// //                   <div>
// //                     <Label htmlFor="state">State/Province</Label>
// //                     <Input
// //                       id="state"
// //                       required
// //                       className="mt-2"
// //                       value={formData.state}
// //                       onChange={handleInputChange}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="grid md:grid-cols-2 gap-4">
// //                   <div>
// //                     <Label htmlFor="zip">ZIP/Postal Code</Label>
// //                     <Input
// //                       id="zip"
// //                       required
// //                       className="mt-2"
// //                       value={formData.zip}
// //                       onChange={handleInputChange}
// //                     />
// //                   </div>
// //                   <div>
// //                     <Label htmlFor="country">Country</Label>
// //                     <Input
// //                       id="country"
// //                       required
// //                       className="mt-2"
// //                       value={formData.country}
// //                       onChange={handleInputChange}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="ship-phone">Phone Number</Label>
// //                   <Input
// //                     id="ship-phone"
// //                     type="tel"
// //                     required
// //                     className="mt-2"
// //                     value={formData.phone}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //             </Card>
// //           </div>

// //           {/* Order Summary */}
// //           <Card className="p-8 h-fit">
// //             <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

// //             <div className="space-y-4">
// //               <div className="flex justify-between">
// //                 <span className="text-muted-foreground">Subtotal</span>
// //                 <span className="font-semibold">$450.00</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-muted-foreground">Shipping</span>
// //                 <span className="font-semibold">Free</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-muted-foreground">Tax</span>
// //                 <span className="font-semibold">$0.00</span>
// //               </div>

// //               <Separator />

// //               <div className="flex justify-between text-xl">
// //                 <span className="font-bold">Total</span>
// //                 <span className="font-bold text-primary">$450.00</span>
// //               </div>
// //             </div>

// //             <form onSubmit={handleSubmit} className="mt-8 space-y-4">
// //               <div>
// //                 <Label htmlFor="email">Email</Label>
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   placeholder="your@email.com"
// //                   required
// //                   className="mt-2"
// //                   value={formData.email}
// //                   onChange={handleInputChange}
// //                 />
// //               </div>

// //               <div>
// //                 <Label htmlFor="name">Full Name</Label>
// //                 <Input
// //                   id="name"
// //                   placeholder="John Doe"
// //                   required
// //                   className="mt-2"
// //                   value={formData.name}
// //                   onChange={handleInputChange}
// //                 />
// //               </div>

// //               <Button
// //                 type="submit"
// //                 className="w-full gradient-primary shadow-glow"
// //                 size="lg"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Processing..." : "Complete Order"}
// //               </Button>
// //             </form>

// //             <p className="text-xs text-muted-foreground text-center mt-6">
// //               By completing this order, you agree to our Terms of Service and Privacy Policy.
// //             </p>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;








import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { FaBitcoin, FaPaypal } from "react-icons/fa";
import { SiVenmo, SiCashapp } from "react-icons/si";
import { Copy, Upload } from "lucide-react";

/* Same key the Shop page saves the cart under */
const CART_KEY = "wgo_cart";

interface CartItem {
  product: { id: number; name: string; price: number; image: string };
  quantity: number;
}

const formatUSD = (n: number) =>
  `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("giftcard");
  const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
  const [receipt, setReceipt] = useState<File | null>(null);
  const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
  const [eCode, setECode] = useState("");

  /* Load the exact cart the customer built on the Shop page */
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const paymentAddresses = {
    cashapp: "NOT AVAILABLE CURRENTLY",
    paypal: "@debbietracy034",
    venmo: "@Debra-Tracy-13",
    bitcoin: "bc1q745awaeswsx7rwmszy24auv3kk2xmd88zu79f6",
    giftcard: "houseofsatisfactionbdsmcommu@gmail.com",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (side === "front") setGiftCardFront(file);
      else setGiftCardBack(file);
      toast.success(`${side === "front" ? "Front" : "Back"} of card uploaded`);
    }
  };

  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReceipt(file);
      toast.success("Receipt uploaded successfully");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    const formData = new FormData();

    // Payment info
    formData.append("paymentMethod", paymentMethod);
    if (eCode) formData.append("eCode", eCode);
    if (giftCardFront) formData.append("giftCardFront", giftCardFront);
    if (giftCardBack) formData.append("giftCardBack", giftCardBack);
    if (receipt) formData.append("receipt", receipt);

    // Shipping info
    const fields = [
      "ship-name",
      "address1",
      "address2",
      "city",
      "state",
      "zip",
      "country",
      "ship-phone",
      "email",
      "name",
    ];

    fields.forEach((field) => {
      const input = document.getElementById(field) as HTMLInputElement | null;
      if (input && input.value) {
        formData.append(field, input.value);
      }
    });

    // Add hidden honeypot field for Getform
    formData.append("_gotcha", "");

    // Order info (real cart total and items)
    formData.append("orderTotal", formatUSD(subtotal));
    formData.append(
      "orderItems",
      cart
        .map((i) => `${i.quantity} x ${i.product.name} @ $${i.product.price}`)
        .join(", ")
    );

    try {
      const res = await fetch("https://getform.io/f/axozqgdb", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Order submitted successfully! We'll contact you shortly.");

        // Clear local state
        setGiftCardFront(null);
        setGiftCardBack(null);
        setReceipt(null);
        setECode("");

        // Clear the saved cart after a successful order
        localStorage.removeItem(CART_KEY);
        setCart([]);
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Card
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
                    paymentMethod === "cashapp" ? "border-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod("cashapp")}
                >
                  <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />
                  <p className="text-sm font-semibold text-center">Cash App</p>
                </Card>

                <Card
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
                    paymentMethod === "paypal" ? "border-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />
                  <p className="text-sm font-semibold text-center">PayPal</p>
                </Card>

                <Card
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
                    paymentMethod === "venmo" ? "border-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod("venmo")}
                >
                  <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />
                  <p className="text-sm font-semibold text-center">Venmo</p>
                </Card>

                <Card
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${
                    paymentMethod === "bitcoin" ? "border-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod("bitcoin")}
                >
                  <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />
                  <p className="text-sm font-semibold text-center">Bitcoin</p>
                </Card>

                <Card
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth col-span-2 md:col-span-1 ${
                    paymentMethod === "giftcard" ? "border-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod("giftcard")}
                >
                  <Upload className="mx-auto mb-2 text-primary" size={28} />
                  <p className="text-sm font-semibold text-center">Gift Card</p>
                </Card>
              </div>

              <Separator className="my-6" />

              {/* Payment Details */}
              <div className="space-y-4">
                {paymentMethod !== "giftcard" && (
                  <Card className="p-6 bg-muted">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Send payment to:
                        </p>
                        <p className="font-mono text-sm font-semibold text-primary break-all">
                          {
                            paymentAddresses[
                              paymentMethod as keyof typeof paymentAddresses
                            ]
                          }
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            paymentAddresses[
                              paymentMethod as keyof typeof paymentAddresses
                            ]
                          )
                        }
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                  </Card>
                )}

                {paymentMethod === "giftcard" && (
                  <div className="space-y-4">
                    <Card className="p-6 bg-muted">
                      <p className="text-sm text-muted-foreground mb-1">
                        Submit E-Code to:
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-sm font-semibold text-primary break-all">
                          {paymentAddresses.giftcard}
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(paymentAddresses.giftcard)
                          }
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="giftcard-front">Upload Front of Card</Label>
                        <div className="mt-2">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <span className="text-sm text-muted-foreground">
                              {giftCardFront
                                ? giftCardFront.name
                                : "Click to upload"}
                            </span>
                            <input
                              id="giftcard-front"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, "front")}
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="giftcard-back">Upload Back of Card</Label>
                        <div className="mt-2">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <span className="text-sm text-muted-foreground">
                              {giftCardBack
                                ? giftCardBack.name
                                : "Click to upload"}
                            </span>
                            <input
                              id="giftcard-back"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, "back")}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="ecode">Or Enter E-Code</Label>
                      <Input
                        id="ecode"
                        placeholder="Enter gift card E-Code"
                        value={eCode}
                        onChange={(e) => setECode(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="receipt">Upload Payment Receipt</Label>
                <div className="mt-2">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
                    <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">
                      {receipt ? receipt.name : "Click to upload"}
                    </span>
                    <input
                      id="receipt"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleReceiptUpload(e)}
                    />
                  </label>
                </div>
              </div>
            </Card>

            {/* Shipping Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ship-name">Full Name</Label>
                  <Input id="ship-name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input id="address1" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                  <Input id="address2" className="mt-2" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" required className="mt-2" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zip">ZIP/Postal Code</Label>
                    <Input id="zip" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="ship-phone">Phone Number</Label>
                  <Input id="ship-phone" type="tel" required className="mt-2" />
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <Card className="p-8 h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4">
              {cart.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Your cart is empty.{" "}
                  <Link to="/shop" className="text-primary hover:underline">
                    Go back to the shop
                  </Link>
                </p>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex justify-between text-sm gap-4"
                    >
                      <span className="text-muted-foreground">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="font-semibold whitespace-nowrap">
                        {formatUSD(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <Separator />

              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{formatUSD(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">$0.00</span>
              </div>

              <Separator />

              <div className="flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary">
                  {formatUSD(subtotal)}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required className="mt-2" />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary shadow-glow"
                size="lg"
                disabled={cart.length === 0}
              >
                Complete Order
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              By completing this order, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
