import React from 'react'
import { NavLink } from 'react-router-dom'

import SideBarImg from "../img/bg-sidebar-desktop.svg"

export default function Navbar() {
    const steps = [
        {
            id: 1,
            placeHolder: "STEP 1",
            titel: "YOUR INFO"
        },
        {
            id: 2,
            placeHolder: "STEP 2",
            titel: "SELECT PLAN"
        },
        {
            id: 3,
            placeHolder: "STEP 3",
            titel: "ADD-ONS"
        },
        {
            id: 4,
            placeHolder: "STEP 4",
            titel: "SELECT SUMMARY"
        }
    ]

    // باید z index اوکی کنی
    return (
        <div className='max-h-[550px] h-screen relative pl-10 pr-32 py-1 rounded-xl bg-slate-300 overflow-hidden'>
            <div className='z-20 relative w-full h-full'>
                {steps.map((step) => {
                    return <NavLink key={step.id} to={`/page${step.id}`} className="flex gap-3 items-center my-8 text-white">
                        <div className=' border-light_blue border-2 text-light_blue rounded-full w-10 h-10 flex items-center justify-center'>{step.id}</div>
                        <div className='flex flex-col'>
                            <p className='text-light_gray text-xs'>{step.placeHolder}</p>
                            <p className='font-bold text-sm'>{step.titel}</p>
                        </div>
                    </NavLink>
                })}
            </div>
            <img src={SideBarImg} className='absolute bottom-0 left-0 w-full z-10' />
        </div>
    )
}