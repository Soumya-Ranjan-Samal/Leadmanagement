import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.jsx'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [logout,setLogout] = useState(false);
  const navigate = useNavigate();

  async function handel(){
    const result = await fetch("http://localhost:8080/islogin",{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("myToken")}`
      }
    });
    
    const format = await result.json();
    console.log(format)
    if(format.error){
      setLogout(false);
    }else{
      setLogout(true);
    }
  }
  handel();

  function logoutHandeler(){
      localStorage.removeItem('myToken');
      navigate("/user");
  }

  return (
    <>
    <div className="navbar bg-white h-[10%] flex justify-between items-center shadow-lg shadow-blue-100 m-1 rounded-lg">
        <div className="heading text-4xl font-extrabold ml-14 text-violet-600 flex items-center hover:animate-ping">
          <div className="m-1 jump h-[1rem] w-[1rem] bg-blue-400 animate-bounce rounded-full"></div>
           Leads 
          <div className="m-1 jump h-[1rem] w-[1rem] bg-cyan-400 animate-spin"></div>
        </div>
        <div className="message">

        </div>
        <div className="opertions mr-12 ">
          {!logout &&
            <Link to="/user"><a href="" className="loginbut rounded-md p-2 text-white pl-4 pr-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 ">Login</a></Link>
          }
          {
            logout && 
            <button className='loginbut rounded-md p-2 text-white pl-4 pr-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 ' onClick={logoutHandeler}>Log Out</button>
          }
        </div>
    </div>
    </>
  )
}

export default Navbar