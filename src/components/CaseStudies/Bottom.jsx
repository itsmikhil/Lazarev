import React from 'react'
import CountDiv from './CountDiv'
import CaseStudyContainer from './CaseStudyContainer'

const Bottom = () => {
  return (
    <div
      className="
        bottom w-full flex justify-between
        border-t-[1px] border-[#302c2c]
        pt-[3em]
        lg:flex-col lg:gap-[4em]
      "
    >
      <CountDiv />
      <CaseStudyContainer />
    </div>
  )
}

export default Bottom
