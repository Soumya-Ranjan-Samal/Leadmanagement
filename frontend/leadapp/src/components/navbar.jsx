import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.jsx'

function Navbar() {
  return (
    <>
    <div className="navbar bg-white h-[10%] flex justify-between items-center shadow-lg shadow-blue-100 m-1 rounded-lg">
        <div className="heading text-4xl font-extrabold ml-14 text-violet-600 flex items-center hover:animate-ping">
          <div className="m-1 jump h-[1rem] w-[1rem] bg-blue-400 animate-bounce rounded-full"></div>
           Leads 
          <div className="m-1 jump h-[1rem] w-[1rem] bg-cyan-400 animate-spin"></div>
        </div>
        <div className="message">

        </div>
        <div className="opertions mr-12 ">
            <a href="" className=" rounded-md p-2 text-white pl-4 pr-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 "><Link to='/user'>Login</Link></a>
        </div>
    </div>
    </>
  )
}

export default Navbar