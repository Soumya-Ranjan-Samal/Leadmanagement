import '../App.css';
import { useState,useEffect } from 'react';


function Onboardcard(props) { 
    let [color,setcolor]='';
    function Color(){
        switch(props.status){
            case "Pending": color=" text-yellow-400 hover:bg-yellow-400 hover:text-white";break;
            case "Follow up": color = " text-orange-400 hover:bg-orange-400 hover:text-white";break;
            case "Interested": color = " text-blue-400 hover:bg-blue-400 hover:text-white";break;
            case "Confirm": color = " text-teal-400 hover:bg-teal-400 hover:text-white";break;
            default: break;
        }
    }
    Color()
  
  return (
    <>
        <div className={"flex justify-around items-center hover:shadow-lg m-1 h-[40%] w-[45%] border border-slate-300 rounded-xl"+color}>
            <span className='font-bold  text-4xl'><span>{props.status}: </span>{props.count}</span>
        </div>
    </>
  )
}

export default Onboardcard;

