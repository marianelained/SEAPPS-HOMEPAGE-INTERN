import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import Services1 from "../components/Services1";


const Homepage = () => {
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    );
  }) 
  return <div className="overflow-x-hidden">
    <Navbar/>
    <Header/>
    <Services/>
    <Services1/>
   
  </div>;
  
};

export default Homepage;