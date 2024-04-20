// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaTimes, FaCalendarAlt } from "react-icons/fa";

const ContainerRetailer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleMeetingSelect = (meeting) => {
    setSelectedMeeting(meeting);
  };

  return (
    <div className="flex justify-center">
      <div className="relative p-4 overflow-hidden shadow-md rounded-xl bg-default-blue">
        <div className="absolute top-0 left-0 z-10 w-1/5 h-full overflow-hidden rounded-xl">
          <div className="h-full bg-black">
            <img src="/images/Filipay_Logo.png" alt="Logo" className="object-contain h-full" />
          </div>
        </div>
        <div className="z-20 max-w-3xl p-4 ml-48">
          <h2 className="mb-4 ml-6 text-2xl font-bold text-white">Paano maging Partner Retailer / Distributor</h2>
          <p className="ml-8 text-gray-100">Maaring pumunta sa Filipay Page at mag set ng appointment. Ang Sales Team ay tatawagan kayo upang makipag coordinate sa inyo. </p>
          <div className="flex justify-center">
            <button onClick={handleModalToggle} className="px-4 py-2 mt-4 text-white border border-white rounded-full hover:bg-white hover:text-blue-900 hover:font-bold">Maging Partner/Retailer</button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white shadow-md rounded-lg p-6 w-[420px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Select a Meeting</h3>
              <button onClick={handleModalToggle} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-4 overflow-y-auto">
              <li>
                <button onClick={() => handleMeetingSelect("Filipay Technical Support")} className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <span>Filipay Technical Support (30 Minutes)</span>
                  <FaCalendarAlt />
                </button>
              </li>
              <li>
                <button onClick={() => handleMeetingSelect("Online Meeting")} className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <span>Online Meeting (45 Minutes)</span>
                  <FaCalendarAlt />
                </button>
              </li>
              <li>
                <button onClick={() => handleMeetingSelect("Partner/Retailer Registration")} className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <span>Partner/Retailer Registration (15 Minutes)</span>
                  <FaCalendarAlt />
                </button>
              </li>
              <li>
                <button onClick={() => handleMeetingSelect("Schedule A Demo")} className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <span>Schedule A Demo (60 Minutes)</span>
                  <FaCalendarAlt />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerRetailer;
