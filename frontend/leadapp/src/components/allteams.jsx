import { useState, useEffect } from 'react';
import '../App.jsx'
import { useNavigate } from 'react-router-dom';
import TeamCard from './teamcard.jsx';


  

function Teams() {

  let [teams, setTeams] = useState([]);

  useEffect(()=>{
    let getdata = async ()=>{
      let gift = await fetch("http://localhost:8080/project/teams",{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem("myToken")}`
      }
      });
      let data = await gift.json()
      if(gift.ok){
        console.log(data);
        for(let i=0;i<data.data.length;i++){
          data.data[i].teamlead = data.leaders[i]
        }
        setTeams(data.data);
      }
    } 
    getdata();
  },[])

  return (
    <>
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between ">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">All Teams</div>
            <div className="search">
                 
            </div>
            <div className="help">
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
            <div className="textedit selfflex scrolview h-[79%] rounded-lg ">
                { 
                teams.map((el,index)=>{
                    return <TeamCard team={el} index={index} ></TeamCard>
                })}
            </div>
        </div>
    </>    
  )
}


export default Teams;