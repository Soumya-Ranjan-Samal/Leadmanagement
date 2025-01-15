import { useState } from 'react';
import '../App.jsx'
import { useNavigate } from 'react-router-dom';

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
    const [edit,setEdit] = useState(false);

    const [formData, setFormData] = useState({ 
        name: props.name, 
        phoneNo: props.phoneNo, 
        businessType: props.businessType, 
        clientType: props.clientType, 
        offerBudget: props.offerBudget, 
        address: props.address, 
        confirmDate: props.confirmDate, 
        followUpDate: props.followUpDate, 
        referredBy: props.referredBy, 
        status: props.status, 
        important: props.important, 
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target; 
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value, }); 
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try { 
            const response = await fetch('http://localhost:8080/leads/update/'+props._id,{ 
            method: 'PATCH', 
            headers: { 'Content-Type': 'application/json', }, 
            body: JSON.stringify(formData), 
        }); if (response.ok) { 
            console.log('Lead added successfully');
            alert("Changes Saved")
            navigate("/");
        } else { 
            console.error('Failed to add lead'); 
        } } catch (error) { 
            console.error('Error:', error); 
        } };

        const handeldelete = async (e)=>{
            e.preventDefault();
            const result = await fetch('http://localhost:8080/leads/delete/'+props._id,{ 
            method: 'DELETE'
            });
            alert(props.name+" Has been deleted")
            navigate("/")
        }
        // console.log(formData.important);

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
                        <button className='rounded-md p-2 text-white w-[40%] text-center bg-cyan-500 shadow-lg shadow-cyan-500/50' onClick={()=>{setEdit(true)}}>Edit</button>
                        <a href="" onClick={handeldelete} className='rounded-md p-2 text-white w-[40%] text-center bg-red-500 shadow-lg shadow-red-400'>Delete</a>
                    </div>
                </div>
            </div>


            {   edit &&


<div className="viewbody fixed z-20 flex h-dvh w-full flex justify-center items-center -left-[0%] -top-[0%]">
<form action="" className='w-[64%] view'>
<div className="view p-4 bg-white h-[72%] w-[100%]  mb-[4%] rounded-xl text-slate-500">
<button onClick={()=> setEdit(false)} className='px-3 py-1.5 hover:text-red-600 hover:bg-white rounded-xl  shadow-red-500 shadow bg-red-600 text-white relative -left-4 -top-4 animate-bounce'>&#x2718;</button>
    <div className="row1 flex flex-col">
        <label htmlFor="name" className='text-slate-700'>Name:</label>
        <input type="text" placeholder='Name of the Organization'name='name' onChange={handleChange} value={formData.name} className='border border-slate-300 p-1.5 rounded-xl my-2' id='name' required />
    </div>
    <div className="row2 flex w-[100%]">
        <div className="col1 flex flex-col w-1/2 pr-1">
            <label htmlFor="phoneno"className='text-slate-700' >Phone no:</label>
            <input type="text" placeholder='Contact Number' name='phoneNo' onChange={handleChange} value={formData.phoneNo} className='text-blue-600 border border-slate-300 p-1.5 rounded-xl my-2' id='phoneno' required />
        </div>
        <div className="col2 flex flex-col w-1/2 pl-1">
            <label htmlFor="business" className='text-slate-700' >Business Type:</label>
            <input type="text" placeholder="Services or Products it provides" name='businessType' onChange={handleChange} value={formData.businessType} className='border border-slate-300 p-1.5 rounded-xl my-2' id='business' />
        </div>
    </div>
    <div className="row3 flex w-[100%]">
        <div className="col1 flex flex-col w-1/2 pr-1">
            <label htmlFor="clientType" className='text-slate-700' >Client Type:</label>
            <input type="text" placeholder='Kind of Clinet' name='clientType' onChange={handleChange} value={formData.clientType} className='border border-slate-300 p-1.5 rounded-xl my-2' id='clientType' />
        </div>
        <div className="col2 flex flex-col w-1/2 pl-1">
            <label htmlFor="offerBudget" className='text-slate-700'>Offered Budget:</label>
            <input type="text" placeholder='Offer made to this' name='offerBudget' onChange={handleChange} value={formData.offerBudget} className='border border-slate-300 p-1.5 rounded-xl my-2' id='offerBudget' />
        </div>
    </div>
    <div className="row4 flex flex-col">
        <label htmlFor="address" className='text-slate-700'>Address:</label>
        <input type="text" placeholder='Location' name='address' onChange={handleChange} value={formData.address} className='border border-slate-300 p-1.5 rounded-xl my-2' id='address' />
    </div>
    <div className="row5 flex ">
        <div className="col1 widthedit flex flex-col w-1/3 pl-1">
            <label htmlFor="confirmDate" className='text-slate-700'>Confirm Date:</label>
            <input type="date" name='confirmDate' onChange={handleChange} value={formData.confirmDate} className='border border-slate-300 p-1.5 rounded-xl my-2' id='confirmDate' />
        </div>
        <div className="col2 widthedit flex flex-col w-1/3 pl-1">
            <label htmlFor="followUpDate" className='text-slate-700'>Follow Up Date:</label>
            <input type="date" name='followUpDate' onChange={handleChange} value={formData.followUpDate} className='border border-slate-300 p-1.5 rounded-xl my-2' id='followUpDate' />
        </div>
        <div className="col3 widthedit flex flex-col w-1/3 pl-1">
            <label htmlFor="referredBy" className='text-slate-700'>Referrd By:</label>
            <input type="text" name='referredBy' onChange={handleChange} value={formData.referredBy} placeholder='If Any' className='border border-slate-300 p-1.5 rounded-xl my-2' id='referredBy' />
        </div>
    </div>

    <div className="status  flex flex-col">
            <div className="op">
                <input type="radio" name='status' onChange={handleChange} checked={formData.status === 'pending'} value='pending' id='pending'/>
                <label htmlFor="pending" className='text-yellow-400 mx-2'>pending</label>
            </div>
            <div className="op">
                <input type="radio" name='status' onChange={handleChange} checked={formData.status === 'follow up'} value='follow up' id='followup' />
                <label htmlFor="followup" className='text-orange-400 mx-2'>follow up</label>
            </div>
            <div className="op">
                <input type="radio" name='status' onChange={handleChange} checked={formData.status === 'interested'} value='interested' id='interested' />
                <label htmlFor="interested" className='text-green-400 mx-2'>interested</label>
            </div>
            <div className="op">
                <input type="radio" name='status' onChange={handleChange} checked={formData.status === 'conform'} value='conform' id='conform' />
                <label htmlFor="conform" className='text-cyan-400 mx-2'>conform</label>
            </div>
        </div>
    
    <div className="row2 flex justify-between mt-[2%] text-md font-semibold">
        <div className="important">

            <input type="checkbox" name='important' onChange={handleChange} checked={formData.important} className='h-4 w-4 ml-4' />
            <label htmlFor="important"><span className='text-red-600 ml-1'>!Important</span></label>
            
        </div>
        
        <a href="" className=' rounded-md p-2 text-white w-[40%] text-center bg-cyan-500 shadow-lg shadow-cyan-500/50' onClick={handleSubmit}>Save Changes</a>
    </div>
</div>
</form>
</div>

            }
            </>
        }
    </>
  )
}


export default Homepagecard