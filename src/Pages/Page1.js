import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <div className='bg-white p-3 lg:p-0 rounded-md lg:rounded-none  lg:max-w-[1000px] lg:pt-10 lg:px-20 flex flex-col gap-10 items-start'>
      {/* Title */}
      <div>
        <h1 className='text-3xl font-bold'>Personal info</h1>
        <h3 className="text-cool_gray mt-2">Please provide your name, email address, and phone number.</h3>
      </div>
      {/* Form */}
      <form className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col'>
          <label for="name" className='text-marine_blue'>Name</label>
          <input type='text' id='name' className='w-full mt-2 border border-light_gray rounded-md py-2 px-3' placeholder='e.g.Stephen King' required />
        </div>
        <div className='flex flex-col'>
          <label for="email" className='text-marine_blue'>Email Address</label>
          <input type='email' id='email' className='w-full mt-2 border border-light_gray rounded-md py-2 px-3' placeholder='e.g.StephenKing@lorem.com' required />
        </div>
        <div className='flex flex-col'>
          <label for="phone" className='text-marine_blue'>Phone Number</label>
          <input type='tel' id='phone' className='w-full mt-2 border border-light_gray rounded-md py-2 px-3' placeholder='e.g. +1 234 567 890' required />
        </div>
      </form>
      {/* Next */}
      <div className='flex justify-end lg:mt-auto lg:ml-auto absolute lg:static bottom-0 left-0 w-full lg:w-auto p-5 lg:p-0 bg-white'>
        <Link to="/page2" className='bg-marine_blue px-6 py-3 font-bold text-white rounded-md'>Next Page</Link>
      </div>
    </div>
  )
}
