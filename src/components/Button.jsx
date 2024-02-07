import React from "react";
import { Slide } from "react-awesome-reveal";

const Button = ({onClick}) => {
  return (
    <div className="w-full" onClick={onClick}>
      <Slide triggerOnce className="w-full" direction="up">
        <button className="w-full bg-[#4A012E] text-white py-3 text-center font-[700] text-[18px] rounded-[15px] mt-8">
          Let’s start virtual dates
        </button>
      </Slide>
    </div>
  );
};

export default Button;
