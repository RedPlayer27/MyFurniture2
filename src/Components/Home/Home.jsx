import React from 'react'
import Banner1 from '../Banner/Banner1'
import Carousels from '../Caro/Carousels'
import Slider from '../slide/Slider'
import Gallery from '../Img-G/Gallery'


function Home() {
  return (
    <div>
      <Carousels/> 
      <Slider/>
      <Gallery/>
       <Banner1/>
    

    </div>
  )
}

export default Home