import React from 'react'
import { ShimmerBadge, ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
function Card({ data, key, loading }) {
  return (
    <>
      <div id='productcard' className=' w-[230px] m-4 mt-8 text-left border  rounded-md h-[320px] p-3 ' key={key}>
        <div className='relative'>
          {
            loading ?
              <img src={data.thumbnail} alt="" className='w-full p-6 bg-white h-[180px]' />
              :
              <ShimmerThumbnail height={150} rounded />
          }
          <span className='absolute top-0 bg-black text-white rounded-lg text-[11px] py-[1px] px-4'>{data.category}</span>
        </div>
        {
          loading ?
            <p className='mt-4 pl-1 font-semibold'>{data.title}</p>
            :
            <ShimmerTitle ></ShimmerTitle>
        }
        {
          loading ?
            <p className='mt-3 pl-1 '>Price ${data.price}</p>
            :
            <ShimmerTitle line={1} variant={'secondary'} className={'w-[60px]'}></ShimmerTitle>
        }
      </div>



    </>
  )
}

export default Card