import { useState, useEffect } from 'react'
import Homepagecard from './homepagecard.jsx'
import '../App.jsx'
import '../others/home.js'
import '../others/navigatebuttom.css';


function Home() {

    const [clients,setClients]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch('http://localhost:8080/leads',{
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem("myToken")}`
                }
            });
            const jsonData = await data.json();
            if(jsonData.error == "doLogin"){
                alert("Please log in to access");
                navigate("/");
            }else{
                setClients(jsonData)
            }
        }
        fetchData()
    },[])


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
                }} type="text" id='search' placeholder='Search here by Name' className="border searchinput border-slate-200 rounded-full m-2 p-2 w-96"/>
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
            <button className='p-2 text-base text-purple-500 homenav' onClick={()=>{changeFilter("confirm");changecolor("4")}}>Confirm</button>
        </div>
        }{
            search.length>0 &&
            <h1 className='textedit font-semibold text-2xl text-center text-slate-400 mx-16 pb-4 border-b border-cyan-500 mb-6'>Results for {search}</h1>
        }
        <div className=" textedit scrolview h-[79%] rounded-lg flex flex-col">
            {usedClient.map((ob)=>{return <Homepagecard 
                _id={ob._id}
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
