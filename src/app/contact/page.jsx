"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa6';
import { MdAddCall } from "react-icons/md";
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string(),
    companyName: yup.string().required('Company name is required'),
    companyWebsite: yup.string().url('Must be a valid URL'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    helpType: yup.string().required('Please select how we can help'),
    message: yup.string(),
});

const ContactPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission here
        reset();
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
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Contact Content */}
            <div className="mx-auto px-4 sm:px-6 py-8 sm:py-20 contact-us">
                <div className="flex flex-col lg:flex-row gap-8  max-w-7xl mx-auto">
                    {/* Left Column */}
                    <div className="lg:w-1/2 xl:w-[600px]">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold md:leading-normal text-[#074287] mb-6">
                            How can we help you ?
                        </h2>

                        <p className="text-[#1F2328] lg:pr-10 text-base sm:text-lg  mb-4">
                            We have assisted and supported many
                        </p>

                        <p className="text-[#1F2328] lg:pr-10 text-base sm:text-lg font-bold">
                            Business owners
                        </p>
                        <p className="text-[#1F2328] lg:pr-10 text-base sm:text-lg font-bold">
                            CPA / Accountants
                        </p>
                        <p className="text-[#1F2328] lg:pr-10 text-base sm:text-lg font-bold mb-4">
                            Financial advisors/ planners
                        </p>
                        <p className="mb-8 text-[#1F2328] lg:pr-10 text-base sm:text-lg">
                            And have grown mutually. At Dhri Robust we are eager to address any queries or inquiries. Call or Email us anytime for
                            a Chat or Fill out the Form to be connected by us !
                        </p>

                        <div className="mb-8 text-[#1F2328] flex flex-col gap-3">
                            <p className="flex items-center gap-3 text-base sm:text-lg">
                                <span className="w-8 h-8 md:w-10 md:h-10 ">
                                    <Image src='/assets/images/email.png' width={52} height={52} alt="Email" />
                                </span> contact@dhrirobust.com
                            </p>
                            <p className='flex items-center gap-3 text-base sm:text-lg'>
                                <span className="w-8 h-8 md:w-10 md:h-10 ">
                                    <Image src='/assets/images/phone.png' width={52} height={52} alt="Phone" />
                                </span> +91 63555 58585
                            </p>
                        </div>

                        <div>

                            <div className="grid grid-cols-1 gap-8 md:max-w-md">


                                <div className='flex justify-center mt-6 sm:mt-10'>
                                    <Image
                                        width={400}
                                        height={400}
                                        src='/assets/images/contact-page.png'
                                        alt="Contact illustration"
                                        className="w-full max-w-xs sm:max-w-72 h-auto"
                                    />
                                </div>
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

                            <div>
                                <label htmlFor="companyName" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Company Name*</label>
                                <input
                                    id="companyName"
                                    {...register('companyName')}
                                    placeholder="Company Name"
                                    className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                />
                                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="companyWebsite" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Company Website</label>
                                <input
                                    id="companyWebsite"
                                    {...register('companyWebsite')}
                                    placeholder="www.company.com"
                                    className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                />
                                {errors.companyWebsite && <p className="text-red-500 text-sm mt-1">{errors.companyWebsite.message}</p>}
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
                                <label htmlFor="helpType" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">How Can We Help?*</label>
                                <select
                                    id="helpType"
                                    {...register('helpType')}
                                    className="w-full px-4 py-2 border rounded-md border-[#1F2328] text-base"
                                >
                                    <option value="">Select one...</option>
                                    <option value="accounting">Accounting Services</option>
                                    <option value="consulting">Business Consulting</option>
                                    <option value="tax">Tax Preparation</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.helpType && <p className="text-red-500 text-sm mt-1">{errors.helpType.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-medium mb-1 text-[#1F2328] text-base sm:text-lg">Message</label>
                                <textarea
                                    id="message"
                                    {...register('message')}
                                    placeholder="Leave us a message..."
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
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;