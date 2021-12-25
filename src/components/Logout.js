import React, { useContext } from "react";
import { removeAuthCookie } from "services/auth";
import AuthContext from "context/AuthContext";

const Logout = () => {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.auth.logout();
  };

  return (
    <a href="#" onClick={handleLogout}>
      Logout
    </a>
  );
};

export default Logout;
