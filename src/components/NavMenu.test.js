import { render, screen, fireEvent, prettyDOM } from "@testing-library/react";

import AuthContext from "context/AuthContext";
import NavMenu from "./NavMenu";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("NavMenu component", () => {
  let parentComponent, history, auth;

  beforeEach(() => {
    history = createMemoryHistory();

    auth = {
      isLogued: false,
    };
    parentComponent = render(
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
  });

  it("nav menu should have 2 items", () => {
    const component = parentComponent.container.querySelectorAll("a");
    expect(component.length).toEqual(2);
  });
});
