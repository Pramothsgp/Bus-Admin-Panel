import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { MdDashboard } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import BusTable from './Components/BusTable';


const busdata = [
   { id: '13A', busNo: 'DL 99 1234', start: 'Loha Mandi', destination: 'Payal Cinema', recentStop: 'Chanakyapuri', deliveryStatus: 'Active' },
  { id: '12B', busNo: 'DL 99 1234', start: 'Naraina', destination: 'Maya puri', recentStop: 'Kiribati', deliveryStatus: 'Active' },
  { id: '3C', busNo: 'DL 99 1234', start: 'Zink Market', destination: 'Inder puri', recentStop: 'National Stadium', deliveryStatus: 'Active' },
  { id: '5D', busNo: 'DL 99 1234', start: 'AIR station', destination: 'C.G. Hospittal', recentStop: 'Moti Bagh', deliveryStatus: 'Active' },
  { id: '13B', busNo: 'DL 99 1234', start: 'JJ colony', destination: 'Laiwanti', recentStop: 'Mohamad Pur', deliveryStatus: 'Active' },
  { id: '15A', busNo: 'DL 99 1234', start: 'Barar Square', destination: 'C.G.Hospital', recentStop: 'Palam Colony', deliveryStatus: 'Active' },
  { id: '2A', busNo: 'DL 99 1234', start: 'Gurudwara', destination: 'Sagapur', recentStop: 'Raj Nagar', deliveryStatus: 'Active' },
  { id:'32D', busNo: 'DI 99 1234', start: 'Chanakyapuri', destination: 'Janakpuri', recentStop: 'Rail Museum', deliveryStatus: 'Active' },
   { id: '13A', busNo: 'DL 99 1234', start: 'Loha Mandi', destination: 'Payal Cinema', recentStop: 'Chanakyapuri', deliveryStatus: 'Active' },
  { id: '12B', busNo: 'DL 99 1234', start: 'Naraina', destination: 'Maya puri', recentStop: 'Kiribati', deliveryStatus: 'Active' },
  { id: '3C', busNo: 'DL 99 1234', start: 'Zink Market', destination: 'Inder puri', recentStop: 'National Stadium', deliveryStatus: 'Active' },
  { id: '5D', busNo: 'DL 99 1234', start: 'AIR station', destination: 'C.G. Hospittal', recentStop: 'Moti Bagh', deliveryStatus: 'Active' },
  { id: '13B', busNo: 'DL 99 1234', start: 'JJ colony', destination: 'Laiwanti', recentStop: 'Mohamad Pur', deliveryStatus: 'Active' },
  { id: '15A', busNo: 'DL 99 1234', start: 'Barar Square', destination: 'C.G.Hospital', recentStop: 'Palam Colony', deliveryStatus: 'Active' },
  { id: '2A', busNo: 'DL 99 1234', start: 'Gurudwara', destination: 'Sagapur', recentStop: 'Raj Nagar', deliveryStatus: 'Active' },
  { id:'32D', busNo: 'DI 99 1234', start: 'Chanakyapuri', destination: 'Janakpuri', recentStop: 'Rail Museum', deliveryStatus: 'Active' },
   { id: '13A', busNo: 'DL 99 1234', start: 'Loha Mandi', destination: 'Payal Cinema', recentStop: 'Chanakyapuri', deliveryStatus: 'Active' },
  { id: '12B', busNo: 'DL 99 1234', start: 'Naraina', destination: 'Maya puri', recentStop: 'Kiribati', deliveryStatus: 'Active' },
  { id: '3C', busNo: 'DL 99 1234', start: 'Zink Market', destination: 'Inder puri', recentStop: 'National Stadium', deliveryStatus: 'Active' },
  { id: '5D', busNo: 'DL 99 1234', start: 'AIR station', destination: 'C.G. Hospittal', recentStop: 'Moti Bagh', deliveryStatus: 'Active' },
  { id: '13B', busNo: 'DL 99 1234', start: 'JJ colony', destination: 'Laiwanti', recentStop: 'Mohamad Pur', deliveryStatus: 'Active' },
  { id: '15A', busNo: 'DL 99 1234', start: 'Barar Square', destination: 'C.G.Hospital', recentStop: 'Palam Colony', deliveryStatus: 'Active' },
  { id: '2A', busNo: 'DL 99 1234', start: 'Gurudwara', destination: 'Sagapur', recentStop: 'Raj Nagar', deliveryStatus: 'Active' },
  { id:'32D', busNo: 'DI 99 1234', start: 'Chanakyapuri', destination: 'Janakpuri', recentStop: 'Rail Museum', deliveryStatus: 'Active' },
]
const App = () => {
  const [buses, setBuses] = useState(busdata);

  const [currentPage, setCurrentPage] = useState(1);
  const [busesPerPage, setbusesPerPage] = useState(10);

  const indexOfLastBus = currentPage * busesPerPage;
  const indexOfFirstBus = indexOfLastBus - busesPerPage;
  const currentBuses = buses.slice(indexOfFirstBus, indexOfLastBus);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">

          <h2>{ <FaRegCircleUser /> }Manager Dashboard</h2>
        </div>
        <ul className="sidebar-nav">
          <li>
            <MdDashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <span>Product</span>
          </li>
          <li>
            <span>Customers</span>
          </li>
          <li>
            <span>Income</span>
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
      <div className="main">
        <div className="header">
          <div className="title">
            <h2>Hello Manager</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v5" />
              <path d="M12 19v-5" />
              <path d="M17 12h-5" />
            </svg>
          </div>
          <div className="stats">
            <div className="stat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4v12l-4-4m4-8v12l-4-4m4-8v12l-4-4" />
              </svg>
              <h3>50</h3>
              <p>Total Buses Running</p>
              <span>↑16%</span>
            </div>
            <div className="stat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v5" />
                <path d="M12 19v-5" />
                <path d="M17 12h-5" />
              </svg>
              <h3>136</h3>
              <p>Staffs Attended</p>
              <span>↓1%</span>
            </div>
            <div className="stat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <h3>20</h3>
              <p>Spare buses</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>Real Time Data</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <table>
            <thead>
              <tr>
                <th>BUS ID</th>
                <th>Bus No</th>
                <th>Start</th>
                <th>Destination</th>
                <th>Recent Stop</th>
                <th>Hyper Local
                  Delivery</th>
              </tr>
            </thead>
            <tbody>
              {currentBuses.map((bus) => (
                // <tr>
                  <BusTable key={bus.id} {...bus} />
                /* </tr> */
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            {Array.from({ length: Math.ceil(buses.length / busesPerPage) }, (_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </button>
            ))}
            
            <button onClick={() => paginate(currentPage + 1)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          <p>Showing data 1 to 8 of 50 entries</p>
        </div>
      </div>
    </div>
  );
};

export default App;