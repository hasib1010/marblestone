import React from 'react';
import img1 from "./../../../assets/logo/Company.png";
import img2 from "./../../../assets/logo/Agency.png";
import img3 from "./../../../assets/logo/Venture.png";
import img4 from "./../../../assets/logo/Enterprise.png";
import img5 from "./../../../assets/logo/Institute.png";
import img6 from "./../../../assets/logo/Application.png";
import Carusel from './Slide'; 

const AboutSm = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:mt-[40px] md:mt-7 mt-5  ">
      <p className="text-center text-[#A4A6B0] text-sm md:text-base">As seen on:</p>

      
        <div className="my-10 flex   justify-evenly  w-full mb-32">
          <li className="list-none">
            <img className="w-[80px] lg:w-[120px] object-contain" src={img1} alt="Company Logo" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-[120px] object-contain" src={img2} alt="Agency Logo" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-[120px] object-contain" src={img3} alt="Venture Logo" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-[120px] object-contain" src={img4} alt="Enterprise Logo" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-[120px] object-contain" src={img5} alt="Institute Logo" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-[120px] object-contain" src={img6} alt="Application Logo" />
          </li>
        </div>
      

      <div className="  flex  md:flex-col lg:flex-row flex-col items-center justify-between gap-8 my-10">
        <div className="flex flex-col md:flex-row gap-8 w-full md:w-[50%] items-center">
          <div className="flex-1 lg:text-left md:text-left text-center w-64">
            <h2 className="text-lg sm:text-xl font-medium text-[#333]">Projects Completed</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#000]">
              10k<span className="text-[#A4A6B0]">+</span>
            </h1>
            <p className="font-normal text-sm sm:text-base max-w-[207.658px] text-[#555]">
              Over 10,000 projects successfully completed, showcasing our dedication and expertise in delivering high-quality results.
            </p>
          </div>
          <div className="flex-1 lg:text-left md:text-left text-center w-64">
            <h2 className="text-lg sm:text-xl font-medium text-[#333]">Satisfied Customers</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#000]">
              200k<span className="text-[#A4A6B0]">+</span>
            </h1>
            <p className="font-normal text-sm max-w-[207.658px] sm:text-base text-[#555]">
              Serving over 200,000 satisfied customers, we pride ourselves on exceptional service and client satisfaction.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] mt-8 md:mt-0">
          <Carusel />
        </div>
      </div>
    </div>
  );
}

export default AboutSm;
