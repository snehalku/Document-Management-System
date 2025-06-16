import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [parentScroll, setParentScroll] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="flex" style={{ marginTop: "64px" }}>
        {" "}
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className="flex-1 p-4 bg-gray-100"
          style={{
            marginLeft: "145px",
            // paddingTop: "10px",
            overflowY: parentScroll ? "auto" : "hidden",
            // height: "calc(100vh - 64px)",
            // height: "100vh",
          }}
        >
          <Outlet context={{ setParentScroll }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
