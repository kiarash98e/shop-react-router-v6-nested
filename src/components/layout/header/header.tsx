/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Logo from '../../logo/logo'
import { Link } from 'react-router-dom'
import { IoMenuOutline } from 'react-icons/io5'
import { useShop } from '../../../context/uiContext'

const header:React.FC = () => {

  const { openSidebar } = useShop()
  return (
    <header className='h-16 sm:h-20 lg:h-24 w-full relative z-[1000]'>
        <div className="innerSticky w-full h-16 sm:h-20 lg:h-24 fixed bg-neutral-300 z-20 ps-2 md:ps-0 lg:ps-16 ps-2 lg:pe-6">
            <div className="flex items-center justify-between w-full h-full max-w-[1920px] mx-auto px-3 md:px-12">
                <div className='flex'>
                    <Logo title={"citizen"} />
                </div>
                <div className="hidden lg:flex flex-wrap w-full h-full mx-auto md:ps-5 max-w-7xl">
                  <nav className='w-full h-full flex flex-wrap mx-auto items-center'>
                    <h3 className='text-rose-700 uppercase text-sm md:text-base lg:text-lg px-2 font-satisfy font-bold'>
                      <Link to={"/"}>Home</Link>
                    </h3>
                    <h3 className='text-rose-700 uppercase text-sm md:text-base lg:text-lg px-2 font-satisfy font-bold'>
                      <Link to={"/products"}>Products</Link>
                    </h3>  
                  </nav>
                </div>
                <div className="flex w-auto h-auto md:hidden px-3">
                  <IoMenuOutline size={24} className="text-heading cursor-pointer" onClick={openSidebar}/>
                 
                </div>
            </div>
        </div>
    </header>
  )
}

export default header