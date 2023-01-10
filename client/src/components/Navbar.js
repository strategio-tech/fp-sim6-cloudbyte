import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import "../styles/navbar.css";
import logo from "../logo.png";

import UserNav from "./UserNav";
import UserNavItem from "./UserNavItem";
import DropDownMenu from "./DropDownMenu";
import CityNav from "./CityNav";

export default function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <nav>
      {isLoggedIn && (
        <div
          className={
            scroll
              ? "main-auth-nav-container auth-scroll"
              : "main-auth-nav-container"
          }
        >
          <div
            className={
              scroll ? "auth-nav-container auth-scroll" : "auth-nav-container"
            }
          >
            <img src={logo} className="nav-logo" alt="#"></img>
            <UserNav>
              <UserNavItem
                url="https://www.linkedin.com/in/kamil-chomiak"
                icon={<i className="fa-brands fa-linkedin-in"></i>}
                style={{ color: "#000" }}
              ></UserNavItem>
              <UserNavItem
                url="https://github.com/chomiak89"
                icon={<i className="fa-brands fa-github"></i>}
                style={{ color: "#000" }}
              ></UserNavItem>
              <UserNavItem
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                icon={
                  <i className="fa-solid fa-bars" style={{ color: "#000" }}></i>
                }
              >
                <DropDownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </UserNavItem>
            </UserNav>
          </div>
          <CityNav />
        </div>
      )}
      {!isLoggedIn && (
        <div
          className={
            scroll ? "unauth-nav-container scroll" : "unauth-nav-container"
          }
        >
          <img src={logo} className="nav-logo" alt="#"></img>
          <div className="unauth-home-link-container">
            <Link to="/signup" className="nav-link">
              SignUp
            </Link>
            <Link to="/Login" className="nav-link">
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
