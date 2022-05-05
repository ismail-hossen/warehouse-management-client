import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { NavDropdown } from "react-bootstrap";

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
          <div>
            <Link to="home" className="pathContainer">
              Home
            </Link>
            <Link to="blogs" className="pathContainer">
              Blogs
            </Link>
            <Link to="about" className="pathContainer">
              About
            </Link>
          </div>
          <div className="user-access">
            {loading ? (
              <Link to="login" className="pathContainer">
                login
              </Link>
            ) : (
              <>
                {user ? (
                  <>
                    <NavDropdown
                      className="navDropdown"
                      title="Manage"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        href="manage-items"
                        className="pathContainer"
                      >
                        {" "}
                        Manage Items
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="add-item"
                        className="pathContainer"
                      >
                        {" "}
                        Add Item
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="my-items"
                        className="pathContainer"
                      >
                        My Items
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  ""
                )}
                {user ? (
                  <Link
                    to="/"
                    onClick={() => signOut(auth)}
                    className="pathContainer"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link to="login" className="pathContainer">
                    login
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
