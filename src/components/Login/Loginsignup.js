import React, { useState } from "react";
import "./Loginsignup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login logic
        console.log("Logging in...");
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/home");
        console.log("Successfully logged in:", userCredential.user);
      } else {
        // Signup logic
        console.log("Signing up...");
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Successfully signed up:", userCredential.user);
        setStatus("Successfully created");
      }

      // Reset form fields
      setEmail("");
      setPassword("");
      setError(null);
    } catch (err) {
      console.error("Error:", err.message);
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          {error && <span>{error}</span>}
          {status && <span>{status}</span>}
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up here" : " Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
