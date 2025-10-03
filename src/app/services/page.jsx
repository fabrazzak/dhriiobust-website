'use client'

import ConnectSection from '@/components/home/ConnectSection/ConnectSection';
import Features from '@/components/services/Features/Features';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
    FaFileAlt,
    FaCalendarCheck,
    FaMoneyCheckAlt,
    FaMoneyBillWave,
    FaCogs,
    FaUniversity,
    FaClock,
    FaChartLine,
    FaUsers,
    FaBalanceScale,
    FaGlobe,
    FaHandshake,
    FaReceipt,
    FaBuilding,
    FaCalculator,
    FaGavel,
    FaSearchDollar,
    FaCheckCircle,
    FaTasks,
    FaFileSignature
  } from "react-icons/fa";
  
  export const services = [
    {
      id: 1,
      title: "Bookkeeping",
      subtitle: "Accounting & Bookkeeping Services",
      description:
        "Dhri Robust is the one stop solution for all your accounting and bookkeeping needs. By outsourcing bookkeeping to us, you can have real time insights for your business.",
      mainImage: "/assets/images/booking.png",
      detailsImage: "/assets/images/booking-details.png",
      servicesList: [
        { icon: <FaFileAlt />, text: "Document Management" },
        { icon: <FaCalendarCheck />, text: "Month End & Year End Closing Entries" },
        { icon: <FaMoneyCheckAlt />, text: "Accounts Payable / Accounts Receivable" },
        { icon: <FaMoneyBillWave />, text: "Cash Flow Statements" },
        { icon: <FaCogs />, text: "Industry Specific & Custom Processes" },
        { icon: <FaUniversity />, text: "Bank, Credit Card & Loan Account Reconciliation" },
        { icon: <FaClock />, text: "Real time Bookkeeping" },
        { icon: <FaChartLine />, text: "Financial Statement Analysis" },
        { icon: <FaUsers />, text: "Payroll Processing" }
      ]
    },
    {
      id: 2,
      title: "Taxation",
      subtitle: "Taxation Services",
      description:
        "Dhri Robust have a team of experts which ensures that all the tax filings are accurate, seamless and compliant to tax laws to avoid errors and penalties in a cost-efficient way.",
      mainImage: "/assets/images/taxition.png",
      detailsImage: "/assets/images/booking-details.png",
      servicesList: [
        { icon: <FaBalanceScale />, text: "Tax Planning and Strategy" },
        { icon: <FaGlobe />, text: "Multi state tax management" },
        { icon: <FaHandshake />, text: "Partnership Returns" },
        { icon: <FaReceipt />, text: "Sales Tax Returns" },
        { icon: <FaBuilding />, text: "S-Corp / C-Corp Returns" },
        { icon: <FaUsers />, text: "NFP Returns" },
        { icon: <FaGlobe />, text: "International Taxation Compliances" },
        { icon: <FaGavel />, text: "Tax Resolutions" },
        { icon: <FaCalculator />, text: "Tax Projection & Tax Estimates" }
      ]
    },
    {
      id: 3,
      title: "Audit",
      subtitle: "Audit & Assurance Services",
      description:
        "In today's financial landscapes, Auditing and Assurance demand more than just compliance - they require strategic insights, meticulous accuracy and unwavering reliability.",
      mainImage: "/assets/images/audit-services.png",
      detailsImage: "/assets/images/booking-details.png",
      servicesList: [
        { icon: <FaSearchDollar />, text: "Internal audit" },
        { icon: <FaCheckCircle />, text: "Compliance and regulatory audit" },
        { icon: <FaTasks />, text: "Customized audit (Agreed upon Procedures)" }
      ]
    }
  ];
  
  

const ServicesPage = () => {


    // const [services, setServices] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchServices = async () => {
    //         try {
    //             const response = await fetch('https://percel-management-app-server.vercel.app/api/services'); // Replace with your actual API endpoint
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch services');
    //             }
    //             const data = await response.json();
    //             setServices(data);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchServices();
    // }, []);

    // if (loading) {
    //     return <Loader></Loader>;
    // }

    // console.log(services,"services data")

    const servicesList = [
        "Hire Accountant",
        "Hire Bookkeeper",
        "Hire Tax Preparer",
        "Hire Tax reviewer",
        "Hire AR/AP Staff",
        "Hire Payroll Manager",
        "Hire Quick book Expert"
    ];


    return (
        <div className='bg-[#F3F3F3]'>
            <section className='relative min-h-[650px] flex justify-center items-center -mt-24' >
                <div className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
                    style={{ backgroundImage: "url('/assets/images/services-baner.png')" }}
                />
                <div className="relative text-center items-center md:max-w-3xl  content-center mx-auto px-6 h-full flex flex-col justify-center text-white gap-5">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold md:leading-16 mt-20">
                        Dhri Robust Services
                    </h1>
                </div>

                {/* advantage  */}



            </section>


            {/* services section  */}

            <section className="lg:pt-30 md:pt-15 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
                {/* Title */}
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold md:leading-16  text-[#074287] mb-[50px]">
                    <span className='text-[#1F2328]'>Services</span> We Offer
                </h1>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white  rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* Image */}
                            <div className="rounded-3xl">
                                <Image
                                    src={service.mainImage}
                                    alt={service.title}
                                    width={380}
                                    height={230}

                                    className="w-full p-2 rounded-3xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-10  pt-6">
                                {/* Title */}
                                <h2 className="text-[32px] font-semibold text-[#1F2328] mb-[18]">{service.title}</h2>

                                {/* Description */}
                                <p className="text-[#1F2328CC] mb-4 text-[18px]">{service.description}</p>

                                {/* Read More Button */}
                                <Link href={`/services/${service.id}`} className="flex text-[18px]  items-center text-[#074287] font-semibold transition-colors duration-300">
                                    <span className='underline'> Read More</span>
                                    <Image src="/assets/images/blog-arrow.png" alt='blog-arrow' width={15} height={10} className='p-[3px] ml-1'></Image>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* robust ream  */}

            <section className="lg:pt-30 md:pt-15 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 items-center">
                    {/* Left Column - Image */}
                    <div className="w-full order-2 md:order-none">
                        <div className="relative aspect-[600/659] md:aspect-auto">
                            <Image
                                src="/assets/images/robost-team.png"
                                alt="Build Your Robust Team"
                                width={600}
                                height={659}
                                className="rounded-3xl w-full h-auto md:h-[659px] object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full order-1 md:order-none">
                        <div className="w-full bg-white p-8  md:px-15 md:pt-12 rounded-3xl">
                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-semibold leading-tight md:leading-16 text-[#074287]">
                                <span className='text-[#1F2328]'>Build Your</span> Robust Team
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 mt-4 mb-6 md:my-5 text-base sm:text-lg">
                                Build your offshore team which allows you to access a global talent pool, streamline operations, and enhance productivity - all while maintaining robust quality services with only fractional costs.
                            </p>

                            {/* List Title */}
                            <h2 className="text-lg sm:text-xl font-semibold text-[#074287] mb-3 sm:mb-4">Our services include</h2>

                            {/* Services List */}
                            <ul className="space-y-2 sm:space-y-3">
                                {servicesList.map((service, index) => (
                                    <li key={index} className="flex items-center">
                                        •
                                        <span className="text-gray-700 text-base sm:text-lg ml-1">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <div>
                <Features></Features>
            </div>

            <ConnectSection></ConnectSection>
        </div>
    );
};

export default ServicesPage;









