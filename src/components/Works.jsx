import React from "react";
import p1 from "/src/images/p1.png";
import p2 from "/src/images/p2.png";

function Card(props) {
  return (
    <div className=" w-full sm:w-[45%] mb-5 hover:cursor-pointer">
      <img className="rounded-xl" src={props.img} alt="" />
      <h2 className="font-gs text-h2 uppercase">{props.title}</h2>
    </div>
  );
}

const Works = () => {
  return (
    <div>
      <h2 className="font-gs font-medium text-h2 text-center mt-40 ">
        Our selected works
      </h2>
      <div className="flex flex-col sm:flex-row justify-around flex-wrap mt-40 gap-5 max-w-6xl mx-auto">
        <Card img={p1} title="cafe - 2023" />
        <Card img={p2} title="portfolio-rahul - 2023" />
      </div>
    </div>
  );
};

export default Works;
