'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

const HomeBanner = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className="relative w-full md:h-[100vh]  h-[75vh] -mt-24 ">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
            style={{ backgroundImage: "url('/assets/images/home-banner.png')" }}
          />
          <div className="relative max-w-7xl mx-auto px-[5%] h-full flex flex-col justify-center text-white">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 max-w-md sm:max-w-lg md:max-w-3xl text-center md:text-left leading-tight">
              <span className="lead">Affordable & reliable</span>{' '}
              <span className="font-bold">offshore staffing solutions for CPAs & business owners</span>
            </h1>
            <div>
            <Link href="/contact">
             <button className="px-6 py-2 cursor-pointer sm:px-8 sm:py-3 text-center font-semibold md:text-left  mx-auto  md:mx-0  flex justify-center md:justify-start bg-white text-[#074287]  rounded-md text-base sm:text-lg transition-colors">
                Book a Trial
              </button>
             </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
            style={{ backgroundImage: "url('/assets/images/home-banner.png')" }}
          />
          <div className="relative max-w-7xl mx-auto px-[5%] h-full flex flex-col justify-center text-white">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 max-w-md sm:max-w-lg md:max-w-3xl text-center md:text-left leading-tight">
              <span className="lead">Build your dedicated</span> 
              <span className="font-bold"> offshore team to get benefits from our outsourced solutions</span>              
            </h1>
            <div>
             <Link href="/contact">
             <button className="px-6 py-2 cursor-pointer sm:px-8 sm:py-3 text-center font-semibold md:text-left  mx-auto  md:mx-0  flex justify-center md:justify-start bg-white text-[#074287]  rounded-md text-base sm:text-lg transition-colors">
                Book a Trial
              </button>
             </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation buttons */}
      <div
        ref={prevButtonRef}
        className="absolute top-1/2 left-[5%]  hidden lg:flex transform -translate-y-1/2 z-10 cursor-pointer  "
        onClick={() => swiperRef.current?.slidePrev()}
      >
         <Image src='/assets/images/left.png' alt='left-arrow' width={52} height={52}></Image>
      </div>

      <div
        ref={nextButtonRef}
        className="absolute top-1/2  right-[5%]  hidden lg:flex transform -translate-y-1/2 z-10 cursor-pointer "
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Image src='/assets/images/right.png' alt='left-arrow' width={52} height={52}></Image>
      </div>
    </div>
  );
};

export default HomeBanner;