// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
 
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", true);
    navigate("/home");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isLoggedIn", false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
