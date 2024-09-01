import React from "react";
import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-6 items-center lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:7xl text-center tracking-wide">
        VirtualR building tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-center text-neutral-500 mt-10 text-lg max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
    </div>
  );
};

export default HeroSection;
