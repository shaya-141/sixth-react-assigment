import React from 'react'

function SearchBox({func}) {
  return (
    <div className='w-full border border-black h-[45px] relative rounded-md mt-3'>
      <input type="text" onChange={func} placeholder='Search Your Favourite Item' className='w-full p-5 h-full rounded-md relative bg-white' />
      <i class="fa-solid fa-magnifying-glass absolute right-4 mt-3 text-[20px]"></i>
    </div>
  )
}

export default SearchBox