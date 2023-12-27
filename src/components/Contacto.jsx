import React from 'react'
import chat from '../../public/chat.svg'
import wsp from '../../public/wsp.svg'
import llamada from '../../public/llamada.svg'
import direccion from '../../public/direccion.svg'
import Image from 'next/image'
import ig from '../../public/ig.svg'
import face from '../../public/facebook.svg'
import linkedin from '../../public/linkedin.svg'

const Contacto = () => {
    return (
        <section className='w-full mt-20 ' >
            <div className='w-[90%] mx-auto py-10'>
                <p className='text-end text-[#44C6E9]'>Saca un turno</p>
                <p className='text-end text-[#00296D] text-4xl font-bold'>Contacto</p>
            </div>
            <div className='w-[100%]  lg:grid lg:grid-cols-2'>
                <article className='lg:order-2 bg-[#252525] rounded-lg'>
                    <div className=' py-10 formulario'>
                        <p className='text-[#FFF9FD] text-center text-2xl px-2'>Ponete en contacto para coordinar un turno</p>
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
                <article className='flex  gap-3 mt-10  w-full flex-col border lg:order-1'>
                    <div className=' border-b-2 w-[80%] mx-auto flex justify-around py-5'>
                        <div>
                            <Image
                                src={chat}
                                width={50}
                                height={40}
                                alt='icon'
                            />
                        </div>

                        <div className='flex flex-col gap-5'>
                            <span>Escribinos al email</span>
                            <span>info@tudentista.com.ar</span>

                        </div>
                    </div>
                    <div className=' w-[80%] mx-auto flex justify-around py-5'>
                        <div>
                            <Image
                                src={wsp}
                                width={50}
                                height={40}
                                alt='icon'
                            />
                        </div>

                        <div className='flex flex-col gap-5'>
                            <span>Chatea con nosotrosr</span>
                            <span>info@tudentista.com.ar</span>

                        </div>
                    </div>
                    <div className=' w-[80%] mx-auto flex justify-around py-5'>
                        <div>
                            <Image
                                src={llamada}
                                width={50}
                                height={40}
                                alt='icon'
                            />
                        </div>

                        <div className='flex flex-col gap-5'>
                            <span>Llamanos</span>
                            <span>info@tudentista.com.ar</span>

                        </div>
                    </div>
                    <div className=' w-[80%] mx-auto flex justify-around py-5'>
                        <div>
                            <Image
                                src={chat}
                                width={50}
                                height={40}
                                alt='icon'
                            />
                        </div>

                        <div className='flex flex-col gap-5'>
                            <span>Visitanos</span>
                            <span>info@tudentista.com.ar</span>

                        </div>
                    </div>
                    <div className=' flex w-[69%] py-5 mx-auto justify-between'>
                        <Image
                        src={ig}
                        width={30}
                        height={20}
                        alt='redes'
                        />
                          <Image
                        src={face}
                        width={30}
                        height={20}
                        alt='redes'
                        />
                          <Image
                        src={linkedin}
                        width={30}
                        height={20}
                        alt='redes'
                        />
                    </div>
                </article>
            </div>


        </section>
    )
}

export default Contacto
