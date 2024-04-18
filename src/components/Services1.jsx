import React from "react"
import Background1 from "../assets/Background1.png";


const Services = () => {
  return (
    <div className="">
      <div style={{backgroundImage: `url(${Background1})`, backgroundSize: "cover", 
          backgroundPosition: "center", width: "100%", height: "120vh", padding: "0rem"}}>
          
          {/*banner title*/}
          <div className="container">
            <div className="absolute flex flex-col justify-center">
              <div className="px-16 py-2 rounded flex items-right bg-white ">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col items-center justify-center">
                      <h1 className="text-1xl sm:text-2xl lg:text-1xl font-bold text-slate-900">
                        Why Choosse FiliPay?
                      </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
          
    </div>
      
  );
};

export default Services;
