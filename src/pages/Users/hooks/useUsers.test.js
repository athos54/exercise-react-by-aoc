import { act, render, waitFor } from "@testing-library/react";
import * as usersService from "services/users";
import { useUsers } from "./useUsers";

jest.mock("services/users");

const auxData = {
  data: [],
  page: 0,
  per_page: 5,
  total: 10,
  total_pages: 10,
};

describe("useUsers hook", () => {
  let component, AuxComponent, hook;
  beforeEach(() => {
    usersService.getUsers.mockClear();

    AuxComponent = () => {
      hook = useUsers();
      return <div>test</div>;
    };
  });

  it("at startup should call to getUsers", async () => {
    usersService.getUsers.mockResolvedValueOnce(auxData);

    render(<AuxComponent />);

    expect(usersService.getUsers).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(hook.usersData).toBe(auxData);
    });
  });

  it("change rows per page should trigger a call with this per_page", async () => {
    usersService.getUsers.mockResolvedValue(auxData);

    render(<AuxComponent />);

    await waitFor(() => {
      hook.handleChangeRowsPerPage({ target: { value: 10 } });
    });

    expect(usersService.getUsers).toHaveBeenLastCalledWith({
      page: 0,
      per_page: 10,
    });
  });

  it("change page should trigger a call with this page", async () => {
    usersService.getUsers.mockResolvedValue(auxData);

    render(<AuxComponent />);

    await waitFor(() => {
      hook.handlePageChange(10);
    });

    expect(usersService.getUsers).toHaveBeenLastCalledWith({
      page: 11,
      per_page: 5,
    });
  });
});
