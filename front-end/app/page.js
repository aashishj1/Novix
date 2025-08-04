import React from "react";
import Hero from "./_components/Hero";
import VideoSection from "./_components/VideoSection";
import DoctorCard from "./_components/DoctorCard";
import PartnerSection from "./_components/PartnerSection";
import TherapistSection from "./_components/TherapistSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <VideoSection />
      <DoctorCard />
      <PartnerSection />
      <TherapistSection />
    </main>
  );
};

export default Home;
