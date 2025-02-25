import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';

function Card({ user, handleCheckboxChange }) {
    return (
        <div className="bg-white shadow-md w-[100%] md:w-[48%] m-1 rounded-lg p-4 border border-slate-200">
            <div>
                <input type="checkbox" value={user._id} onChange={handleCheckboxChange} className="checkbox mb-2" />
                <span className={user._id+' leader text-green-700 font-bold ml-2'}>Leader</span>
            </div>
            <h2 className="text-xl font-bold mb-2">{user.username}</h2>
            <p className="text-gray-700 mb-1">Email: {user.email}</p>
            <p className="text-gray-700 mb-1">Experience: {user.exp}</p>
            <p className="text-gray-700 mb-1">Past Projects: {user.pastproject}</p>
        </div>
    );
}

function Addteam() {
    const navigate = useNavigate();

    const [users,setusers] = useState([]);

    const [leader, setleader]= useState(0);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        status: '',
        perc: 2,
        complexity: '',
        link: '',
        selectedUsers: []
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            selectedUsers: checked
                ? [...prev.selectedUsers, value]
                : prev.selectedUsers.filter(id => id !== value)
        }));
        chosedleader(e.target.parentElement.childNodes[1]);
    };

    const handelanalyze = ()=>{
        const getanalyzeddata = async ()=>{
            try{
                let data = await fetch("http://localhost:8080/project/analyze_AI",{
                    method: "post",
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${localStorage.getItem("myToken")}`
                    },
                    body: JSON.stringify(formData)
                })
                let parsed = await data.json();
                if(data.ok){
                    let h1 = `<h1 className='reportf font-semibold text-white'>&#62;&#62; status: ${parsed.data.feasibility}</h1>`
                    let h2 = `<h2 className='reportt font-semibold  text-white'>&#62;&#62; Duration: ${parsed.data.estimated_time/30+" Months estimated"}...</h2>`
                    let h3 = `<h1 className='reportf font-semibold text-white'>&#62;&#62; Cost: ${parsed.data.estimated_cost}</h1>`
                    let h4 = `<h2 className='reportt font-semibold  text-white'>&#62;&#62; Efficiency: ${parsed.data.efficiency_index}</h2>`
                    let h5 = `<h2 className='reportt font-semibold  text-white'>&#62;&#62; Success: ${parsed.data.success_index}</h2>`
                    let h6 = `<h2 className='reportt font-semibold  text-white'>&#62;&#62; Risk Score: ${parsed.data.risk_score}</h2>`
                    let div = document.querySelector(".report");
                    div.innerHTML=h1+h2+h3+h4+h5+h6;
                }

            }catch(e){
                console.log(e);
            }
        }
        getanalyzeddata();
    }

    const chosedleader = (e)=>{
        if(leader == 0){
            e.style.opacity = 1;
            setleader(1)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting data:", formData);
        fetch('http://localhost:8080/project/add', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("myToken")}`
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(() => navigate("/admin/teams"))
        .catch((error) => {
            console.error('Error:', error) 
            alert("something went wrong");
        });
    };

    useEffect(()=>{
        const getdata = async  ()=>{
        const result = await fetch("http://localhost:8080/user/avail",{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("myToken")}`
            }
        })
        const parsed = await result.json();
        console.log(parsed);
        if(result.ok){
            setusers(parsed);
        }
        else{
            alert("Faild to get the Available Members");
        }
        }
        getdata();
    },[]);

    return (
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
            <div className="hometop m-2 h-[10%] flex items-center justify-between shadow">
                <div className="heading text-3xl font-bold text-violet-600 ml-4">Create a team</div>
            </div>
            <form  className='w-[100%] editview'>
                <div className="editview pb-20 scrolwhole p-4 bg-white h-[72%] w-[100%] mb-[4%] rounded-xl text-slate-500">
                    <div className="row1 flex flex-col">
                        <label htmlFor="name">Name of the project</label>
                        <input name="name" placeholder="Project Name" className='border p-1.5 rounded-xl my-2' onChange={handleChange} />
                    </div>

                    <div className="row2 flex flex-col">
                        <label htmlFor="des">Description for the project</label>
                        <input name="description" placeholder="Description" className='border p-1.5 rounded-xl my-2' onChange={handleChange} />
                    </div>

                    <div className="row flex">

                        <div className="col1 flex flex-col mx-2 w-[45%]">
                            <label htmlFor="" >Status</label>
                            <select name="status" className='border p-1.5 rounded-xl my-2' onChange={handleChange}>
                                <option value="">Select Status</option>
                                <option value="Not started">Not started</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>

                        <div className="col1 flex flex-col mx-2 w-[45%]">
                        <label htmlFor="">Select a complexity level</label>
                        <select name="complexity" className='border p-1.5 rounded-xl my-2' onChange={handleChange}>
                            <option value="">Select Complexity</option>
                            <option value="1">Hard</option>
                            <option value="2">Medium</option>
                            <option value="3">Easy</option>
                        </select>
                        </div>

                    </div>

                    <div className="row2 flex flex-col">
                        <label htmlFor="des">Percentage complete</label>
                        <input name="perc" type="number" className='border p-1.5 rounded-xl my-2' value={formData.perc} readOnly />
                    </div>

                    <div className="row2 flex flex-col">
                        <label htmlFor="des">Reposetry link</label>
                        <input name="link" placeholder="Repository Link" className='border p-1.5 rounded-xl my-2' onChange={handleChange} />
                    </div>

                    <label className='text-slate-700'>Select Team Members</label>
                    <div className='newdata bg-gray-200 w-[80%] md:w-[60%] selfflex scrol border border-slate-200 rounded-2xl m-1 mt-4'>
                        {users.map((user) => (
                            <Card key={user._id} user={user} handleCheckboxChange={handleCheckboxChange} />
                        ))}
                    </div>

<div className="opertaion flex justify-between mb-4 mt-4">
    <div onClick={handelanalyze} className=' rounded-md p-2 text-white md:w-[70%] font-bold text-center w-[40%] bg-green-500 hover:shadow-md border border-green-500 hover:shadow-green-400 hover:text-green-600 hover:bg-black ' >Anlyze AI ֎🇦🇮</div>
    
    <button type="submit" onClick={handleSubmit} className=' rounded-md p-2 text-white md:w-[20%] w-[40%] bg-cyan-500'>Create this team</button>
</div>
    <div className="report bg-black rounded-lg p-4 mb-24 text-white md:w-[70%]">
    <h1 className='reportf font-semibold '>&#62;&#62; py server fetch</h1>
        {/* <h1 className='reportf font-semibold text-white'>> status: {1? "Ok" : "Not ok"}...</h1>
        <h2 className='reportt font-semibold  text-white'>> Duration: {23/4+" Months estimated"}...</h2> */}
    </div>
</div>
</form>
</div>
    );
}

export default Addteam;