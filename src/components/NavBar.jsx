'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import { useState } from 'react'
import burguer from '../../public/button-burguer.svg'
import Button from './Button'

const NavBar = () => {
    let Links =[
        {name:"Inicio",link:"/"},
        {name:"Servicios",link:"/"},
        {name:"Nosotros",link:"/"},
        {name:'Contacto',link:"/"},
      ];

      let [open,setOpen]=useState(false);

    return (
        <div className=' w-full mx-auto fixed shadow-lg border-l-emerald-400'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className=' cursor-pointer flex items-center gap-0 md:gap-4
        text-gray-800'>
          <Image
          src={logo}
          width={50}
          height={50}
          alt='logo'
          className=''
          />
            <div className='flex flex-col  w-full text-center lg:text-start'>
                <h1 className='text-sm md:text-1xl'>Odontologia Integral</h1>
                <span className='text-sm'>Salud y Estetica Integral</span>
            </div>
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer  md:hidden'>
          <Image
          src={burguer}
          width={30}
          height={20}
          alt='icon'
          />
         {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
        </div>
  
        <ul className={`md:flex md:items-center   md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        <Button>
            Saca tu turno
          </Button>
        </div>
      </div>
        // <nav className='nav  max-w-[90%] mx-auto  py-5  '>
        //     <div className='flex   w-[100%] lg:w-[auto] '>
        //         <a href="" className='text-[#E3E4E6] ' >
        //             <Image
        //                 src={logo}
        //                 width={50}
        //                 height={50}
        //                 alt='logo'
        //             />
        //             </a>
        //         <div className='flex flex-col  w-[100%] items-center lg:items-start lg:px-2'>
        //             <h1 className='text-[15px] lg:text-[19px]'>ODONTOLOGIA INTEGRAL</h1>
        //             <p className='text-[12px] lg:text-[15px] text-center items-center'>Salud y Estetica Dental</p>
        //         </div>
        //     </div>

        //     <input type="checkbox" id='menu' className='peer hidden' checked={isMenuOpen} onChange={toggleMenu} />
        //     <label className='bg-menu w-10 bg-cover bg-center h-10 cursor-pointer z-50 transition-all lg:hidden' htmlFor="menu"></label>


        //     <div className= {`  lg:flex lg:justify-center lg:items-center fixed inset-0 translate-x-full ${isMenuOpen ? 'peer-checked:translate-x-0' : ''}  transition-transform lg:static lg:translate-x-0 `}>
        //         <ul className="flex flex-col items-end gap-6 inset-x-0   w-[100%] shadow-lg  h-max lg:bg-transparent   lg:flex lg:flex-row  lg:shadow-none lg:text-4xl lg:gap-20  lg:px-20">
        //             <li className='text-[#000000] text-[18px] lg:text-1xl'><a href="#" className="item cursor-pointer" onClick={closeMenu}>Inicio</a></li>
        //             <li className='text-[#000000] text-[18px] lg:text-1xl '><a href="#" className="item cursor-pointer" onCli ck={closeMenu}>Servicios</a></li >
        //             <li className='text-[#000000] text-[18px] lg:text-1xl'><a href="#" className="item cursor-pointer" onClick={closeMenu}>Nosotros</a></li>
        //             <li className='text-[#000000] text-[18px] lg:text-1xl'><a href="#" className="item cursor-pointer" onClick={closeMenu}>Contacto</a></li>
        //         </ul>
        //     </div>
        //     <a href=""  className='text-[18px] text-[#00296D] rounded-lg border border-[#00296D] px-5 py-3 hidden lg:block'>Saca tu turno</a>
        // </nav>
    )
}

export default NavBar
