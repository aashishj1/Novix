import React from "react";
import SuccessStories from "../../_components/SuccessStories";
import HelpSection from "../../_components/HelpSection";
import AppointmentSummary from "../../_components/AppointmentSummary";
import QuoteSection from "../../_components/QuoteSection";
function Page() {
  return (
    <div className="bg-white">
      
      <AppointmentSummary />
      <HelpSection/>
      <SuccessStories />
      <QuoteSection 
        quote="Therapy is the gentle art of helping yourself by accepting help from others." 
      />
      
    </div>
  )
  
}

export default Page;
SuccessStories