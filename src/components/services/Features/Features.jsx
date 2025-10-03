import { 
    ShieldCheck, 
    Lock, 
    ClipboardCheck, 
    RefreshCw, 
    LockKeyhole, 
    Laptop, 
    Usb, 
    HardDrive, 
    Network 
  } from 'lucide-react';
import { FaServer } from 'react-icons/fa6';
  
  // Inside your component
  const Features = () => {
    const features = [
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Multi Factor Authentication"
      },
      {
        icon: <Lock className="w-5 h-5" />,
        title: "Secured Client Portal"
      },
      {
        icon: <ClipboardCheck className="w-5 h-5" />,
        title: "Compliance with Industry Standards"
      },
      {
        icon: <RefreshCw className="w-5 h-5" />,
        title: "Licensed support software and updated regularly"
      },
      {
        icon: <LockKeyhole className="w-5 h-5" />,
        title: "VPN Protection while working on client server"
      },
      {
        icon: <Laptop className="w-5 h-5" />,
        title: "Secured workstations with password protection"
      },
      {
        icon: <Usb className="w-5 h-5" />,
        title: "Disabled Usage of External Plug-in devices"
      },{
        icon: <FaServer className="w-5 h-5" />,
        title: "100% on-site functioning"
      },
      {
        icon: <HardDrive className="w-5 h-5" />,
        title: "Automatic backup for Prevent data loss"
      },
      {
        icon: <Network className="w-5 h-5" />,
        title: "Internet browsing restricted by firewall"
      }
    ];
  
    return (
      <section className="pt-10 md:pt-15 lg:pt-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto p-8 sm:p-6 lg:p-15 bg-white rounded-3xl shadow-sm">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold leading-tight md:leading-[3.5rem] text-[#074287] mb-6 md:mb-10">
            <span className='text-[#1F2328]'>Organizational IT Framework and Security Controls 
            </span>
          </h2>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[30px] mt-6 md:mt-[30px]">
            {/* First Column */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {features.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg text-[#074287]">
                    {feature.icon}
                  </div>
                  <span className="text-[#1F2328] text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
  
            {/* Second Column */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {features.slice(5).map((feature, index) => (
                <div key={index + 5} className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg text-[#074287]">
                    {feature.icon}
                  </div>
                  <span className="text-[#1F2328] text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;