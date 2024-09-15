import React, { useCallback } from 'react'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Input from '../components/Input'
import SearchBox from '../components/SearchBox'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShimmerText, ShimmerTitle } from 'react-shimmer-effects'

// import Button from './Button'

function Products() {
  const [products, setproducts] = useState([])
  const [filterProducts, setfilterProducts] = useState([])
  const [category, setcategory] = useState('all')
  const [Categories, setCategories] = useState([])
  const [SearchProduct, setSearchProduct] = useState('')
  const [loadingstate, setloadingstate] = useState(false)

  useEffect(() => {


    const url = category === 'all'
      ? 'https://dummyjson.com/products'
      : `https://dummyjson.com/products/category/${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data.products)
        setfilterProducts(data.products)
      })

    setTimeout(() => {

      setloadingstate(true)
    }, 1000);
   

      
    }, [category])
    


  
  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)

      })


  }, [])


  
  useEffect(()=>{

    if(SearchProduct !== ''){
      
      const searchfilter = products.filter((product) => {
        return product.title.toLowerCase().indexOf(SearchProduct.toLowerCase()) !== -1; // Use the variable SearchProduct
      });
      
      setfilterProducts(searchfilter)
      
    }
    if(SearchProduct === ''){
      setfilterProducts(products)
    }
  },[SearchProduct])
    
 




  return (
    <>
     
      
      <SearchBox func={(e)=>{console.log('hoga'); setSearchProduct(e.target.value)
      console.log(SearchProduct);
      
      }}></SearchBox>
      <section id="ProductsContainer" className=' w-full flex'>

        <Sidebar Categories={Categories} loading={loadingstate} >
          {
            loadingstate ?
            <h3 className='pl-1 cursor-pointer text-[13px]' onClick={() => {setcategory('all')}
          }>All</h3>
          :
        <ShimmerText line={1}></ShimmerText>
        }
          {
            Categories.map((data, index) => {
              return (
                  <Input title={data} isChoosen={data} func={(e) => { setcategory(data) }} key={index} loading ={loadingstate}></Input>
 
                )
            })
          }
        </Sidebar>

        {/* <Input></Input> */}
        <div id='cardcontainer' className="flex w-[400px] items-center justify-between gap-3 ">
          {
            filterProducts.map((item, index) => {
              return (
                <Link to={`/ProductDetail/${item.id}`} key={index}>
                <Card data={item} loading ={loadingstate}></Card>
                </Link>
              )
            })
          }

        </div>

      </section>
    </>
  )
}

export default Products