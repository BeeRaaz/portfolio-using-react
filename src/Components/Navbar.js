import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isNavbarMenuVisible, setNavbarMenuVisible] = useState(false);
    

    const showMenu = () => {
      setNavbarMenuVisible(!isNavbarMenuVisible);
    }

    const closeMenu = () => {
      setNavbarMenuVisible(false);
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
    <nav className="flex justify-between items-center py-10 px-40 h-1/5 border-b-2 border-b-slate-800">
      <div id="navLeft">
      <h1 className="text-6xl cursor-pointer text-purple-700">BeeRaaz</h1>
      </div>
      <div id="navMiddle" className="flex gap-1 items-center">
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin"/>
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/github.png" alt="github"/>
      </div>
      <div id="navRight">
        {
          isNavbarMenuVisible ? <img width="64" height="64" src="https://img.icons8.com/sf-black-filled/64/7950F2/multiply.png" alt="multiply" className="cursor-pointer" onClick={showMenu}/> :
          <img width="64" height="64" src="https://img.icons8.com/sf-black/64/7950F2/menu.png" alt="menu" className="cursor-pointer" onClick={showMenu}/>
        }
        
      </div>
    </nav>
    {
    isNavbarMenuVisible ? <div className="h-screen w-screen bg-purple z-10">
        <div className="w-fit absolute top-96 right-32 flex flex-col">
        <AnchorLink href="#home" className="text-8xl text-purple-500 py-3 decoration-from-font underline-offset-8 hover:underline hover:text-cyan-100 cursor-pointer" onClick={closeMenu}>Home</AnchorLink>
        <AnchorLink href="#about" className="text-8xl text-purple-500 py-3 decoration-from-font underline-offset-8 hover:underline hover:text-cyan-100 cursor-pointer" onClick={closeMenu}>About</AnchorLink>
        <AnchorLink to="#works" className="text-8xl text-purple-500 py-3 decoration-from-font underline-offset-8 hover:underline hover:text-cyan-100 cursor-pointer" onClick={closeMenu}>Works</AnchorLink>
        <AnchorLink to="#contact" className="text-8xl text-purple-500 py-3 decoration-from-font underline-offset-8 hover:underline hover:text-cyan-100 cursor-pointer" onClick={closeMenu}>Contact</AnchorLink>
        </div>
    </div> : null
    }
    </>
  )
}

export default Navbar
