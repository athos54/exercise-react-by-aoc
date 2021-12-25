import { fireEvent, render } from "@testing-library/react";
import Logout from "./Logout";
import AuthContext from "context/AuthContext";

describe("Logout component", () => {
  let component;
  let auth;

  beforeEach(() => {
    auth = {
      logout: jest.fn(),
    };
    component = render(
      <AuthContext.Provider
        value={{
          auth,
        }}
      >
        <Logout />
      </AuthContext.Provider>
    );
  });

  it("Must have a logout link", () => {
    component.getByText(/logout/i);
  });

  it("logout should call context.auth.logout", () => {
    const button = component.getByText(/logout/i);
    fireEvent.click(button);
    expect(auth.logout).toHaveBeenCalledTimes(1);
  });
});
