import React from "react";
import TherapyHero from "../_components/TherapyHero";
import SessionSuggestion from "../_components/SessionSuggestion";
import TherapyTypeGrid from "../_components/TherapyTypeGrid";
import FeelingSection from "../_components/FeelingSection";
import SchedulePicker from "../_components/SchedulePicker";

const suggestions = [
  { label: "couple", image: "/couple-1.jpg" },
  { label: "family", image: "/family.jpg" },
  { label: "group", image: "/group.jpg" },
];

const therapyTypes = [
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
  { title: "Mood Therapy", image: "/family-1.jpg" },
];

function Page() {
  return (
    <div className="bg-white">
      <TherapyHero
        title="Explore & Understand Mental Health Concerns"
        para="Whether you're seeking guidance, healing, or support, explore the best therapy options tailored for you."
      />
      <SessionSuggestion suggestions={suggestions} />
      <TherapyTypeGrid therapyTypes={therapyTypes} />
      <FeelingSection />
      <SchedulePicker />
    </div>
  );
}

export default Page;
