// import React from 'react'

const GivingForm = ({ label, placeholder }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor="" className="text-[12px] font-normal mb-2">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-[#F0F3FF] px-3 py-3 rounded-md text-[15px] lg:text-[16px] font-bold"
            />
        </div>
    )
}

export default GivingForm
