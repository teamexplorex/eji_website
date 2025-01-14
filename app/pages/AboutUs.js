import React from 'react'
import Welcome from '../components/aboutus/Welcome'
import Adventure from '../components/aboutus/Adventure'
import Different from '../components/aboutus/Different'
import Offerings from '../components/aboutus/Offerings'
import Director from '../components/aboutus/Director'

const AboutUs = () => {
  return (
    <>
        <Welcome/>
        <Adventure/>
        {/* <Different/> */}
        <Offerings/>
        <Director/>
    </>
  )
}

export default AboutUs