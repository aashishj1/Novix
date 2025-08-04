import PricingCards from "../_components/PricingCards";
import PricingComparison from "../_components/PricingComparison";
import PricingHero from "../_components/PricingHero";
import WhyChooseUs from "../_components/WhyChooseUs";

export default function page() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingComparison />
      <WhyChooseUs />
    </>
  );
}
