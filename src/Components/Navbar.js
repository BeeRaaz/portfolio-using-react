import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { act } from 'react-dom/test-utils';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {

  const [active, setActive] = useState(false)

  const changeColor = (event) => {
    event.currentTarget.style.color = "purple"
  }

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
    <nav id="navBar" className="flex justify-between items-center py-10 px-40 h-1/5 border-b-2 border-b-slate-800">

      <div id="navLeft">
      <h1 className="text-6xl cursor-pointer text-purple-700">BeeRaaz</h1>
      </div>

      {/* <div id="navMiddle" className="flex gap-1 items-center">
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin"/>
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/github.png" alt="github"/>
      </div> */}

      <div id="navRight" className="flex gap-14 align-center">
            <AnchorLink href="#home"><h3 className="text-2xl  hover:text-purple-500" onClick={changeColor}>Home</h3></AnchorLink>
            <AnchorLink href="#about"><h3 className="text-2xl  hover:text-purple-500" onClick={changeColor}>About</h3></AnchorLink>
            <AnchorLink href="#works"><h3 className="text-2xl  hover:text-purple-500" onClick={changeColor}>Works</h3></AnchorLink>
            <AnchorLink href="#contact"><h3 className="text-2xl  hover:text-purple-500" onClick={changeColor}>Contact</h3></AnchorLink>

      </div>
      
    </nav>
    
    </>
  )
}

export default Navbar
