import '../App.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Importantpage from '../components/important';
import leftarrow from "../images/leftarrow.png";
import rightarrow from "../images/rightarrow.png";


function Important() {

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
        <body className="font-sans bg-cyan-200 flex flex-col h-screen fixed w-screen">
            <Navbar></Navbar>
            <div className="buttom h-[90%] flex ">
              <div className="menu fixed z-20 font-bold text-4xl shadow-lg shadow-blue-100" onClick={()=>openmenu()}>
                <img src={rightarrow} className='openclosebut' alt="" />
              </div>
            <Sidebar open={"important"}></Sidebar>
            <Importantpage></Importantpage>
            </div>
        </body>
    </>
  )
}

export default Important;
