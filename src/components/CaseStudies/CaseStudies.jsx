import React from 'react'
import Bottom from './Bottom'
import Top from './Top'

const CaseStudies = () => {
  return (
    <div
      className="
        case-studies flex flex-col
        gap-[3em]
        min-h-screen
        px-[5em] mt-[10vh]
        border-t-[1px] border-[#111]
        lg:px-[3em]
        md:px-[1.5em]
        sm:px-[1em]
      "
    >
      <Top />
      <Bottom />
    </div>
  )
}

export default CaseStudies
