import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const SideBar = () => {

  return (

    <div className="sidebar">
        <div className="logo">
          <h2>{ <FaRegCircleUser /> }Manager Dashboard</h2>
        </div>
        <ul className="sidebar-nav">
          <li>
          <MdDashboard />
            <Link to = '/' ><span>Dashboard</span></Link>
            
          </li>
          <li>
            <span>Product</span>
          </li>
          <li>
            <span>Customers</span>
          </li>
        <li>
        <Link to = '/revenue' ><span>Revenue Analysis</span></Link>
          </li>
          <li>
            <span>Emergency Routing</span>
          </li>
          <li>
            <span>Help</span>
          </li>
        </ul>
        <div className="user-profile">
          <img src="https://picsum.photos/200/300" alt="Profile" />
          <div>
            <h3>Manager</h3>
            <p>Bus Manager</p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
  )
}

export default SideBar