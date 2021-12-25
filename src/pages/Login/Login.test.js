import {
  fireEvent,
  screen,
  render,
  act,
  waitFor,
} from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import * as authService from "services/auth";
import AuthContext from "context/AuthContext";
import * as reactRouter from "react-router-dom";

jest.mock("services/auth");

describe("Login component", () => {
  let component;

  beforeEach(async () => {
    authService.login.mockClear();

    component = render(
      <AuthContext.Provider
        value={{
          auth: { login: jest.fn() },
        }}
      >
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  });
  it("Login component should render input text", () => {
    component.getByPlaceholderText("Enter your email");
  });

  it("Login component should render input password", () => {
    component.getByPlaceholderText("Enter your password");
  });

  it("Login component should render login button", () => {
    component.getByText("Login");
  });

  it("success login button should trigger handleSubmit method and redirect to /home", async () => {
    authService.login.mockResolvedValueOnce({ data: { token: "asdf" } });
    const button = component.getByText("Login");
    act(() => {
      fireEvent.click(button);
    });
    expect(authService.login).toHaveBeenCalledTimes(1);
    await waitFor(() => {});
    expect(window.location.href).toBe("http://localhost/home");
  });

  it("bad login button should trigger handleSubmit method and redirect to /home", async () => {
    authService.login.mockRejectedValueOnce("Error");
    const button = component.getByText("Login");

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() =>
      expect(screen.getByText("Wrong credentials")).toBeInTheDocument()
    );
  });
});
