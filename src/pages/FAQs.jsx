import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import FAQ from "../components/FAQ";
import HeaderImage from "../components/HeaderImage";
import Container from "../components/Container";
import ContainerWithImage from "../components/ContainerWithImage";
import ContainerRetailer from "../components/ContainerRetailer";
import UsageImage from "../components/UsageImage";
import Navbar from "../components/Navbar";

const FAQs = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-white-400">
        <Navbar />
      <div className="p-4">
        <HeaderImage />
        <div className="mt-10">
          <ContainerWithImage />
        </div>
        <div className="mt-10">
          <Container />
        </div>
        <div className="mt-10">
          <ContainerRetailer />
        </div>
        <div className="mt-10">
          <UsageImage />
        </div>
        <div className="mt-20">
          <FAQ />
        </div>
        <button
          onClick={scrollToTop}
          className="fixed px-4 py-2 text-white bg-blue-500 rounded-full bottom-8 right-8 hover:bg-blue-600"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default FAQs;
