import React from 'react'
import { ShimmerText, ShimmerTitle } from 'react-shimmer-effects'



function Input({ title, func, isChoosen ,loading }) {
  return (
    <>
      {
        loading ?
        <h3 className={`pl-1 pt-2 capitalize cursor-pointer text-[13px] `} onClick={func }> { title }</h3 >
        :
        <ShimmerText line={1}></ShimmerText>
      }    
    </>
  )
}

export default Input