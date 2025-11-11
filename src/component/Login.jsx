import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login successful (mock)!");
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to your jewellery account</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Link to="/profile" type="submit" className="btn-login">
              Login
            </Link>

            <p className="signup-text">
              Don’t have an account?{" "}
              <Link to="/register" className="signup-link">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
