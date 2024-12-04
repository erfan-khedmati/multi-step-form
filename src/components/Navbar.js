import React from 'react'
import { NavLink } from 'react-router-dom'

import SideBarDektopImg from "../img/bg-sidebar-desktop.svg";
import SideBarMobileImg from "../img/bg-sidebar-mobile.svg";

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
        <div className='max-h-[550px] w-full min-h-44 lg:w-auto flex justify-center items-start absolute top-0 left-0 lg:h-screen lg:relative lg:pl-10 lg:pr-32 lg:py-1 lg:rounded-xl overflow-hidden z-10'>
            <div className='z-20 lg:relative lg:w-full lg:h-full flex gap-5 relative top-5 lg:block'>
                {steps.map((step) => {
                    return (
                        <div className='flex items-center gap-4 text-white py-3' key={step.id}>
                            <NavLink to={step.id !== 1 ? `/page${step.id}` : "/"} className={({ isActive }) => isActive ? "flex items-center justify-center rounded-full w-8 h-8 font-bold text-marine_blue bg-light_blue" : "flex items-center justify-center font-bold border-2 border-light_blue rounded-full w-8 h-8"}>
                                {step.id}
                            </NavLink>
                            <div className='hidden lg:flex flex-col'>
                                <p className='text-light_gray text-xs'>{step.placeHolder}</p>
                                <p className='font-bold text-sm'>{step.titel}</p>
                            </div>
                        </div>)
                })}
            </div>
            {/* Desktop backgorund */}
            <img alt="background" src={SideBarDektopImg} className='hidden lg:block lg:absolute bottom-0 left-0 w-full z-10' />
            {/* Mobile Bakcground */}
            <img alt="background" src={SideBarMobileImg} className='w-screen h-full object-cover absolute top-0 left-0 lg:hidden z-10' />
        </div >
    )
}