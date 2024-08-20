import React, { useState } from 'react';
import './App.css';

const Bus = ({ id, busNo, start, destination, recentStop, deliveryStatus }) => {
  return (
    <tr className="bus-row">
      <td>{id}</td>
      <td>{busNo}</td>
      <td>{start}</td>
      <td>{destination}</td>
      <td>{recentStop}</td>
      <td>
        <span className={`status ${deliveryStatus === 'Active' ? 'active' : 'inactive'}`}>
          {deliveryStatus}
        </span>
      </td>
    </tr>
  );
};

const App = () => {
  const [buses, setBuses] = useState([
    { id: '13A', busNo: 'DL 99 1234', start: 'Loha Mandi', destination: 'Payal Cinema', recentStop: 'Chanakyapuri', deliveryStatus: 'Active' },
    { id: '12B', busNo: 'DL 99 1234', start: 'Naraina', destination: 'Maya puri', recentStop: 'Kiribati', deliveryStatus: 'Active' },
    { id: '3C', busNo: 'DL 99 1234', start: 'Zink Market', destination: 'Inder puri', recentStop: 'National Stadium', deliveryStatus: 'Active' },
    { id: '5D', busNo: 'DL 99 1234', start: 'AIR station', destination: 'C.G. Hospittal', recentStop: 'Moti Bagh', deliveryStatus: 'Active' },
    { id: '13B', busNo: 'DL 99 1234', start: 'JJ colony', destination: 'Laiwanti', recentStop: 'Mohamad Pur', deliveryStatus: 'Active' },
    { id: '15A', busNo: 'DL 99 1234', start: 'Barar Square', destination: 'C.G.Hospital', recentStop: 'Palam Colony', deliveryStatus: 'Active' },
    { id: '2A', busNo: 'DL 99 1234', start: 'Gurudwara', destination: 'Sagapur', recentStop: 'Raj Nagar', deliveryStatus: 'Active' },
    { id: '32D', busNo: 'DI 99 1234', start: 'Chanakyapuri', destination: 'Janakpuri', recentStop: 'Rail Museum', deliveryStatus: 'Active' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const busesPerPage = 8;

  const indexOfLastBus = currentPage * busesPerPage;
  const indexOfFirstBus = indexOfLastBus - busesPerPage;
  const currentBuses = buses.slice(indexOfFirstBus, indexOfLastBus);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5l-5 5 5 5" />
          </svg>
          <h2>Manager</h2>
          <h3>Dashboard</h3>
        </div>
        <ul className="sidebar-nav">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            </svg>
            <span>Dashboard</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            </svg>
            <span>Product</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Customers</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            </svg>
            <span>Income</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Emergency Routing</span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-2.6 3.2 8.38 8.38 0 0 1-3.8 .9 8.5 8.5 0 0 1-3.2-2.6 8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 2.6-3.2 8.38 8.38 0 0 1 3.8-.9 8.5 8.5 0 0 1 3.2 2.6 8.38 8.38 0 0 1 .9 3.8 8.5 8.5 0 0 1 2.6 3.2 8.38 8.38 0 0 1 3.8 .9 8.5 8.5 0 0 1 3.2 2.6z" />
            </svg>
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
                <Bus key={bus.id} {...bus} />
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
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(buses.length / busesPerPage)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <span>...</span>
            <button onClick={() => paginate(Math.ceil(buses.length / busesPerPage))}>
              40
            </button>
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