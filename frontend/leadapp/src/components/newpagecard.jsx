import '../App.css';
import { useState } from 'react';

function Important(props){
    if(props.val===true){
        return (
        <><div className="imp text-red-600">!Important</div></>
    )
    }else{
        return (
        <><div className="imp text-white">!vanurtech</div></>
    )
    }
}

function Status(props){
    if(props.status=="pending"){
        return (<span className='text-yellow-400'>Pending</span>)
    }else if(props.status=="follow up"){
        return (<span className='text-orange-400'>Follow up</span>)
    }else if(props.status=="interested"){
        return (<span className='text-green-400'>Interested</span>)
    }else if(props.status=="on board"){
        return (<span className='text-blue-400'>On board</span>)
    }else if(props.status=="conform"){
        return (<span className='text-teal-400'>Conform</span>)
    }else{
        return (<span>Un Known</span>)
    }
}


function Newpagecard(props) {

    const [show,useShow] = useState(false);

  return (
    <>
        <div className="rows flex m-2 mt-4">
            <input type="checkbox" className='mx-2 my-3 h-4 w-4' />
            <div className="count rounded-full bg-cyan-500 text-white px-4 py-2">
                {props.count}
            </div>
            <div className="names w-[80%] p-1.5 text-slate-700 pl-4 flex justify-between pr-4 border border-slate-300 rounded-full mx-2">
                <span>{props.name}</span><span><Important val={props.important}></Important></span>
            </div>
            <button className='py-2 px-[4%] rounded-full text-white bg-violet-500' onClick={()=> useShow(true)}>Edit</button>
        </div>
        {
           show && 
           <>
            <div className="textedit blackout h-dvh w-full bg-black z-20 opacity-35 fixed -left-[0%] -top-[0%]">  </div>
            <div className="viewbody fixed z-20 flex h-dvh w-full flex justify-center items-center -left-[0%] -top-[0%]">
                <form action="" className='w-[60%] view'>
                <div className="view p-4 bg-white h-[72%] w-[100%] mb-[4%] rounded-xl text-slate-500">
                    <button onClick={()=> useShow(false)} className='px-3 py-1.5 hover:text-red-600 hover:bg-white rounded-xl  shadow-red-500 shadow bg-red-600 text-white relative -left-4 -top-4 animate-bounce'>&#x2718;</button>
                    <div className="row1 flex flex-col">
                        <label htmlFor="name" className='text-slate-700'>Name:</label>
                        <input type="text" defaultValue={props.name} className='border border-slate-300 p-1.5 rounded-xl my-2' id='name' />
                    </div>
                    <div className="row2 flex w-[100%]">
                        <div className="col1 flex flex-col w-1/2 pr-1">
                            <label htmlFor="phoneno"className='text-slate-700' >Phone no:</label>
                            <input type="text"  defaultValue={props.phoneNo} className='text-blue-600 border border-slate-300 p-1.5 rounded-xl my-2' id='phoneno' />
                        </div>
                        <div className="col2 flex flex-col w-1/2 pl-1">
                            <label htmlFor="business" className='text-slate-700'>Business Type:</label>
                            <input type="text" defaultValue={props.businessType} className='border border-slate-300 p-1.5 rounded-xl my-2' id='business' />
                        </div>
                    </div>
                    <div className="row3 flex w-[100%]">
                        <div className="col1 flex flex-col w-1/2 pr-1">
                            <label htmlFor="clientType" className='text-slate-700' >Client Type:</label>
                            <input type="text"  defaultValue={props.clientType} className='border border-slate-300 p-1.5 rounded-xl my-2' id='clientType' />
                        </div>
                        <div className="col2 flex flex-col w-1/2 pl-1">
                            <label htmlFor="offerBudget" className='text-slate-700'>Offered Budget:</label>
                            <input type="text" defaultValue={props.offerBudget ? props.offerBudget: "Not set"} className='border border-slate-300 p-1.5 rounded-xl my-2' id='offerBudget' />
                        </div>
                    </div>
                    <div className="row4 flex flex-col">
                        <label htmlFor="address" className='text-slate-700'>Address:</label>
                        <input type="text" defaultValue={props.address?props.address:"Not set"} className='border border-slate-300 p-1.5 rounded-xl my-2' id='address' />
                    </div>
                    <div className="row5 flex ">
                        <div className="col1 widthedit flex flex-col w-1/3 pl-1">
                            <label htmlFor="confirmDate" className='text-slate-700'>Confirm Date:</label>
                            <input type="date" defaultValue={props.confirmDate} className='border border-slate-300 p-1.5 rounded-xl my-2' id='confirmDate' />
                        </div>
                        <div className="col2 widthedit flex flex-col w-1/3 pl-1">
                            <label htmlFor="followUpDate" className='text-slate-700'>Follow Up Date:</label>
                            <input type="date" defaultValue={props.followUpDate} className='border border-slate-300 p-1.5 rounded-xl my-2' id='followUpDate' />
                        </div>
                        <div className="col3 widthedit flex flex-col w-1/3 pl-1">
                            <label htmlFor="referredBy" className='text-slate-700'>Referrd By:</label>
                            <input type="text" defaultValue={props.referredBy? props.referredBy: "No Data"} className='border border-slate-300 p-1.5 rounded-xl my-2' id='referredBy' />
                        </div>
                    </div>
                    
                    <div className="row2 flex justify-between mt-[4%] text-md font-semibold">
                        <div className="important">

                            <input type="checkbox" className='h-4 w-4 ml-4' checked={props.important}/>
                            <label htmlFor="important"><span className='text-red-700 ml-1'>!Important</span></label>
                            
                        </div>
                        <a href="" className=' rounded-md p-2 text-white w-[40%] text-center bg-cyan-500 shadow-lg shadow-cyan-500/50'>Save Changes</a>
                    </div>
                </div>
                </form>
            </div>
            </>
        }
    </>
  )
}

export default Newpagecard;

