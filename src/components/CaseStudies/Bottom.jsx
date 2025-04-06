import React from 'react'
import CountDiv from './CountDiv'
import CaseStudyContainer from './CaseStudyContainer'


const Bottom = () => {
  return (
    <div className="bottom  flex w-full justify-between border-t-[1px] border-[#302c2c]">
        <CountDiv/>
        <CaseStudyContainer/>
    </div>
  )
}

export default Bottom