import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import AddCartButton from '../components/AddCartButton'
import { addItemInLocalStorage } from '../Utilitis/Localstorage'
import { toast, Toaster } from 'sonner'
import { ShimmerBadge, ShimmerButton, ShimmerText, ShimmerThumbnail, ShimmerTitle } from 'react-shimmer-effects'

function ProductDetail() {

  const { id } = useParams()
  const [Products, setProducts] = useState([])
  const [loadingstate, setloadingstate] = useState(false)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))

    setTimeout(() => {
      setloadingstate(true)
    }, 1000);

  }, [])





  // console.log(Products);
  const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 1000));
  function addProductToStroage() {
    console.log('shayan');
    Products.quantity = 1
    addItemInLocalStorage(Products)
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        return `Product Added Successfully`;
      },
      error: 'Error',
    });
  }


  return (
    <>


      <section id='productdetail' className='w-[95%]  h-[400px] ml-2 mt-20 flex rounded-md'>
        <Toaster position="top-right"></Toaster>
        <div className='w-[45%]  flex justify-center h-[full]'>
          {
            loadingstate
              ?
              <img src={Products.thumbnail} alt="" />
              :
              <ShimmerThumbnail height={400} width={480}></ShimmerThumbnail>
          }
        </div>
        <div className='w-[40%] text-left flex flex-col gap-2 ml-6'>
          {
            loadingstate
              ?
              <h1 className='text-[24px] font-semibold mt-10'>{Products.title}</h1>
              :
              <ShimmerTitle line={1} className={'mt-10 '}></ShimmerTitle>
          }
          {
            loadingstate
              ?
              <p className='mt-2 text-[16px]'>{Products.description}</p>
              :
              <ShimmerText line={4}></ShimmerText>
          }
          {
            loadingstate ?
            <>
              <p>{Products.availabilityStatus}</p>
              <p >rating : {Products.rating}</p>
              <p className='font-semibold '>Price : ${Products.price}</p>
            </>
              :
              <ShimmerText line={3}></ShimmerText>    

          }
          
          {
            loadingstate ?
              <AddCartButton onpress={addProductToStroage}></AddCartButton>

              :
              <ShimmerButton></ShimmerButton>

          }




        </div>
      </section>


    </>
  )
}

export default ProductDetail