// eslint-disable-next-line no-unused-vars
import React from "react";

const ContainerWithImage = () => {
  return (
    <div className="flex justify-center">
      <div className="relative p-6 overflow-hidden shadow-md rounded-xl bg-default-blue">
        <div className="absolute top-0 left-0 z-10 w-1/3 h-full overflow-hidden rounded-xl">
          <div className="h-full bg-black">
            <img src="/images/Filipay_Logo.png" alt="Logo" className="object-contain h-full" />
          </div>
        </div>
        <div className="z-20 max-w-lg p-3 ml-48">
          <h2 className="mb-4 ml-10 text-2xl font-bold text-white">Ano ang FILIPAY?</h2>
          <p className="ml-12 text-justify text-gray-100">Ang filipay ay isang Automatic Fare Collection at Fare Payment System na maaring gamitin sa pagbabayad ng pamasahe para sa mga modernong unit ng PUV sa Pilipinas.</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithImage;
