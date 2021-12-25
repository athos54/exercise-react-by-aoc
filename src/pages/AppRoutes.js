import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Page404 from "./Page404/Page404";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "context/AuthContext";
import Users from "./Users/Users";
import NavMenu from "components/NavMenu";
import PageContainer from "components/PageContainer";

const AppRoutes = () => {
  const context = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <PageContainer>
              <Page404 />
            </PageContainer>
          }
        />
        <Route path="/" element={<Login />} />
        <Route
          path="/login"
          element={context.auth.isLogued ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <PageContainer>
                <Home />
              </PageContainer>
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <PageContainer>
                <Users />
              </PageContainer>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
