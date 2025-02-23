import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.jsx'
import { useNavigate } from 'react-router-dom';
import TeamCard from './teamcard.jsx';


// let data = [
    // {
    //     "_id": "603c9b8a1c9d440000b0a3e7",
    //     "username": "john_doe",
    //     "email": "john.doe@example.com",
    //     "password": "password123",
    //     "exp": 2,
    //     "pastproject": 5
    // },
    // {
    //     "_id": "603c9b8a1c9d440000b0a3e8",
    //     "username": "jane_smith",
    //     "email": "jane.smith@example.com",
    //     "password": "securepass456",
    //     "exp": 3,
    //     "pastproject": 7
    // },
    // {
    //     "_id": "603c9b8a1c9d440000b0a3e9",
    //     "username": "alice_walker",
    //     "email": "alice.walker@example.com",
    //     "password": "mysecret789",
    //     "exp": 1,
    //     "pastproject": 2
    // },
    // {
    //     "_id": "603c9b8a1c9d440000b0a3ea",
    //     "username": "bob_brown",
    //     "email": "bob.brown@example.com",
    //     "password": "bobspassword",
    //     "exp": 4,
    //     "pastproject": 10
    // },
    // {
    //     "_id": "603c9b8a1c9d440000b0a3ea",
    //     "username": "bob_brown",
    //     "email": "bob.brown@example.com",
    //     "password": "bobspassword",
    //     "exp": 4,
    //     "pastproject": 10
    // },
    // {
    //     "_id": "603c9b8a1c9d440000b0a3ea",
    //     "username": "bob_brown",
    //     "email": "bob.brown@example.com",
    //     "password": "bobspassword",
    //     "exp": 4,
    //     "pastproject": 10
    // }
// ]



const UserCard = ({ user }) => {

  const [show,useshow] = useState(false);


  const handelclick = ()=>{
    useshow(true);
    console.log(user._id);// handel open edit page
  }

  const handleEditUser = async (e) => {
    const username = e.target.parentElement.parentElement.childNodes[1].childNodes[1].value;
    const exp = e.target.parentElement.parentElement.childNodes[2].childNodes[1].value;
    const email = e.target.parentElement.parentElement.childNodes[3].childNodes[1].value;
    const pastproject = e.target.parentElement.parentElement.childNodes[4].childNodes[1].value;
    const working = e.target.parentElement.parentElement.childNodes[5].childNodes[1].value;

    const userData = {
        username,
        email,
        exp,
        pastproject,
        working
    };

    try {
        const response = await fetch(`http://localhost:8080/user/update/${user._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("myToken")}`
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        useshow(false);
        alert("Updation successful")
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert("Updation failed");
    }
};

  const handeldelete = async  (e)=>{
    const response = await fetch(`http://localhost:8080/user/delete/${user._id}`, {
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("myToken")}`
      }
    });
    useshow(false);
    alert("Member Has been deleted");
  }

  return (
    <>
    <div onClick={handelclick} className="max-w-sm m-4 w-[24%] mx-auto bg-white shadow-sm border border-slate-200 hover:shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="py-4 px-6">
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex justify-center items-center">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <p className="text-gray-900 text-lg font-semibold">{user.username}</p>
            <p className="text-gray-600">Experience: {user.exp} years</p>
          </div>
        </div>
        <p className="text-gray-700 mt-4">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Past Projects:</strong> {user.pastproject}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Working on any project:</strong> {user.working? "Yes": "No"}
        </p>
        <div className="mt-4 text-right">
          <span className="text-gray-500 text-sm">User ID: {user._id}</span>
        </div>
      </div>
    </div>

    {
      show &&
          <>
            <div className="textedit blackout h-dvh w-full bg-black z-10 opacity-35 fixed -left-[0%] -top-[0%]">  </div>
            <div className="viewbody fixed z-20 flex h-dvh w-full flex justify-center items-center -left-[0%] -top-[0%]">
                <div className="view bg-white h-[87%] md:h-[80%] w-[80%] md:w-[40%] mb-[5%] rounded-xl text-slate-500">
                    <button onClick={()=> useshow(false)} className='px-3 py-1.5 hover:text-red-600 hover:bg-white rounded-xl  shadow-red-500 shadow bg-red-600 text-white relative -left-4 -top-4 animate-bounce'>&#x2718;</button>
                    <div className="editpage p-4">
                      <h1 className='font-semibold text-3xl text-center marginedit mx-8 pb-4 border-b border-cyan-500 mb-4'>Editing {user.username} data</h1>
                      <div className="row1 flex flex-col">
                        <label htmlFor="name" className='text-slate-700' >Name</label>
                        <input type="text" name="username" id="username" defaultValue={user.username} className='border border-slate-300 p-1.5 rounded-xl my-2'  />
                      </div>
                      <div className="row2 flex flex-col">
                        <label htmlFor="exp" className='text-slate-700' >Experince</label>
                        <input type="text" name="exp" id="exp" defaultValue={user.exp} className='border border-slate-300 p-1.5 rounded-xl my-2'  />
                      </div>
                      <div className="row3 flex flex-col">
                        <label htmlFor="email" className='text-slate-700' >Email</label>
                        <input type="text" name="email" id="email" defaultValue={user.email} className='border border-slate-300 p-1.5 rounded-xl my-2'  />
                      </div>
                      <div className="row4 flex flex-col">
                        <label htmlFor="pastproject" className='text-slate-700' >Past projects</label>
                        <input type="text" name="pastproject" id="pastproject" defaultValue={user.pastproject} className='border border-slate-300 p-1.5 rounded-xl my-2'  />
                      </div>
                      <div className="row5 flex flex-col">
                        <label htmlFor="pastproject" className='text-slate-700' >Work Status</label>
                        <input type="text" name="working" id="pastproject" defaultValue={user.working} className='border border-slate-300 p-1.5 rounded-xl my-2'  />
                      </div>
                      <div className="row2 flex justify-evenly mt-[4%] text-md font-semibold">
                        <button onClick={handleEditUser}  className='rounded-md  p-2 text-white w-[40%] text-center bg-cyan-500 shadow-lg shadow-cyan-500/50'>Add updated</button>
                        <button onClick={handeldelete}  className='rounded-md ml-[6%] p-2 text-white w-[40%] text-center bg-red-500 shadow-lg shadow-red-400'>Delete</button>
                      </div>
                    </div>
                    
                </div>
            </div>
            </>
    }
    </>
  );
};


  

function Alluser() {

  const [data,setdata] = useState([]);

  useEffect(()=>{
    const getdata = async ()=>{
      const result = await fetch("http://localhost:8080/user",{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem("myToken")}`
      }
      });
      const parsed = await result.json();

      console.log(parsed);
      if(!parsed.error){
        setdata(parsed);
      }else{
        setdata([])
        alert(parsed.error);
      }
    }
    getdata();
  },[])

  return (
    <>
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">All Users</div>
            <div className="search">
                 
            </div>
            <div className="help">
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
        <div className="showuser selfflex scrolview h-[88%] rounded-lg ">
            {
                data.map((el)=>{
                    return <UserCard user={el} ></UserCard>
                })
            }
        </div>
        </div>
    </>    
  )
}


export default Alluser;