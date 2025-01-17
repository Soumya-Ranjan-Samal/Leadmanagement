import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';


function Add() {

    const [formData, setFormData] = useState({ name: '', phoneNo: '', businessType: '', clientType: '', offerBudget: '', address: '', confirmDate: '', followUpDate: '', referredBy: '', status: '', important: false, });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target; 
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value, }); 
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try { 
            const response = await fetch('http://localhost:8080/leads/new/add',{ 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("myToken")}`
             }, 
            body: JSON.stringify(formData), 
        }); 

        const jsonData = await response.json();

        if(jsonData.error == "doLogin"){
            alert("Please log in to access");
            navigate("/user");
        }
        
        if (response.ok) { 
            console.log('Lead added successfully');
            navigate("/");
        } else { 
            console.error('Failed to add lead'); 
        } } catch (error) { 
            console.error('Error:', error); 
        } };

  return (
    <>
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
            <div className="hometop m-2 h-[10%] flex items-center justify-between">
                <div className="heading text-3xl font-bold text-violet-600 ml-4">:New/Add</div>
                <div className="help">
                    <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white shadow-md mr-2 shadow-blue-200'>?</a>
                </div>
            </div>

                <form action="" className='w-[100%] editview'>
                <div className="editview p-4 bg-white h-[72%] w-[100%] mb-[4%] rounded-xl text-slate-500">
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
                                <input type="radio" name='status' onChange={handleChange} checked={formData.status === 'confirm'} value='confirm' id='confirm' />
                                <label htmlFor="confirm" className='text-cyan-400 mx-2'>confirm</label>
                            </div>
                        </div>
                    
                    <div className="row2 flex justify-between mt-[2%] text-md font-semibold">
                        <div className="important">

                            <input type="checkbox" name='important' onChange={handleChange} checked={formData.important} className='h-4 w-4 ml-4' />
                            <label htmlFor="important"><span className='text-red-600 ml-1'>! Click if Important</span></label>
                            
                        </div>
                        
                        <a href="" className=' rounded-md p-2 text-white md:w-[20%] w-[40%] text-center bg-cyan-500 shadow-lg shadow-cyan-500/50' onClick={handleSubmit}>Add This Lead</a>
                    </div>
                </div>
                </form>
            </div>

    </>
  )
}

export default Add;
