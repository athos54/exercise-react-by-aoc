import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home page component", () => {
  it("Home page should have the text I'm home page", () => {
    const component = render(<Home />);
    component.getByText("I'm home page");
  });
});
