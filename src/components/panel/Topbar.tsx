import React from "react";
import { Paperclip } from "react-feather";
import { useLocation, useNavigate } from "react-router";

const Topbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container-fluid">
        <p className="navbar-brand text-success">
          <Paperclip className="me-3" />
          {location.pathname}
        </p>
        <p className="btn btn-link" onClick={() => navigate("/")}>Go to Home Page</p>
      </div>
    </nav>
  );
};

export default Topbar;
