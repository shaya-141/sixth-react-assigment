import React, { useEffect , useState} from 'react'

import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import AddCartButton from '../components/AddCartButton'

function ProductDetail() {

    const {id} = useParams()
    const [Products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res)=> res.json())
        .then((data) => setProducts(data))
    },[])

    console.log(Products);
    


  return (
   <>
    
    
    <section id='productdetail' className='w-[95%]  h-[400px] ml-2 mt-20 flex rounded-md'>
        <div className='w-[45%]  flex justify-center h-[full]'>
            <img src={Products.thumbnail} alt="" />
        </div>
        <div className='w-[40%] text-left flex flex-col gap-2 ml-6'>

        <h1 className='text-[24px] font-semibold mt-10'>{Products.title}</h1>
        <p className='mt-2 text-[16px]'>{Products.description}</p>
        <p>{Products.availabilityStatus}</p>
        <p >rating : {Products.rating}</p>
        <p className='font-semibold '>Price : ${Products.price}</p>
        <AddCartButton></AddCartButton>
        </div>
    </section>


   </>
  )
}

export default ProductDetail