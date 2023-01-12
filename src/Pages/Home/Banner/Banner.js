import React from "react";
import doctorImg from "../../../Media/bannerdoctor.png";
import BrandBtn from "../../Shared/BrandBtn/BrandBtn";
import svg from "../../../Media/pasient.svg";

const Banner = () => {
  return (
    <div className="bg-[#F2F7FF] w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse py-20 ">
          <img alt="" src={doctorImg} className="max-w-sm " />
          <div>
            <h1 className="text-5xl font-bold">
              Modern Dentistry in a calm and relaxed way
            </h1>
            <p className="py-6 ">
              The Kilink24 Dental in Smithtown, NY includes a team of highly skilled
              Dentists and Dental Professionals committed to meeting your dental needs
              under one roof.
            </p>
            <BrandBtn>
              <img src={svg} alt="" />
              <p>Get Started</p>
            </BrandBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
