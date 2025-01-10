import { useState } from 'react'
import Homepagecard from './homepagecard.jsx'
import '../App.jsx'
import '../others/home.js'



function Home() {

    const clients = [
        { name: "Aarav Gupta", address: "123 Mumbai Street, Mumbai, Maharashtra", phoneNo: "9876543210", status: "active", businessType: "retail", clientType: "premium" },
        { name: "Priya Singh", address: "456 Delhi Road, Delhi, Delhi", phoneNo: "8765432109", status: "inactive", businessType: "manufacturing", clientType: "standard" },
        { name: "Rohan Das", address: "789 Kolkata Avenue, Kolkata, West Bengal", phoneNo: "7654321098", status: "active", businessType: "service", clientType: "premium" },
        { name: "Simran Kaur", address: "101 Bangalore Boulevard, Bangalore, Karnataka", phoneNo: "6543210987", status: "active", businessType: "technology", clientType: "premium" },
        { name: "Vikram Patel", address: "202 Chennai Lane, Chennai, Tamil Nadu", phoneNo: "5432109876", status: "inactive", businessType: "retail", clientType: "standard" },
        { name: "Aditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard" },
        { name: "Neha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium" },
        { name: "Karan Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard" },
        { name: "Ananya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium" },
        { name: "Isha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium" },
        { name: "Rajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard" },
        { name: "Sneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "follow up", businessType: "service", clientType: "premium" }
    ];
    


  return (
    <>
    <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">Home</div>
            <div className="search">
                <input type="text" id='search' placeholder='Search here' className="border border-slate-200 rounded-full m-2 p-2 w-96"/>
                <label htmlFor="search" className="py-2 px-4 bg-cyan-500 rounded-full  text-white hover:shadow-lg hover:shadow-cyan-500/50"><button>Search</button></label>
            </div>
            <div className="help">
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
        <div className="filter flex justify-evenly border-b border-slate-200 m-6 mb-0">
            <a href="#" className='p-2 text-base text-purple-500 homenav a'>Important</a>
            <a href="#" className='p-2 text-base text-purple-500 homenav b'>Pending</a>
            <a href="#" className='p-2 text-base text-purple-500 homenav c'>Intersted</a>
            <a href="#" className='p-2 text-base text-purple-500 homenav d' >Follow up</a>
            <a href="#" className='p-2 text-base text-purple-500 homenav e'>Conform</a>
        </div>
        <div className="scrolview h-[79%] rounded-lg flex flex-col">
            {clients.map((ob)=>{return <Homepagecard 
                name={ob.name}
                address={ob.address}
                phoneNo={ob.phoneNo}
                status={ob.status}
                businessType={ob.businessType}
                clientType={ob.clientType}
            ></Homepagecard>})}
        </div>
    </div>
    </>
  )
}


export default Home