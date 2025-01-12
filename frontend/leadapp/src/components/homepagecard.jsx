import { useState } from 'react';
import '../App.jsx'

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

function Homepagecard(props) {

    const [show,useShow] = useState(false);

  return (
    <>
        <div className="p-4 homepagecard w-[97%] m-4 mb-0 rounded-lg hover:shadow-lg flex items-center text-slate-500 border md:flex-row flex-col" onClick={()=> useShow(true)}>
            <div className="col1 homecardcol ml-[10%]">
                Name&nbsp;&nbsp;&nbsp;&nbsp;  : {props.name} <br /><br />
                Address&nbsp;: {props.address.length<=15?props.address:props.address.slice(0,12)+"..."}
            </div>
            <div className="col2 homecardcol ml-[10%]">
                Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <Status status={props.status}></Status> <br /><br />
                Phone no.&nbsp;: {props.phoneNo}
            </div>
            <div className="col3 homecardcol ml-[10%] mr-[10%]">
                Business type&nbsp;: {props.businessType} <br /><br />
                Client type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.clientType}
            </div>
            <Important val={props.important}></Important>
        </div>
        {
           show && <>
            <div className="textedit blackout h-dvh w-full bg-black z-10 opacity-35 fixed -left-[0%] -top-[0%]">  </div>
            <div className="viewbody fixed z-20 flex h-dvh w-full flex justify-center items-center -left-[0%] -top-[0%]">
                <div className="view bg-white h-[70%] w-[60%] mb-[5%] rounded-xl text-slate-500">
                    <button onClick={()=> useShow(false)} className='px-3 py-1.5 hover:text-red-600 hover:bg-white rounded-xl  shadow-red-500 shadow bg-red-600 text-white relative -left-4 -top-4 animate-bounce'>&#x2718;</button>
                    <h1 className='font-semibold text-3xl text-center marginedit mx-16 pb-4 border-b border-cyan-500 mb-6'>{props.name}</h1>
                    <div className="row1 flex justify-between marginedit items-center mx-16">
                        <div className="col1 w-1/2 text-lg">
                            Phone no.:&nbsp;<span className='text-sky-700'>{props.phoneNo}</span> <br /><br />
                            Client type:&nbsp;{props.clientType} <br /><br />
                            Address:&nbsp;{props.address} <br /><br />
                            Follow Up Date:&nbsp;{props.followUpDate} <br /><br />
                            Refered By:&nbsp;{props.referredBy}
                        </div>
                        <div className="col2 w-1/2 text-lg">
                            Status:&nbsp;<Status status={props.status}></Status> <br /><br />
                            Business Type:&nbsp;{props.businessType} <br /><br />
                            Offered Budget:&nbsp;{props.offerBudget} <br /><br />
                            Conform Date:&nbsp;{props.confirmDate} <br /><br />
                            <Important val={props.important}></Important>
                        </div>
                    </div>
                    <div className="row2 flex justify-evenly mt-[4%] text-md font-semibold">
                        <a href="" className='rounded-md p-2 text-white w-[40%] text-center bg-cyan-500 shadow-lg shadow-cyan-500/50'>Edit</a>
                        <a href="" className='rounded-md p-2 text-white w-[40%] text-center bg-red-500 shadow-lg shadow-red-400'>Delete</a>
                    </div>
                </div>
            </div>
            </>
        }
    </>
  )
}


export default Homepagecard