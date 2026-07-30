import React from 'react'
import Nav from '../../components/nav/Nav'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

const About = () => {
    return (
        <>


            <Nav title={'hello'} />
            <Nav title={'Bye'} />
            <Hero heading={"hello world!"} />
            <Footer />
            <Hero heading={"test data"} heading2={'new data'} />
        </>)
}

export default About
