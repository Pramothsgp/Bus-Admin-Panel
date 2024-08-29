import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../config/firebase';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // const navigate = useNavigate();
  const handleLogIn = async(e) => {
    e.preventDefault();

    try{
      await signInWithEmailAndPassword(auth,email,password);
      console.log("User logged in")
      // const user=auth.currentUser;
      window.location.href="/dashboard"
      toast.success("User Logged in Successfully" , {
        position: "top-center",
      });
      // navigate('/dashboard');
    }
    catch(error)
    {
      console.log(error);

      toast.error( error.message , {
        position : "bottom-center",
      });
    }
  }

  return (
    <>
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
    </>
  );
};

export default Login;
