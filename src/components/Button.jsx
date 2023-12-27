import React from 'react'

const Button = (props) => {
  return (
    <button className='border border-[#00296D] rounded-md text-[#00296D] py-2 px-6  md:ml-8 
     hidden md:block '>
      {props.children}
    </button>
  )
}

export default Button