import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray'>

                    <span className='text-3xl text-yellow-400 mr-1 pt-2'>

                        <ion-icon name="logo-ionic"></ion-icon>

                    </span>
                    Work<span className='text-yellow-500'>AP</span>
                </div>

                    <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>

                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    
                    </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-200 md:bg-white md:z-auto z-[-1] left-0 w-full md:pl-0 pl-9 ease-in md:w-auto ${open ? 'top-20' : 'top-[-490px]'} transition-all md:opacity-100`}>
                    <li className='md:ml-8 text-xl md:text-lg md:my-0 my-7'>
                        <a href="" className='text-gray-800 hover:text-gray-400 duration-500'>Nosotros</a></li>
                    <li className='md:ml-8 text-xl md:text-lg md:my-0 my-7'>
                        <a href="" className='text-gray-800 hover:text-gray-400 duration-500'>Servicios</a></li>
                    <li className='md:ml-8 text-xl md:text-lg md:my-0 my-7'>
                        <a href="" className='text-gray-800 hover:text-gray-400 duration-500'>Contacto</a></li>

                    <Button>Contacto</Button>
                </ul>

            </div>

        </div>
    )
}

export default Navbar