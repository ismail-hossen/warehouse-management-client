import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerArea">
      <div className="headerWrapper">
        <div className="topLeft">
          <span className="logo">IMPEL</span>
        </div>
        <div className="pathArea">
          <div className="pathContainer">
            login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
