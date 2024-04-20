import React from "react";
import LandingPageVideo from "../assets/LandingPageVideo.mp4";

const Home = () => {
    return (
        <div className="w-full h-screen relative ">
            <video className="w-full h-full object-cover" src={LandingPageVideo} autoPlay loop muted/>
            <div className="container">
                <div className="absolute w-full h-full top-0 left-0 bg-zinc-800/30"></div>
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                    {/*text content sectioin*/}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  text-white ">SERVICE ECONOMY 
                        <h2>APPLICATIONS INC.</h2>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white ">BUSINESS MADE EASY!</h3>  
                    </h1>
                    
                    <div className="flex justify-normal gap-8 py-6  text-white">
                        <button className="bg-sky-600 px-7 py-3 rounded-full hover:scale-105 duration-200 flex items-center">Book Now</button>
                        <button className="bg-slate-800 px-8 py-3 rounded-full hover:scale-105 duration-200 flex items-right">Learn More</button>
                    </div>  
                </div>
            </div>   
        </div>
        
    );
};

export default Home;

