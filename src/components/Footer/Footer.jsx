import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';



const Footer = () => {
    return (
        <footer className="bg-[#F3F3F3]   px-4 sm:px-6 lg:px-8  md:pt-20 lg:pt-30 pt-10 ">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-y-10 md:gap-x-0 lg:gap-10 ">
                    {/* Left Column - Logo and Description */}
                    <div className="md:col-span-2 flex flex-col justify-between bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl w-full">
                        <div className="mb-6 md:mb-8 ">
                            <div className="w-full max-w-[280px] md:max-w-[380px]">
                                <Image
                                    src='/assets/images/footer-logo.png'
                                    alt="DHRI ROBUST"
                                    width={380}
                                    height={60}
                                    layout="responsive"
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-[#1F2328] mt-6 md:mt-11 text-base md:text-lg lg:text-[20px]">
                                We specialize in delivering reliable, tech-driven financial solutions tailored for modern businesses and CPA firms.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4 md:space-x-6">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/assets/images/facebook.png' alt="Facebook" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/assets/images/twitter.png' alt="Twitter" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/assets/images/linkdin.png' alt="LinkedIn" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px]" />
                            </Link>
                            <Link href="https://www.instagram.com/dhrirobust?igsh=cHIzNHBzdGR0OW8x" className="hover:opacity-80 transition-opacity">
                                <Image src='/assets/images/instagram.png' alt="Instagram" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity bg-[#F3F3F3] w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px] flex justify-center items-center rounded-full">
                                <FaWhatsapp className='text-[#074287] text-xl' />
                            </Link>
                        </div>
                    </div>

                    {/* Right Columns */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl">
                        {/* Information Links */}
                        <div className="sm:col-span-1">
                            <h3 className="text-2xl md:text-3xl lg:text-[32px] text-[#1F2328] font-semibold mb-6 md:mb-8 lg:mb-10">Information</h3>
                            <ul className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
                                {['Home', 'About Us', 'Services', 'Career', 'Contact'].map((item) => {
                                    const routes = {
                                        'Home': '/',
                                        'About Us': '/about-us',
                                        'Services': '/services',
                                        'Career': '/career',
                                        'Contact': '/contact',
                                    };

                                    return (
                                        <li key={item}>
                                            <a
                                                href={routes[item]}
                                                className="text-[#1F2328] text-base md:text-lg lg:text-[20px] hover:text-[#074287] transition-colors"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="sm:col-span-2 mt-6 sm:mt-0 md:ml-5 ">
                            <h3 className="text-2xl md:text-3xl lg:text-[32px] text-[#1F2328] font-semibold mb-6 md:mb-8 lg:mb-10  ">Contact Info</h3>
                            <div className="space-y-4 md:space-y-6 lg:space-y-[30px]">
                                <div className='flex items-center gap-4 md:gap-6'>
                                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px]">
                                        <Image src='/assets/images/phone.png' width={52} height={52} alt="Phone" />
                                    </div>
                                    <div>
                                        <p className="text-[#074287] text-xs md:text-sm lg:text-[14px] font-medium">PHONE NUMBER</p>
                                        <Link href="tel:+916355558585" className="text-[#010005] text-base md:text-lg lg:text-[22px] font-medium">
                                            +91 63555 58585
                                        </Link>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4 md:gap-6'>
                                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[52px] lg:h-[52px]">
                                        <Image src='/assets/images/email.png' width={52} height={52} alt="Email" />
                                    </div>
                                    <div>
                                        <p className="text-[#074287] text-xs md:text-sm lg:text-[14px] font-medium">EMAIL</p>
                                        <Link
                                            href="mailto:contact@dhrirobust.com"
                                            className="text-[#010005] text-base md:text-lg lg:text-[22px] font-medium flex flex-wrap"
                                        >
                                            contact@<span>dhrirobust</span><span>.com</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className='bg-[#F3F3F3] p-4 md:p-5 lg:p-6 rounded-xl lg:rounded-2xl'>
                                    <p className="text-[#074287] text-xs md:text-sm lg:text-[14px] font-medium">ADDRESS</p>
                                    <p className="text-[#010005] text-sm md:text-base lg:text-[18px]">
                                        A 118/119, Tirthraj complex, Opp V S Hospital, Ellisbridge, Ahmedabad, Gujarat , India, 380006
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-left text-sm md:text-base lg:text-[18px] py-4 md:py-6 lg:py-7 lg:pl-25 pl-0 text-[#000000]">
                    <p>© 2025 Dhri Robust. All right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;