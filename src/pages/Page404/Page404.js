import React from "react";
import "./Page404.css";
const Page404 = () => {
  return (
    <div className="page-404-container">
      <div className="d404">404</div>
      <div className="error mb-3">Not found</div>
      <div className="message">
        The resorce requested could not be found on this server
      </div>
    </div>
  );
};

export default Page404;
