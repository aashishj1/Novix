import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-4 bg-white">
      <video
        className="w-[95%] h-auto object-cover border-4 border-green-900 rounded-md shadow-md"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/doctor.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
