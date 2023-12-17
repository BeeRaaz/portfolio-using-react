import React from 'react'
import ProjectBox from './ProjectBox'

function Works() {
  return (
    <>
    <div id="works">
        <div><h2 className="text-center text-purple-600 text-6xl font-semibold my-20">Works</h2></div>
        <div className="text-left text-5xl">
           <ProjectBox /> 
        </div>
    </div>
    </>
  )
}

export default Works
