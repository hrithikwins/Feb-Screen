"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Profiles = ({ id, man }: any) => {
  return (
    <div className="bg-[#FFDBE8] cursor-pointer w-full  flex items-center justify-center rounded-[10px] ">
      {man ? (
        <Image
          src={`/Images/male_${id}-removebg-preview.png`}
          alt="Man Image"
          width={60}
          height={40}
          className="cursor-pointer my-2"
        />
      ) : (
        <Image
          src={`/Images/female_${id - 3}-removebg-preview.png`}
          alt="Man Image"
          className="cursor-pointer my-2"
          width={60}
          height={40}
        />
      )}
    </div>
  );
};

export default function Home() {
  const data = [
    {
      id: 1,
      men: true,
    },
    {
      id: 2,
      men: true,
    },
    {
      id: 3,
      men: true,
    },
    {
      id: 4,
      men: false,
    },
    {
      id: 5,
      men: false,
    },
    {
      id: 6,
      men: false,
    },
  ];
  const [number, setNumber] = useState(-1);
  const handleClick = (id: number) => {
    setNumber(id);
    console.log("Profile clicked!");
  };

  function handleEntry(){
        if (number > 3) {
          window.open(`https://onthemoons.graphity.world/vHRvhQv/onthemoons?avatarId=female_` + (number -3 ) + `&gender=male&name=${name}`);
        } else {
          window.open(`https://onthemoons.graphity.world/vHRvhQv/onthemoons?avatarId=male_` + number+ `&gender=female&name=${name}`);
        }


  }
  const [name, setName] = useState("");
  return (
    <main className="min-h-screen  flex items-center lg:px-20 px-4   py-10 lg:py-0  justify-center bg-[#fff3f8]">
      <div className="bg-pink-500 lg:scale-100 scale-[20%] blur-lg  h-[845px] left-[-400px] top-[-400px] opacity-10 rounded-full backdrop-blur-lg w-[845px] hidden lg:block absolute z-50"></div>

      <div className="flex flex-row  justify-center items-center lg:gap-x-32  w-screen">
        <div className="w-1/3 lg:block hidden  ">
          <Slide triggerOnce direction="left">
            <Fade triggerOnce>
              <Image src={"/Images/Desktop_CouplePic.png"} style={{ width: "100%" }} width={500} height={500} className="scale-110" alt="Couple Image" />
            </Fade>
          </Slide>
        </div>
        <div className="flex flex-col   px-[2%]  lg:w-1/3 w-full lg:py-14 items-center">
          <Slide direction="down" className=" flex flex-col items-center  w-full" triggerOnce>
            <Image src={"/Images/Logo.svg"} width={140} height={100} style={{ width: "30%" }} alt="Couple Image" />

            <div className="mt-5 lg:mt-10  w-full ">
              <label htmlFor="name" className="text-[#4A012E] my-2 font-[500]  text-sm ">
                Your name
              </label>
              <div className="rounded-[15px] w-full mt-1  px-4 bg-white flex items-center py-3 border-[2px] border-[#4A012E]">
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.6175 9.11382C21.6175 12.7851 18.6739 15.7289 15 15.7289C11.3274 15.7289 8.38252 12.7851 8.38252 9.11382C8.38252 5.44253 11.3274 2.5 15 2.5C18.6739 2.5 21.6175 5.44253 21.6175 9.11382ZM15 27.5C9.57797 27.5 5 26.6187 5 23.2187C5 19.8174 9.60673 18.9674 15 18.9674C20.4233 18.9674 25 19.8487 25 23.2487C25 26.65 20.3933 27.5 15 27.5Z"
                    fill="#4A012E"
                  />
                </svg>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="focus:outline-none w-fit px-2 placeholder:text-sm placeholder:text-[#4A012E80] font-[600] "
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="mt-5  w-full ">
              <label htmlFor="name" className="text-[#4A012E] my-2 font-[500]  text-sm ">
                Select your avatar
              </label>
              <div className="rounded-[15px]  w-full mt-1  px-4 bg-white  items-center py-3 border-[2px] border-[#4A012E]">
                <Slide direction="down" triggerOnce>
                  <div className="grid grid-flow-row  justify-between w-full grid-cols-3 gap-5">
                    {data.map((item: any, index: any) => {
                      return (
                        <div
                          className={item.id == number ? "border-[2px] rounded-[10px] border-[#4A012E]" : "border-[2px]  rounded-[10px]  border-transparent"}
                          onClick={() => {
                            handleClick(item.id);
                          }}
                          key={index}
                        >
                          <Fade triggerOnce damping={0.1} direction="down" delay={300}>
                            <Profiles man={item.men} id={item.id} />
                          </Fade>
                        </div>
                      );
                    })}
                  </div>
                </Slide>
              </div>
            </div>
          </Slide>
          <Button onClick={handleEntry} />

          <Image src={"/Images/Mobile_CouplePic.svg"} style={{ width: "100%", height: "40%" }} width={200} height={200} className=" lg:hidden block mt-10 scale-90" alt="Couple Image" />
        </div>
      </div>
    </main>
  );
}
