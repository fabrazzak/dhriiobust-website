import React from 'react';

import Image from 'next/image';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Accounting and Bookkeeping",
            description: "Dhri robust helps you to stay on top of your finances with reliable, real-time and end to end bookkeeping and accounting support. From transaction recording to financial reporting, we deliver clean books and clear insights to help you grow with confidence.",
            icon: "/assets/images/accounting.png", // Can replace with actual icon component
           
        },
        {
            id: 2,
            title: "Taxation",
            description: "Expert tax planning, filing, and advisory services to minimize liabilities and keep you compliant with ever-changing tax laws. Our proactive planning helps you make smarter financial decisions year-round, reducing the risk of errors.",
            icon:'/assets/images/taxation.png', // Can replace with actual icon component
           
        },
        {
            id: 3,
            title: "Audit",
            description: "Comprehensive internal and statutory audits to enhance financial transparency, mitigate risks, and ensure regulatory adherence.",
            icon: '/assets/images/audit.png', // Can replace with actual icon component
          
        }
    ];
    return (
        <div >
            <div className="max-w-7xl mx-auto px-4 lg:px-0 md:pt-20 lg:pt-30 pt-10">
                <div className="mb-12 ">
                    <h1 className="text-3xl md:text-[52px] font-bold text-[#1F2328] mb-3">
                        Professional <span className='text-[#074287]'>Services</span>
                    </h1>
                   
                </div>

                <div className="grid gap-8 md:gap-10 md:grid-cols-3 grid-cols-1">
                    {services.map((service,index) => (
                        <article key={index}
                            className={`p-10 rounded-3xl bg-white  hover:shadow-md transition-shadow duration-300`}
                        >
                            <div className="flex items-start mb-5 flex-col gap-7">
                                <div className='w-15 h-20' >
                                    <Image src={service.icon} alt={service.icon} width={60} height={80} className='w-auto h-auto'></Image>
                                </div>
                                <h2 className="text-xl md:text-[32px] font-semibold text-[#1F2328]">
                                    {service.title}
                                </h2>
                            </div>
                            <p className="text-[#1F2328] text-[18px] leading-relaxed">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;