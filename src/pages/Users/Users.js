import PageTitle from "components/PageTitle";
import React from "react";
import UsersTable from "./components/UsersTable/UsersTable";
import { useUsers } from "./hooks/useUsers";

const Users = () => {
  const { handlePageChange, handleChangeRowsPerPage, usersData } = useUsers();

  return (
    <div>
      <PageTitle title="Users" />
      <UsersTable
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
        usersData={usersData}
      />
    </div>
  );
};

export default Users;
