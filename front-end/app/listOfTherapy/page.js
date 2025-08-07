import React from "react";
import TherapyHero from "../_components/TherapyHero";
import SessionSuggestion from "../_components/SessionSuggestion";
import TherapyTypeGrid from "../_components/TherapyTypeGrid";

function Page() {
  return (
    <div className="bg-white">
      <TherapyHero />
      <SessionSuggestion />
      <TherapyTypeGrid />
    </div>
  );
}

export default Page;
