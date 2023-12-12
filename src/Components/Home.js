import React from 'react'

const Home = () => {
  return (
    <>
      <main id="home" className="flex justify-between items-center px-52 py-48">
        <section id="leftSection" className="basis-2/4 text-left pl-12">
          <div>
            <h2 className="text-4xl font-bold py-2">Hey I'm,</h2>
            <h1 className=" text-7xl font-bold py-2 text-purple-600">Biraj Dulal</h1>
            <h2 className="text-4xl font-bold py-2">Based in Lalitpur, I'm on a mission to turn ideas into pixel-perfect reality.</h2>
          </div>
          
        </section>
        <section id="rightSection" className="basis-1/4">
          <img src="../images/Biraj-Bitmoji-png.png" alt="" className="w-72 rounded-full hover:animate-pulse"/>
        </section>
      </main>
    </>
  )
}

export default Home
