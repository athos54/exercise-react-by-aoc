import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
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
  beforeEach(() => {
    usersService.getUsers.mockClear();
  });

  it("at startup should call to getUsers", async () => {
    usersService.getUsers.mockResolvedValueOnce(auxData);

    let myHook;
    const { result } = renderHook(() => useUsers());
    myHook = result;

    expect(usersService.getUsers).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(myHook.current.usersData).toBe(auxData);
    });
  });

  it("change rows per page should trigger a call with this per_page", async () => {
    usersService.getUsers.mockResolvedValue(auxData);
    let myHook;
    const { result } = renderHook(() => useUsers());
    myHook = result;

    await waitFor(() => {
      myHook.current.handleChangeRowsPerPage({ target: { value: 10 } });
    });
    expect(usersService.getUsers).toHaveBeenLastCalledWith({
      page: 0,
      per_page: 10,
    });
  });

  it("change page should trigger a call with this page", async () => {
    usersService.getUsers.mockResolvedValue(auxData);
    let myHook;
    const { result } = renderHook(() => useUsers());
    myHook = result;

    await waitFor(() => {
      myHook.current.handlePageChange(10);
    });
    expect(usersService.getUsers).toHaveBeenLastCalledWith({
      page: 11,
      per_page: 5,
    });
  });
});
