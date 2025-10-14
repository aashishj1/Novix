import React from "react";
import TherapistBanner from "../_components/TherapistBanner";
import LastDoctorCard from "../_components/LastDoctorCard";
import RecommendedDoctors from "../_components/RecommendedDoctors";
import TherapistFilter from "../_components/TherapistFilter";

function Page() {
  return (
    <div className="bg-white">
      <TherapistBanner />
      <LastDoctorCard />
      <RecommendedDoctors />
      <TherapistFilter />
    </div>
  );
}

export default Page;
