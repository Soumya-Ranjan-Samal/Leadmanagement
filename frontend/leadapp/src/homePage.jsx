import './App.css'
import Navbar from "./components/navbar.jsx";
import Sidebar from './components/sidebar.jsx';
import Home from './components/home.jsx';
import leftarrow from "./images/leftarrow.png";
import rightarrow from "./images/rightarrow.png";

function Homepage() {

function openmenu(){
    let sidebar = document.querySelector(".sidebar");
    let menubut = document.querySelector(".menu");
    let butimage = document.querySelector(".openclosebut");
    if(menubut.style.left=="60%"){
      butimage.src=rightarrow;
      menubut.style.left="0%";
      sidebar.style.left="-25%";
      sidebar.style.width="20%";
    }else{
    butimage.src=leftarrow;
    menubut.style.left="60%";
    sidebar.style.left="0%";
    sidebar.style.width="60%";
  }
}


  return (
    <>
    <Navbar></Navbar>
    <div className="buttom h-[90%] flex">
                    <div className="menu fixed z-10 font-bold text-4xl shadow-lg shadow-blue-100" onClick={()=>openmenu()}>
                      <img src={rightarrow} className='openclosebut' alt="" />
                    </div>
    <Sidebar open={"home"}></Sidebar>
    <Home></Home>
    </div>
    </>
  )
}

export default Homepage;
