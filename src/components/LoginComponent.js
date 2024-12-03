/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Login Successful");
      alert("Welcome");
      navigate("/home");
    } catch (err) {
      setError("User not found");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Log-in</h2>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter Your Username"
        />
      </label>

      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Your Password"
        />
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="but">
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginComponent;
