import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard';
import Income from './Pages/Income';
import Signup from './Pages/Signup';
import SideBar from './Components/SideBar';
import Login from './Pages/Login';
import EmergencyRouting from './Pages/EmergencyRouting/EmergencyRouting';
import Product from './Pages/Product/Product';


const App = () => {
  return (

    <Router>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/revenue' element={<Income />} />
            <Route path='/product' element={<Product />} />
            <Route path='/Emergency-routing' element = {<EmergencyRouting />} />
          </Routes>
        </div>
        </div>
        
    </Router>
  );
};

export default App;
