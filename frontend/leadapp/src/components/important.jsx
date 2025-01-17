import '../App.css';
import { Link } from 'react-router-dom';
import Newpagecard from './newpagecard';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Importantpage() {
  let count = 1; 
  const navigate = useNavigate();

  const [clients,setClients]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch('http://localhost:8080/leads/important'
                ,{
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem("myToken")}`
                    }
                }
            );
            
            const jsonData = await data.json();
            if(jsonData.error == "doLogin"){
                alert("Please log in to access");
                navigate("/");
            }else{
                setClients(jsonData)
            }
        }
        fetchData()
    },[]);



  return (
    <>
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">Important</div>
            <div className="help ">
                <button className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' form='deleteMany' >Delete</button>
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
        <div className="newdata scrolview h-[90%] border border-slate-200 rounded-2xl m-1 mt-4" >
            {clients.map((ob)=>{return <Newpagecard 
                _id={ob._id}
                count={count++}
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
            ></Newpagecard>})}
        </div>
        </div>
    </>
  )
}

export default Importantpage;

