import React from "react";
import Banner from "./Banner/Banner";
import partner1 from "../../Media/partners/tech-crunch.svg";
import partner2 from "../../Media/partners/fortune.svg";
import partner3 from "../../Media/partners/med-city.svg";
import partner4 from "../../Media/partners/new-york.svg";
import icon1 from "../../Media/icons/icons-1.png";
import icon2 from "../../Media/icons/icons-2.png";
import icon3 from "../../Media/icons/icons-3.png";
import userImg from "../../Media/Ellipse 17.png";
import ServiceBox from "../Shared/ServiceBox/ServiceBox";
import clinicImg from "../../Media/Group 9420.png";
import facilitiesImg from "../../Media/Group 9419.png";
import BrandBtn from "../Shared/BrandBtn/BrandBtn";
import "./Home.css";
import TestimonialCard from "../Shared/TestimonialCard/TestimonialCard";
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
  const testimonials = [
    {
      id: 1,
      img: userImg,
      name: "Rifki Abdurachman",
      post: "Product Designer",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      img: userImg,
      name: "Rifki Abdurachman",
      post: "Product Designer",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      img: userImg,
      name: "Rifki Abdurachman",
      post: "Product Designer",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 4,
      img: userImg,
      name: "Rifki Abdurachman",
      post: "Product Designer",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <div className="bg-backgroundColor ">
      <Banner></Banner>
      {/* partners section start here */}
      <div className="partners py-10 bg-secondary">
        <div className="p-5 grid gap-10 grid-cols-2 md:grid-cols-4 max-w-[1240px] mx-auto">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
        </div>
      </div>
      {/* partners section ends here */}

      {/* Service section starts here */}

      <div className="px-10 py-20 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 ">
          <>
            <h1 className="text-4xl font-bold text-headertext">Service List</h1>
          </>
          <>
            <p className="text-sm w-3/5">
              Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
              kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
            </p>
          </>
        </div>
        <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-10 py-10">
          {serviceList.map((service) => (
            <ServiceBox key={service.id} service={service}></ServiceBox>
          ))}
        </div>
      </div>
      {/* Service   section ends here */}

      {/* Medical Experts  section starts here */}
      <div className="px-10 py-20 grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto">
        <img src={clinicImg} alt="" />
        <div className="p-20">
          <h2 className="text-3xl font-semibold text-headertext">
            The best service from serious Medical Experts
          </h2>
          <p className="text-sm text-text py-5">
            The hospital is an integral part of a social and health organization with the
            function of providing comprehensive (comprehensive) services.
          </p>

          <BrandBtn to={"/login"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Appointment
          </BrandBtn>
        </div>
      </div>
      {/* Medical Experts  section ends here */}

      {/* Facilities  section ends here */}
      <div className="px-10 py-20 grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto">
        <div className="p-20">
          <h2 className="text-3xl font-semibold text-headertext">
            Luxury Facilities that humanize humans
          </h2>
          <p className="text-sm text-text py-5">
            The hospital is an integral part of a social and health organization with the
            function of providing comprehensive (comprehensive) services.
          </p>

          <BrandBtn to={"/login"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Appointment
          </BrandBtn>
        </div>
        <img src={facilitiesImg} alt="" />
      </div>
      {/* Facilities  section ends here */}

      {/* reserve section starts here */}
      <div className="px-10 py-20  max-w-[1240px] mx-auto">
        <div className="p-20 md:px-80 bg-primary gradient text-white text-center">
          <h2 className="text-4xl font-semibold ">Reserve our Services now</h2>
          <p className="text-sm text-text py-8">
            The hospital is an integral part of a social and health organization with the
            function of providing comprehensive (comprehensive) services.
          </p>

          <button className="btn btn-outline border-white text-white gap-2 mx-2 rounded-3xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            Check Doctor's Schedule
          </button>
          <button className="btn bg-white border-white text-primary gap-2 mx-2 rounded-3xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Appointment
          </button>
        </div>
      </div>
      {/* reserve section ends here */}

      {/* testimonials section starts here */}
      <div className="px-10 py-20  max-w-[1240px] mx-auto">
        <h2 className="text-center text-4xl font-semibold text-headertext">
          Testimonials by Patients
        </h2>
        <p className="text-sm text-text py-8 text-center px-10 md:px-80">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan
          dengan fungsi menyediakan pelayanan paripurna (komprehensif).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              key={testimonial.id}
            ></TestimonialCard>
          ))}
        </div>
      </div>
      {/* testimonials section ends here */}
    </div>
  );
};

export default Home;
