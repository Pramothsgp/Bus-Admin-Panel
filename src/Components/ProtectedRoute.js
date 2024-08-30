import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../config/firebase';

const ProtectedRoute = ({ children }) => {
  // const { user } = useContext(AuthContext);
  let user;
  const fetchUser = async () => {
    
    const fetchUserDetails = () =>
      {
        user=auth.currentUser;
        console.log(user);
      }
    
      await fetchUserDetails();
      
  }

  fetchUser()

  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (user === null) {
      // Handle loading state, if necessary
      return ;
    }
    
    if (!user) {
      toast.error('You must be logged in to access this page.');
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setIsCheckingAuth(false);
    }
  }, [user, navigate]);

  if (isCheckingAuth) {
    return <div>Loading...</div>; 
  }

  if (!user) {
    return (
      <div className="error-message">
        <h2>Access Denied</h2>
        <p>You will be redirected to the login page.</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
