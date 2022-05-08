import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="w-50">
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
          <div className="user-access w-50">
            {loading ? (
              <Link to="login" className="pathContainer">
                login
              </Link>
            ) : (
              <>
                {user ? (
                  <>
                    <NavDropdown
                      className="navDropdown me-2"
                      title={<FontAwesomeIcon icon={faBarsProgress} />}
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

                    <Link
                    title="Logout"
                      className="pathContainer d-flex justify-content-center align-items-center"
                      to="/"
                      onClick={() => signOut(auth)}
                    >
                      <FontAwesomeIcon
                        className="fs-5 ms-1"
                        icon={faRightFromBracket}
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="login" className="pathContainer">
                      login
                    </Link>
                  </>
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
