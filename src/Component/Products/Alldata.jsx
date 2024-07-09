import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Alldata() {
    const {category} = useParams();
    
  const [state, setState] = useState([]);

  
  const abc = async () => {
      const xyz = await axios.get(`http://localhost:3000/${category}`);
      
      setState(xyz.data);
    };
    
    useEffect(() => {
      abc(); // eslint-disable-next-line
    },[category]);

  return (
 
    <>

      <h4> Product You May Like🥰</h4>
    <div className="d-flex   flex-wrap gap-4  justify-content-center">
      {state.map((item) => {
        return (
          <>
          
           <div className="border rounded mb-5 mt-2 ">
       <Link to={`/productdetails/${category}/${item.id}`}>  
         <img  style={{height:"280px",width:"250px", objectFit:"cover",objectPosition:"top", borderRadius:"20px"}} src={item.img} alt="" /></Link>
            <p style={{textAlign:"center"}}>{item.name}</p>
            <div className="d-flex gap-3 ">
            <p >{item.price}</p>
            <p className="text-danger"><s>{item.mrp}</s></p>
            <p className="text-success">{item.dis}</p>
            </div>
           </div>

          </>
        );
      })}
    </div>
    </>
  );
}

export default Alldata;
