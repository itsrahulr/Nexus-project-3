import React from "react";
import video from "/src/images/video1.mp4";

const Video = () => {
  return (
    <div className=" overflow-hidden rounded-3xl mt-40 ">
      <video
        className=" rounded-3xl"
        autoPlay
        loop
        muted
        playsInline
        src={video}
      ></video>
    </div>
  );
};

export default Video;
