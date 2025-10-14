import React from "react";
import Hero from "./_components/Hero";
import VideoSection from "./_components/VideoSection";
import DoctorCard from "./_components/DoctorCard";
import PartnerSection from "./_components/PartnerSection";
import TherapistSection from "./_components/TherapistSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import HomeCTA from "./_components/HomeCTA";
import CustomerReviews from "./_components/CustomerReviews"; 
import FAQSection from "./_components/FAQSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <VideoSection />
      <DoctorCard />
      <PartnerSection />
      <TherapistSection />
      <HowItWorksSection />
      <HomeCTA />
       <CustomerReviews />
      <FAQSection />
      
      
    </main>
  );
};

export default Home;
