import React from 'react'
import chat from '../../public/chat.svg'
import wsp from '../../public/wsp.svg'
import llamada from '../../public/llamada.svg'
import direccion from '../../public/direccion.svg'
import Image from 'next/image'

const Contacto = () => {
    return (
        <section className='w-[90%] mx-auto mt-20 ' >
            <div className=''>
                <p className='text-end text-[#44C6E9]'>Saca un turno</p>
                <p className='text-end text-[#00296D] text-4xl font-bold'>Contacto</p>
            </div>
            <div className='w-[100%] lg:grid lg:grid-cols-2'>
                <article className='lg:order-2 bg-[#252525] rounded-lg'>
                    <div className=' py-10'>
                        <p className='text-[#FFF9FD] text-center text-3xl'>Ponete en contacto para coordinar un turno</p>
                        <form action="" className=' flex flex-col px-5 gap-2 text-[#FFF9FD] mt-10'>
                            <label>Nombre</label>
                            <input type="text" className='border-b  outline-none bg-transparent' />
                            <label>Email</label>
                            <input type="text" className='border-b  outline-none bg-transparent' />
                            <label>Telefono</label>
                            <input type="text" className='border-b  outline-none bg-transparent' />
                            <label>Problema</label>
                            <input type="text" className='border-b  outline-none bg-transparent' />
                            <a href="" className='bg-[#FFF9FD] px-5 py-2 border rounded-md text-[#252525] text-center w-[50%] mx-auto mt-5'>Enviar</a>
                        </form>
                    </div>
                </article>
                <article className='flex flex-col items-center gap-10 justify-between border lg:order-1'>
                    <div className='flex gap-10 border-b w-[50%] mx-auto justify-around py-5'>
                        <Image
                            src={chat}
                            width={80}
                            height={50}
                            alt='icon'
                        />

                        <div className='flex flex-col gap-3  w-full'>
                            <p>Escribinos al Mail</p>
                            <p>info@tudentista.com.ar</p>
                        </div>

                    </div>
                    <div className='flex gap-10 border-b w-[50%] mx-auto justify-around py-5'>
                        <Image
                            src={llamada}
                            width={80}
                            height={50}
                            alt='icon'
                        />

                        <div className='flex flex-col gap-3  w-full'>
                            <p>Llamanos</p>
                            <p>0810 888 90XX</p>
                        </div>

                    </div>
                    <div className='flex gap-10 border-b w-[50%] mx-auto justify-around py-5'>
                        <Image
                            src={wsp}
                            width={80}
                            height={50}
                            alt='icon'
                        />

                        <div className='flex flex-col gap-3  w-full'>
                            <p>Escribinos al Mail</p>
                            <p>info@tudentista.com.ar</p>
                        </div>

                    </div>
                    <div className='flex gap-10 -b w-[50%] mx-auto justify-around border-b py-5  '>
                        <Image
                            src={direccion}
                            width={80}
                            height={50}
                            alt='icon'
                        />

                        <div className='flex flex-col gap-3  w-full'>
                            <p>Visitanos</p>
                            <p>Av. Colon 1338, Barrio Alberdi</p>
                        </div>

                    </div>

                </article>
            </div>


        </section>
    )
}

export default Contacto
