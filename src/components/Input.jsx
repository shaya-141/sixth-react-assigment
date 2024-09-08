import React from 'react'

function Input({ title, func, isChoosen }) {
  return (
    <>


      <h3 className={`pl-1 pt-2 capitalize cursor-pointer text-[13px] `} onClick={func }> { title }</h3 >
    
    
    
    
    </>
  )
}

export default Input