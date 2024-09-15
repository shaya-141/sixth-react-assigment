import React from 'react'

function AddCartButton({onpress}) {
  return (
   <>
    <button className='py-2 px-7 w-[200px] mt-4 rounded-sm border-none bg-black text-white' onClick={onpress}>Add to Cart</button>
   </>
  )
}

export default AddCartButton