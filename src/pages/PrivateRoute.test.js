import { act, render, cleanup } from "@testing-library/react";
import cookie from "react-cookies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as authService from "services/auth";
import * as authService2 from "services/auth";
import AuthContext from "context/AuthContext";
import PrivateRoute from "./PrivateRoute";

const componentTemplate = (
  <AuthContext.Provider
    value={{
      auth: { login: jest.fn() },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>Hello login</div>} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div>Hello private</div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
);

describe("Private route", () => {
  beforeEach(() => {
    jest.mock("cookie");
    jest.mock("services/auth");
  });

  it(`PrivateRoute with cookie should render hello private`, () => {
    authService.getAuthCookie = jest.fn(() => "mycookie");
    const component = render(componentTemplate);
    component.getByText("Hello private");
  });

  it(`PrivateRoute without cookie should render /login path`, () => {
    authService.getAuthCookie = jest.fn(() => undefined);
    const component = render(componentTemplate);
    component.getByText("Hello login");
  });
});
