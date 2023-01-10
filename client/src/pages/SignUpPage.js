import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/signuppage.css";

export default function SignUpPage() {
  //set up state
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordVerify: "",
  });
  //set up password strength state
  const [strength, setStrength] = useState("Weak Brew");

  //set up password match state
  const [match, setMatch] = useState(false);

  //set up navigate
  const navigate = useNavigate();

  //function to update the state
  const updateState = (event) =>
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  //function to handle submit on the form
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  //check for password strength and adjust state
  useEffect(() => {
    if (state.password.length < 5) {
      setStrength("Weak Brew");
    }
    if (state.password.length >= 5 && state.password.length < 8) {
      setStrength("Medium Brew");
    }
    if (state.password.length >= 8) {
      setStrength("Strong Brew");
    }
  }, [state.password]);

  //check if passwords match and adjust state
  useEffect(() => {
    if (state.password === state.passwordVerify) {
      setMatch(true);
    }
    if (state.password !== state.passwordVerify) {
      setMatch(false);
    }
  }, [state.passwordVerify]);

  return (
    <div className="form-container">
      <h2 className="signup-header">Create a Brew List account</h2>
      <p className="signup-sub-header">And gain access to a world of brews</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username:</label>
          <input
            name="username"
            value={state.username}
            type="text"
            onChange={updateState}
          ></input>
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            name="email"
            value={state.email}
            type="email"
            onChange={updateState}
          ></input>
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            name="password"
            value={state.password}
            type="password"
            onChange={updateState}
          ></input>
        </div>
        {state.password && (
          <p className="password-strength">
            Strength:{" "}
            <span
              className={
                strength === "Strong Brew"
                  ? "strong"
                  : strength === "Medium Brew"
                  ? "medium"
                  : "weak"
              }
            >
              {strength}
            </span>
          </p>
        )}
        <div className="input-container">
          <label>Verify Password:</label>
          <input
            name="passwordVerify"
            value={state.passwordVerify}
            type="password"
            onChange={updateState}
          ></input>
        </div>
        {state.passwordVerify && (
          <>
            {!match ? (
              <p className="password-match weak">Passwords do not match</p>
            ) : (
              <p className="password-match strong">Passwords match</p>
            )}
          </>
        )}
        <button>Sign Up!</button>
      </form>
      <div className="bottom-nav-link-container">
        <p className="bottom-nav-link">
          Already have an accout? <Link to="/login">Log In</Link>
        </p>
        <p className="bottom-nav-link">
          Back to <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
}
