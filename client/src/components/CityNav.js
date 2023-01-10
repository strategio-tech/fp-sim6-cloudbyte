import React from "react";
import { Link } from "react-router-dom";
import "../styles/citynav.css";

export default function () {
  return (
    <div className="city-nav-main-container">
      <div className="city-nav-container">
        <Link to={"/cafes/miami"}>Miami</Link>
        <span>|</span>
        <Link to={"/cafes/chicago"}>Chicago</Link>
        <span>|</span>
        <Link to={"/cafes/new-york"}>New York</Link>
        <span>|</span>
        <Link to={"/cafes/all"}>All</Link>
      </div>
    </div>
  );
}
