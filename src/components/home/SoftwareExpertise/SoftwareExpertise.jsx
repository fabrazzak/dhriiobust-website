import React from 'react';
import Image from 'next/image';


const SoftwareExpertise = () => {
    const softwareLogos = [
        { name: 'Quickbooks', image:  '/assets/images/qucik.png'},
        { name: 'ProSeries', image: '/assets/images/proseries.png'},
        { name: 'Lacerte Tax', image:  '/assets/images/lacerte.png' },
        { name: 'UltraTax CS', image:'/assets/images/ultratax.png' },
        { name: 'Drake Software', image: '/assets/images/drakeSoftware.png' },
        { name: 'Canopy', image: '/assets/images/canopy.png' },
        { name: 'Xero', image: '/assets/images/xero.png'},
        { name: 'Intuit', image:  '/assets/images/iniuit.png' },
        { name: 'CCH', image: '/assets/images/cch.png' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4  lg:px-0   md:pt-20 lg:pt-30 pt-10 ">
            <div className="text-center mb-10 md:mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-gray-900">
                    Expertise In <span className='text-[#074287]'>Software</span> Like
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-x-20">
                {softwareLogos.map((software, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-2 sm:p-3 hover:scale-105 transition-transform duration-300"
                        style={{ width: 'clamp(120px, 20vw, 192px)' }}
                    >
                        <div className="relative w-full aspect-[2.4]"> {/* 192/80 = 2.4 ratio */}
                            <Image
                                src={software.image}
                                alt={software.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 192px"
                            />
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftwareExpertise;