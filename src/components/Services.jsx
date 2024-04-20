import React from "react"
import Background from "../assets/Background.png";
import FiliPayIcon from "../assets/FiliPayIcon.png";
import FiliPayLogo from "../assets/FiliPayLogo.png";


const Services = () => {
  return (
    <div className="bg-gradient-to-r from bg-slate-950">
      <div className="container py-8"></div>
      <div style={{backgroundImage: `url(${Background})`, backgroundSize: "cover", 
          backgroundPosition: "center", width: "100%", height: "120vh", padding: "0rem"}}>
          
          {/*banner title*/}
          <div className="container">
            <div className="absolute flex flex-col justify-center">
              <div className="flex px-16 py-2 bg-white rounded items-right ">
                <div className="container px-4 mx-auto">
                  <div className="flex flex-col items-center justify-center">
                      <h1 className="font-bold text-1xl sm:text-2xl lg:text-1xl text-slate-900">
                        What We Offer
                      </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <img className="absolute  py-0 h-38 right-52  w-[450px]" src={FiliPayLogo} alt="" />
          <div className="min-h-[500px] sm:min-h-[850px] flex justify-center items-center text-white text-center">
            <div className="py-4 containter">
              <div className="grid items-center grid-cols-1 px-4 py-6 mx-auto max-w-1xl gap-x-8 gap-y-10 sm:px-6 sm:py-28 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                {/*1st banner section*/} 
                  <div className="container flex flex-col items-center justify-center px-4 mx-auto bg-transparent">
                    <h1 className="flex items-center text-3xl sm:text-2xl lg:text-3xl">
                            FILIPAY is the flagship product of Service Economy Applications, 
                            Inc., focused on the development of cashless systems for private 
                            and government institutions.
                    </h1>
                    <div className="flex items-center justify-center py-6">
                      <button className="flex items-center py-3 text-white duration-200 rounded-full bg-sky-600 px-7 hover:scale-105">
                            Learn More
                      </button>
                    </div>
                  </div>
                    
                {/*1st banner icon*/}
                <div className="items-center py-2 h-46 ">
                    <img className=" w-[500px]" src={FiliPayIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
      </div>
          
          
    </div>
      
  );
};

export default Services;
