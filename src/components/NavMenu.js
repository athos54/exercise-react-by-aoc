import { useAuth } from "hooks/useAuth";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getAuthCookie } from "services/auth";
import Logout from "./Logout";
import AuthContext from "context/AuthContext";
import "./NavMenu.css";
const NavMenu = ({ auth }) => {
  const context = useContext(AuthContext);

  return (
    <div className="nav-menu-container bg-primary">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        {context.auth.isLogued && <Logout />}
      </nav>
    </div>
  );
};

export default NavMenu;
