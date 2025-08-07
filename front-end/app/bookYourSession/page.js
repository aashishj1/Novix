import React from "react";
import TherapistBanner from "../_components/TherapistBanner";
import LastDoctorCard from "../_components/LastDoctorCard";
import TherapistFilter from "../_components/TherapistFilter";

function Page() {
  return (
    <div className="bg-white">
      <TherapistBanner />
      <LastDoctorCard />
      <TherapistFilter />
    </div>
  );
}

export default Page;
