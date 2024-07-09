import React from 'react'
import Carousel from './Carousel'
import Banner from './Banner'
import Banner2 from './Bnner2'
import FashionBrand from './Products/FashionBrans'
import Banner3 from './Banner3'
import Peragraph from './Peragraph'
import Furnicture from './Products/Furnicture'

const HomeScreen = () => {
  return (
    <div>
        <Carousel />
        <Banner />
        <FashionBrand/> 
        <Banner2/>
        <Banner3/>
          <Furnicture/>
          <Banner2/>
          <Peragraph/>

    </div>
  )
}

export default HomeScreen