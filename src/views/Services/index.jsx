import React from 'react'

import undraw1 from "../../assets/undraw1.svg"
import undraw2 from "../../assets/undraw2.svg"
import undraw3 from "../../assets/undraw3.svg"


const Services = () => {
  return (
    <div className='mt-10'>
       <section className='bg-slate-100'>

<div className='grid md:grid-cols-3'>

  <article className='flex flex-col items-center mt-10 md:mt-30'>
    <img src={undraw1} className='w-[200px]' />

    <div className='flex flex-col gap-4 text-center px-4 py-4'>
      <h4 className='text-xl font-bold text-gray-700 mt-4'>Potenciamos tus redes sociales</h4>
      <p className='font-light text-slate-600 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates eaque laboriosam natus doloremque ab officiis ullam! Quis, autem quidem!</p>
    </div>
  </article>

  <article className='flex flex-col items-center mt-10'>
    <img src={undraw2} className='w-[200px]' />

    <div className='flex flex-col gap-4 text-center px-4 py-4'>
      <h4 className='text-xl font-bold text-gray-700 mt-4'>Potenciamos tus redes sociales</h4>
      <p className='font-light text-slate-600 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates eaque laboriosam natus doloremque ab officiis ullam! Quis, autem quidem!</p>
    </div>
  </article>

  <article className='flex flex-col items-center mt-10'>
    <img src={undraw3} className='w-[200px]' />

    <div className='flex flex-col gap-4 text-center px-4 py-4'>
      <h4 className='text-xl font-bold text-gray-700 mt-4'>Potenciamos tus redes sociales</h4>
      <p className='font-light text-slate-600 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates eaque laboriosam natus doloremque ab officiis ullam! Quis, autem quidem!</p>
    </div>
  </article>
  
</div>
</section>
    </div>
  )
}

export default Services