import React from 'react'
import Nav from '../navbar/Nav'
import Footer from '../footer/Footer'

const Hero = ({data}) => {
  return (
    <div>
      <Nav/>
      <div>this is hero component</div>
      <Footer data={data}/>
    </div>
  )
}

export default Hero
