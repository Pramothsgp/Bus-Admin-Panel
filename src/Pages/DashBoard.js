import React , { useState }from 'react'

import BusTable from '../components/BusTable';
import ResourceAttendence from '../components/ResourceAttendence';
import { FaSearchLocation } from 'react-icons/fa';

import './DashBoard.css';

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
const DashBoard = () => {
    const [buses, setBuses] = useState(busdata);

    const [currentPage, setCurrentPage] = useState(1);
    // const [busesPerPage, setbusesPerPage] = useState(10);
    const busesPerPage = 10;
  
    const indexOfLastBus = currentPage * busesPerPage;
    const indexOfFirstBus = indexOfLastBus - busesPerPage;
    const currentBuses = buses.slice(indexOfFirstBus, indexOfLastBus);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div className="container">
        
        <div className="main">
          <ResourceAttendence />
          <div className="content">
            <h2>Real Time Data</h2>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <FaSearchLocation />
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
                    <BusTable key={bus.id} {...bus} />
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
}

export default DashBoard