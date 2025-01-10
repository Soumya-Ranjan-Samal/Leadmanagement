import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar.jsx";
import Sidebar from './components/sidebar.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="buttom h-[90%] flex ">
    <Sidebar></Sidebar>
    <Home></Home>
    </div>
    </>
  )
}

export default App
