import React from 'react'

const Banner = () => {
  return (
    <div className='d-flex gap-3 w-100'>
        <div className='akasaair mt-4 ' style={{width:"20%"}}> 
            <img className='w-100' style={{height:"400px"}} src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/131c8c7ecafd87e5.jpg?q=20" alt="" />
        </div>
        <div className='mt-4' style={{width:"80%"}}> 
<img className='w-100 'style={{height:"400px", objectFit:"cover"}} src="https://rukminim1.flixcart.com/www/1330/390/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80" alt="" />
        </div>
    </div>
  )
}

export default Banner