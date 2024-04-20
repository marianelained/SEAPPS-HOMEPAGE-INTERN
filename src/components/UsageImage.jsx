// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMinus } from "react-icons/fa";

const UsageImage = () => {
  return (
    <div className="text-center">

      <div className="flex flex-col items-center mb-8">
        <h1 className="mt-20 mb-3 text-2xl font-bold text-extra-blue sm:text-3xl lg:text-4xl">
          PAANO GAMITIN ANG FILIPAY CARD?
        </h1>
        <FaMinus className="text-5xl text-default-blue" />
      </div>
      
      <img 
        src="/images/how-to.png" 
        alt="Example"
        className="mx-auto rounded-lg shadow-2xl"
        style={{ width: "950px" }}
      />
      
      <div className="flex flex-col items-center mt-8">
        <h1 className="mt-20 mb-3 text-2xl font-bold text-extra-blue sm:text-3xl lg:text-4xl">
          IBA PANG KATANUNGAN
        </h1>
        <FaMinus className="text-5xl text-default-blue" />
      </div>
    </div>
  );
};

export default UsageImage;
