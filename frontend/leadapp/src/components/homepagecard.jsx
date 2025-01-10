import { useState } from 'react'
import '../App.jsx'



function Homepagecard(props) {
  return (
    <>
        <div className="p-4 homepagecard w-[97%] m-4 mb-0 rounded-lg hover:shadow-lg flex justify-evenly items-center text-slate-500 border">
            <div className="col1">
                Name&nbsp;&nbsp;&nbsp;&nbsp;  : {props.name} <br /><br />
                Address&nbsp;: {props.address.length<=15?props.address:props.address.slice(0,15)+"..."}
            </div>
            <div className="col2">
                Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.status} <br /><br />
                Phone no.&nbsp;: {props.phoneNo}
            </div>
            <div className="col3">
                Business type&nbsp;: {props.businessType} <br /><br />
                Client type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.clientType}
            </div>
        </div>
    </>
  )
}


export default Homepagecard