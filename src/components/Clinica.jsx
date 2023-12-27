import React from 'react'
import image from '../images/instalaciones.png'
import Image from 'next/image'

const Clinica = () => {
  return (
    <div className='w-[90%] mx-auto mt-20 grid gap-5'>
      <p className='text-[#44C6E9]'>Las Instalaciones</p>
      <h5 className='text-[#00296D] text-4xl'>Nuestra clinica</h5>
      <Image
      src={image}
      width={100}
      height={100}
      alt='imagen'
      className='w-full'
      />
    </div>
  )
}

export default Clinica
