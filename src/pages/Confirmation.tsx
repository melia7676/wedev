import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Membership = () => {
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

            {/* Registration / Payment Process */}
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
                      Send your one-time membership fee using the payment method you were given
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

          {/* Payment CTA */}
          <div className="border-t border-border pt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Complete Your Membership</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              One step stands between you and the underground. Send your $200 membership
              payment using the method provided in your welcome email, and your Community
              ID will be issued and sent to you personally once confirmed.
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Questions? Contact us at houseofsatisfactionbdsmcommu@gmail.com
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Membership;
