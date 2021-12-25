import { useEffect, useState } from "react";
import { getUsers } from "services/users";

export const useUsers = () => {
  const [usersData, setUsersData] = useState({
    data: [],
    page: 0,
    per_page: 5,
    total: 0,
    total_pages: 0,
  });

  const [filters, setFilters] = useState({
    per_page: 5,
    page: 0,
  });

  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = () => getUsers(filters).then((res) => setUsersData(res));

  const handleChangeRowsPerPage = (e) => {
    setFilters({
      ...filters,
      page: 0,
      per_page: e.target.value,
    });
  };

  const handlePageChange = (page) => {
    setFilters({
      ...filters,
      page: page + 1,
    });
  };

  return {
    handlePageChange,
    handleChangeRowsPerPage,
    usersData,
  };
};
