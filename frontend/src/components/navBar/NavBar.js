import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useTranslation } from 'react-i18next';
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import logo from './download.jpeg'
import { useNavigate } from 'react-router-dom'
function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const navigate = useNavigate();
    const data = localStorage.getItem("userInfo");
    const handlelogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
    }
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <nav className="navbar">

                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src={logo} alt="dd" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
                        {/* <span>HASAB</span> */}
                        {/* <i className="fas fa-code"></i> */}
                        <span className="icon">
                            {/* <CodeIcon /> */}
                        </span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/register"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                SignUp
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            {data ?
                                <button className="mr-0%" onClick={handlelogout}>logout</button>
                                : null}
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        ) : (

                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;