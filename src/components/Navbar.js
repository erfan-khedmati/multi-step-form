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

    return (
        <div className='max-h-[550px] h-screen relative pl-10 pr-32 py-1 rounded-xl bg-slate-300 overflow-hidden'>
            <div className='z-20 relative w-full h-full'>
                {steps.map((step) => {
                    return (
                        <div className='flex items-center gap-4 text-white py-3' key={step.id}>
                            <NavLink to={step.id != 1 ? `/page${step.id}` : "/"} className={({ isActive }) => isActive ? "flex items-center justify-center rounded-full w-8 h-8 font-bold text-marine_blue bg-light_blue" : "flex items-center justify-center font-bold border-2 border-light_blue rounded-full w-8 h-8"}>
                                {step.id}
                            </NavLink>
                            <div className='flex flex-col'>
                                <p className='text-light_gray text-xs'>{step.placeHolder}</p>
                                <p className='font-bold text-sm'>{step.titel}</p>
                            </div>
                        </div>)
                })}
            </div>
            <img src={SideBarImg} className='absolute bottom-0 left-0 w-full z-10' />
        </div >
    )
}