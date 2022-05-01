import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user, loading] = useAuthState(auth);  
  
  return (
    <div className="headerArea">
      <div className="headerWrapper">
        <div className="brandArea">
          <Link to="/" className="logo">
            IMPEL
          </Link>
        </div>
        <div className="pathArea">
          <Link to="home" className="pathContainer">
            Home
          </Link>
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
          {user ? <Link to="/"onClick={() => signOut(auth)} className="pathContainer">
            Logout
          </Link> : <Link to="login" className="pathContainer">
            login
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
