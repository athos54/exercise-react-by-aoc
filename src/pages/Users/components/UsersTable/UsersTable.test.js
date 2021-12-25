import { fireEvent, prettyDOM, render, waitFor } from "@testing-library/react";
import UsersTable from "./UsersTable";

describe("UsersTable component", () => {
  let component, handlePageChange, handleChangeRowsPerPage, usersData;
  beforeEach(() => {
    handlePageChange = jest.fn();
    handleChangeRowsPerPage = jest.fn();
    usersData = {
      data: [
        {
          id: 1,
          first_name: "pepe",
          last_name: "martinez",
          email: "pepe@gmail.com",
          avatar: "http://some_url.com/pepe.jpg",
        },
        {
          id: 2,
          first_name: "maria",
          last_name: "suarez",
          email: "maria@gmail.com",
          avatar: "http://some_url.com/maria.jpg",
        },
        {
          id: 3,
          first_name: "elisa",
          last_name: "valdecantos",
          email: "elisa@gmail.com",
          avatar: "http://some_url.com/elisa.jpg",
        },
      ],
      page: 0,
      per_page: 1,
      total: 2,
      total_pages: 2,
    };

    component = render(
      <UsersTable
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
        usersData={usersData}
      />
    );
  });

  test("UsersTable component should render", () => {
    component.getByText("Avatar");
    component.getByText("Name");
    component.getByText("LastName");
    component.getByText("Email");
  });

  test("Should load data from usersData", () => {
    component.getByText(usersData.data[0].first_name);
    component.getByText(usersData.data[0].last_name);
    component.getByText(usersData.data[0].email);
  });

  test("if there are more than one page, last page button should call to handlePageChange", () => {
    const lastPageButton = component.container.querySelector(
      "button[aria-label='last page']"
    );
    fireEvent.click(lastPageButton);
    expect(handlePageChange).toHaveBeenCalledTimes(1);
  });

  test("if rowsPerPage select change handleChangeRowsPerPage should be called", () => {
    const rowsPerPageSelect = component.container.querySelector(
      "select[aria-label='rows per page']"
    );
    fireEvent.change(rowsPerPageSelect, { target: { value: 2 } });
    expect(handleChangeRowsPerPage).toHaveBeenCalledTimes(1);
  });

  test("next page should show next result", async () => {
    const nextPageButton = component.container.querySelector(
      "button[aria-label='next page']"
    );
    const prevPageButton = component.container.querySelector(
      "button[aria-label='previous page']"
    );
    fireEvent.click(nextPageButton);
    await waitFor(() => {
      component.getByText(usersData.data[1].first_name);
      component.getByText(usersData.data[1].last_name);
      component.getByText(usersData.data[1].email);
      fireEvent.click(prevPageButton);
    });
    await waitFor(() => {
      component.getByText(usersData.data[1].first_name);
      component.getByText(usersData.data[1].last_name);
      component.getByText(usersData.data[1].email);
    });
  });
});
