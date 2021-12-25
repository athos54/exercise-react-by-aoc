import { fireEvent, render } from "@testing-library/react";

import { TablePaginationActions } from "./TablePaginationActions";

describe("Table pagination actions", () => {
  it("first page button should call to onPageChange", () => {
    const onPageChange = jest.fn();

    const component = render(
      <TablePaginationActions
        count={3}
        page={1}
        rowsPerPage={1}
        onPageChange={onPageChange}
      />
    );

    const firstPageBtn = component.container.querySelector(
      "button[aria-label='first page']"
    );
    fireEvent.click(firstPageBtn);

    expect(onPageChange).toHaveBeenCalledTimes(1);
  });

  it("previous page button should call to onPageChange", () => {
    const onPageChange = jest.fn();

    const component = render(
      <TablePaginationActions
        count={3}
        page={1}
        rowsPerPage={1}
        onPageChange={onPageChange}
      />
    );

    const firstPageBtn = component.container.querySelector(
      "button[aria-label='previous page']"
    );
    fireEvent.click(firstPageBtn);

    expect(onPageChange).toHaveBeenCalledTimes(1);
  });
});
