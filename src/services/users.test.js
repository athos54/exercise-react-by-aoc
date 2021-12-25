import axios from "axios";
import { getUsers } from "./users";
import { API } from "config/index";

jest.mock("axios");

describe("users service", () => {
  it("getUsers should be call to /users", () => {
    axios.get.mockResolvedValueOnce({ data: { page: 1 } });
    const params = {};
    getUsers(params);
    expect(axios.get).toHaveBeenCalledWith(`${API}/users`, { params });
  });
});
