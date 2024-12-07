'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/' className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gray-900 flex items-center justify-center text-white font-bold text-xl rounded">
                BRI
              </div>
              <div className="ml-3">
                <div className="text-sm    md:text-lg font-semibold text-gray-800">Bharat Reddy Illustrations</div>
                <div className="text-sm text-gray-500">Hyderabad, India</div>
              </div>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="#services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="/work" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Work Sample</Link>
            <Link href="#connect" className="ml-4 px-4 py-2 text-sm font-medium text-gray-900 btn_primary">
              Let&apos;s Connect
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
            type='button'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <Link href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
            <Link href="/work" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Work Sample</Link>
            <Link href="#connect" className="btn_primary ml-3">Let&apos;s Connect</Link>
          </div>
        </div>
      )}
    </nav>
  )
}