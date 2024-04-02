import React from "react";
import Form from "./Form";
import Contact from "./Contact";

const Fullcontact = () => {
  return (
    <>
      <div className="bg-white pt-40 flex flex-col sm:flex-row gap-5 justify-around">
        <Form />
        <Contact />
      </div>
    </>
  );
};

export default Fullcontact;
