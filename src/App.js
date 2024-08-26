// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard';
import Income from './Pages/Income';
import Signup from './Pages/Signup';
import SideBar from './Components/SideBar';
import Login from './Pages/Login';
import EmergencyRouting from './Pages/EmergencyRouting/EmergencyRouting';
import Product from './Pages/Product/Product';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AddTicketData from './Pages/AddTicketData';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainContent />
      </Router>
    </AuthProvider>
  );
};

const MainContent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  return (
    <div className="app-container">
      {!isLoginPage && user && <SideBar />}
      <div className="content">
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={user && <DashBoard />} />
          <Route path='/revenue' element={user && <Income />} />
          <Route path='/product' element={user && <Product />} />
          <Route path='/Emergency-routing' element={user && <EmergencyRouting />} />
          <Route path='/AddTicketData' element={user && <AddTicketData />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
