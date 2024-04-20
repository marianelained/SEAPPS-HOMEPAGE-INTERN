// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-4">
      <div className="accordion-container" style={{ maxWidth: "1000px", padding: "20px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full"
        >
          <span>{title}</span>
          <svg
            className="ml-8 fill-indigo-500 shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
