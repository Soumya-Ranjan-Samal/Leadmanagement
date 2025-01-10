import { useState } from 'react'
import '../App.jsx'

function Sidebar() {
  return (
    <>
    <div className="sidebar h-[100%] w-[20%] bg-white flex flex-col justify-between shadow-lg shadow-blue-100 m-1 mt-0 mr-0 rounded-lg">
        <div className="font-bold navigator flex flex-col w-full m-6 ml-0 h-[50%] justify-evenly">
            <a href="" className="p-2 bg-blue-400 w-[90%] rounded-r-xl text-center text-white shadow-blue-500/50 shadow-md" >Home</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">New</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Follow up</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Important</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Confirm</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Onboard</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Rejected</a>
        </div>
        <div className="text-violet-400 font-bold text-sm">@vanurtech.pvt.lt</div>
    </div>
    </>
  )
}

export default Sidebar