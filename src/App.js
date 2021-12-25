import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";
import AuthContext from "context/AuthContext";

const App = () => {
  const auth = useAuth();
  return (
    <AuthContext.Provider
      value={{
        name: "athos",
        auth,
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
