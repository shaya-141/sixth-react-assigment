import React, { useEffect, useState } from 'react'
import Button from './Button'
import Input from './Input'
import { data } from 'autoprefixer'


function Sidebar({ Categories, func, children }) {



    return (
        <>
            <div className='text-left mt-8 ml-2  '>

                <h1 className='text-[22px] font-semibold mt-[-12px] text-[#FF406D]'>Categories</h1>
                <div className='w-[200px] text-left mt-3'>
                    <div className='mt-[6px]'>

                        {children}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar