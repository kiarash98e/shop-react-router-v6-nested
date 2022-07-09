import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ManagedDrawer from './components/drawer/managed-drawer'
import Layout from './components/layout/layout'
import { useShop } from './context/uiContext'


const App:React.FC = () => {
  
  const { closeSidebar } = useShop()

  return (
    <>
      <Layout/>
      <ManagedDrawer>
        <div className="w-full h-full flex flex-col">
          <button className='cursor-pointer w-6 h-6 py-1 px-5'>
            <IoCloseOutline size={25} className="text-heading" onClick={closeSidebar}/>
          </button>
          <nav className='w-full h-full flex flex-col mx-auto px-12'>
            <h3 className='text-rose-700 uppercase text-sm md:text-base lg:text-lg ps-2 font-satisfy font-bold'>
              <Link to={"/"} onClick={closeSidebar}>Home</Link>
            </h3>
            <h3 className='text-rose-700 uppercase text-sm md:text-base lg:text-lg ps-2 font-satisfy font-bold'>
              <Link to={"/products"} onClick={closeSidebar}>Products</Link>
            </h3>
          </nav>
        </div>
      </ManagedDrawer>
    </>
  )
}

export default App
