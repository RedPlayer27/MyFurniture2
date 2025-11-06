import React, { useState } from "react";
import "./LoginForm.css";

const AnimatedAuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleToggle = () => {
    setFormData({ name: "", email: "", password: "" }); // reset inputs
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className={`auth-container ${isLogin ? "" : "signup-mode"}`}>
      <div className="form-panel login-panel">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={handleToggle}>
              Sign up
            </span>
          </p>
        </form>
      </div>

      <div className="form-panel signup-panel">
        <form onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <span className="toggle-link" onClick={handleToggle}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AnimatedAuthForm;
