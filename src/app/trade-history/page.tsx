import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Trade History — SoDEX Tracker",
  description: "View complete perps position history for any SoDEX wallet — closed positions with entry, exit, PnL, leverage, and fees.",
};

export default function TradeHistory() {
  return (
    <main>
      <Navbar />
      <ComingSoon
        label="TRADE HISTORY"
        title="Trade History"
        description="Full per-position trade export with entry, exit, PnL, leverage, and fees is coming soon."
      />
    </main>
  );
}
