import React from 'react'

const Login = () => {
  return (
    <>
    <br />
 
    <div className='container justify-content-center d-flex  '>


<div className='login position-relative '>

  <h3 className='container text-white'>Login</h3>

  <p style={{color:"white", fontSize:"20px"}} className='mt-5  "'>Get access to your Orders, <br />Wishlist and Recommendations</p>
  <div className=''>

  <img  className='position-absolute bottom-0 start-50 translate-middle-x'  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
  </div>


</div>
<div className='logininput border p-3 position-relative p-5'>

  <input className='inp mt-5 w-100 pb-2    '  type="email" placeholder='Enter Email/Mobile Number ' name="" id="" />
  <hr />
  
  <p className='otpup mt-5 '> By continuing, you agree to Flipkart's <span className='text-primary'>Terms Of Use</span> and <span className='text-primary'> Privacy Policy </span></p>

  <button type='submit' className='otp w-100 p-2   '>Requet OTP</button>

</div>
    </div>
    <br />
    </>
  )
}

export default Login