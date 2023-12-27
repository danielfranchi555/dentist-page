import Image from 'next/image'
import React from 'react'
import imagen from '../images/imagen-hero.png'

const Hero = () => {

  return (
    <header className='lg:grid lg:grid-cols-2 mb-10 lg:mb-0 py-20 lg:py-0 '>
      <section className=' lg:order-2' >
        <Image
          src={imagen}
          width={600}
          height={500}
          alt='imagen-hero'
          className='md:w-full md:pt-10'
        />
      </section>

      <section className='flex flex-col  gap-4 text-start lg:order-1 lg:w-full lg:flex lg:flex-col lg:gap-10 lg:h-full lg:justify-center  '>

        <p className='text-[#2977D5]'>En Córdoba Capital</p>

        <h2 className='text-[#00296D] text-5xl md:text-5xl lg:text-7xl'>
          Una excelente experiencia <span className='text-[#44C6E9]'>Odontológica</span>
        </h2>

        <p className='text-[#777777] md:text-base lg:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias hic doloribus, laborum veniam dignissimos rerum eos accusantium officia, est dicta odio voluptatibus, non reprehenderit ducimus enim sunt recusandae aut?
        </p>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 '>
          <a href="" className='bg-[#44C6E9] shadow-md px-5 py-3 rounded-md text-white text-center '>
            Saca tu turno
          </a>
          <a href="" className='text-[#777777] px-5 py-3 border rounded-md text-center '>
            Nuestros Servicios
          </a>
        </div>

      </section>

    </header>

  )
}

export default Hero
