import { render } from "@testing-library/react";
import Users from "./Users";

describe("Users component", () => {
  it("Users component should render", () => {
    const component = render(<Users />);

    component.getByText("Avatar");
    component.getByText("Name");
    component.getByText("LastName");
    component.getByText("Email");
  });
});
