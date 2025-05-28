import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
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
    <Box display="flex" flexDirection="column">
      <Header toggleSidebar={toggleSidebar} />

      <Box display="flex" sx={{ marginTop: "64px" }}>
        {" "}
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2,
            bgcolor: "#f3f4f6",
            marginLeft: "145px",
            overflowY: parentScroll ? "auto" : "hidden",
            // height: "calc(100vh - 64px)", // ✅ FIX: Ensure content fits within the screen
          }}
        >
          <Outlet context={{ setParentScroll }} />
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;
