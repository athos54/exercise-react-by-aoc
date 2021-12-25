import axios from "axios";
import { getAuthCookie, setAuthCookie, removeAuthCookie, login } from "./auth";
import { API, AUTH_TOKEN_NAME } from "config/index";
import cookie from "react-cookies";

jest.mock("cookie");
jest.mock("axios");

describe("auth service", () => {
  test("login user should be call to /login", () => {
    const email = "athos.oc@gmail.com";
    const password = "1234";

    axios.post.mockResolvedValueOnce({ data: { token: "fsfds" } });

    login(email, password);
    expect(axios.post).toHaveBeenCalledWith(`${API}/login`, {
      email,
      password,
    });
  });

  test(`getAuthCookie should call cookie with ${AUTH_TOKEN_NAME} `, () => {
    cookie.load = jest.fn();
    cookie.load.mockResolvedValueOnce("tokenString");
    getAuthCookie();
    expect(cookie.load).toHaveBeenCalledWith(AUTH_TOKEN_NAME);
  });

  test(`setAuthCookie('asdf') should call cookie.save with ${AUTH_TOKEN_NAME} asdf and path /`, () => {
    cookie.save = jest.fn();
    cookie.save;
    setAuthCookie("asdf");
    expect(cookie.save).toHaveBeenCalledWith(AUTH_TOKEN_NAME, "asdf", {
      path: "/",
    });
  });
  test(`removeAuthCookie() should call cookie.save with ${AUTH_TOKEN_NAME} and path /`, () => {
    cookie.remove = jest.fn();
    cookie.remove;
    removeAuthCookie();
    expect(cookie.remove).toHaveBeenCalledWith(AUTH_TOKEN_NAME, {
      path: "/",
    });
  });
});
