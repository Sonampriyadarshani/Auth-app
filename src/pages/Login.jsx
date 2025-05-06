import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate successful login
    console.log("Login:", { email, password });

    // Show success message
    setLoginSuccess(true);
  };

  return (
    <div className="box">
      <h2>Login</h2>
      {loginSuccess && (
        <p
          style={{ color: "green", textAlign: "center", marginBottom: "15px" }}
        >
          Login successful!
        </p>
      )}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
