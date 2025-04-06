import React from 'react'
import Left from './Left'
import Right from './Right'

const Products = () => {
  return (
    <div className="products flex w-full min-h-[100vh] px-[5em] justify-between mt-[10vh]">
        <Left/>
        <Right/>
    </div>
  )
}

export default Products