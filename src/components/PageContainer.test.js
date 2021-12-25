import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageContainer from "./PageContainer";
import AuthContext from "context/AuthContext";

describe("Page container", () => {
  it("Page container should render the children and nav menu", () => {
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
          <PageContainer>
            <div>hello world</div>
          </PageContainer>
        </BrowserRouter>
      </AuthContext.Provider>
    );

    component.getByText(/hello world/i);
    component.getByText(/home/i);
    component.getByText(/users/i);
    component.getByText(/logout/i);
  });
});
