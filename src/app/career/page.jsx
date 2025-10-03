"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string(),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    position: yup.string().required('Please select a position'),
    resume: yup.mixed().required('Resume is required'),
    message: yup.string(),
});

const CareerPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission here
        reset()
    };

    return (
        <div className='bg-[#F3F3F3]'>
            {/* Banner Section */}
            <section className='relative min-h-[400px] sm:min-h-[500px] md:min-h-[650px] flex justify-center items-center -mt-24'>
                <div className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
                    style={{ backgroundImage: "url('/assets/images/about-banner.png')" }}
                />
                <div className="relative text-center items-center w-full md:max-w-3xl px-4 sm:px-6 h-full flex flex-col justify-center text-white gap-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold md:leading-normal mt-20">
                        Career
                    </h1>
                </div>
            </section>

            {/* Career Content */}
            <div className="mx-auto px-4 sm:px-6 pt-8 sm:pt-20 flex flex-col items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-8  max-w-7xl mx-auto">
                    {/* Left Column - Info */}
                    <div className="lg:w-1/2 xl:w-[600px]">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold md:leading-normal text-[#074287] mb-6">
                            Join <span className='text-[#1F2328]'>Our Team</span>
                        </h2>

                        <div className="mb-8 text-[#1F2328] lg:pr-10 space-y-6 ">
                            <div>
                                
                                <p className="text-base sm:text-lg">
                                At Dhri Robust, we believe in empowering talent and building futures. We offer dynamic opportunities for growth, innovation, and collaboration. If you are passionate about excellence and ready to make an impact, Dhri Robust is the place for you. Come be a part of our journey towards redefining success in the accounting & finance world !
                                </p>
                            </div>
                            
                            <div>
                                
                                <p className="text-base sm:text-lg">
                                We are always looking for talented individuals who are ready to grow, innovate, and shape the future of finance with us. We offer a collaborative environment where your skills are valued, your ideas are heard, and your success is celebrated. Join us and unlock your true potential. </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:max-w-md">
                            <div className='flex justify-center mt-6 sm:mt-10'>
                                <Image 
                                    width={400} 
                                    height={400} 
                                    src='/assets/images/career-image.webp' 
                                    alt="Career illustration"
                                    className="w-full max-w-xs sm:max-w-72 h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:w-1/2 xl:w-[600px] shadow md:shadow-none p-6 rounded-2xl md:p-0">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">First Name*</label>
                                    <input
                                        id="firstName"
                                        {...register('firstName')}
                                        placeholder="First name"
                                        className="w-full px-4 py-2 border border-[#1F2328] rounded-md text-base"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Last Name</label>
                                    <input
                                        id="lastName"
                                        {...register('lastName')}
                                        placeholder="Last name"
                                        className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Email*</label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        placeholder="you@company.com"
                                        className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Phone Number*</label>
                                    <input
                                        id="phone"
                                        {...register('phone')}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="position" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Position You're Applying For*</label>
                                <select
                                    id="position"
                                    {...register('position')}
                                    className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                >
                                    <option value="">Select position...</option>
                                    <option value="accountant">Accountant</option>
                                    <option value="senior-accountant">Senior Accountant</option>
                                    <option value="tax-specialist">Tax Specialist</option>
                                    <option value="financial-analyst">Financial Analyst</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="resume" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Upload Resume*</label>
                                <input
                                    type="file"
                                    id="resume"
                                    {...register('resume')}
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                />
                                {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Cover Letter</label>
                                <textarea
                                    id="message"
                                    {...register('message')}
                                    placeholder="Tell us why you'd be a great fit..."
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                ></textarea>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="privacyPolicy"
                                    className="mt-1 mr-2"
                                    required
                                />
                                <label htmlFor="privacyPolicy" className='block font-medium text-[#1F2328] text-sm sm:text-base'>You agree to our friendly privacy policy.</label>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#074287] text-white px-6 py-3 rounded-md hover:bg-[#063672] transition w-full sm:w-auto text-base sm:text-lg"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;