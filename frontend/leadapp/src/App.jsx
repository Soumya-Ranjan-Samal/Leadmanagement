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
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App
