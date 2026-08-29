import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Monitor } from "lucide-react";

// TODO: Replace with the actual Windows app download URL when available
const WINDOWS_APP_DOWNLOAD_URL = "#";

const MembershipApp = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Success Indicator */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Application Submitted
          </h2>
          <p className="text-muted-foreground">
            Your membership application has been received. Here's your next step.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-elegant">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 shadow-glow">
              <Monitor className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Download the Wicked Grounds Windows App
            </h1>
          </div>

          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is the tool we will use to structure our dynamic.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 text-left space-y-4">
              <p className="text-foreground leading-relaxed">
                Your Mistress/Master will assign your tasks, rules, and expectations there. You will mark completions, earn points for good behavior that you can redeem for rewards approved by your Mistress/Master, and face consequences for failures.
              </p>
              <p className="text-foreground leading-relaxed">
                It keeps you accountable every day, even when you're apart, and reinforces that your submission is ongoing—not just when you're together.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full md:w-auto gradient-primary shadow-glow px-8 py-6 text-lg"
                onClick={() => {
                  if (WINDOWS_APP_DOWNLOAD_URL === "#") {
                    console.log("Windows app download URL not yet configured.");
                  }
                  window.open(WINDOWS_APP_DOWNLOAD_URL, "_blank");
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Wicked Grounds Windows App
              </Button>
              {WINDOWS_APP_DOWNLOAD_URL === "#" && (
                <p className="text-xs text-muted-foreground mt-3">
                  Download link coming soon — check back shortly.
                </p>
              )}
            </div>
          </div>
        </Card>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Questions? Contact us at houseofsatisfactionbdsmcommu@gmail.com
        </p>
      </div>
    </div>
  );
};

export default MembershipApp;
