'use client'
import React from 'react'
import TresEstrellas from '../../public/3-estrellas.svg'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Testimonios = () => {

    const slides = [
        {
            id:1,
            nombre: 'Matias Gomez',
            estrellas: '/3-estrellas.svg',
            testimonio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
        },
        {
            id:2,
            nombre: 'Matias Gomez',
            estrellas: '/3-estrellas.svg',
            testimonio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
        },
        {   id:3,
            nombre: 'Matias Gomez',
            estrellas: '3-estrellas.svg',
            testimonio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
        },

        {   id:4,
            nombre: 'Matias Gomez',
            estrellas: '3-estrellas.svg',
            testimonio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
        },
        {   id:5,
            nombre: 'Matias Gomez',
            estrellas: '3-estrellas.svg',
            testimonio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
        },
        {   id:6,
            nombre: 'Matias Gomez',
            estrellas: '3-estrellas.svg',
            testimonio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
        }
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='w-[90%] mx-auto  flex flex-col gap-5 mt-40 mb-20'>
          <p className='text-[#44C6E9] text-center'>Testimonios</p>
          <p className='text-[#00296D] text-4xl text-center lg:text-5xl'>Lo que opinan nuestros pacientes</p>
            <Slider {...settings}>
                {slides.map((item) => (
                    <div key={item.id} className=''>
                           <div className='border shadow-lg rounded-xl px-5 py-5 flex flex-col gap-2 h-[230px]  '>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl'>{item.nombre}</h1>
                            <Image
                                src={item.estrellas}
                                width={50}
                                height={50}
                                alt='puntaje'
                                className='w-[70px]'
                            />
                        </div>
                        <p className='lg:text-[17px] text-[#666666] h-full flex py-5'>{item.testimonio}</p>
                    </div>
                    </div>
                 
                ))}
            </Slider>
            <a href="" className='px-5 py-3 border border-[#44C6E9] rounded-md text-[#44C6E9] w-[auto]  mx-auto mt-5'>Ver mas review</a>
        </div>
    )
}

export default Testimonios
