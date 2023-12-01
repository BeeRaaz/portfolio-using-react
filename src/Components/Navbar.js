import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between py-10 px-40 bg-gray-100 h-1/5">
        <div id="navLeft">
            <h1 className="text-5xl cursor-pointer">BeeRaaz</h1>
        </div>
        <div id="navRight" className="flex gap-14">
            <a href=""><h3 className="text-xl hover:text-gray-500">Home</h3></a>
            <a href=""><h3 className="text-xl hover:text-gray-500">About</h3></a>
            <a href=""><h3 className="text-xl hover:text-gray-500">Works</h3></a>
            <a href=""><h3 className="text-xl hover:text-gray-500">Contact</h3></a>
        </div>
    </nav>
    </>
  )
}

export default Navbar
