import React from "react";
import UsersTable from "./components/UsersTable/UsersTable";
import { useUsers } from "./hooks/useUsers";

const Users = () => {
  const { handlePageChange, handleChangeRowsPerPage, usersData } = useUsers();

  return (
    <div>
      <UsersTable
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
        usersData={usersData}
      />
    </div>
  );
};

export default Users;
