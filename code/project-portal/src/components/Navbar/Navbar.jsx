import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../store/userSlice"; // 确认路径正确
import projectPortalImage from "../../assets/images/2.png";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, logout } = useAuth0();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();

    dispatch(logoutSuccess());

    navigate("/auth");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img
            src={projectPortalImage}
            alt="Project Portal"
            className="navbar-image"
          />
        </NavLink>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              DASHBOARD
            </NavLink>
          </li>
          {(isAuthenticated || isLoading) && (
            <>
              <li className="navbar-item">
                <NavLink
                  to="/me"
                  className={({ isActive }) =>
                    isActive ? "navbar-link active" : "navbar-link"
                  }
                >
                  PROFILE
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/project/"
                  className={({ isActive }) =>
                    isActive ? "navbar-link active" : "navbar-link"
                  }
                >
                  CREATE
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    isActive ? "navbar-link active" : "navbar-link"
                  }
                  onClick={handleLogout}
                >
                  LOGOUT
                </NavLink>
              </li>
            </>
          )}
          {!isLoading && !isAuthenticated && (
            <li className="navbar-item">
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                LOGIN
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
