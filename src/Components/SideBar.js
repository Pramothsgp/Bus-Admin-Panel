import React, { useState } from 'react'
import { MdDashboard, MdKeyboardArrowRight, MdOutlineEmergencyShare } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Sidebar.css'

import { AiOutlineProduct } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GiCash } from 'react-icons/gi';
import { IoMdHelpCircleOutline } from 'react-icons/io';

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  }
  return (

    <div className={`sidebar-${showSideBar}`}>
      <button className={`sidebar-control ${showSideBar}`} onClick={handleSideBar}>
          <MdKeyboardArrowRight />
      </button>
        <div className="logo">
          <h2>{ <FaRegCircleUser /> }Manager Dashboard</h2>
        </div>
        <ul className="sidebar-nav">
          <li>
          <MdDashboard />
            <Link to = '/dashboard' >Dashboard</Link>
            
          </li>
        <li>
          <AiOutlineProduct />
            Product
          </li>
        <li>
        <RiCustomerService2Fill />
            Customers
          </li>
        <li>
          <GiCash />
          <Link to = '/revenue' >Revenue Analysis</Link>
          </li>
        <li>
          <MdOutlineEmergencyShare />
          <Link to='/Emergency-routing' > Emergency Routing </Link>
          </li>
        <li>
        <IoMdHelpCircleOutline />
            Help
          </li>
        </ul>
        <div className="user-profile">
          <img src="https://picsum.photos/200/300" alt="Profile" />
          <div>
            <h3>Manager</h3>
            <p>Bus Manager</p>
          </div>
      </div>
      </div>
  )
}

export default SideBar