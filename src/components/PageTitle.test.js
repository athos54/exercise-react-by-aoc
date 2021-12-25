import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("Page title component", () => {
  it("Page title should show the title on h2 tag", () => {
    const title = "I'm the title";
    const component = render(<PageTitle title={title} />);
    component.getByText(title);
  });
});
