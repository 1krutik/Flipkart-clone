import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductScreen = () => {

    const [data,setData]=useState([])

    useEffect(() => {
        
      
            FetchData()
    }, []);
    
    const FetchData=async()=>{
        let data =await axios.get("http://localhost:3000/Fashion")
        console.log(data.data)
        setData(data.data)


    }

  return (


    <div>
        <h1 className='mt-3'>Top Deals On Shoes</h1>

        <div className='d-flex flex-wrap gap-3'>
            {
                data.map((item,index)=>{

                return<ProductCard item={item}/>
            })
        }
        </div>
        
    </div>
  )
}

export default ProductScreen