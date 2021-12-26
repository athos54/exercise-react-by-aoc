import { useInput } from "./useInput";

import { renderHook, act } from "@testing-library/react-hooks";

describe("useInput hook", () => {
  it("onchange method should set value property", () => {
    const { result } = renderHook(() => useInput());

    act(() => {
      result.current.onChange({ target: { value: "something" } });
    });

    expect(result.current.value).toBe("something");
  });
});
