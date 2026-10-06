// import React from 'react'
import LocationIcon from '../../assets/Location_Icon.png'
import PhoneIcon from '../../assets/Phone_Icon.png'
import EmailIcon from '../../assets/Email_Icon.png'
import PrayingHand from '../../assets/praying_hand.png'

const ContactForm = () => {
    return (
        <form>
            <div className="max-w-7xl mx-auto bg-[#F0F3FF] px-4 sm:px-6 pb-16 lg:pb-20">
                {/* Contact form container */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                    {/* Contact Info Cards - Left side */}
                    <div className="bg-transparent space-y-4 lg:space-y-5 w-full md:max-w-[500px]">
                        <div className="border border-offwhite p-4 lg:p-5 flex justify-start items-start gap-3 bg-white rounded">
                            <div className='p-3 lg:p-4 rounded-[10px] bg-[#F0F3FF] flex-shrink-0'>
                                <img src={LocationIcon} alt="" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-blue font-semibold text-xl lg:text-[24px]">Office Address</h2>
                                <p className="text-[15px] lg:text-base">
                                    1234 Divine Light Way<br />
                                    Suite 100<br />
                                    Sanctuary City, ST 12345
                                </p>
                            </div>
                        </div>
                        <div className="border border-offwhite p-4 lg:p-5 flex justify-start items-start gap-3 bg-white rounded">
                            <div className='p-3 lg:p-4 rounded-[10px] bg-[#F0F3FF] flex-shrink-0'>
                                <img src={PhoneIcon} alt="" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-blue font-semibold text-xl lg:text-[24px]">Phone</h2>
                                <p className="text-[15px] lg:text-[16px]">+2348101648772</p>
                                <p className="text-[12px]">Mon-Fri, 9am - 5pm</p>
                            </div>
                        </div>
                        <div className="border border-offwhite p-4 lg:p-5 flex justify-start items-start gap-3 bg-white rounded">
                            <div className='p-3 lg:p-4 rounded-[10px] bg-[#F0F3FF] flex-shrink-0'>
                                <img src={EmailIcon} alt="" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-blue font-semibold text-xl lg:text-[24px]">Email</h2>
                                <p className="text-[15px] lg:text-base break-all">Ncec@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right side */}
                    <div className="border border-offwhite pt-6 lg:pt-10 pb-20 lg:pb-30 px-5 lg:px-10 bg-white relative rounded-[5px] flex-1">
                        <h2 className="font-semibold text-2xl lg:text-[30px] text-blue mb-4 lg:mb-5">
                            Send a Message
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="name" className="font-semibold text-[14px] text-offwhite">Name</label>
                                <input className="border border-offwhite pl-3 pr-3 py-3 w-full" type="text" id='name' name="name" placeholder="Enter your name" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="email" className="font-semibold text-[14px] text-offwhite">Email</label>
                                <input className="border border-offwhite pl-3 pr-3 py-3 w-full" type="email" id="email" name="email" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 lg:mt-5">
                            <label className="mb-2 text-[14px] font-semibold text-offwhite" htmlFor="message">Message</label>
                            <textarea className="border border-offwhite pt-2 pb-12 pl-3 w-full" name="message" id="message" placeholder="Enter your message"></textarea>
                        </div>
                        <button className="absolute right-5 lg:right-7 bottom-4 lg:bottom-15 bg-blue text-white font-semibold text-[14px] px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue/90 transition-colors">Send Message</button>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <img className='w-full bg-cover bg-center' src={PrayingHand} alt="" />
            </div>
        </form>
    )
}

export default ContactForm
