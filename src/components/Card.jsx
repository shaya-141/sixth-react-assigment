import React from 'react'

function Card({data,key}) {
  return (
    <>
        <div id='productcard' className=' w-[230px] m-4 mt-8 text-left border  rounded-md h-[320px] p-3 ' key={key}>
            <div className='relative'>
                <img src={data.thumbnail} alt="" className='w-full p-6 bg-white h-[180px]' />
                <span className='absolute top-0 bg-black text-white rounded-lg text-[11px] py-[1px] px-4'>{data.category}</span>
            </div>
            <p className='mt-4 pl-1 font-semibold'>{data.title}</p>
            <p className='mt-3 pl-1 '>Price ${data.price}</p>
        </div>
    
    </>
  )
}

export default Card