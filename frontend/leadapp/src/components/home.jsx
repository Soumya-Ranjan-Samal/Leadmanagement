import { useState } from 'react'
import Homepagecard from './homepagecard.jsx'
import '../App.jsx'
import '../others/home.js'
import '../others/navigatebuttom.css';


function Home() {

    const clients = [
        { name: "Aarav Gupta", address: "123 Mumbai Street, Mumbai, Maharashtra", phoneNo: "9876543210", status: "follow up", businessType: "retail", clientType: "premium", important: true, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-20", confirmDate: null},
        { name: "Priya Singh", address: "456 Delhi Road, Delhi, Delhi", phoneNo: "8765432109", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Neha Verma", followUpDate: null, confirmDate: null },
        { name: "Rohan Das", address: "789 Kolkata Avenue, Kolkata, West Bengal", phoneNo: "7654321098", status: "interested", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Vikram Patel", followUpDate: "2025-01-15", confirmDate: null  },
        { name: "Simran Kaur", address: "101 Bangalore Boulevard, Bangalore, Karnataka", phoneNo: "6543210987", status: "interested", businessType: "technology", clientType: "premium", important: false, offerBudget: 55000, referredBy: "Sneha Rao", followUpDate: "2025-01-18", confirmDate: null  },
        { name: "Vikram Patel", address: "202 Chennai Lane, Chennai, Tamil Nadu", phoneNo: "5432109876", status: "pending", businessType: "retail", clientType: "standard", important: false, offerBudget: 25000, referredBy: "Aditya Mehta", followUpDate: null, confirmDate: null  },
        { name: "Aditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard", important: true, offerBudget: 40000, referredBy: "Priya Singh", followUpDate: null, confirmDate: null },
        { name: "Neha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium", important: true, offerBudget: 50000, referredBy: "Rohan Das", followUpDate: "2025-01-12", confirmDate: null  },
        { name: "Karan Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard", important: false, offerBudget: 35000, referredBy: "Ananya Roy", followUpDate: "2025-01-22", confirmDate: null },
        { name: "Ananya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium", important: true, offerBudget: 60000, referredBy: "Isha Kapoor", followUpDate: null, confirmDate: "2025-01-05"  },
        { name: "Isha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-17", confirmDate: null  },
        { name: "Rajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Sneha Rao", followUpDate: null, confirmDate: null  },
        { name: "Sneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "follow up", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Rohan Das", followUpDate: "2025-01-21", confirmDate: null  },
        { name: "Aditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard", important: false, offerBudget: 35000, referredBy: "Simran Kaur", followUpDate: null, confirmDate: null },
        { name: "Neha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Vikram Patel", followUpDate: "2025-01-13", confirmDate: null  },
        { name: "Karan Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard", important: true, offerBudget: 40000, referredBy: "Ananya Roy", followUpDate: "2025-01-19", confirmDate: null },
        { name: "Ananya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium", important: false, offerBudget: 55000, referredBy: "Isha Kapoor", followUpDate: null, confirmDate: "2025-01-04"  },
        { name: "Isha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-16", confirmDate: null  },
        { name: "Rajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Sneha Rao", followUpDate: null, confirmDate: null },
        { name: "Sneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "interested", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Rohan Das", followUpDate: "2025-01-14", confirmDate: null  }
    ];
    

    const [filter,setFilter]=useState('important');
    const [search,setSearch]=useState("");

    function changeFilter(type){
        setFilter(type);
    }

    function changecolor(no){
        let homenav = document.querySelectorAll(".homenav");
        let scrolview = document.querySelector(".scrolview");
        for(let i =0 ; i < homenav.length;i++){
            if(i==no){
                homenav[i].classList.add("border-b-4")
                homenav[i].classList.add("border-purple-500")
            }else{
                homenav[i].classList.remove("border-b-4")
                homenav[i].classList.remove("border-purple-500")
            }
        }   
    }
    
    let usedClient= clients.filter((client) => {
        if(filter==="important"){
            return client.important===true;
        }
        return client.status===filter;
    });


    function changeSearch(){
        let s = document.querySelector("input");
        let val = s.value;
        setSearch(val);
        // console.log(s.value);
        // for(let i = 0 ; i<clients.length;i++){
        //     console.log(clients[i].name.trim().replace(" ","").toLowerCase().includes(s.value));
        // }
    }

    if(search.length>0){
        usedClient = clients.filter((client)=>{
            return client.name.trim().replace(" ","").toLowerCase().includes(search.replace(" ",'').trim().toLowerCase());
        })
    }
    
  return (
    <>
    <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">Home</div>
            <div className="search">
                <input onChange={()=>{
                changeSearch();
                }} type="text" id='search' placeholder='Search here' className="border searchinput border-slate-200 rounded-full m-2 p-2 w-96"/>
                <label htmlFor="search" className=" searchbut py-2 px-4 bg-cyan-500 rounded-full  text-white hover:shadow-lg hover:shadow-cyan-500/50"><button>Search</button></label>
            </div>
            <div className="help">
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
        {   !search.length &&
        <div className="textedit filter flex justify-evenly border-b border-slate-200 m-6 mb-0">
            <button className='p-2 text-base text-purple-500 homenav border-b-4 border-purple-500' onClick={()=>{changeFilter("important");changecolor("0")}}>Important</button>
            <button className='p-2 text-base text-purple-500 homenav' onClick={()=>{changeFilter("pending");changecolor("1")}}>Pending</button>
            <button className='p-2 text-base text-purple-500 homenav' onClick={()=>{changeFilter("interested");changecolor("2")}}>Interested</button>
            <button className='p-2 text-base text-purple-500 homenav' onClick={()=>{changeFilter("follow up");changecolor("3")}}>Follow up</button>
            <button className='p-2 text-base text-purple-500 homenav' onClick={()=>{changeFilter("conform");changecolor("4")}}>Conform</button>
        </div>
        }{
            search.length>0 &&
            <h1 className='textedit font-semibold text-2xl text-center text-slate-400 mx-16 pb-4 border-b border-cyan-500 mb-6'>Results for {search}</h1>
        }
        <div className=" textedit scrolview h-[79%] rounded-lg flex flex-col">
            {usedClient.map((ob,index)=>{return <Homepagecard 
                key={index}
                name={ob.name}
                address={ob.address}
                phoneNo={ob.phoneNo}
                status={ob.status}
                businessType={ob.businessType}
                clientType={ob.clientType}
                important={ob.important}
                offerBudget={ob.offerBudget}
                followUpDate={ob.followUpDate}
                confirmDate={ob.confirmDate}
                referredBy={ob.referredBy}
            ></Homepagecard>})}
        </div>
    </div>
    </>
  )
}

export default Home;
