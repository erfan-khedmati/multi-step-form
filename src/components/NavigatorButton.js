import React from 'react'

import { useNavigate } from 'react-router-dom'

function NavigatorButton({ nextPage = undefined, prevPage = undefined, handleNavigate }) {
    const navigate = useNavigate()

    function handlePrevPage() {
        if(handleNavigate) {
            navigate(prevPage)
        }
    }

    function handleNextPage() {
        if(handleNavigate) {
            navigate(nextPage)
        }
    }
    
    return (
        <div className='flex justify-between gap-5 lg:w-full lg:mt-auto lg:ml-auto fixed lg:static bottom-0 left-0 w-full p-5 lg:p-0 bg-white'>
            {
                prevPage ? (
                    <button className='px-6 py-3 text-light_gray rounded-md hover:text-marine_blue' onClick={handlePrevPage}>
                        Go Back
                    </button>
                ) : null
            }
            {
                nextPage ? (
                    <button className='bg-marine_blue px-6 py-3 text-white rounded-md ml-auto' onClick={handleNextPage}>
                        Next Page
                    </button>
                ) : null
            }
        </div>
    )
}

export default NavigatorButton