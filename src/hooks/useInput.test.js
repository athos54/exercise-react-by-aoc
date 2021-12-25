import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useInput } from "./useInput";

describe("useInput hook", () => {
  let input, component;
  beforeEach(() => {
    const Aux = () => {
      input = useInput();
      return <div>test</div>;
    };

    component = render(<Aux />);
  });

  it("onchange method should set value property", () => {
    act(() => {
      input.onChange({ target: { value: "fds" } });
    });
    expect(input.value).toBe("fds");
  });
});
