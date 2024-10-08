import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Overview from './Tabs/Overview';
import Marketing from './Tabs/Marketing';
import TenantScreening from './Tabs/TenantScreening';
import RentCollection from './Tabs/RentCollection';
import Maintenance from './Tabs/Maintenance';
import FinancialReporting from './Tabs/FinancialReporting';
import { SlLocationPin } from 'react-icons/sl';
import InquiryForm from './InquiryForm';

const PropertyManagement = () => {
    const [toggleTab, setToggleTab] = useState(1);

    const toggleIndexTab = (index) => {
        setToggleTab(index);
    };

    return (
        <div className='bg-[#FAFAFB]'>
            <div className='bg-[#14161C] p-10 md:p-0 lg:p-0 w-full mx-auto rounded-2xl h-fit'>
                <Navbar />
                <div className='lg:py-16 lg:mb-24 pb-3'>
                    <h4 className='max-w-[854.75px] mx-auto text-center my-2 text-white text-3xl md:text-4xl lg:text-7xl font-medium'>
                        Property Management Essentials Best Practices
                    </h4>
                    <p className='max-w-[982px] mx-auto text-center my-2 text-[#A4A6B0] text-sm md:text-base lg:text-lg'>
                        Property management involves overseeing residential or commercial properties to ensure they are well-maintained, financially viable, and effectively occupied. To succeed in this field, several best practices are essential.
                    </p>
                </div>
            </div>
            <div className='container mx-auto bg-[#FAFAFB]'>
                <div className='flex flex-wrap items-center justify-center w-fit px-10 py-5  mx-auto gap-4 md:gap-5 mt-10 rounded-full bg-white'>
                    {['Overview', 'Marketing', 'Tenant Screening', 'Rent Collection', 'Maintenance', 'Financial Reporting'].map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => toggleIndexTab(index + 1)}
                            className={`list-none font-medium text-[#464851] py-2 px-4 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                                ${toggleTab === index + 1 ? "active_tabX" : "tabX"}
                            `}
                        >
                            {tab}
                        </li>
                    ))}
                </div>
                {/* content */}
                <div className='px-4 max-w-[1200px] mx-auto'>
                    <div className={`${toggleTab === 1 ? "block" : "hidden"}`}>
                        <Overview />
                    </div>
                    <div className={`${toggleTab === 2 ? "block" : "hidden"}`}>
                        <Marketing></Marketing>
                    </div>
                    <div className={`${toggleTab === 3 ? "block" : "hidden"}`}>
                        <TenantScreening></TenantScreening>
                    </div>
                    <div className={`${toggleTab === 4 ? "block" : "hidden"}`}>
                        <RentCollection></RentCollection>
                    </div>
                    <div className={`${toggleTab === 5 ? "block" : "hidden"}`}>
                       <Maintenance></Maintenance>
                    </div>
                    <div className={`${toggleTab === 6 ? "block" : "hidden"}`}>
                      <FinancialReporting></FinancialReporting>
                    </div>
                </div>
                <div className='text-white bg-[#14161C] my-10 lg:px-24 lg:py-20 p-5 rounded-3xl'>
                <h4 className='lg:text-5xl text-2xl text-center lg:text-left font-medium'>Areas We Serve</h4>
                    <ul className='flex flex-wrap items-center  justify-evenly   mt-10  '>
                        <li className='flex items-center pr-12 gap-3'><SlLocationPin className='text-xl'></SlLocationPin> Chicago</li>
                        <li className='flex items-center pr-12 gap-3'><SlLocationPin className='text-xl'></SlLocationPin> South Shore</li>
                        <li className='flex items-center pr-12 gap-3'><SlLocationPin className='text-xl'></SlLocationPin> South Chicago</li>
                        <li className='flex items-center  gap-3'><SlLocationPin className='text-xl'></SlLocationPin> Eastside</li> <br />
                       </ul>
                       <ul className='flex flex-wrap items-center  justify-evenly lg:py-10  '>
                        <li className='flex items-center pr-8 gap-3'><SlLocationPin className='text-xl'></SlLocationPin> Hegewisch</li>
                        <li className='flex items-center pr-8 gap-3'><SlLocationPin className='text-xl'></SlLocationPin> Chatham</li>
                        <li className='flex items-center pr-8 gap-3'><SlLocationPin className='text-xl'></SlLocationPin> Woodlawn</li>
                    </ul>
                </div>
            </div>
            <InquiryForm></InquiryForm>
        </div>
    );
};

export default PropertyManagement;
