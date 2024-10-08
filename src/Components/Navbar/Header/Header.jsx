import React from 'react';
import Navbar from '../Navbar';
import arrow from './../../../assets/logo/Element.png';

const Header = () => {
    return (
        <div className="relative   lg:mb-20 bg-[#FAFAFB]
            h-[500px] sm:h-[900px] md:h-[600px] lg:h-[900px] xl:h-[1086px]
            bg-[url('./assets/images/banner.png')] 
            bg-no-repeat bg-center bg-cover 
             rounded-[20.009px]
              ">

            {/* Navbar */}
            <div className="relative z-40">
                <Navbar />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute rounded-[20.009px] inset-0 bg-gradient-to-b from-transparent via-[#3b393980] to-[#362d2dd9] z-10" />

            {/* Content */}
            <div className="relative container mx-auto px-4 md:px-8 z-20">
                <div className="flex flex-col lg:flex-row justify-between mt-[24px] md:mt-[44px]">
                    <h3 className="text-[36px] md:text-[48px] lg:text-[72px] font-medium text-white leading-tight lg:leading-[82.8px]">
                        Discover Your Dream Home <br className="hidden lg:block" /> in Chicago's Southside
                    </h3>
                    <div className="mt-8 lg:mt-0">
                        <p className="w-full lg:w-[346px] text-white mb-6 text-[14px] md:text-[16px]">
                            Experience the best of Southside Chicago with our premium property management services. From cozy apartments to luxurious homes, find the perfect place that fits your lifestyle and needs.
                        </p>
                        <div className="">
                            <button className="relative flex items-center gap-2 px-4 py-2 rounded-3xl text-[16px] font-medium leading-5 text-white
        transition-all transform hover:scale-105 hover:shadow-lg button-gradient button-gradient-hover">
                                <span className="hidden sm:block">Get Started</span>
                                <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
