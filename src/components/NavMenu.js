import { useAuth } from "hooks/useAuth";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getAuthCookie } from "services/auth";
import Logout from "./Logout";
import AuthContext from "context/AuthContext";

const NavMenu = ({ auth }) => {
  const context = useContext(AuthContext);

  return (
    <nav>
      <Link to="/login">login</Link>| <Link to="/home">home</Link> |{" "}
      <Link to="/users">users</Link>
      {context.auth.isLogued && <Logout />}
    </nav>
  );
};

export default NavMenu;
