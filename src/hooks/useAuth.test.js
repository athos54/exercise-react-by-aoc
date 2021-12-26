import * as authService from "services/auth";
import { useAuth } from "./useAuth";
import { renderHook, act } from "@testing-library/react-hooks";
jest.mock("services/auth");

describe("useAuth hook", () => {
  beforeEach(() => {
    authService.getAuthCookie.mockClear();
  });

  it("login should call setAuthCookie", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login();
    });
    expect(authService.setAuthCookie).toHaveBeenCalledTimes(1);
  });

  it("login should call setToken", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login("abcd");
    });
    expect(result.current.isLogued).toBe("abcd");
  });

  it("logout should call removeAuthCookie", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(authService.removeAuthCookie).toHaveBeenCalledTimes(1);
  });

  it("On component start, should load cookie", () => {
    authService.getAuthCookie.mockImplementation(() => "cookie");

    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogued).toBe("cookie");
  });
});
