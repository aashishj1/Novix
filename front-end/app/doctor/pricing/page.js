import PricingCards from "../../_components/PricingCards";
import PricingComparison from "../../_components/PricingComparison";
import PricingHero from "../../_components/PricingHero";

export default function Page() {
  return (
    <div style={{ backgroundColor: "#FCE7F1", minHeight: "100vh" }}>
      <PricingHero />
      <PricingCards />
      <PricingComparison />
    </div>
  );
}