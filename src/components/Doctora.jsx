import Image from 'next/image'
import image from '../images/doctora-figma.png'

const Doctora = () => {
    return (
        <div className='w-[90%] mx-auto mt-40 grid gap-5 lg:grid-cols-2  lg:gap-0 lg:mb-40 '>
            <div className=' rounded-lg '>
                <Image
                    src={image}
                    width={500}
                    height={100}
                    alt='doctora'
                    className='flex w-full rounded-xl'
                />
            </div>

            <div className='grid gap-3  lg:px-3 md:py-5 md:flex md:flex-col md:justify-center md:gap-10  '>
                <p className='text-[#44C6E9] lg:text-2xl'>Sobre Mi</p>
                <h4 className='text-[#00296D] text-4xl lg:text-6xl font-bold'>Dra. Patricia Nieves Kiriaco</h4>
                <ul className='list-disc grid gap-2 pl-4 mt-4 lg:pl-4'>
                    <li>Médica Cirujano, graduada en la Universidad Nacional de Córdoba, Argentina.</li>
                    <li>Odontóloga, graduada en la Universidad de París, Francia</li>
                    <li>Docente de la Universidad Nacional de Córdoba desde el año 1975</li>
                    <li>Miembro de las siguientes Academias:</li>
                    <div className='pl-4 grid gap-2'>
                        <li>A.L.A.O: Academia Latinoamericana de Oseointegración.</li>
                        <li>A.I.I.O: Academia Internacional de Implantes y Oseointegración . Miembro Fundador</li>
                        <li>A.V.O.I.O: Academia Venezolana de Oseointegración e Implantologìa Oral. Miembro Honorario.</li>
                        <li>Pierre Fauchard Academy: Academia de Honor de Odontologìa de E.E.U.U.</li>
                        <li>A.I.I.P: Academia Internacional de Implantología y Periodoncia Barcelona. Presidente Internacional.</li>
                    </div>
                </ul>
            </div>


        </div>
    )
}

export default Doctora
