import React from 'react'
import CountDiv from './CountDiv'
import CaseStudyContainer from './CaseStudyContainer'
import Bottom from './Bottom'
import Top from './Top'

const CaseStudies = () => {
  return (
    <div className="case-studies flex flex-col gap-[3em] min-h-[110vh] px-[5em] border-t-[1px] mt-[10vh] border-[#111]">
        <Top/>
        <Bottom/>
    </div>
  )
}

export default CaseStudies