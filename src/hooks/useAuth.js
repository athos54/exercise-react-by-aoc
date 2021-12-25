import React, { useState, useEffect } from "react";
import { getAuthCookie, removeAuthCookie, setAuthCookie } from "services/auth";

export const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const cookie = getAuthCookie();
    if (cookie) {
      setToken(cookie);
    }
  }, []);

  const login = (token) => {
    setAuthCookie(token);
    setToken(token);
  };

  const logout = () => {
    removeAuthCookie();
    setToken(null);
  };

  return {
    isLogued: token,
    login,
    logout,
  };
};
