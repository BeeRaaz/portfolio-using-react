import React from 'react'

function Contact() {
  return (
    <div className="flex justify-between px-56 mt-40">
      <div><h2 className="text-center text-purple-600 text-6xl font-semibold">Contact Me</h2></div>
      <div className="basis-2/4 text-4xl">
        <form onSubmit="preventDefault">
          <div className="mb-10">
            <label htmlFor="Name">Your Name: </label>
            <input type="text" placeholder="Your Full Name" id="Name"  className="rounded-md outline-none border-none opacity-90 text-black"/>
          </div>
          <div className="mb-10">
            <label htmlFor="Email">Your Email: </label>
            <input type="email" placeholder="Your Email" id="Email"  className="rounded-md outline-none border-none opacity-90 text-black" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
