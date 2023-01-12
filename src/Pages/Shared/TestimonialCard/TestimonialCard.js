import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { img, name, description, post } = testimonial;

  return (
    <div className="shadow-xl bg-white px-12 py-10 rounded-2xl shadow-secondary">
      <p className="text-xl italic text-headertext py-3">{description}</p>
      <>
        <div className="flex pt-5">
          <img src={img} alt="" className="pr-5 w-20" />

          <div className="">
            <h3 className="text-xl font-semibold text-primary">{name}</h3>
            <h3 className="text-text text-md">{post}</h3>
          </div>
        </div>
      </>
    </div>
  );
};

export default TestimonialCard;
