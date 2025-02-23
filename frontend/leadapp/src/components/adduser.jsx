import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';

function AddUser() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    exp: '',
    pastprojects: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/user/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("myToken")}`
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      navigate("/admin/users");
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Handle error
      alert("Some thing went wrong, please try later");
    }
  };

  return (
    <>
      <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
          <div className="heading text-3xl font-bold text-violet-600 ml-4">Member/Add</div>
          <div className="help">
            <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 text-white shadow-md mr-2 shadow-blue-200'>?</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='p-4 md:w-[50%] border border-gray-300 shadow-lg shadow-cyan-200 ml-2 rounded-xl'>
          <div className="row1 flex flex-col">
            <label htmlFor="username">Name</label>
            <input type="text" placeholder='Name of the new member' className='border-2 p-1.5 rounded-xl my-2' name='username' value={formData.username} onChange={handleChange} />
          </div>
          <div className="row2 flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email of the new member' className='border-2 p-1.5 rounded-xl my-2' name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className="row3 flex justify-between">

          <div className="row3 w-[48%] flex flex-col">
            <label htmlFor="exp">Experience</label>
            <input type="text" placeholder='Experience level of the new member' className='border-2 p-1.5 rounded-xl my-2' name='exp' value={formData.exp} onChange={handleChange} />
          </div>
          <div className="row4 w-[48%] flex flex-col">
            <label htmlFor="pastprojects">Projects</label>
            <input type="text" placeholder='Number of past projects' className='border-2 p-1.5 rounded-xl my-2' name='pastprojects' value={formData.pastprojects} onChange={handleChange} />
          </div>

          </div>

          <div className="row4 flex flex-col">
            <label htmlFor="pastprojects">Password</label>
            <input type="password" placeholder='Give a strong password' className='border-2 p-1.5 rounded-xl my-2' name='password' value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" className='rounded-md p-2 text-white md:w-[20%] w-[40%] bg-violet-500 shadow-lg shadow-purple-400'>Add Member</button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
