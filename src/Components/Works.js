import React from 'react'
import ProjectBox from './ProjectBox'

function Works() {
  return (
    <>
    <div>
        <div><h2 className="text-center text-purple-600 text-6xl font-semibold mt-16">Works</h2></div>
        <div className="flex justify-between px-56 my-20">
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
        </div>
        <div className="flex justify-between px-56 my-20">
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
        </div>
    </div>
    </>
  )
}

export default Works
