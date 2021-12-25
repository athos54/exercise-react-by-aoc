import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import * as authService from "services/auth";
import { useAuth } from "./useAuth";

jest.mock("services/auth");

describe("useAuth hook", () => {
  authService.getAuthCookie.mockClear();
  let authHook, component;
  beforeEach(() => {
    const Aux = () => {
      authHook = useAuth();
      return <div>test</div>;
    };

    component = render(<Aux />);
  });

  it("login should call setAuthCookie", () => {
    act(() => {
      authHook.login();
    });
    expect(authService.setAuthCookie).toHaveBeenCalledTimes(1);
  });

  it("login should call setToken", () => {
    act(() => {
      authHook.login("abcd");
    });
    expect(authHook.isLogued).toBe("abcd");
  });

  it("logout should call removeAuthCookie", () => {
    act(() => {
      authHook.logout();
    });
    expect(authService.removeAuthCookie).toHaveBeenCalledTimes(1);
  });

  it("On component start, should load cookie", () => {
    authService.getAuthCookie.mockImplementation(() => "cookie");

    const Aux = () => {
      authHook = useAuth();
      return <div>test</div>;
    };

    render(<Aux />);
    expect(authHook.isLogued).toBe("cookie");
  });
});

// , () => ({
//   setAuthCookie: jest.fn(),
//   getAuthCookie: jest.fn("tokenString"),
//   removeAuthCookie: jest.fn(),
// })
