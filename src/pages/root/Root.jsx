import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
const Root = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default Root