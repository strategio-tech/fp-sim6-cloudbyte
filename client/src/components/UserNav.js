import React from "react";

export default function UserNav(props) {
  return (
    <div className="user-navbar">
      <ul className="user-navbar-nav">{props.children}</ul>
    </div>
  );
}
