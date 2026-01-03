import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const About = () => {
  return (
    <div className="about h-[100vh] lg:h-[250vh] w-full grid grid-cols-12 grid-rows-12 sm:px-[1rem]  px-[5rem] gap-1.5 mt-[20vh] ">
        <Top/>
        <Bottom/>
    </div>
  )
}

export default About