import React from "react";

function Cont(props) {
  return (
    <>
      <div className="flex  flex-col ">
        <h3 className="text-black font-gs font-medium text-[24px] text-center sm:text-left">
          {props.title}
        </h3>
        <p className="text-black font-gs font-normal text-[16px] text-center sm:text-left">
          {props.sub}
        </p>
      </div>
    </>
  );
}

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Cont title="Email" sub="fake@fakemail.com" />
        <Cont title="Phone" sub="+91 9876543210" />
        <Cont title="Office" sub="A-Tower , B-city , C-country" />
      </div>
    </>
  );
};

export default Contact;
