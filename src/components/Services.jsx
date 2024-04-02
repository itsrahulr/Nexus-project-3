import React from "react";

function Cards(props) {
  return (
    <>
      <div className={`w-80 h-96 p-5 rounded-lg ${props.color}`}>
        <h2 className="text-xl font-gs font-medium text-[24px] text-black">
          {props.title}
        </h2>
        <p className="font-gs font-normal mt-14 text-black">
          {props.description}
        </p>
      </div>
    </>
  );
}

const Services = () => {
  return (
    <>
      <h2
        id="services"
        className="font-gs font-medium text-h2 text-center mt-40 "
      >
        Services
      </h2>
      <div className="flex justify-around flex-wrap mt-40 gap-5">
        <Cards
          title="Web development"
          description="We offer professional web development services tailored to your business needs. Our team of experienced developers will create a stunning website that is both visually appealing and functional."
          color="bg-violet"
        />
        <Cards
          title="Web design"
          description="Our talented designers will bring your vision to life with creative web design solutions. We focus on user experience and aesthetics to ensure your website stands out from the competition."
          color="bg-yellow" // Example of different color
        />
        <Cards
          title="SEO"
          description="Boost your online visibility and drive organic traffic to your website with our effective SEO strategies. We optimize your website to rank higher in search engine results, increasing your chances of reaching your target audience."
          color="bg-pink" // Example of different color
        />
      </div>
    </>
  );
};

export default Services;
