import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const AboutDhriRobust = () => {
    return (
        <section className=" md:pt-20 lg:pt-30 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
                    {/* Image on left */}
                    <div className="order-1 md:order-none  flex h-full ">
                        <div className="rounded-3xl h-full  overflow-hidden shadow-lg">
                            <Image
                                src='/assets/images/home-about.png'
                                alt="Dhri Robust Team"
                                width={620}
                                height={500}
                              
                                className="w-full h-full object-cover "
                                priority
                            />
                        </div>
                    </div>

                    {/* Content on right */}
                    <div className="p-8 md:p-12 rounded-2xl bg-white  hover:shadow-md transition-all duration-300">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1F2328] mb-[30px]">
                            <span className='text-[#074287]'>About</span> Dhri Robust
                        </h1>

                        <div className="text-[#1F2328] text-[20px] leading-relaxed space-y-4">
                            <p>
                                At Dhri Robust CPA Firm, we specialize in delivering reliable, tech-driven financial solutions tailored for modern businesses and CPA firms. With a commitment to excellence, accuracy, and integrity, our team offers end-to-end support in tax, accounting, bookkeeping, and CPA outsourcing.
                            </p>
                            <p>
                                We combine deep expertise with personalized service to help our clients grow confidently and stay compliant in a constantly evolving financial landscape.
                            </p>
                        </div>

                        <div className="pt-10">
                            <Link
                                href="/about-us"
                                className="inline-flex items-center text-lg text-white bg-[#074287] hover:bg-[#074287]/90 px-6 py-4 rounded-xl font-medium transition-all duration-200"
                            >
                                Know More
                                
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDhriRobust;