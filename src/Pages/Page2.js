import React, { useState } from 'react'

import NavigatorButton from "../components/NavigatorButton"

// Images
import ArcadeImg from "../img/icon-arcade.svg"
import AdvancedImg from "../img/icon-advanced.svg"
import ProImg from "../img/icon-pro.svg"

function Page2() {
  const [selectPlane, setSelectPlane] = useState("Arcade");
  const [monthly, setMonthly] = useState(true);

  return (
    <div className='bg-white p-3 lg:p-0 rounded-md lg:rounded-none lg:h-full  lg:max-w-[1000px] lg:pt-10 lg:px-20 flex flex-col gap-10 items-start'>
      {/* Title */}
      <div>
        <h1 className='text-3xl font-bold'>Select your plane</h1>
        <h3 className="text-cool_gray mt-2">You have the options monthly or yearly biling.</h3>
      </div>
      {/* Form */}
      <form className='grid grid-cols-3 gap-x-5 gap-y-7'>
        <label>
          {/* Hidden radio button */}
          <input
            type='radio'
            name='plane'
            value={"Arcade"}
            checked={selectPlane == "Arcade"}
            onChange={(e) => {
              setSelectPlane("Arcade")
            }}
            className='hidden'
          />
          {/* Label elements */}
          <div className={`border py-6 pr-10 pl-5 rounded-lg ${selectPlane == "Arcade" ? 'border-marine_blue bg-magnolia' : "border-light_gray"}`}>
            {/* img */}
            <img alt='arcade' src={ArcadeImg} />
            {/* Info */}
            <h3 className='text-marine_blue text-xl font-medium mt-10'>Arcade</h3>
            <h4 className='text-cool_gray'>{monthly ? (
              "$9/mo"
            ):(
             " $90/yr"
            )} </h4>
            {
              !monthly ? (
                <p className='text-marine_blue'>2 months free</p>
              ) :
              ""
            }
          </div>
        </label>
        <label>
          {/* Hidden radio button */}
          <input
            type='radio'
            name='plane'
            value={"Advanced"}
            checked={selectPlane == "Advanced"}
            onChange={(e) => {
              setSelectPlane("Advanced")
            }}
            className='hidden'
          />
          {/* Label elements */}
          <div className={`border py-6 pr-10 pl-5 rounded-lg ${selectPlane == "Advanced" ? 'border-marine_blue bg-magnolia' : "border-light_gray"}`}>
            {/* img */}
            <img alt='advanced' src={AdvancedImg} />
            {/* Info */}
            <h3 className='text-marine_blue text-xl font-medium mt-10'>Advanced</h3>
            <h4 className='text-cool_gray'>{monthly ? (
              "$12/mo"
            ):(
             " $120/yr"
            )} </h4>
            {
              !monthly ? (
                <p className='text-marine_blue'>2 months free</p>
              ) :
              ""
            }
          </div>
        </label>
        <label>
          {/* Hidden radio button */}
          <input
            type='radio'
            name='plane'
            value={"Pro"}
            checked={selectPlane == "Pro"}
            onChange={(e) => {
              setSelectPlane("Pro")
            }}
            className='hidden'
          />
          {/* Label elements */}
          <div className={`border py-6 pr-10 pl-5 rounded-lg ${selectPlane == "Pro" ? 'border-marine_blue bg-magnolia' : "border-light_gray"}`}>
            {/* img */}
            <img alt='Pro' src={ProImg} />
            {/* Info */}
            <h3 className='text-marine_blue text-xl font-medium mt-10'>Pro</h3>
            <h4 className='text-cool_gray'>{monthly ? (
              "$15/mo"
            ):(
             " $150/yr"
            )} </h4>
            {
              !monthly ? (
                <p className='text-marine_blue'>2 months free</p>
              ) :
              ""
            }
          </div>
        </label>

        {/* Month or yearly selector */}
        <div className='col-span-3 bg-alabaster rounded-md p-5 flex justify-center items-center gap-5 font-medium'>
          <div className={`${monthly ? "text-marine_blue" : "text-cool_gray"}`}>
            Monthly
          </div>

          <label htmlFor='check' className='w-16 h-8 p-2 bg-marine_blue rounded-full cursor-pointer relative inline-block'>
            <input
              id='check'
              type='checkbox'
              className='peer sr-only'
              onChange={() => {
                setMonthly(!monthly)
              }}
            />
            <span className='w-2/6 h-4/6 bg-white absolute left-1 top-[6px] rounded-full transition-all duration-200 peer-checked:left-9'></span>
          </label>

          <div className={`${!monthly ? "text-marine_blue" : "text-cool_gray"}`}>
            Yearly
          </div>
        </div>
        <div className='col-span-3'>
          <NavigatorButton
            nextPage="/page3"
            prevPage="/"
            handleNavigate={true}
          />
        </div>
      </form>
    </div>
  )
}

export default Page2