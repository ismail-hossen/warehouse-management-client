import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
      <div className="nav-item-area">
        <div className="logo-area">
          <span className="logo">IMPEL</span>
        </div>
        <div className="path-item-area">
          <div className="path-container">
              login
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;