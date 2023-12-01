import React from 'react'

const Home = () => {
  return (
    <>
      <main className="flex justify-between items-center p-52">
        <section id="leftSection" className="basis-2/5 text-center">
          <div>
            <h2 className="text-4xl font-bold p-2">Hi There.</h2>
            <h1 className="text-4xl font-bold p-2">This is Biraj Dulal!!</h1>
            <h2 className="text-4xl font-bold p-2">Future Frontend Developer :)</h2>
          </div>
          
        </section>
        <section id="rightSection" className="basis-1/5">
          <img src="../images/BirajDulal_Photo.jpg" alt="" className="w-72 rounded-3xl"/>
        </section>
      </main>
    </>
  )
}

export default Home
