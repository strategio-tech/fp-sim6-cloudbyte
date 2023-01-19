import React, { useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DropDownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const { isOpen, setIsOpen } = props;

  const { logOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <Link
        style={{
          textTransform: "uppercase",
          fontFamily: "Montserrat, sans-serif",
          fontSize: ".9rem",
        }}
        to={props.url}
        className="menu-item"
        onClick={() => {
          if (props.goToMenu !== "settings" && props.goToMenu !== "main") {
            setIsOpen(!isOpen);
          }
          if (props.logout) {
            logOutUser();
            navigate("/");
          } else {
            props.goToMenu && setActiveMenu(props.goToMenu);
          }
        }}
      >
        <span className="icon-button" style={{ marginRight: "10px" }}>
          {props.leftIcon}
        </span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
      // <a
      //   href={props.url}
      //   className="menu-item"
      //   onClick={() => {
      //     if (props.logout) {
      //       logOutUser();
      //       navigate("/");
      //     } else {
      //       props.goToMenu && setActiveMenu(props.goToMenu);
      //     }
      //   }}
      // >
      //   <span className="icon-button">{props.leftIcon}</span>
      //   {props.children}
      //   <span className="icon-right">{props.rightIcon}</span>
      // </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            url="/portal"
            leftIcon={<i className="fa-solid fa-table-columns"></i>}
          >
            Dashboard
          </DropDownItem>
          <DropDownItem
            url="/profile"
            leftIcon={<i className="fa-solid fa-user"></i>}
          >
            Profile
          </DropDownItem>
          <DropDownItem
            leftIcon={<i className="fa-solid fa-mug-hot"></i>}
            rightIcon={<i className="fa-solid fa-chevron-right"></i>}
            goToMenu="settings"
          >
            Cafes
          </DropDownItem>
          <DropDownItem
            leftIcon={<i className="fa-solid fa-right-from-bracket"></i>}
            logout="true"
          >
            Logout
          </DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<i className="fa-solid fa-angle-left"></i>}
            goToMenu="main"
          ></DropDownItem>
          <DropDownItem
            url="/cafes/miami"
            leftIcon={<i className="fa-solid fa-umbrella-beach"></i>}
          >
            Miami
          </DropDownItem>
          <DropDownItem
            url="/cafes/chicago"
            leftIcon={<i className="fa-solid fa-city"></i>}
          >
            Chicago
          </DropDownItem>
          <DropDownItem
            url="/cafes/new-york"
            leftIcon={<i className="fa-solid fa-tree-city"></i>}
          >
            New York
          </DropDownItem>
          <DropDownItem
            url="/cafes/all"
            leftIcon={<i className="fa-solid fa-earth-americas"></i>}
          >
            All
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
