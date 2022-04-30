import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerArea">
      <div className="headerWrapper">
        <div className="brandArea">
          <Link to="/" className="logo">
            IMPEL
          </Link>
        </div>
        <div className="pathArea">
          <Link to="manage-items" className="pathContainer">
            Manage Items
          </Link>
          <Link to="add-item" className="pathContainer">
            Add Item
          </Link>
          <Link to="blogs" className="pathContainer">
            blogs
          </Link>
          <Link to="my-items" className="pathContainer">
            My Items
          </Link>
          <Link to="login" className="pathContainer">
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
