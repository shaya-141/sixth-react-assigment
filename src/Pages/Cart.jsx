import React, { useEffect, useState } from 'react'
import { deleteItemFromLocalStorage, getItemFromLocalStorage, updateItemInLocalStorage } from '../Utilitis/Localstorage'
import { toast, Toaster } from 'sonner'

function Cart() {

  const [Products, setProducts] = useState([])
  const [changing, setchanging] = useState('abc')
  const [change, setchange] = useState('second')

  useEffect(() => {
    setProducts(getItemFromLocalStorage())


  }, [changing, change])

const handleIncrementQuantity = (id)=>{
    const updatedProducts = Products.map(product => {
      if (product.id === id) {
        product.quantity += 1;
        updateItemInLocalStorage(product.id,product)
      }
      return product;
    });

    setProducts([...updatedProducts])
};

const handleDecrementQuantity = (id)=>{
  const updatedProducts = Products.map(product => {

    if (product.id === id && product.quantity >1) {
      product.quantity -= 1
      updateItemInLocalStorage(product.id, product);
    }
    return product
  })
  setProducts([...updatedProducts])
}

const handleDeleteItem = (id)=>{

  deleteItemFromLocalStorage(id)

  const updatedProducts = Products.filter(product => product.id !== id)

  setProducts([...updatedProducts])
  
   toast.success('Product Deleted Successfully')  

}

  let totalPrice = Products.reduce((total, Products) => total + Products.quantity * Products.price , 0
  )
  let Quantity = Products.reduce((quantity, Products) => quantity + Products.quantity, 0)
  if(Quantity >= 1){
    totalPrice += 59 // Tax Price
    
  }

  let Price = Products.reduce((total, Products) => total + Products.quantity * Products.price, 0
  )




  return (
    <>

      <section className='w-full  relative'>
        <Toaster position="top-right"></Toaster>
        <div className="text">
          <h1 className='text-left pl-2 text-[20px] font-semibold mt-3 pt-4 text-[#FF406D]'>Your products</h1>
        </div>

        <div className="row w-full  flex flex-col gap-4  mt-6">

          {

            Products.map((data, index) => {
              return (
                <div className='w-[95%] h-[150px]  rounded-md ml-3  flex items-center border  gap-[10%] relative' key={index}>
                  <img src={data.thumbnail} alt="" className='h-[120px] ml-3 w-[130px] ' />
                  <div className='w-[40%] text-left '>
                    <h1 className='font-semibold text-[18px]'>{data.title}</h1>

                    <div className='flex gap-3 mt-3 items-center  h-[40px]'>
                      <p>Price ${data.price}</p>
                      <p>Quantity
                        <button className='border border-black font-semibold w-[30px] text-[16px] rounded-md ml-2' onClick={() => {
                          handleIncrementQuantity(data.id)
                        }}>+</button>
                        <span className='ml-2'>{data.quantity}</span>
                        <button className='border w-[30px] border-black font-semibold text-[16px] rounded-md ml-2' onClick={() => {
                          handleDecrementQuantity(data.id)
                        }}>-</button>
                      </p>
                    </div>
                  </div>
                  <button className='btn bg-black text-white text-[14px] py-[5px] px-5 absolute right-12 rounded-md border-none' onClick={() => {
                     handleDeleteItem(data.id)
                    // setchange('abc' + '12v2d')
                    // toast.success('Product Deleted Successfully')               
                  }}>Remove</button>
                </div>
              )
            })


          }

        </div>

        <div id="calculation" className='w-[400px] h-[400px] text-left rounded-md border absolute right-4 mt-5'>

          <h1 className='text-[18px] font-semibold p-5 uppercase'>Your Total</h1>

          <div className='flex w-full p-5 py-2  justify-between'><p>Product Quantity :</p> <span>{Quantity}</span></div>
          <div className='flex w-full p-5 py-2 justify-between'><p>Total Product Price :</p> <span>{Price.toFixed(2)}$</span></div>
          <div className='flex w-full p-5 py-2 justify-between'><p>Tax :</p> <span>59$</span></div>


          <div className='flex w-full p-5 py-2 mt-10 font-semibold uppercase  border-t justify-between'><h1>Sub Total :</h1> <p>{totalPrice.toFixed(2)}$</p></div>


        </div>


      </section>
    </>
  )
}

export default Cart