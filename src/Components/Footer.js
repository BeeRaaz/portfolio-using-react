import React from 'react'

function Footer() {
  return (
    <div className="flex justify-between px-56 py-5 border-t-2 border-t-slate-800 items-center">
      <div>
        <h2 className="text-purple-600 text-3xl font-semibold">Powered By: BeeRaaz</h2>
      </div>
      <div>
      <img width="64" height="64" src="https://img.icons8.com/nolan/64/up-squared--v1.png" alt="up-squared--v1" className="cursor-pointer"/>
      </div>
    </div>
  )
}

export default Footer
