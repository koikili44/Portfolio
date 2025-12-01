import React from 'react'
import Navbar from '../components/Navbar'
import Details from '../sections/Details'
import Info from '../sections/Info'
import Nex from '../sections/Nex'
import Butt from '../sections/Butt'
import Tech from '../sections/Tech'
import Carousel from '../sections/Carousel'
import Services from '../sections/Services'
import Accordion from '../sections/Accordion'





function Home() {
  return (
    
    <div className='bg-black min-h-screen w-full'>
      
      
      <Navbar/>
      <Details/>
      <Info />
      <Nex/>
      <Butt/>
      <Tech/>
      <Carousel/>
      <Services/>
      <Accordion/>


    </div>
    
    
  )
}

export default Home