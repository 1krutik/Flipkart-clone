import axios from 'axios'
import ProductCard from '../Component/Products/ProductCard';
import { useEffect, useState } from 'react';

const Category = () => {

    const [data,setData]=useState([])

    useEffect(() => {
        
      
            FetchData()
    }, []);
    
    const FetchData=async()=>{
        let data =await axios.get("http://localhost:3000/AllData")
        console.log(data.data)
        setData(data.data)


    }

  return (


    <div>
        <h1 className='mt-3'>Top Deals On Fashion</h1>

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

export default Category