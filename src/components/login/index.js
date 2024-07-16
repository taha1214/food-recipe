import React, { useState } from 'react';
import './Login.css'; // You'll need to create a CSS file for styling
import deliciousFood from "../../assets/pics/deliciousFood.jpeg"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={deliciousFood} alt="Delicious food" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <p>Enter your email & password to log in</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="remember-me">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label>Remember me</label>
        </div>
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
        <button type="submit">Login</button>
        <div className="social-login">
          <p>Or you can join with</p>
          <button className="google-signin">Sign in with Google</button>
          <button className="facebook-signin">Sign in with Facebook</button>
        </div>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
