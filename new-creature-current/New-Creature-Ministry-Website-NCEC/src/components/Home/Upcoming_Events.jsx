// import React from 'react'
import RightHandArrow from '../../assets/Icon_right_arrow.png'
import CardImageOne from '../../assets/card_image_one.png'
import CardImageTwo from '../../assets/card_image_two.png'
import CardImageThree from '../../assets/card_image_three.png'
import ClockIcon from '../../assets/Clock_Icon.png'
import LocationIcon from '../../assets/Location_Icon.png'

const EventCard = ({ image, date, time, location, title, description }) => (
    <div className='flex-1 min-w-0'>
        <div className='relative'>
            <img src={image} className='rounded-tr-[10px] rounded-tl-[10px] w-full h-[200px] sm:h-[232px] object-cover' alt="" />
            <div className='absolute top-2 left-2 bg-amber-400 px-4 sm:px-5 py-1 rounded-[15px]'>
                <p className='font-semibold text-sm'>{date}</p>
            </div>
        </div>
        <div className='space-y-4 sm:space-y-5 p-4 sm:p-5 bg-blue-50 rounded-br-[10px] rounded-bl-[10px]'>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
                <div className='flex gap-2 items-center'>
                    <img src={ClockIcon} alt="" className="w-3.5 h-3.5" />
                    <p className='text-[12px]'>{time}</p>
                </div>
                <div className='flex justify-center gap-2 items-center'>
                    <img src={LocationIcon} alt="" className="w-3.5 h-3.5" />
                    <p className='text-[12px] whitespace-nowrap'>
                        {location}
                    </p>
                </div>
            </div>
            <h3 className='text-[18px] sm:text-[20px] text-blue-900 font-bold'>{title}</h3>
            <p className='text-[14px] sm:text-[16px]'>
                {description}
            </p>
            <div className='group flex justify-between items-center'>
                <p>View Event Details</p>
                <img className='w-4 h-4' src={RightHandArrow} alt="" />
            </div>
        </div>
    </div>
);

const Upcoming_Events = () => {
    return (
        <div className='events py-10 px-3 sm:px-4 max-w-7xl mx-auto'>
            {/* Upcoming Event Heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative p-4 sm:p-10">
                <div>
                    <h4 className="uppercase text-yellow text-[14px] mb-2">gatherings</h4>
                    <h2 className='text-2xl sm:text-[32px] text-blue font-semibold capitalize'>upcoming events</h2>
                </div>
                <button className="group flex items-center justify-center gap-3 px-3 py-2 bg-blue-100 w-full sm:w-auto">
                    <p>view all events</p>
                    <img src={RightHandArrow} alt="Right_Hand_Arrow" />
                </button>
            </div>

            {/* Upcoming Event Cards */}
            <div className='flex flex-col md:flex-row gap-6 md:gap-10 px-4 sm:px-0'>
                <EventCard
                    image={CardImageOne}
                    date="Oct 15"
                    time="6:00PM"
                    location="Main Auditorium"
                    title="Ministers Conference"
                    description="A night of powerful worship, transformative teachings, and community for young adults seeking deeper connection."
                />
                <EventCard
                    image={CardImageTwo}
                    date="Oct 22"
                    time="6:00PM"
                    location="Conference Hall"
                    title="Youth Conference"
                    description="Equipping current and emerging leaders with principles for impactful ministry and marketplace dominance."
                />
                <EventCard
                    image={CardImageThree}
                    date="Nov 5"
                    time="6:00PM"
                    location="Main Sanctuary"
                    title="Thanksgiving Service"
                    description="Join us for a special combined service as we gather to celebrate God's faithfulness throughout the year."
                />
            </div>
        </div>
    )
}

export default Upcoming_Events
