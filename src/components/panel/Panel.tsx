import React from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Topbar from "./Topbar";

const Panel = () => {

  return (
    <section>
      <div className="d-flex">
        <aside>
          <SideBar />
        </aside>
        <div className="page p-4" style={{width:"calc(100vw - 280px)"}}>
            <Topbar/>
        <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Panel;
