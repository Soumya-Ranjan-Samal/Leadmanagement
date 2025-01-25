import '../App.css';
import { Link } from 'react-router-dom';
import Onboardcard from './onboardcard';
import { useState,useEffect } from 'react';


function Onboard() { 

  const [total,settotal]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch('http://localhost:8080/leads/count',{
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem("myToken")}`
                }
            });
            const jsonData = await data.json();
            if(jsonData.error == "doLogin"){
                alert("Please log in to access");
                navigate("/");
            }else{
                settotal(jsonData);
                console.log(total);
            }
        }
        fetchData();
    },[]);



  return (
    <>
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">Onboard</div>
            
            <div className="help ">
                <Link to="/new/add"><button className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' >Add</button></Link>
                {/* <button className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' form='deleteMany' >Delete</button> */}
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
        <div className="newdata scrolview h-[90%] border border-slate-200 rounded-2xl m-1 mt-4" >
            <div className="mainonboard">
                {
                    total.map((el)=>{
                        return <Onboardcard status={el.status} count={el.count}></Onboardcard>
                    })
                }
            </div>
        </div>
        </div>
    </>
  )
}

export default Onboard;

