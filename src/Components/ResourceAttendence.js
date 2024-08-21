import React from 'react'

const ResourceAttendence = () => {
  return (
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
  )
}

export default ResourceAttendence