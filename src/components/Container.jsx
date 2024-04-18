// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillAlt, FaPercent } from "react-icons/fa";

const Container = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div className="flex justify-center p-10 mt-6 mb-6 md:p-20 lg:p-40" style={{ marginTop: "-30px", marginBottom: "-50px" }}>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center w-full p-4 rounded-lg md:w-1/3 md:mr-4">
          <div className="mb-7">
            <FaMapMarkerAlt size={75} className="text-bright-red" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Saan ako makakabili ng load o card?</h2>
          <p className="mb-4 text-lg text-justify text-gray-600">Maari kang makabili o mag pa-load ng Filipay Card sa mga accredited Filipay Distributors, Partner PUVM Driver at sa ating mga Partner Retailers.</p>
        </div>
        <div className="flex flex-col items-center w-full p-4 rounded-lg md:w-1/3 md:mr-4">
          <div className="mb-7">
            <FaMoneyBillAlt size={75} className="text-bright-red" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Magkano ang Filipay Card?</h2>
          <p className="mb-4 text-lg text-justify text-gray-600">FREE lang ang aming Card, mag fill-up lamang ng inyong information para maka-avail ng FREE card:</p>
          <button onClick={handlePopupToggle} className="px-8 py-3 mt-4 mb-8 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent hover:font-bold">Free Card</button>
          <h2 className="mb-2 font-bold text-m">Kung bibili ako ng Filipay Card, may load na ba itong kasama?</h2>
          <p className="mb-4 text-lg text-justify text-gray-600">Oo, sa Php 100.00 na bayad sa card ay may Php 100.00 Filipay Credits na rin itong load sa card na maaari na agad gamitin sa pagbayad sa pamasahe</p>
        </div>
        <div className="flex flex-col items-center w-full p-4 rounded-lg md:w-1/3">
          <div className="mb-7">
            <FaPercent size={75} className="text-bright-red" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">May Discount ba ang Senior/PWD at Estudyante</h2>
          <p className="mb-4 text-lg text-justify text-gray-600">Oo, ang Filipay ay may dalawang uri ng Fleet card. Isa para sa ating mga regular commuters at ang isa ay para sa senior citizen/PWD at mga estudyante. Magkaka-discount ng 20% kada transaction ang isang FILIPAY Card na para sa mga Estudyante, Senior Citizen at PWD sa pagsakay gamit ang TAP-IN TAP-OUT na proseso.</p>
        </div>
      </div>

      {popupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative max-w-md p-8 bg-white rounded-lg">
            <h3 className="mb-4 text-2xl font-bold text-center">Forms are currently closed</h3>
            <p className="text-lg text-gray-600">Sorry, the forms for requesting a free card are currently closed. Please try again later.</p>
            <button onClick={handlePopupToggle} className="w-full px-4 py-2 mt-8 text-white bg-blue-500 rounded-md hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
