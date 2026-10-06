// import React from 'react'
import OverseerPic from '../../assets/G.O.png'
import ArrowIcon from '../../assets/ArrowIcon.png'
import RevGbenga from '../../assets/Rev.Gbenga.png'
import Revsenu from '../../assets/RevSenu.png'

const OurLeadership = () => {
    return (
        <div className='py-14 lg:py-20 px-4'>
            <h2 className='text-blue font-bold text-3xl lg:text-[48px] text-center mb-4 lg:mb-6'>
                Our Leadership
            </h2>
            <p className='max-w-3xl mx-auto text-center mb-8 lg:mb-10 px-4 text-[15px] lg:text-base'>
                Guided by faith and committed to service. Meet the dedicated individuals who lead New
                Creature Evangelical Ministry with vision, compassion, and unwavering dedication to our
                community.
            </p>

            {/* Overseer featured card */}
            <div className='flex flex-col md:flex-row justify-between items-stretch max-w-6xl mx-auto my-10 lg:my-20 border border-offwhite rounded-[10px] shadow-xl overflow-hidden'>
                <img src={OverseerPic} alt="" className="w-full md:w-auto md:max-w-[400px] h-auto object-cover" />
                <div className='space-y-4 p-6 lg:p-10 flex-1'>
                    <div>
                        <h3 className='text-blue font-semibold text-2xl lg:text-[30px]'>Rev. Dr. P.D Alinyoh</h3>
                        <p className='text-[#795900] font-semibold text-[14px]'>GENERAL OVERSEER</p>
                    </div>
                    <p className='text-offwhite text-[15px] lg:text-base'>
                        Rev. Dr. P.D Alinyoh has guided New Creature Evangelical Ministry for over
                        two decades with a vision rooted in profound spiritual truth and community
                        empowerment. Under his leadership, the ministry has expanded globally, fostering a
                        culture of profound grace and rigorous theological study.
                    </p>
                    <button className='flex justify-center items-center gap-4'>
                        <p className='text-[14px] text-blue font-semibold'>View Full Profile</p>
                        <img className='h-3 w-3' src={ArrowIcon} alt="" />
                    </button>
                </div>
            </div>

            {/* Two secondary cards */}
            <div className='flex flex-col md:flex-row justify-center items-stretch max-w-6xl mx-auto gap-6'>
                <div className='border rounded-2xl shadow-xl w-full md:max-w-[500px] flex-1 overflow-hidden bg-white'>
                    <img className='rounded-tl-2xl rounded-tr-2xl w-full h-auto' src={RevGbenga} alt="" />
                    <div className='space-y-5 p-5 lg:p-6'>
                        <div>
                            <h2 className='font-semibold text-xl lg:text-[24px] text-blue'>Rev. Gbenga Jonah</h2>
                            <p className='text-[#795900] font-semibold text-[14px]'>ASSISTANT GENERAL OVERSEER</p>
                        </div>
                        <p className='text-offwhite text-[15px] lg:text-[16px]'>
                            Pastor Sarah brings a wealth of administrative brilliance and pastoral
                            care to the ministry. She spearheads our global outreach programs
                            and is dedicated to bridging the gap between faith and practical
                            community service.
                        </p>
                        <div className='flex items-center gap-4'>
                            <p className='font-semibold text-[14px] text-blue'>View Profile</p>
                            <img src={ArrowIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className='rounded-2xl border shadow-xl w-full md:max-w-[500px] flex-1 overflow-hidden bg-white'>
                    <img className='rounded-tl-2xl rounded-tr-2xl w-full h-auto' src={Revsenu} alt="" />
                    <div className='space-y-5 p-5 lg:p-6'>
                        <div>
                            <h2 className='font-semibold text-xl lg:text-[24px] text-blue'>Rev. Senu Emmanuel</h2>
                            <p className='text-[#795900] font-semibold text-[14px]'>NATIONAL YOUTH PASTOR</p>
                        </div>
                        <p className='text-offwhite text-[15px] lg:text-[16px]'>
                            Dynamic and innovative, Pastor Marcus leads our vibrant youth
                            ministry. He is committed to translating timeless truths into relevant,
                            engaging experiences for today's young adults.
                        </p>
                        <div className='flex items-center gap-4'>
                            <p className='font-semibold text-[14px] text-blue'>View Profile</p>
                            <img src={ArrowIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurLeadership
