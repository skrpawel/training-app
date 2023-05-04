import React from "react";
const Video = () => {
  return (
    <video autoPlay loop muted className="fixed z-[-1]">
      <source src="/videos/running.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
