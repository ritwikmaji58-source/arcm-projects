"use client"

import { Mail_Icon, Location_Icon, Telephone_Icon } from "../../Icons/OtherIcons";

export default function ContactUs() {

    
     
    return (
        <>
            <div>
                {/*Contact Us*/}
                <div className="container mt-30 mb-10">
                    <div className="text-center pb-3 mb-5 mx-auto">
                        <h5 className="text-center text-3xl md:text-4xl font-bold mb-4">CONTACT US</h5>
                        <h1 className="text-3xl font-semibold mb-0">If you have any query  <br></br> feel free to contact us</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 px-10">
                    <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-gray-500 ">
                            <Telephone_Icon />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-xl text-gray-700 mb-2">Call to ask any question</h5>
                            <h4 className="text-2xl font-semibold  text-blue-400 mb-0">+91 7601916066</h4>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-gray-500 ">
                            <Mail_Icon />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-xl text-gray-700 mb-2">Email to get a quote</h5>
                            <a href="mailto:arco.industries@gmail.com">
                                <h4 className="text-2xl font-semibold  text-blue-400 mb-0">arco.industries@gmail.com</h4>
                            </a>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-gray-500 ">
                            <Location_Icon />
                        </div>
                        <div className="ps-4">
                            <h5 className="text-xl text-gray-700 mb-2">Visit our office</h5>
                            <h4 className="text-m   text-blue-400 mb-0">
                                Inda, Kharagpur,
                                West Midnapore, West Bengal, India-721305.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-10'>
                <div className="col-span-1 overflow:hidden">
                    <iframe className="relative rounded w-full h-full min-h-[450px] border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20226.532712928307!2d87.33426514612643!3d22.352578976364832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4453b8b07929%3A0x313d62fa5c658b0a!2sInda%2C%20Kharagpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1769645324165!5m2!1sen!2sin">
                    </iframe>
                </div>

                {/*Form*/}
                <div className="col-span-1 flex flex-col items-center justify-center m">
                    <h3 className="text-2xl text-sky-400 font-semibold mb-5">CONTACT US</h3>
                    <form className="w-full max-w-xl border border-white-400 rounded-lg p-6 shadow">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your name." required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your email id." required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <input type="subject" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Any message.." />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
}