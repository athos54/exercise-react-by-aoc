import { render } from "@testing-library/react";
import Page404 from "./Page404";

describe("Page404 page component", () => {
  it("Page404 page should have the text Page not found", () => {
    const component = render(<Page404 />);
    component.getByText("404");
    component.getByText("Not found");
    component.getByText(
      "The resorce requested could not be found on this server"
    );
  });
});
