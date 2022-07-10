import React from 'react'
import Header from '../layout/header/header'
import Main from '../layout/main/main'
import { Route, Routes } from 'react-router-dom'
import Products from '../products/product'
import Details from '../details/details'

const Layout: React.FC = () => {
  return (
    <div className='flex-grow relative'>
      <Header />
      <Main>
        <div className="pt-5">
          <Routes>
            <Route path='/' />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<Details/>} />
          </Routes>
        </div>
      </Main>
    </div>
  )
}

export default Layout