import React from "react";
import NavMenu from "./NavMenu";

const PageContainer = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <div className="p-2 p-md-5">{children}</div>
    </div>
  );
};

export default PageContainer;
