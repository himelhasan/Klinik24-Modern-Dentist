import React from "react";
import Banner from "./Banner/Banner";
import partner1 from "../../Media/partners/tech-crunch.svg";
import partner2 from "../../Media/partners/fortune.svg";
import partner3 from "../../Media/partners/med-city.svg";
import partner4 from "../../Media/partners/new-york.svg";
import icon1 from "../../Media/icons/icons-1.png";
import icon2 from "../../Media/icons/icons-2.png";
import icon3 from "../../Media/icons/icons-3.png";
import ServiceBox from "../Shared/ServiceBox/ServiceBox";

const Home = () => {
  const serviceList = [
    {
      id: 1,
      img: icon3,
      name: "24 Hour Pharmacy",
      description:
        "A shop where you concoct and sell medicine based on a doctor's prescription and trade medical goods",
    },
    {
      id: 2,
      img: icon1,
      name: "Medical Check Up",
      description:
        "A shop where you concoct and sell medicine based on a doctor's prescription and trade medical goods",
    },
    {
      id: 3,
      img: icon2,
      name: "Professional Doctor",
      description:
        "A shop where you concoct and sell medicine based on a doctor's prescription and trade medical goods",
    },
  ];

  return (
    <div className="bg-backgroundColor ">
      <Banner></Banner>
      <div className="partners py-10 bg-secondary">
        <div className="p-5 grid gap-10 grid-cols-2 md:grid-cols-4 max-w-[1440px] mx-auto">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
        </div>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-2 ">
          <>
            <h1 className="text-4xl font-bold">Service List</h1>
          </>
          <>
            <p className="text-sm w-3/5">
              Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
              kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
            </p>
          </>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-10 py-10">
          {serviceList.map((service) => (
            <ServiceBox key={service.id} service={service}></ServiceBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
