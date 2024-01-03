import React from 'react'

import img1 from "../../assets/1.jpg"
import googleimg from "../../assets/google.png";
import metaImg from "../../assets/meta.png";
import linkImg from "../../assets/link.png";
import goImg from "../../assets/goan.png";
import agenciaImg from "../../assets/agencia-de-marketing.jpg"


const Home = () => {
  return (
    <>
      <div className='mt-20 grid md:grid-cols-2'>

        <img src={img1} className='object-cover w-full h-50 md:m-2' />

        <div className='flex flex-col items-center justify-center'>

          <h2 className='text-center text-2xl mt-5 font-bold md:text-4xl'>Tecnología propia: optimización y monitoreo 24/7</h2>
          <p className='px-5 py-4 text-gray-500 mx-auto'>Desarrollamos y aplicamos algoritmos avanzados en las campañas de marketing digital. Controlamos y optimizamos las campañas las 24hs. Logramos un excelente equilibrio entre las capacidades tecnológicas y la experiencia de nuestros profesionales.</p>

          <button className='text-xl font-bold bg-amber-500 text-white rounded-xl px-8 py-2 w-3/4 my-4'>
            Ver mas
          </button>

        </div>

      </div>

      <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-4'>

        <article className='flex flex-col items-center border  px-4 py-8 bg-slate-100 rounded-xl shadow-md'>
          <span className='text-4xl'>
            <img src={googleimg} alt="" />
          </span>
          <div className='flex flex-col items-center px-4'>
            <h3 className='text-2xl text-gray-800'>Google Ads</h3>
            <p className='font-light mt-4 text-slate-500'>Administración profesional de campañas en Search, Display, Remarketing, Shopping y Video ¡Optimizamos tus conversiones!</p>
          </div>
        </article>


        <article className='flex flex-col items-center border  px-4 py-8 bg-slate-100 rounded-xl shadow-md'>
          <span className='text-4xl'>
            <img src={metaImg} alt="" />
          </span>
          <div className='flex flex-col items-center px-4'>
            <h3 className='text-2xl text-gray-800'>Meta Ads</h3>
            <p className='font-light mt-4 text-slate-500'>Creamos, configuramos y administramos campañas en Facebook Ads e Instagram Ads de forma profesional.</p>
          </div>
        </article>


        <article className='flex flex-col items-center border  px-4 py-8 bg-slate-100 rounded-xl shadow-md'>
          <span className='text-4xl'>
            <img src={linkImg} alt="" />
          </span>
          <div className='flex flex-col items-center px-4'>
            <h3 className='text-2xl text-gray-800'>Linkedin Ads</h3>
            <p className='font-light mt-4 text-slate-500'>Campañas patrocinadas en la red de profesionales mas grande del mundo. Segmentaciones especificas y enfocadas en leads.</p>
          </div>
        </article>


        <article className='flex flex-col items-center border  px-4 py-8 bg-slate-100 rounded-xl shadow-md'>
          <span className='text-4xl'>
            <img src={goImg} alt="" />
          </span>
          <div className='flex flex-col items-center px-4'>
            <h3 className='text-2xl text-gray-800'>Google Analytics</h3>
            <p className='font-light mt-4 text-slate-500'>Desarrollo de informes personalizados, con información relevante para la toma de decisiones.</p>
          </div>
        </article>

      </section>


      <section className='bg-slate-50'>
        <div className='grid md:grid-cols-2'>
          <div>
            <h2 className='text-lg font-[Poppins] text-slate-600 text-center md:hidden'>NUESTRA AGENCIA DE MARKETING DIGITAL</h2>

            <img src={agenciaImg} alt="agencia de mkt" className='rounded-b-full py-4 px-4 md:mt-32' />
          </div>

          <div className='flex flex-col items-center px-4 py-6 md:mt-16'>
            <h3 className='text-4xl font-bold '>Somos líderes en generación de leads por:</h3>


            <div className='flex flex-col items-center gap-4'>
              <div className='flex flex-row items-center gap-4 pt-10'>
                <span className='text-4xl text-white bg-blue-500 rounded-2xl px-2'>
                  <ion-icon name="checkmark-done-outline"></ion-icon>
                </span>
                <h4 className='text-2xl text-sky-700'>Nuestras certificaciones</h4>
              </div>
              <p className='font-light text-slate-500 px-10'>Nuestra agencia se encuentra certificada en todas las plataformas publicitarias que manejamos cumpliendo con los estándares de calidad mas altos del mercado.</p>
            </div>


            <div className='flex flex-col items-center gap-4'>
              <div className='flex flex-row items-center gap-4 pt-10'>
                <span className='text-4xl text-white bg-blue-500 rounded-2xl px-2'>
                  <ion-icon name="checkmark-done-outline"></ion-icon>
                </span>
                <h4 className='text-2xl text-sky-700'>Nuestra tecnología de punta</h4>
              </div>
              <p className='font-light text-slate-500 px-10'>Nuestros desarrollos tecnológicos nos permiten realizar optimizaciones masivas y con frecuencias que no serían posibles de forma manual.</p>
            </div>

            <div className='flex flex-col items-center gap-4'>
              <div className='flex flex-row items-center gap-4 pt-10'>
                <span className='text-4xl text-white bg-blue-500 rounded-2xl px-2'>
                  <ion-icon name="checkmark-done-outline"></ion-icon>
                </span>
                <h4 className='text-2xl text-sky-700'>Nuestros tiempos de respuesta</h4>
              </div>
              <p className='font-light text-slate-500 px-10'>Somos la única agencia en LATAM con tiempos de respuesta estandarizados dependiendo de cada tipo de implementación.</p>
            </div>

            <div className='flex flex-col items-center gap-4'>
              <div className='flex flex-row items-center gap-4 pt-10'>
                <span className='text-4xl text-white bg-blue-500 rounded-2xl px-2'>
                  <ion-icon name="checkmark-done-outline"></ion-icon>
                </span>
                <h4 className='text-2xl text-sky-700'>Nuestro equipo de trabajo</h4>
              </div>
              <p className='font-light text-slate-500 px-10'>Todos los que formamos parte de MediaBros somos apasionados por lo que hacemos y cada cliente de la agencia cuenta con un equipo mínimo de 3 personas.</p>
            </div>
          </div>

        </div>
      </section>


      <section>
        <div className='grid md:grid-cols-2'>

          <div className='flex flex-col items-center py-8 px-6 md:mt-16'>
          <h3 className='text-center text-5xl font-bold font-[Roboto] text-slate-800'>Apasionados por el Marketing Digital</h3>
          <p className='text-slate-400 px-4 py-8'>Desarrollamos <span className='text-gray-800'>estrategias de marketing digital</span> para nuestros clientes, desde la etapa de planeamiento hasta la implementación de <span className='text-gray-800'>campañas de marketing digital</span>, medición de resultados y asesoramiento personalizado.</p>
          <p className='text-center text-gray-500 font-bold'><span className='text-green-700 text-[60px]'>+5 AÑOS</span><br></br>DE EXPERIENCIA</p>
          </div>

          <div className='bg-slate-100 flex flex-col items-center'>
            <span className='text-slate-700 text-xl font-bold py-8'>CONTACTENOS</span>
            <h4 className='text-3xl font-light text-gray-950 font-[Poppins]'>Asesoramiento personalizado</h4>
            <form className='mx-auto my-10 flex flex-col items-center justify-between gap-4'>
              <input className='input-form' type="text" placeholder='Nombre'/>
              <input className='input-form' type="text" placeholder='Email'/>
              <input className='input-form' type="number" placeholder='Telefono'/>
              <button className='font-bold bg-green-600 px-20 py-2 my-4 rounded-2xl text-white' type="button">Enviar</button>
            </form>
          </div>



        </div>
      </section>
    </>
  )
}

export default Home