import { render, screen, fireEvent, prettyDOM } from "@testing-library/react";

import AuthContext from "context/AuthContext";
import NavMenu from "./NavMenu";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("NavMenu component", () => {
  let history, auth;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it("nav menu should have 2 items", () => {
    const auth = {
      isLogued: null,
    };
    const component = render(
      <AuthContext.Provider
        value={{
          auth,
        }}
      >
        <BrowserRouter>
          <NavMenu />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    const links = component.container.querySelectorAll("a");
    expect(links.length).toEqual(2);
  });

  it("if Logued logout should be on screen", () => {
    const auth = {
      isLogued: "asdf",
    };
    const component = render(
      <AuthContext.Provider
        value={{
          auth,
        }}
      >
        <BrowserRouter>
          <NavMenu />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    component.getByText(/logout/i);
  });
});
