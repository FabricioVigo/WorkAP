import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-indigo-950'>


            <div className='grid md:grid-cols-4'>

                <div>


                    <h5 className='text-4xl text-white ml-8 pt-10 pb-4 cursor-pointer'>Work<span className='text-yellow-500'>AP</span></h5>
                    <p className='text-slate-100 px-8 py-2'>Nativos digitales apasionados por las plataformas y la tecnología. El éxito de nuestros clientes es el nuestro.</p>

                    <div className='flex justify-start gap-4 ml-8 mt-4'>
                        <span className='social-icons'><ion-icon name="logo-facebook"></ion-icon></span>
                        <span className='social-icons'><ion-icon name="logo-linkedin"></ion-icon></span>
                        <span className='social-icons'><ion-icon name="logo-instagram"></ion-icon></span>

                    </div>
                </div>


                <div>


                    <div className='flex flex-col ml-6 py-8 text-slate-100'>
                        <h4 className='font-bold text-sky-600 text-2xl mb-4'>Servicios</h4>
                        <span>Google Ads</span>
                        <span>Meta Ads</span>
                        <span>Linkedin Ads</span>
                        <span>Posicionamiento SEO</span>
                        <span>Google Analiytics</span>
                    </div>

                    </div>

                    <div>

                    <div className='flex flex-col ml-6 py-8 text-slate-100'>
                        <h4 className='font-bold text-sky-600 text-2xl mb-4'>Contenido</h4>
                        <span>Agencia</span>
                        <span>Tendencias</span>
                        <span>Oportunidades</span>
                        <span>Contacto</span>
                        <span>FAQs</span>
                    </div>

                    </div>

                    <div>
                    <div className='flex flex-col ml-6 py-8 text-slate-100'>
                        <h4 className='font-bold text-sky-600 text-2xl mb-4'>Contacto</h4>
                        <div className='flex gap-2'>
                            <span className='text-2xl text-yellow-500'><ion-icon name="call-outline"></ion-icon></span><p>+54 2271469768</p>
                        </div>
                        <div className='flex gap-2'>
                            <span className='text-2xl text-yellow-500'><ion-icon name="call-outline"></ion-icon></span><p>+54 2226512086</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center py-4 text-slate-100'>
                <p className='text-md'>Work<span className='text-yellow-500'>AP</span>  |  Derechos reservados</p>
            </div>



        </footer>
    )
}

export default Footer