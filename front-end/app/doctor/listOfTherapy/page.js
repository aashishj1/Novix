import React from "react";
import TherapyHero from "../../_components/TherapyHero";
import SessionSuggestion from "../../_components/SessionSuggestion";
import TherapyTypeGrid from "../../_components/TherapyTypeGrid";

const suggestions = [
  { label: "couple", image: "/couple-1.jpg" },
  { label: "family", image: "/family.jpg" },
  { label: "group", image: "/group.jpg" },
];

const therapyTypes = [
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "COUPLE Therapy", image: "/couple-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
  { title: "Family Therapy", image: "/family-1.jpg" },
];

function Page() {
  return (
    <div className="bg-white">
      <TherapyHero
        title="Find the right therapy, for your needs"
        para="Whether you're seeking guidance, healing, or support, explore the
        best therapy options tailored for you."
      
      />
      <SessionSuggestion suggestions={suggestions} />
      <TherapyTypeGrid therapyTypes={therapyTypes} />
    </div>
  );
}

export default Page;
