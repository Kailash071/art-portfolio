import React from 'react'
import Header from '../_components/UI/Header'
import Footer from '../_components/UI/Footer'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    // <div className='container mx-auto'>
        <div className="flex flex-col min-h-screen">
        <Header/>
        {children}
        <Footer/>
    </div>
    // </div>
  )
}

export default layout