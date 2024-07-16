import React, { useState } from 'react';
import './SignUp.css'; // You'll need to create a CSS file for styling
import  deliciousFood  from "../../assets/pics/deliciousFood.jpeg"

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
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
    <div className="signup-container">
      <div className="signup-image">
        <img src={deliciousFood} alt="Delicious food" />
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Want to join our Family</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="terms-and-policy">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label>
            I agree to the <a href="/terms">terms & policy</a>
          </label>
        </div>
        <button type="submit">Sign up</button>
        <div className="social-signup">
          <p>Or you can join with</p>
          <button className="google-signin">Sign in with Google</button>
          <button className="facebook-signin">Sign in with Facebook</button>
        </div>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
