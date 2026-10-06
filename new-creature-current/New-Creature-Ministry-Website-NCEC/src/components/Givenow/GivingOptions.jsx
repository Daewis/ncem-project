// import React from 'react'
import { Link } from "react-router-dom"
import GiveIcon from '../../assets/Give_Icon.png'
import PadlockIcon from '../../assets/Padlock_Icon.png'
import BankIcon from '../../assets/Bank_Icon.png'
import AmountButton from "./AmountButton";
import { useState } from "react";
import GivingForm from "./GivingForm";

const GivingOptions = () => {
    const amounts = ["$25", "$50", "$100", "Other"];
    const [checked, setChecked] = useState(false)
    const bankFields = [
        { label: "ACCOUNT NAME", placeholder: "New Creature Evangelical Ministry" },
        { label: "BANK NAME", placeholder: "First National Bank" },
        { label: "ACCOUNT NUMBER", placeholder: "1234 5678 9012 3456" },
        { label: "SWIFT/IBAN", placeholder: "FNBUS33XXX" }
    ];

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-5 lg:gap-5 py-14 lg:py-30 px-4 lg:px-5 bg-primary">
            {/* Online Giving Card */}
            <div className="border border-offwhite p-6 lg:p-10 space-y-6 lg:space-y-8 rounded-[5px] bg-white w-full">
                <div className="bg-[#E7EEFE] p-3 lg:p-5 rounded-xl w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                    <img src={GiveIcon} alt="" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-xl lg:text-[24px] text-blue">Online Giving</h3>
                <p className="font-normal text-[15px] lg:text-[16px] text-offwhite max-w-[328.67px]">
                    Securely give one-time or set up a recurring gift using a credit card or bank account.
                </p>
                <div className="grid grid-cols-2 gap-3 text-center">
                    {amounts.map((amount) => (
                        <AmountButton key={amount} amount={amount} />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="w-4 h-4 cursor-pointer" />
                    <label className="text-[15px] lg:text-[16px] font-normal">Make this a recurring gift</label>
                </div>
                <button className="bg-blue text-white py-3 px-6 lg:px-30 font-semibold text-[14px] rounded-2xl cursor-pointer hover:bg-blue/90 transition-colors w-full sm:w-auto">
                    <Link to='/givenow'>Proceed to Give</Link>
                </button>
                <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center p-2">
                        <img src={PadlockIcon} alt="" />
                    </div>
                    <p className="text-[12px] font-normal">Secure Encrypted Transaction</p>
                </div>
            </div>

            {/* Bank Transfer Card */}
            <div className="border border-offwhite p-6 lg:p-10 space-y-4 lg:space-y-5 rounded-[5px] bg-white w-full">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#E7EEFE] rounded-xl p-3 lg:p-5 flex items-center justify-center">
                    <img src={BankIcon} alt="" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-xl lg:text-[24px] text-blue">Bank Transfer</h3>
                <p className="text-[15px] lg:text-[16px] text-offwhite max-w-[328.67px]">
                    Set up a direct transfer from your bank using the details provided below.
                </p>
                <form action="" className="space-y-3">
                    {bankFields.map((field) => (
                        <GivingForm key={field.label} label={field.label} placeholder={field.placeholder} />
                    ))}
                </form>
            </div>
        </div>
    )
}

export default GivingOptions
