// import React from 'react'
import OverseerPic from '../../assets/G.O.png'
import ArrowIcon from '../../assets/ArrowIcon.png'
import RevGbenga from '../../assets/Rev.Gbenga.png'
import Revsenu from '../../assets/RevSenu.png'
const OurLeadership = () => {
    return (
        <section className='py-12 w-full bg-[#F9F9FF]'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <h2 className='text-blue font-bold text-[32px] lg:text-[48px] text-center mb-6'>
                Our Leadership
            </h2>
            <p className='max-w-3xl mx-auto text-center mb-10 text-offwhite'>
                Guided by faith and committed to service. Meet the dedicated individuals who lead New
                Creature Evangelical Ministry with vision, compassion, and unwavering dedication to our
                community.
            </p>
            <div className='flex flex-col lg:flex-row justify-baseline items-stretch
             max-w-308 mx-auto my-10 lg:my-20 border border-[#eaeaea] rounded-[10px] shadow-xl overflow-hidden bg-white'>
                <img src={OverseerPic} alt="" />
                <div className='space-y-4 p-6 lg:p-15 flex flex-col justify-center'>
                    <div>
                        <h3 className='text-blue font-semibold text-[24px] lg:text-[30px]'>Rev. Dr. P.D Alinyoh</h3>
                        <p className='text-[#795900] font-semibold text-[14px]'>GENERAL OVERSEER</p>
                    </div>

                    <p className='text-offwhite'> Rev. Dr. P.D Alinyoh has guided New Creature Evangelical Ministry for over
                        two decades with a vision rooted in profound spiritual truth and community
                        empowerment. Under his leadership, the ministry has expanded globally, fostering a
                        culture of profound grace and rigorous theological study.
                    </p>
                    <button className='flex items-center gap-4'>
                        <p className='text-[14px] text-blue font-semibold'>View Full Profile</p>
                        <img className='h-3 w-3 object-contain block' src={ArrowIcon} alt="" />
                    </button>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-stretch max-w-308 mx-auto gap-6'>
                <div className='border border-[#eaeaea] max-w-full lg:max-w-150.5 rounded-2xl shadow-xl bg-white overflow-hidden flex-1'>
                    <img className='rounded-tl-2xl rounded-tr-2xl w-full h-auto object-cover block' src={RevGbenga} alt="" />
                    <div className='space-y-5 p-5'>
                        <div>
                            <h2 className='font-semibold text-[24px] text-blue'>Rev. Gbenga Jonah</h2>
                            <p className='text-[#795900] font-semibold text-[14px]'>ASSISTANT GENERAL OVERSEER</p>
                        </div>
                        <p className='text-offwhite text-[16px]'>
                            Pastor Sarah brings a wealth of administrative brilliance and pastoral
                            care to the ministry. She spearheads our global outreach programs
                            and is dedicated to bridging the gap between faith and practical
                            community service.
                        </p>
                        <div className='flex items-center gap-4 '>
                            <p className='font-semibold text-[14px] text-blue'>View Profile</p>
                            <img src={ArrowIcon} alt="" className='h-3 w-3 object-contain block' />
                        </div>
                    </div>


                </div>
                <div className='border border-[#eaeaea] max-w-full lg:max-w-150.5 rounded-2xl shadow-xl bg-white overflow-hidden flex-1'>
                    <img className='rounded-tl-2xl rounded-tr-2xl w-full h-auto object-cover block' src={Revsenu} alt="" />
                    <div className='space-y-5 p-5'>
                        <div>
                            <h2 className='font-semibold text-[24px] text-blue'>Rev. Senu Emmanuel</h2>
                            <p className='text-[#795900] font-semibold text-[14px]'>NATIONAL YOUTH PASTOR</p>
                        </div>
                        <p className='text-offwhite text-[16px]'>
                            Dynamic and innovative, Pastor Marcus leads our vibrant youth
                            ministry. He is committed to translating timeless truths into relevant,
                            engaging experiences for today’s young adults.
                        </p>
                        <div className='flex items-center gap-4 '>
                            <p className='font-semibold text-[14px] text-blue'> View Profile</p>
                            <img src={ArrowIcon} alt="" className='h-3 w-3 object-contain block' />
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}

export default OurLeadership