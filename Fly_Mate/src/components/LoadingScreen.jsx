import React from 'react';
import '../Styles/LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="plane-container">
        <svg className="plane" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="#295ab6">
            {/* Plane body */}
            <path d="M50 28h-8l-10-16h-4l4 16h-8l-3-4h-3l1 8-1 8h3l3-4h8l-4 16h4l10-16h8c2.2 0 4-1.8 4-4s-1.8-4-4-4z"/>
          </g>
          {/* Wing details */}
          <path d="M32 12v8M24 32h-6M24 32h-6" stroke="#1e4a9a" strokeWidth="1" fill="none"/>
        </svg>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}

export default LoadingScreen;