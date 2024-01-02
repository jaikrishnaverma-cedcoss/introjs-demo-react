import React from "react";
import { GitBranch, Gitlab } from "react-feather";
import { pages } from "../../App";
import { matchPath, useLocation, useNavigate } from "react-router";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";
const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ width: 280 }}>
      <div
        style={{ width: 280 }}
        className="d-flex flex-column flex-shrink-0 p-3 bg-light border vh-100 position-fixed"
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <Gitlab fill="true" className="m-1" />
          <span className="fs-4 ms-3">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {pages
            .filter((item) => item.path !== "*"&&item.path !== "")
            .map((item) => {
              return (
                <li
                  key={item.path}
                  className="nav-item"
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className={`nav-link  ${
                      matchPath(location.pathname, "/panel/" + item.path)
                        ? "active"
                        : ""
                    }`}
                    aria-current="page"
                    onClick={() => navigate(item.path)}
                  >
                    <GitBranch className="me-2" size={18} />
                    <span className="text-capitalize"> {item.path}</span>
                  </span>
                </li>
              );
            })}
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
