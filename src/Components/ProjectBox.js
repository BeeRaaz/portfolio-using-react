import React from 'react'

function ProjectBox() {
  return (
    <div className=" h-80 w-96 rounded-3xl relative">
      <img src="../images/Background-Changer-Image.png" alt="" className="h-full w-full object-cover hover:blur-sm rounded-3xl" />
      <div className="w-full flex justify-around text-2xl mt-5 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 invisible" onMouseOver={"visibility:visible"}>
        <button>Live Preview</button>
        <button>View Code</button>
      </div>
    </div>
  )
}

export default ProjectBox
