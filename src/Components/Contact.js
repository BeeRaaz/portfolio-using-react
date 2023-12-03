import React from 'react'

function Contact() {
  return (
    <div className="flex justify-between px-56 my-40">
      <div>
        <h2 className="text-center text-purple-600 text-6xl font-semibold">Contact Me</h2>
        <div className="flex mt-20">
          <img width="150" height="150" src="https://img.icons8.com/pulsar-line/96/7950F2/mail.png" alt="mail"/>
          <div>
            <h2 className="text-3xl mt-20">You can mail me at: </h2>
            <h2 className="text-purple-500 text-4xl">dbiraj33@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className="basis-2/5 text-4xl">
        <h2 className="text-left text-3xl text-purple-600 mb-10">Leave a Message for me!</h2>
        <form onSubmit="preventDefault">
          <div className="mb-10">
            <label htmlFor="Name">Your Name: </label> <br />
            <input type="text" placeholder="Your Full Name" id="Name" required className="rounded-md outline-none border-none opacity-90 text-black w-full p-2"/>
          </div>
          <div className="mb-10">
            <label htmlFor="Email">Your Email: </label> <br />
            <input type="email" placeholder="Your Email" id="Email" required className="rounded-md outline-none border-none opacity-90 text-black w-full p-2" />
          </div>
          <div className="mb-10">
            <label htmlFor="Number">Your Number: </label> <br />
            <input type="number" placeholder="Your Number" id="Number" required className="rounded-md outline-none border-none opacity-90 text-black w-full p-2" />
          </div>
          <div className="mb-10">
            <label htmlFor="Message">Your Message: </label> <br />
            <textarea type="text" placeholder="Your Message" id="Message" rows="5" required className="rounded-md outline-none opacity-90 text-black w-full p-2" />
          </div>
          <button type="submit" className="bg-purple-700 p-3 rounded-2xl w-full hover:text-purple-500 hover:bg-white transition-all duration-300">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
