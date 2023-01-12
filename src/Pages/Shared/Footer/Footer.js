import React from "react";
import footerLogo from "../../../Media/footer-logo.png";

import socialIcon1 from "../../../Media/facebook.png";
import socialIcon2 from "../../../Media/youtube.png";
import socialIcon3 from "../../../Media/whatsapp.png";

const Footer = () => {
  return (
    <div className="bg-[#0A0E31] py-10">
      <div className="max-w-[1240px] mx-auto block px-6 py-2 md:flex ">
        <div className="w-full md:w-2/5 py-4 text-white lg:pr-40">
          <img src={footerLogo} alt="" />
          <p className="text-sm py-2">
            Jl. Lebak Bulus I Kav. 29 Cilandak South Jakarta, DKI Jakarta, Indonesia 12340
          </p>
          <div className="flex py-5">
            <img src={socialIcon1} alt="" className="pr-5" />
            <img src={socialIcon2} alt="" className="pr-5" />
            <img src={socialIcon3} alt="" className="pr-5" />
          </div>
        </div>
        <div className="w-full md:w-1/5 py-4 text-white">
          <h4 className="text-xl font-semibold text-white">Company Info</h4>
          <ul className="pt-5 text-md py-2">
            <li className="py-1">About Us</li>
            <li className="py-1">Career</li>
            <li className="py-1">Blogs</li>
            <li className="py-1">Service Info</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 py-4 text-white">
          <h4 className="text-xl font-semibold text-white">Branch</h4>
          <ul className="pt-5 text-md py-2">
            <li className="py-1">Tangerang</li>
            <li className="py-1">Jakarta</li>
            <li className="py-1">Surabaya</li>
            <li className="py-1">Bekasi</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 py-4 text-white">
          <h4 className="text-xl font-semibold text-white">Contact us</h4>
          <ul className="pt-5 text-md py-2">
            <li className="py-1">+626564465455</li>
            <li className="py-1">info@klinik24.com</li>
            <li className="py-1">Tel: +5646544654</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
