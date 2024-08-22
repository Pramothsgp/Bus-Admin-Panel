import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogIn = async(e) => {
    e.preventDefault();

    try{
      await signInWithEmailAndPassword(auth,email,password);
      const user=auth.currentUser;
      window.location.href="/dashboard"

    }
    catch(error)
    {
      console.log(error);
    }
  }

  return (
    <form className="login-form" >
      <h2>log in</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <button type="submit" className="login-btn"
      onClick={handleLogIn}
      >LOG IN</button>
      <p><a href="/forgot-password">Forgot password?</a></p>
      <Link to="/signup"><button type="button" className="create-account-btn"
      >CREATE AN ACCOUNT</button></Link>
    </form>
  );
};

export default Login;
