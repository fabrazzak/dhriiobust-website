
import AboutDhriRobust from "@/components/home/AboutDhriRobust/AboutDhriRobust";
import ConnectSection from "@/components/home/ConnectSection/ConnectSection";
import HomeBanner from "@/components/home/HomeBanner/HomeBanner";
import Services from "@/components/home/Services/Services";
import SoftwareExpertise from "@/components/home/SoftwareExpertise/SoftwareExpertise";




const HomePage = () => {
  return (
    <div className='bg-[#F3F3F3]'>     
       <HomeBanner></HomeBanner>  
      <Services></Services> 
      <AboutDhriRobust></AboutDhriRobust> 
      <ConnectSection></ConnectSection>
      <SoftwareExpertise></SoftwareExpertise> 
      
    </div>
  );
};

export default HomePage;