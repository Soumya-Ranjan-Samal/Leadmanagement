import './App.css'
import  image  from "./images/sign.jpg";
import { useState } from 'react';

function Signuporin() {

    const [signup,setSignup] = useState(false);

  return (
    <>
        {/* <body className="sign font-sans flex flex-row justify-center items-center h-screen fixed w-screen">
            <div className="cover bg-white h-screen w-screen fixed z-10"></div>
            <div className="relative left-[5%] mb-40 show1 bg-inherit flex justify-center items-center h-[55%] w-[25%]  z-20 rounded-tl-3xl rounded-br-3xl animateTop">
                <div className="inershow1 h-[94.5%] w-[94%] bg-white rounded-tl-3xl rounded-br-3xl">
                </div>
            </div>
            <div className="relative -left-[5%] mt-40 show1 bg-inherit flex justify-center items-center h-[55%] w-[25%]  z-20 rounded-tl-3xl rounded-br-3xl animateLeft">
                <div className="inershow1 h-[94.5%] w-[94%] bg-white rounded-tl-3xl rounded-br-3xl">
                </div>
            </div>
            
        </body> 
        <div className="mainformback fixed h-screen w-screen flex justify-center items-center">
                <div className="mainform bg-white h-[55%] w-[25%] rounded-br-3xl rounded-tl-3xl">
                    <h1 className='text-center text-lg font-semibold text-violet-600 p-2'>Sign Up</h1>
                </div>
        </div> */}

        <div className="full flex justify-center">
           <img src={image} className='z-5' alt="" />
           <div className="signform p-4 z-10 rounded-3xl mt-[10%] text-white">
                <form action="" className='form'>
                <h1 className='h1 text-xl font-semibold text-center'>Sign In</h1>
                <div className="username flex flex-col my-2">
                    <label htmlFor="username" className='text-white opacity-100 m-1'>UserName</label>
                    <input className='w-80 p-2 rounded-3xl opacity-100 text-black' type="text" id='username' placeholder='Enter your Username' required />
                </div>

                {   signup &&
                <div className="signupemail flex flex-col">
                    <label htmlFor="email" className='text-white opacity-100 m-1'>Email Id</label>
                    <input className='w-80 p-2 rounded-3xl opacity-100 text-black' type="email" id='email' placeholder='Enter your Email' required />
                </div>                
                }

                <div className="password flex flex-col my-2">
                    <label htmlFor="password" className='text-white opacity-100 m-1'>Password</label>
                    <input className='w-80 p-2 rounded-3xl opacity-100 text-black' type="password" id='password' placeholder='Enter your Password' required />
                </div>

                <div className="otheroption text-center my-2">
                    <span className='ms'>Don't have an account? </span><button className='text-blue-300 s' onClick={()=>{
                        let full = document.querySelector(".signform");
                        let form = document.querySelector(".form");
                        let submit = document.querySelector(".submit");
                        let h1 = document.querySelector('.h1');
                        if(submit.innerText == "Sign In"){
                            form.style.opacity="0";
                            full.style.height = "24rem"
                            document.querySelector(".s").innerText = "Sign In";
                            document.querySelector(".ms").innerHTML = "Already have an account. ";
                            h1.innerText=submit.innerText = "Sign Up";
                            setTimeout(()=>{
                                form.style.opacity="1";
                            },500);
                                setSignup(true);
                        }else{
                            form.style.opacity="0";
                            full.style.height = "20rem"
                            let s = document.querySelector(".s");
                            let ms = document.querySelector(".ms");
                            h1.innerText=submit.innerText = "Sign In"
                            s.innerText = "Sign Up";
                            ms.innerText = "Don't have an account? ";
                            setTimeout(()=>{
                                form.style.opacity="1";
                            },500);
                            setSignup(false);
                        }
                        }}>Sign up</button>
                </div>
                <div className="button my-2 flex justify-center">
                    <button className='submit bg-blue-500 shadow-lg shadow-blue-500/50  w-[90%] py-2 rounded-3xl'>Sign In</button>
                </div>
                </form>
           </div>
           
        </div>
    </>
  )
}

export default Signuporin;