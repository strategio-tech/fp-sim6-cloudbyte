import React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import "../styles/loginpage.css";

export default function LogInPage() {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const updateState = (event) =>
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, state)
      .then((res) => {
        // console.log(res.data);
        storeToken(res.data.message);
        authenticateUser();
        navigate("/portal");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h2 className="login-header">Log In</h2>
      <p className="login-sub-header">Go find some brews</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input
            name="username"
            value={state.username}
            type="text"
            onChange={updateState}
          ></input>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            name="password"
            value={state.password}
            type="password"
            onChange={updateState}
          ></input>
        </div>
        <button>Log In!</button>
      </form>
      <div className="bottom-nav-link-container">
        <p className="bottom-nav-link">
          Dont have an account? <Link to="/signup">Signup</Link>
        </p>
        <p className="bottom-nav-link">
          Back to <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
}
