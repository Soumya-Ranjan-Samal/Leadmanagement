import './App.css'
import Homepage from './pages/homePage';
import Signuporin from './pages/signinorsignup';
import New from './pages/new';
import Addpage from './pages/addpage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Followup from './pages/followup';
import Important from './pages/important';
import Confirm from './pages/confirm';
import Onboard from './pages/onboard';
import Createteam from './pages/createteam';
import Allteams  from './pages/allteam';
import Userupdation from './pages/userupdation';
import Adduser from "./pages/adduser.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/' element={<Signuporin/>}/>
          <Route path='/new/add' element={<Addpage/>}/>
          <Route path='/followup'element={<Followup/>}/>
          <Route path='/important' element={<Important/>}/>
          <Route path='/confirm' element={<Confirm/>}/>
          <Route path='/onboard' element ={<Onboard/>}/>
          <Route path='/admin/teams/add' element={<Createteam/>} />
          <Route path='/admin/teams' element={<Allteams/>} />
          <Route path='/admin/users' element={<Userupdation/>} />
          <Route path='/admin/users/add'element={<Adduser/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App
