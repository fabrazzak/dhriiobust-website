import ConnectSection from '@/components/home/ConnectSection/ConnectSection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {

    const items = [
        { label: "Cost savings", image: "/assets/images/cost.png" },
        { label: "Compliance without stress", image: "/assets/images/compliance.png" },
        { label: "Increased capacity", image: "/assets/images/increased.png" },
        { label: "Scalability", image: "/assets/images/scalibaty.png" },
        { label: "Security and confidentiality", image: "/assets/images/secure.png" },
        { label: "Flexible working model", image: "/assets/images/flexible.png" },
        { label: "Expert staffing solutions", image: "/assets/images/expert.png" },
        { label: "Client centric", image: "/assets/images/client.png" },
        { label: "Reduce the risk of staff turnover & retraining", image: "/assets/images/reduces.png" },
        { label: "Expertise in various software", image: "/assets/images/expertize.png" },
        { label: "Timely estimation of billable hours", image: "/assets/images/timely.png" },

    ];

    return (
        <div className='bg-[#F3F3F3]'>
            <section className='relative min-h-[650px] flex justify-center items-center -mt-24' >
                <div className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
                    style={{ backgroundImage: "url('/assets/images/about-banner.png')" }}
                />
                <div className="relative text-center items-center md:max-w-3xl  content-center mx-auto px-6 h-full flex flex-col justify-center text-white gap-5">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold md:leading-16 mt-20">
                        Outsource securely with  Dhri Robust
                    </h1>
                    <p className="text-2xl font-medium text-white md:mx-20  text-center"> No more guess work. Get real-time insights from our expert team.</p>

                </div>

                {/* advantage  */}



            </section>

            <section className="md:pt-20 lg:pt-30 pt-10  px-4 bg-[#F3F3F3]">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold md:leading-16 text-center text-[#074287] mb-8">
                        <span className='text-[#1F2328]'> Dhri Robust</span> Advantage
                    </h2>

                    <div className="md:mb-12 mb-6 space-y-4 max-w-5xl mx-auto flex flex-col justify-center">
                        <p className="text-lg text-[#1F2328] text-center md:pr-6">
                            Dhri robust is loved by CPAs, Accountants, Tax advisors, Clients & business owners for Customized and tailored approach for providing them the robust offshore solutions.
                        </p>
                        <p className="text-lg text-[#1F2328] text-center">
                            We have in depth knowledge and understanding of tax laws and Accounting standards that allows us to offer comprehensive bookkeeping, accounting, taxation and auditing services around the globe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-15 mt-8 ">
                        {/* First 9 items in 3-column grid */}
                        {items.slice(0, 9).map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center  p-5 bg-white rounded-3xl     "
                            >
                                <div className="flex-shrink-0  rounded-full mr-5">
                                    <Image src={item.image} alt={item.image} width={64} height={64}></Image>
                                </div>
                                <h3 className="md:text-[22px] text-[18px] font-semibold text-[#1F2328]">{item.label}</h3>
                            </div>
                        ))}

                        {/* Last 2 items in a centered row */}
                        <div className="lg:col-span-3 md:col-span-2 flex justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
                                {items.slice(9).map((item, index) => (
                                    <div
                                        key={index + 9}
                                        className="flex items-center  p-5  bg-white rounded-3xl "
                                    >
                                        <div className="flex-shrink-0  rounded-full mr-5">
                                            <Image src={item.image} alt={item.image} width={64} height={64}></Image>
                                        </div>
                                        <h3 className="md:text-[22px] text-[18px]  font-semibold text-[#1F2328]">{item.label}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* we work  */}

            <section className=" md:pt-20 lg:pt-30 pt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                    <div className="grid  md:grid-cols-2 items-center">
                        {/* Image on left */}
                        <div className=" rounded-l-3xl  flex h-full ">
                            <div className=" h-full md:rounded-l-3xl  rounded-l-xl md:rounded-none ">
                                <Image
                                    src='/assets/images/we-work.png'
                                    alt="Dhri Robust Team"
                                    width={612}
                                    height={620}

                                    className="w-full h-full object-cover md:rounded-l-3xl  rounded-xl md:rounded-none"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Content on right */}
                        <div className="p-8 md:p-15 h-full md:rounded-r-3xl  rounded-xl md:rounded-none  bg-[#074287]  hover:shadow-md transition-all duration-300">

                            <div className="flex-shrink-0  rounded-full mb-2">
                                <Image src='/assets/images/we-work-icon.png' alt='we-work-icon.png' width={88} height={100}></Image>
                            </div>
                            <h1 className="text-3xl md:text-[52px] font-bold text-[#FFFFFF] mb-[30px]">
                                How We Work
                            </h1>

                            <div className="text-[#FFFFFFCC] text-[20px] leading-relaxed space-y-6">
                                <p>
                                    We build high performing outsourced global teams for accounting, taxation, and auditing across the globe.
                                </p>
                                <p>
                                    We believe outsourcing services should be simple, easy and "Plug & Play" </p>
                            </div>

                            <div className="pt-10">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-lg text-[#074287] bg-[#FFFFFF] font-semibold px-6 py-4 rounded-xl transition-all duration-200"
                                >
                                    Let’s Connect

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* our approach  */}


            <div className=" lg:pt-30 md:pt-15 pt-10 px-5 lg:px-0">
                <div className="max-w-7xl mx-auto px-4 text-center bg-[#FFFFFF] lg:p-15  p-10 rounded-3xl">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold md:leading-16 text-center text-[#074287] lg:mb-15 md:mb-10 mb-8">
                        <span className='text-[#1F2328]'> Our </span>  Approach
                    </h1>

                    {/* Top Row (3 columns) */}
                    <div className="flex justify-end ">
                        <div className="grid md:grid-cols-3 gap-8 md:w-[90%]">
                            <div>
                                <h3 className="text-lg text-center lg:pl-14 font-semibold text-[#074287] mb-2">Customized Mapping</h3>
                                <p className="text-[#1F2328]/80 text-sm lg:ps-18">
                                    We design a customized plan that aligns with your business goals, ensuring compliance, efficiency and growth.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold lg:pl-10 text-center  text-[#074287] mb-2">Security</h3>
                                <p className="text-[#1F2328]/80 text-sm lg:ps-16">
                                    Your information is completely safe with us — we adhere to strict data security protocols to ensure full confidentiality and protection at every step.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-center  lg:pl-10 text-[#074287] mb-2">Long term partnership</h3>
                                <p className="text-[#1F2328]/80 text-sm lg:ps-18">
                                    Your success is our success. We’re here for the long haul, adapting to your evolving needs and celebrating your wins along the way.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Image */}
                    <div className="flex justify-center  px-5 py-8 md:py-4">
                        <img
                            src="/assets/images/our-approach.png"
                            alt="Approach Timeline"
                            className="w-full max-w-6xl"
                        />
                    </div>

                    {/* Bottom Row (3 columns) */}
                    <div className="flex justify-start md:mb-12  lg:-ml-8">
                        <div className="grid md:grid-cols-3 gap-8 md:w-[90%]">
                            <div>
                                <h3 className="text-lg font-semibold text-[#074287] mb-2">Discovery & Consultation</h3>
                                <p className="text-[#1F2328]/80 text-sm lg:px-10">
                                    We begin by understanding your business, goals, and financial needs through an in-depth consultation.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#074287] mb-2">Smooth & Simple Onboarding</h3>
                                <p className="text-[#1F2328]/80 text-sm lg:px-10">
                                    We know change can be overwhelming, so we make onboarding seamless—guiding you every step of the way.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#074287] mb-2">Ongoing Reviews</h3>
                                <p className="text-[#1F2328]/80 text-sm lg:px-10">
                                    Regular check-ins and reviews help us track progress, optimize performance, and stay aligned with your evolving goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* meet our team  */}

            <section className="lg:pt-30 md:pt-15 pt-10 ">
                <div className="container mx-auto px-4">

                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold md:leading-16 text-center text-[#074287] mb-8">
                        <span className='text-[#1F2328]'>  Meet</span> Our Team
                    </h1>


                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 max-w-6xl mx-auto">

                        <div className="bg-white rounded-3xl p-10 ">

                            <div className="flex gap-[30px]  md:mb-8 mb-5">

                                <div className="w-24 h-24 flex-shrink-0">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/assets/images/anusary-patel.jpg"
                                        alt="Anushri Patel"
                                        className="rounded-full w-full h-full object-cover shadow-2xl"
                                    />
                                </div>


                                <div className='flex flex-col  justify-center'>
                                    <h2 className="md:text-[30px] text-2xl font-bold text-[#1F2328]">Anushri Patel</h2>
                                    <p className="text-[#074287] text-[22px] font-semibold ">Director</p>
                                </div>
                            </div>


                            <p className="text-[#1F2328CC] md:text-[20px] text-[16px] leading-7">
                                Meet Anushri Patel — a licensed U.S. CPA,
                                with a passion for numbers and a heart for helping businesses grow, Anushri specializes in simplifying complex financial processes and delivering smart, customized solutions. She transforms complex financial puzzles into clear, strategic wins.
                            </p>
                            <p className="text-[#1F2328CC] md:text-[20px] text-[16px] leading-7 mt-3">
                                She brings a client-centric approach with a focus on quality, efficiency, and integrity. Anushri combines years of technical expertise with a passion for operational excellence. Her leadership helps companies unlock growth, maintain compliance, and make smarter financial decisions — all through the power of strategic outsourcing. Anushri’s vision is simple yet powerful: to elevate accounting, bookkeeping & taxation support services to world-class standards while building lasting partnerships rooted in trust and results. With a strong academic foundation and years of industry insight, she has carved a niche for herself in helping firms across the globe optimize their accounting and financial operations.
                            </p>
                        </div>


                        <div className="bg-white rounded-3xl p-10 ">

                            <div className="flex gap-[30px] md:mb-8 mb-5">

                                <div className="w-24 h-24 flex-shrink-0">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/assets/images/divy-patel.jpg"
                                        alt="Divy Patel"
                                        className="rounded-full w-full h-full object-cover shadow-2xl"
                                    />
                                </div>


                                <div className='flex flex-col  justify-center'>
                                    <h2 className="text-2xl md:text-[30px] font-bold text-[#1F2328]">Divy Patel</h2>
                                    <p className="text-[#074287] font-semibold text-[22px]">Director</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-[#1F2328CC] md:text-[20px] text-[16px] leading-7">
                            Meet Divy Patel - Armed with a Master’s degree in Commerce and a sharp understanding of global financial ecosystems, Divy has built a platform where trust, technology, and expertise converge. Under his leadership, the company has become a trusted partner for firms seeking more than just back-office support — offering tailored solutions that drive efficiency, unlock growth, and maintain the highest standards of compliance. With a rare blend of technical mastery and entrepreneurial spirit, Divy Patel is passionate about empowering businesses to scale smarter, stay ahead of regulatory changes, and focus on what they do best — while he and his team handle the numbers with meticulous care.
                             </p>
                              <p className="text-[#1F2328CC] md:text-[20px] text-[16px] leading-7 mt-3">
                              Beyond his core expertise, Divy is an advocate for continuous improvement, encouraging innovation at every level of the organization. His hands-on approach and deep industry insight have led to strategic partnerships across borders, enabling clients to navigate complexity with confidence. </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* let connect section  */}

            <ConnectSection></ConnectSection>
        </div>
    );
};

export default AboutPage;