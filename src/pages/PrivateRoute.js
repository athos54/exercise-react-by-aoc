import { Navigate } from "react-router-dom";
// const { Navigate } = require("react-router-dom");
import { getAuthCookie } from "services/auth";
// const { getAuthCookie } = require("services/auth");

const PrivateRoute = ({ children }) => {
  const cookie = getAuthCookie();
  return cookie ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
