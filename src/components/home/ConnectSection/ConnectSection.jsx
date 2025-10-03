import React from 'react';
import './ConnectSection.css';
import Link from 'next/link';

const ConnectSection = () => {
  return (
    <div className='max-w-7xl mx-auto  min-h-[300px] md:min-h-[440px] px-4 lg:px-0 sm:px-6  md:pt-20 lg:pt-30 pt-10'>
      <div className="text-white connect-bg py-12 md:py-20 rounded-3xl px-6 sm:px-8 lg:px-12 xl:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold mb-4 md:mb-5">
            Let's Connect!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-6 md:mb-8">
            Reach out to our expert accounting professionals and <br className="hidden sm:block" />
            get started today.
          </p>
         <Link href="/contact">
         <button className="bg-white cursor-pointer text-[#074287] hover:bg-gray-100 font-semibold py-2 px-6 md:py-3 md:px-8 rounded-xl text-base md:text-lg transition duration-300">
            Hire Talent
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;