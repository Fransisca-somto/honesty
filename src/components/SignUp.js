/** @format */

import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [newPhoneNo, setNewPhoneNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const continues = newPassword === newPassword2;
    e.preventDefault();
    if (continues) {
    try {
      const response = await axios.post(
        "http://localhost:3500/signup",
        { newUsername, newPassword, newPhoneNo },
        { headers: { "Content-Type": "application/json" } }
      );
      navigate("/success");
      console.log("SignUp Successful");
      alert("SignUp successful");
    } catch (err) {
      setError("User already exists");
    }} else {
      setError("The passwords are not the same")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={(e) => {
            setNewUsername(e.target.value);
          }}
        />
      </label>
      <label htmlFor="phone">
        Phone No:
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="+23480********"
          onChange={(e) => {
            setNewPhoneNo(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        ReEnter Password:
        <input 
          type="password" 
          name="password2" 
          placeholder="Reenter Password" 
          onChange={(e) => {
            setNewPassword2(e.target.value);
          }}/>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="but">
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
