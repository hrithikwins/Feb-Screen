import React from "react";
import { Slide } from "react-awesome-reveal";

const AvatarButton = ({ onClick }) => {
  return (
    <div className="w-full -mt-5" onClick={onClick}>
      <Slide triggerOnce className="w-full" direction="up">
        <button className="w-full bg-[#4A012E] text-white py-3 text-center font-[700] text-[18px] rounded-[15px] mt-8">Create Custom Avatar</button>
      </Slide>
    </div>
  );
};

export default AvatarButton;
