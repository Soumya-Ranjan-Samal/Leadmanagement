import React, { useState } from "react";

const TeamCard = ({ team, index }) => {
  console.log(index)
  const [selectedUser, setSelectedUser] = useState(null);
  const [status,setsatus]=useState(team.status);
  const [openstatus,setopenstatus]=useState(false);

  if(team.complexity==1){
    team.complexity="Hard";
  }else if(team.complexity==2){
    team.complexity="Medium";
  }else{
    team.complexity="Easy";
  }

  const handelopnesatus = ()=>{
    if(openstatus==false){
      setopenstatus(true);
    }else{
      setopenstatus(false);
    }
  }

  const handelupdate = (val)=>{
    let tostore = val.target.parentElement.childNodes[0].childNodes[1].value;//data to be saved
    let id = val.target.parentElement.childNodes[0].childNodes[1].classList[0];//id
    console.log(tostore);
    let update = async ()=>{
      let result = await fetch("http://localhost:8080/project/update/"+id,{
        method: "post",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("myToken")}`,
        },
        body: JSON.stringify({
          status: tostore,
        })
      });
      let team2 = await result.json(); 
      console.log(team2);
      if(team2.success){
        alert("Update successful");
      }else{
        alert("Something wrong!");
      }
    }
    update()
  }

  return (
    <div className="border rounded-lg hover:shadow-lg p-4 w-96 bg-white m-2">
      <h2 className="text-xl font-semibold text-blue-600">{team.name}</h2>
      <p className="text-gray-600">{team.description}</p>
      
      <div className="mt-2">
        <strong>Team Lead:</strong>
        <button 
          className="text-blue-500 underline ml-2 text-green-400" 
          onClick={() => setSelectedUser(team.teamlead)}
        >
          {team.teamlead.username}
        </button>
      </div>

      <div className="mt-2">
        <strong>Team Members:</strong>
        {team.team.map((member) => (
          <button 
            key={member._id} 
            className="text-blue-500 underline ml-2 text-green-400" 
            onClick={() => setSelectedUser(member)}
          >
            {member.username}
          </button>
        ))}
      </div>

      <div className="mt-2">
        <strong>Status: </strong><span>{team.status}</span>
      </div>

      <div className="mt-2">
        <strong>Complexity: </strong>
            <span>{team.complexity}</span>
      </div>

      <div className="mt-2">
        <strong>Feasibility: </strong> <span>{team.feasibility}</span>
      </div>

      <div className="mt-2">
        <strong>Time Estimate: </strong> <span>{team.Time} hours</span>
      </div>

      {team.link && (
        <div>
        <div className="mt-2">
          <a href={team.link} target="_blank" rel="noopener noreferrer" className="text-violet-600 underline">
            Project Link
          </a>
          <button onClick={handelopnesatus}  className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white shadow-md mr-2 ml-6 shadow-blue-200'>Update status</button>
        </div>
        </div>
      )}

      { openstatus && 
        <div>
          <div className="row1 flex flex-col">
            <label htmlFor="" className="m-2">Status</label>
            <select name="" id="" className={team._id+" m-1 border border-slate-300 p-1 rounded"} defaultValue={team.status}>
              <option value="Not started">Not started</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <button onClick={handelupdate} className='m-2 rounded-md p-2 text-white pl-4 pr-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 ' >Update</button>
          </div>
      }

      {selectedUser && (
        <div className="mt-4 p-3 border rounded-lg bg-gray-100">
          <h3 className="font-semibold">User Details</h3>
          <p><strong>Username:</strong> {selectedUser.username}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Experience:</strong> {selectedUser.exp} years</p>
          <p><strong>Past Projects:</strong> {selectedUser.pastproject}</p>
          <button 
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded" 
            onClick={() => setSelectedUser(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamCard;