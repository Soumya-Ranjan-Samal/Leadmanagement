import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.jsx'

function Sidebar(props) {

  return (
    <>
    <div className="sidebar h-[100%] w-[20%] bg-white flex flex-col justify-between shadow-lg shadow-blue-100 m-1 mt-0 mr-0 rounded-lg z-10">
        <div className="font-bold navigator flex flex-col w-full m-6 ml-0 h-[50%] justify-evenly">
            <a href="" className={props.open=="new" ? "p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white new" :  "p-2 bg-blue-400 w-[90%] rounded-r-xl text-center text-white shadow-blue-500/50 shadow-md"} ><Link to="/">🏠&nbsp;Home</Link></a>
            <a href="" className={props.open=="new" ? "p-2 bg-blue-400 w-[90%] rounded-r-xl text-center text-white shadow-blue-500/50 shadow-md" :  "p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white new"}><Link to="/new">🆕&nbsp;New</Link></a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Follow up</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Important</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Confirm</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Onboard</a>
            <a href="" className="p-2  w-[90%] rounded-r-xl text-center text-blue-400 hover:bg-sky-400 hover:text-white">Rejected</a>
        </div>
        <div className="text-violet-400 font-semibold text-sm p-2">@vanurtech.pvt.lt</div>
    </div>
    </>
  )
}

export default Sidebar