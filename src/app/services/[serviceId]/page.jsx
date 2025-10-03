
"use client"

import Loader from "@/components/common/Loader/Loader";
import ConnectSection from "@/components/home/ConnectSection/ConnectSection";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { services } from "../page";


const ServiceDetailsPage = ({ params }) => {

    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const { serviceId } = React.use(params);

    useEffect(() => {
        // const fetchServices = async () => {
        //     try {
        //         const response = await fetch('https://percel-management-app-server.vercel.app/api/services'); // Replace with your actual API endpoint
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch services');
        //         }
        //         const data = await response.json();
        //         const singleData = data.find(s => s.id == serviceId)
        //         console.log(singleData, "single data")
        //         setService(singleData);
        //     } catch (err) {
        //         setError(err.message);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchServices();
        const singleData = services.find(s => s.id == serviceId)
        setService(singleData);
        setLoading(false);
    }, []);

    if (loading) {
        return <Loader></Loader>;
    }


    return (
        <div className="bg-[#F3F3F3]">

            <section className='relative min-h-[650px] flex justify-center items-center -mt-24' >
                <div className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
                    style={{ backgroundImage: "url('/assets/images/services-details.png')" }}
                />
                <div className="relative text-center items-center md:max-w-3xl  content-center mx-auto px-6 h-full flex flex-col justify-center text-white gap-5">
                    <button className='btn bg-white text-[#074287] py-[10px] px-[16px] rounded-full text-[18px] font-medium'>Services</button>
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold md:leading-16 ">
                        {service?.title}
                    </h1>
                </div>
            </section>


            {/* service main part  */}

            <section className="lg:pt-30 md:pt-15 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 items-center">
                    {/* Left Column - Image */}
                    <div className="w-full order-2 md:order-none">
                        <div className="relative md:aspect-auto">
                            <Image
                                src={service.detailsImage}
                                alt="Build Your Robust Team"
                                width={600}
                                height={430}
                                className="rounded-3xl w-full h-auto md:h-[430px] object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full order-1 md:order-none">
                        <div className="w-full bg-white p-8  md:px-15 md:pt-12 rounded-3xl">
                            {/* Title */}

                            {
                                serviceId == 1 ?

                                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold leading-tight md:leading-16 text-[#074287]">
                                        <span className='text-[#1F2328]'>Accounting  & </span> Bookkeeping Services
                                    </h2>
                                    : serviceId == 2 ?
                                        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold leading-tight md:leading-16 text-[#074287]">
                                            <span className='text-[#1F2328]'>Taxation </span>  Services
                                        </h2>
                                        : serviceId == 3 &&
                                        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold leading-tight md:leading-16 text-[#074287]">
                                            <span className='text-[#1F2328]'>Audit </span>  Services
                                        </h2>
                            }




                            {/* {service.description} */}

                            {serviceId == 1 ?

                                <p className="text-gray-600 mt-4 mb-6 md:my-[30] text-base sm:text-lg">

                                    Dhri Robust is the one stop solution for all your accounting and bookkeeping needs. By outsourcing bookkeeping to us, you can have real time insights for your business to make smarter financial decisions. Our accountants are having expertise in various software such as Quickbooks, Xero, Zoho, odoo, etc.
                                </p>

                                : serviceId == 2 ?
                                    <p className="text-gray-600 mt-4 mb-6 md:my-[30] text-base sm:text-lg">

                                        Dhri Robust have a team of experts which ensures that all the tax fillings are accurate, seamless and compliant to tax laws to avoid errors and penalties in a cost-efficient way. We provide strategic planning and support for tax preparation, tax estimates & filling the same with our robust solutions / expertise.
                                    </p> : serviceId == 3 &&
                                    <p className="text-gray-600 mt-4 mb-6 md:my-[30] text-base sm:text-lg">

                                        In today’s financial landscapes, Auditing and Assurance demand more than just compliance- they require strategic insights, meticulous accuracy and unwavering reliability. At Dhri Robust we redefine outsourcing by delivering end to end audit solutions to firms, businesses and financial institutions to mitigate risks, ensure regulatory adherence and enhance stakeholder’s confidence.
                                    </p>}



                        </div>
                    </div>
                </div>
            </section>


            {/* service data  */}

            <section className="pt-10 md:pt-15 lg:pt-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto p-8 sm:p-6 lg:p-15 bg-white rounded-3xl shadow-sm">
                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold leading-tight md:leading-[3.5rem] text-[#074287] mb-6 md:mb-10">
                        <span className='text-[#1F2328]'>Our </span>Services Includes
                    </h2>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[30px] mt-6 md:mt-[30px]">
                        {/* First Column */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            {service?.servicesList?.slice(0, 5).map((serviceName, index) => (
                                <div key={index} className="flex items-start gap-4 sm:gap-5">                                    
                                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg md:text-xl text-[#074287]">
                                    {serviceName.icon}
                                    </div>
                                    <span className="text-[#1F2328] text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal">
                                        {serviceName.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Second Column */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            {service?.servicesList?.slice(5).map((item, index) => (
                                <div key={index + 5} className="flex items-start gap-4 sm:gap-5">
                                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg md:text-xl text-[#074287]">
                                        {item.icon}
                                    </div>
                                    <span className="text-[#1F2328] text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>  ;
            <ConnectSection></ConnectSection>

        </div>
    );
};

export default ServiceDetailsPage;