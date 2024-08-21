import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard';
import Income from './Pages/Income';
import Signup from './Pages/Signup';
import SideBar from './Components/SideBar';
import Login from './Pages/Login';


const App = () => {
  return (

    <Router>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<DashBoard />} />
            <Route path='/revenue' element={<Income />} />
          </Routes>
        </div>
        </div>
        
    </Router>
  );
};

export default App;
