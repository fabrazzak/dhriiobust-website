'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Accounting & Bookkeeping Services', path: '/services/1' },
        { name: 'Taxation', path: '/services/2' },
        { name: 'Audit', path: '/services/3' },
      ]
    },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#FFFFFF] shadow-sm sticky top-5 z-50 mx-10 rounded-3xl ">
      <div className="relative mx-auto px-5 h-[94px] flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src='/assets/images/header-loog.png' 
              alt="Company Logo" 
              width={288} 
              height={45} 
              className='md:w-[288px] w-40' 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center mx-4">
            <div className="flex space-x-1 relative">
              {navItems.map((item) => (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.submenu && setIsServicesHovered(true)}
                  onMouseLeave={() => item.submenu && setIsServicesHovered(false)}
                >
                  <Link
                    href={item.path}
                    className={`px-4 py-2 text-[18px] font-medium transition-colors ${
                      pathname === item.path ? 'relative active-nav-item' : ''
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg
                        className="w-4 h-4 inline-block ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Submenu for Services */}
                  {item.submenu && isServicesHovered && (
                    <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`block px-4 py-2 text-[16px] font-medium ${
                            pathname === subItem.path
                              ? 'bg-blue-100 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button className="px-6 cursor-pointer py-[18px] bg-[#074287] text-white text-[18px] tracking-wider font-medium rounded-xl hover:bg-blue-800 transition-colors">
              Schedule a Meeting
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 font-bold rounded-md text-[#000000] hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 font-bold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Overlay) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute -mt-5 top-full left-0 w-full bg-white shadow-lg rounded-b-3xl z-40 p-4 space-y-2 transition-all duration-300 ease-in-out">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.submenu ? (
                  <div className="mb-2">
                    <div className="px-4 py-2 font-medium text-[#000000]">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`block px-4 py-2 rounded-md text-base font-medium ${
                            pathname === subItem.path
                              ? 'bg-blue-100 text-blue-600'
                              : 'text-[#000000] hover:bg-gray-100 hover:text-gray-900'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 rounded-md text-base font-medium ${
                      pathname === item.path
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-[#000000] hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full cursor-pointer text-[18px] mt-2 px-4 py-3 bg-[#074287] text-white text-base font-medium rounded-md hover:bg-blue-800 transition-colors">
              Schedule a Meeting
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;