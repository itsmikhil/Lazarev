import React from 'react'
import Left from './Left'
import Right from './Right'

const Products = () => {
  return (
    <div
      className="
        products w-full min-h-screen flex justify-between
        px-[5em] mt-[10vh]
        lg:px-[3em] lg:flex-col lg:gap-[6vh]
        md:px-[2em]
        sm:px-[1em]
      "
    >
      <Left />
      <Right />
    </div>
  )
}

export default Products
