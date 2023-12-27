import React from 'react'
import telefono from '../../public/telefono.svg'
import direccion from '../../public/direccion.svg'
import email from '../../public/email.svg'
import Image from 'next/image'

const HeroSmall = () => {
    return (
        <section className=' bg-[rgb(212,228,244)]   '>
            <div className='grid gap-5 w-[90%]  mx-auto  lg:grid lg:grid-cols-3 lg:justify-between  px-5  py-10 lg:py-10 md:w-[90%] md:mx-auto '>
                      <div className='flex gap-5  lg:gap-0 items-center justify-between '>
                <Image
                    src={direccion}
                    width={50}
                    height={50}
                />
                <span className='text-[#00296D] text-2xl w-full font-bold text-1xl flex justify-center lg:text-2xl'>Direccion</span>
                <div className='w-full flex flex-col items-center  lg:items-start lg:max-w-[300px]' >
                    <p className='text-[#00296D]'>Av.Color 1560</p>
                    <p className='text-[#00296D]'>Cordoba Capital</p>
                </div>
            </div>
            <div className='flex gap-3 items-center justify-between border  lg:gap-0  '>
                <Image
                    src={telefono}
                    width={50}
                    height={50}
                    className=' '
                />
                <span className=' text-2xl text-[#00296D] font-bold text-1xl w-full text-center lg:text-2xl md:text-1xl  lg:w-full'>Telefono</span>
                <div className='flex flex-col items-center w-full lg:items-start'>
                    <p className='text-[#00296D]'>351 7608XXX</p>
                    <p className='text-[#00296D]'>351 7608XXX</p>
                </div>
            </div>
            <div className='flex items-center justify-between lg:gap-0 ' >
                <Image
                    src={email}
                    width={50}
                    height={50}
                    className=''
                />
                <span className=' text-2xl  text-[#00296D] font-bold text-1xl w-full text-center lg:text-2xl'>Email</span>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <p className=' text-[#00296D]'>info@tudentista.com.ar</p>
                    <p className=' text-[#00296D]'>info@tudentista.com.ar</p>
                </div>
            </div>
            </div>
      

        </section>
    )
}

export default HeroSmall
