import React, { useState } from "react";
import { firestore } from "./firebase";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore
      .collection("messages")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        setName(""), setEmail(""), setMessage("");
      })
      .catch((error) => console.error("Error submitting data: ", error));
  };

  return (
    <div className="bg-white justify-center  flex flex-col ">
      <form className=" w-96 " action="" onSubmit={handleSubmit}>
        <input
          className="border-b border-black w-80 p-3 outline-none mb-4 bg-white"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="border-b border-black w-80 p-3 outline-none mb-4 bg-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="border-b border-black w-80 p-3 outline-none mb-4 bg-white"
          placeholder="Your message"
          name=""
          id=""
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="border text-black py-2 px-4 hover:bg-black hover:text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
