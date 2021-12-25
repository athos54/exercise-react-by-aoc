import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("App component should render login at startup", () => {
    const component = render(<App />);
    component.getByPlaceholderText("Enter your email");
    component.getByPlaceholderText("Enter your password");
    component.getByText("Login");
  });
});
