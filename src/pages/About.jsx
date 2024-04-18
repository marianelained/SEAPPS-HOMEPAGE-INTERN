import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <iframe src="/about.html" title="About" style={{ width: "100%", height: "100vh", border: "none" }} />
    </div>
  );
};

export default About;
