import React from 'react'
import {Outlet} from 'react-router-dom'

import Header from '../src/component/Header/Header.jsx'
import Footer from '../src/component/Footer/Footer.jsx'



function Layout() {
  return (
    <>
      <Header />
      <Outlet />  
      <Footer />

    </>
  )
}

export default Layout