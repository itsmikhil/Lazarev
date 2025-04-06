import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const About = () => {
  return (
    <div className="about min-h-[100vh] w-full flex flex-col  px-[5rem] gap-[0.3rem] mt-[20vh]">
        <Top/>
        <Bottom/>
    </div>
  )
}

export default About