import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Furnicture = () => {
  const [data,setData]=useState([])

  useEffect(() => {
    async function fetchData(){

      try {
        let productData = await axios.get("http://localhost:3000/furniture");
        console.log(productData.data);
        setData(productData.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (


    <div>
    <h3 className="mt-3">Best Furnicture</h3>

    <div className="d-flex flex-wrap gap-3">
      {data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  </div>
  )
}

export default Furnicture
