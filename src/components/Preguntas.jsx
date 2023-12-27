'use client'
import React from 'react'
import { useState } from "react";

const Preguntas = () => {
  const [accordionOpen1, setAccordionOpen1] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);
  const [accordionOpen4, setAccordionOpen4] = useState(false);
  const [accordionOpen5, setAccordionOpen5] = useState(false);
  const [accordionOpen6, setAccordionOpen6] = useState(false);



  return (
    <div className='w-[90%] mx-auto grid gap-5 mt-10'>
      <h2 className='text-center text-3xl text-[#00296D] font-bold'>Preguntas Frecuentes</h2>
      {/* Primer acordeón */}
      <div className=" bg-white rounded-lg px-10 py-5">
        <button
          onClick={() => setAccordionOpen1(!accordionOpen1)}
          className="flex justify-between w-full"
        >
          <span className='text-1xl lg:text-1xl'>¿Qué Obras sociales aceptan?</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen1 && 'rotate-180'
                }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen1
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto praesentium dicta, recusandae optio consectetur rerum itaque cupiditate quidem deleniti officiis tempora quos nulla explicabo dolor? Aperiam quidem quae rem. Alias.          </div>
        </div>
      </div>

      {/* Repite el patrón para los demás acordeones */}
      {/* ... */}

      {/* Segundo acordeón */}
      <div className="bg-white rounded-lg px-10 py-5">
        <button
          onClick={() => setAccordionOpen2(!accordionOpen2)}
          className="flex justify-between w-full"
        >
          <span className='text-1xl lg:text-1xl'>¿Qué Obras sociales aceptan?</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen2 && 'rotate-180'
                }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen2
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nam dolorem enim autem? Ipsam perspiciatis recusandae soluta quas iste veniam laborum, placeat deleniti eveniet earum itaque eos aspernatur tempore quasi?
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 py-5">
        <button
          onClick={() => setAccordionOpen3(!accordionOpen3)}
          className="flex justify-between w-full"
        >
          <span className='text-1xl lg:text-1xl'>¿Qué Obras sociales aceptan?</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen3 && 'rotate-180'
                }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen3
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat eaque amet quis ab sequi architecto non molestias quibusdam? Error unde ipsam ut praesentium libero quibusdam, illo consectetur nam expedita.
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 py-5">
        <button
          onClick={() => setAccordionOpen4(!accordionOpen4)}
          className="flex justify-between w-full"
        >
          <span className='text-1xl lg:text-1xl' >¿Qué Obras sociales aceptan?</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen4 && 'rotate-180'
                }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen4
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quasi rerum alias ea corrupti numquam quisquam iure officia. Doloremque quis doloribus eum modi ab magni officia suscipit vitae fugit quaerat.
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 py-5">
        <button
          onClick={() => setAccordionOpen5(!accordionOpen5)}
          className="flex justify-between w-full"
        >
          <span className='text-1xl lg:text-1xl'>¿Qué Obras sociales aceptan?</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${accordionOpen5 && 'rotate-180'
                }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen5
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam dolor esse! Distinctio, praesentium quibusdam. Corrupti, dignissimos. Corrupti odio illum minus facere fugiat nisi cumque. Iste nam eaque reprehenderit ipsa.
          </div>
        </div>
      </div>
      {/* <p className='text-[#44C6E9] text-center '>Sacate las dudas</p>
      <h5 className='text-[#00296D] text-4xl text-center'>Preguntas Frecuentes</h5>
      <div className='border rounded-lg shadow-lg px-5 py-5'>
       <p>Que obras sociales aceptan?</p>
      </div>
      <div className='border rounded-lg shadow-lg px-5 py-5'>
       <p>Que obras sociales aceptan?</p>
      </div>
      <div className='border rounded-lg shadow-lg px-5 py-5'>
       <p>Que obras sociales aceptan?</p>
      </div>
      <div className='border rounded-lg shadow-lg px-5 py-5'>
       <p>Que obras sociales aceptan?</p>
      </div> */}
    </div>
  )
}

export default Preguntas
