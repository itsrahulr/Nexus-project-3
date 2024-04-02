import React from "react";
import bro1 from "/src/images/bro1.jpg";
import bro2 from "/src/images/bro2.jpg";

const Clients = () => {
  return (
    <>
      <h1 className="font-gs font-medium text-h2 text-center mt-40">
        Here's What Our Clients Say
      </h1>
      <div className="bg-grey w-full min-h-[390px] rounded-2xl p-5 mt-40  top-0 z-0">
        <p className="text-black font-gs font-medium text-h2 ">
          Techy Software's services have exceeded our expectations. They truly
          understand our needs and deliver exceptional results.
        </p>
        <div>
          <img className="w-24 rounded-full" src={bro1} alt="" />
          <div className="font-gs">
            <h2 className="text-black font-gs font-medium">john doe</h2>
            <p className=" font-normal text-black">CEO y-company</p>
          </div>
        </div>
      </div>
      {/* next testimonial */}
      <div className="bg-grey w-full min-h-[390px] rounded-2xl p-5 mt-40 ">
        <p className="text-black font-gs font-medium text-h2 ">
          We are extremely satisfied with the web development services provided
          by Techy Software. They have helped us achieve our online goals.
        </p>
        <div>
          <img className="w-24 rounded-full" src={bro2} alt="" />
          <div className="font-gs">
            <h2 className="text-black font-gs font-medium">George gopal</h2>
            <p className=" font-normal text-black">CEO z-company</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
