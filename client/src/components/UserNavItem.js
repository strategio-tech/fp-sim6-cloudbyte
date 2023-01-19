import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserNavItem(props) {
  const { url, isOpen, setIsOpen } = props;

  return (
    <li className="nav-item">
      {url && (
        <a className="icon-button" href={url} target={url && "_blank"}>
          {props.icon}
        </a>
      )}

      {!url && (
        <Link className="icon-button" onClick={() => setIsOpen(!isOpen)}>
          {props.icon}
        </Link>
      )}
      {isOpen && props.children}
    </li>
  );
}
