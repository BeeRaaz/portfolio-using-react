import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* <nav className="flex justify-between py-10 px-40 h-1/5 border-b-2 border-b-slate-800 ">
        <div id="navLeft">
            <h1 className="text-5xl cursor-pointer">BeeRaaz</h1>
        </div>
        <div id="navRight" className="flex gap-14">
            <a href=""><h3 className="text-xl hover:text-gray-500">Home</h3></a>
            <a href=""><h3 className="text-xl hover:text-gray-500">About</h3></a>
            <a href=""><h3 className="text-xl hover:text-gray-500">Works</h3></a>
            <a href=""><h3 className="text-xl hover:text-gray-500">Contact</h3></a>
        </div>
    </nav> */}
    <nav className="flex justify-between items-center py-10 px-40 h-1/5 border-b-2 border-b-slate-800">
      <div id="navLeft">
      <h1 className="text-6xl cursor-pointer text-purple-700">BeeRaaz</h1>
      </div>
      <div id="navMiddle" className="flex gap-1 items-center">
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin"/>
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/github.png" alt="github"/>
      </div>
      <div id="navRight">
        <img width="64" height="64" src="https://img.icons8.com/sf-black/64/7950F2/menu.png" alt="menu"/>
      </div>
    </nav>
    </>
  )
}

export default Navbar
