import Link from 'next/link'
import React from 'react'
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu'

const Footer = () => {
  return (
    <footer className=" p-8 text-gray-900 bg-gray-100">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold mb-2">Bharat Reddy Illustrations</h3>
        <p>Creating visual stories that inspire</p>
      </div>
      <div className="flex space-x-4">
        <Link href="#" className="hover:text-gray-200"><LuLinkedin/></Link>
        <Link href="#" className="hover:text-gray-200"><LuInstagram /></Link>
        <Link href="#" className="hover:text-gray-200"><LuFacebook /></Link>
      </div>
    </div>
    
    <div className="mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} Bharat Reddy Illustrations. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer