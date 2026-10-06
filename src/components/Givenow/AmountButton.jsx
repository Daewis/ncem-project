// import React from 'react'

const AmountButton = ({ amount }) => {
    return (
        <button className="border border-[#C5C5D3]  py-2 font-semibold text-[14px] rounded-[5px] hover:bg-[#E2E8F8] cursor-pointer">
            {amount}
        </button>
    )
}

export default AmountButton